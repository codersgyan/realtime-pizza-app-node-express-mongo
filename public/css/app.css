@charset "UTF-8";

.noty_layout_mixin,
#noty_layout__centerRight,
#noty_layout__centerLeft,
#noty_layout__center,
#noty_layout__bottomRight,
#noty_layout__bottomCenter,
#noty_layout__bottomLeft,
#noty_layout__bottom,
#noty_layout__topRight,
#noty_layout__topCenter,
#noty_layout__topLeft,
#noty_layout__top {
  position: fixed;
  margin: 0;
  padding: 0;
  z-index: 9999999;
  transform: translateZ(0) scale(1, 1);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  filter: blur(0);
  -webkit-filter: blur(0);
  max-width: 90%;
}

#noty_layout__top {
  top: 0;
  left: 5%;
  width: 90%;
}

#noty_layout__topLeft {
  top: 20px;
  left: 20px;
  width: 325px;
}

#noty_layout__topCenter {
  top: 5%;
  left: 50%;
  width: 325px;
  transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);
}

#noty_layout__topRight {
  top: 20px;
  right: 20px;
  width: 325px;
}

#noty_layout__bottom {
  bottom: 0;
  left: 5%;
  width: 90%;
}

#noty_layout__bottomLeft {
  bottom: 20px;
  left: 20px;
  width: 325px;
}

#noty_layout__bottomCenter {
  bottom: 5%;
  left: 50%;
  width: 325px;
  transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);
}

#noty_layout__bottomRight {
  bottom: 20px;
  right: 20px;
  width: 325px;
}

#noty_layout__center {
  top: 50%;
  left: 50%;
  width: 325px;
  transform: translate(calc(-50% - .5px), calc(-50% - .5px)) translateZ(0) scale(1, 1);
}

#noty_layout__centerLeft {
  top: 50%;
  left: 20px;
  width: 325px;
  transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);
}

#noty_layout__centerRight {
  top: 50%;
  right: 20px;
  width: 325px;
  transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);
}

.noty_progressbar {
  display: none;
}

.noty_has_timeout.noty_has_progressbar .noty_progressbar {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background-color: #646464;
  opacity: 0.2;
  filter: alpha(opacity=10);
}

.noty_bar {
  -webkit-backface-visibility: hidden;
  transform: translate(0, 0) scale(1, 1);
  -webkit-font-smoothing: subpixel-antialiased;
  overflow: hidden;
}

.noty_effects_open {
  opacity: 0;
  transform: translate(50%);
  -webkit-animation: noty_anim_in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation: noty_anim_in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

.noty_effects_close {
  -webkit-animation: noty_anim_out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation: noty_anim_out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

.noty_fix_effects_height {
  -webkit-animation: noty_anim_height 75ms ease-out;
          animation: noty_anim_height 75ms ease-out;
}

.noty_close_with_click {
  cursor: pointer;
}

.noty_close_button {
  position: absolute;
  top: 2px;
  right: 2px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.noty_close_button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.noty_modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 10000;
  opacity: 0.3;
  left: 0;
  top: 0;
}

.noty_modal.noty_modal_open {
  opacity: 0;
  -webkit-animation: noty_modal_in 0.3s ease-out;
          animation: noty_modal_in 0.3s ease-out;
}

.noty_modal.noty_modal_close {
  -webkit-animation: noty_modal_out 0.3s ease-out;
          animation: noty_modal_out 0.3s ease-out;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

@-webkit-keyframes noty_modal_in {
  100% {
    opacity: 0.3;
  }
}

@keyframes noty_modal_in {
  100% {
    opacity: 0.3;
  }
}

@-webkit-keyframes noty_modal_out {
  100% {
    opacity: 0;
  }
}

@keyframes noty_modal_out {
  100% {
    opacity: 0;
  }
}

@keyframes noty_modal_out {
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes noty_anim_in {
  100% {
    transform: translate(0);
    opacity: 1;
  }
}

@keyframes noty_anim_in {
  100% {
    transform: translate(0);
    opacity: 1;
  }
}

@-webkit-keyframes noty_anim_out {
  100% {
    transform: translate(50%);
    opacity: 0;
  }
}

@keyframes noty_anim_out {
  100% {
    transform: translate(50%);
    opacity: 0;
  }
}

@-webkit-keyframes noty_anim_height {
  100% {
    height: 0;
  }
}

@keyframes noty_anim_height {
  100% {
    height: 0;
  }
}

.noty_theme__mint.noty_bar {
  margin: 4px 0;
  overflow: hidden;
  border-radius: 2px;
  position: relative;
}

.noty_theme__mint.noty_bar .noty_body {
  padding: 10px;
  font-size: 14px;
}

.noty_theme__mint.noty_bar .noty_buttons {
  padding: 10px;
}

.noty_theme__mint.noty_type__alert,
.noty_theme__mint.noty_type__notification {
  background-color: #fff;
  border-bottom: 1px solid #D1D1D1;
  color: #2F2F2F;
}

.noty_theme__mint.noty_type__warning {
  background-color: #FFAE42;
  border-bottom: 1px solid #E89F3C;
  color: #fff;
}

.noty_theme__mint.noty_type__error {
  background-color: #DE636F;
  border-bottom: 1px solid #CA5A65;
  color: #fff;
}

.noty_theme__mint.noty_type__info,
.noty_theme__mint.noty_type__information {
  background-color: #7F7EFF;
  border-bottom: 1px solid #7473E8;
  color: #fff;
}

.noty_theme__mint.noty_type__success {
  background-color: #AFC765;
  border-bottom: 1px solid #A0B55C;
  color: #fff;
}

body {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #232323;
}

nav li:last-child a {
  background: #FE5F1E;
}

nav li:last-child a:hover {
  background: #b23301;
}

nav li a {
  transition: all 0.3s ease-in-out;
}

nav li a:hover {
  color: #FE5F1E;
}

section.hero {
  background: #F8F8F8;
}

.size {
  background: #F8F8F8;
}

.add-to-cart {
  border: 2px solid #FE5F1E;
  color: #FE5F1E;
  transition: all 0.3s ease-in-out;
}

.add-to-cart:hover {
  background: #FE5F1E;
  border-color: #fff;
  color: #fff;
}

.add-to-cart:focus {
  outline: none;
}

.btn-primary {
  background: #FE5F1E;
  transition: all 0.3s ease-in-out;
}

.btn-primary:hover {
  background: #b23301;
}

section.cart {
  background: #F8F8F8;
}

section.cart .amount {
  color: #FE5F1E;
}

section.login {
  background: #F8F8F8;
  min-height: calc(100vh - 86px);
}

section.login a {
  color: #FE5F1E;
}

section.login a:hover {
  color: #b23301;
}

.noty_theme__mint {
  border-radius: 50px !important;
  padding-left: 8px !important;
}

a.link {
  color: #FE5F1E;
}

section.status {
  background: #F8F8F8;
  min-height: calc(100vh - 86px);
}

.status-box {
  padding: 60px 0 0;
}

.status-box ul {
  margin-left: 84px;
}

.status-box ul li span {
  position: relative;
  padding-left: 20px;
}

.status-box ul li span:after {
  content: "";
  position: absolute;
  left: -10px;
  top: 50%;
  background: #232323;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 1px 10px #F8F8F8;
}

.status-box ul li span:before {
  font-family: "Line Awesome Free";
  font-size: 46px;
  font-weight: 600;
  position: absolute;
  left: -90px;
  top: 50%;
  transform: translateY(-50%);
  color: inherit;
}

.status-box ul li:nth-child(1) span:before {
  content: "\F46C";
}

.status-box ul li:nth-child(2) span:before {
  content: "\F560";
}

.status-box ul li:nth-child(3) span:before {
  content: "\F818";
}

.status-box ul li:nth-child(4) span:before {
  content: "\F0D1";
}

.status-box ul li:nth-child(5) span:before {
  content: "\F582";
}

.status-box ul li {
  position: relative;
}

.status-box ul li:before {
  content: "";
  position: absolute;
  top: 0;
  left: -6px;
  width: 2px;
  height: 100%;
  background: #232323;
  margin-top: 10px;
}

.status-box ul li:nth-child(5) span:after {
  box-shadow: 0 20px 1px 20px #F8F8F8;
}

.status-box ul li.step-completed:before {
  background: #ccc;
}

.status-box ul li.step-completed span:after {
  background: #ccc;
}

.status-box ul li.step-completed span {
  color: #ccc;
}

.status-box ul li.current span {
  color: #FE5F1E;
}

.status-box ul li.current span:after {
  background: #FE5F1E;
}

.status-box ul li small {
  float: right;
  font-size: 14px;
  margin-top: 8px;
}

@media (max-width: 1060px) {
  .container {
    max-width: 90%;
  }

  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}

@media (max-width: 768px) {
  .status-box ul li span:before {
    font-size: 34px;
  }
}

.StripeElement {
  box-sizing: border-box;
  width: 50%;
  margin-left: auto;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

