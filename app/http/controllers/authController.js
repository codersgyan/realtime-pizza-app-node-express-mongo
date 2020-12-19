const User = require('../../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')
var mongoose = require("mongoose") 

function authController() {
    const _getRedirectUrl = (req) => {
        return req.user.role === 'admin' ? '/admin/orders' : '/customer/orders'
    }
    const postLogin= async function (req, res, next) {
        const { email, password } = req.body 
        // Validate request
        if (!email || !password) {
          req.flash("error", "All fields are required") 
          return res.redirect("/login") 
        }
        passport.authenticate("local", (err, user, info) => {
          if (err) {
            req.flash("error", info.message) 
            return next(err) 
          }
          if (!user) {
            req.flash("error", info.message) 
            return res.redirect("/login") 
          }
          req.logIn(user, (err) => {
            if (err) {
              req.flash("error", info.message) 
              return next(err) 
            }
            req.flash("success", "Logged in successfully");
            return res.redirect(_getRedirectUrl(req))
          }) 
        })(req, res, next) 
      }
    return {
        login(req, res) {
            res.render('auth/login')
        },
        postLogin,
        async register(req, res) {
            res.render('auth/register')
        },
        async postRegister(req, res, next) {
         const { name, email, password }   = req.body
         // Validate request 
         if(!name || !email || !password) {
             req.flash('error', 'All fields are required')
             req.flash('name', name)
             req.flash('email', email)
            return res.redirect('/register')
         }

         // Check if email exists 
         User.exists({ email: email }, (err, result) => {
             if(result) {
                req.flash('error', 'Email already taken')
                req.flash('name', name)
                req.flash('email', email) 
                return res.redirect('/register')
             }
         })

         // Hash password 
         const hashedPassword = await bcrypt.hash(password, 10)
         // Create a user 
         const user = new User({
             name,
             email,
             password: hashedPassword
         })

         user.save().then(async(user) => {
            return await postLogin(req, res, next);
         }).catch(err => {
            req.flash('error', 'Something went wrong')
                return res.redirect('/register')
         })
        },
        logout(req, res) {
          req.logout()
          req.flash("success", "Logged out successfully")
          return res.redirect('/login')  
        },
        googleLogin(req, res, next) {
          return res.redirect(_getRedirectUrl(req))
        },
    }
}

module.exports = authController