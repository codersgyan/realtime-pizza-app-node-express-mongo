 import axios from 'axios'
 import Noty from 'noty'
 import { initAdmin } from './admin'
 import moment from 'moment'
 import { initStripe } from './stripe'
import { emit } from '../../app/models/user'

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')
let amount = document.querySelector('.amount')

function updateCart(pizza) {
    axios.post('/update-cart', pizza).then(res => {
        cartCounter.innerText = res.data.totalQty
        new Noty({
            type: 'success',
            timeout: 1000,
            text: 'Item added to cart',
            progressBar: false,
        }).show();
    }).catch(err => {
        new Noty({
            type: 'error',
            timeout: 1000,
            text: 'Something went wrong',
            progressBar: false,
        }).show();
    })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })
})

// Remove alert message after X seconds
const alertMsg = document.querySelector('#success-alert')
if(alertMsg) {
    setTimeout(() => {
        alertMsg.remove()
    }, 2000)
}

const slideAndFade =  elem => {
    elem.style.transform = "translate(100px)";
    elem.style.opacity = "0";
    setTimeout(() => {
        elem.remove();
    }, 2000);
}


const cancelCartItem = e => {
    let cancelBtn = e.currentTarget
    cancelBtn.removeEventListener('click', cancelCartItem)
    cancelBtn.className = "cancel-item-icon-progress"
    let pizza = JSON.parse(e.currentTarget.dataset.pizza)
    axios.post('/remove-cart-item', { pizza }).then(res => {
        let { updatedQty, updatedTotalPrice } = res.data;
        cancelBtn.className = "cancel-item-icon-success"
        cartCounter.innerText = updatedQty
        amount.innerText = updatedTotalPrice
        slideAndFade(cancelBtn.parentElement)
    });
}

//cancel feature for cart items
document.querySelectorAll('.cancel-item-icon').forEach(elem => {
    elem.addEventListener('click', cancelCartItem)
});


// Change order status
let statuses = document.querySelectorAll('.status_line')
let hiddenInput = document.querySelector('#hiddenInput')
let order = hiddenInput ? hiddenInput.value : null
order = JSON.parse(order)
let time = document.createElement('small')

function updateStatus(order) {
    statuses.forEach((status) => {
        status.classList.remove('step-completed')
        status.classList.remove('current')
    })
    let stepCompleted = true;
    statuses.forEach((status) => {
       let dataProp = status.dataset.status
       if(stepCompleted) {
            status.classList.add('step-completed')
       }
       if(dataProp === order.status) {
            stepCompleted = false
            time.innerText = moment(order.updatedAt).format('hh:mm A')
            status.appendChild(time)
           if(status.nextElementSibling) {
            status.nextElementSibling.classList.add('current')
           }
       }
    })

}

updateStatus(order);

initStripe()

// Socket
let socket = io()

// Join
if(order) {
    socket.emit('join', `order_${order._id}`)
}
let adminAreaPath = window.location.pathname
if(adminAreaPath.includes('admin')) {
    initAdmin(socket)
    socket.emit('join', 'adminRoom')
}


socket.on('orderUpdated', (data) => {
    const updatedOrder = { ...order }
    updatedOrder.updatedAt = moment().format()
    updatedOrder.status = data.status
    updateStatus(updatedOrder)
    new Noty({
        type: 'success',
        timeout: 1000,
        text: 'Order updated',
        progressBar: false,
    }).show();
})

