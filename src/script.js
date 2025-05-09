// icon-search
var iconSearch = document.getElementById('icon-search');

var searchForm = document.querySelector('.search-form');
iconSearch.onclick = function() {
    searchForm.classList.toggle("active");
    shoppingCard.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
    regesterForm.classList.remove("active");
}

// icon-shopping
var iconShopping = document.getElementById('icon-shopping');

var shoppingCard = document.querySelector('.shopping-card');
iconShopping.onclick = function() {
    shoppingCard.classList.toggle("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
    regesterForm.classList.remove("active");
}

// icon-user
var iconUser = document.getElementById('icon-user');

var loginForm = document.querySelector('.login-form');
iconUser.onclick = function() {
    loginForm.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCard.classList.remove("active");
    navbar.classList.remove("active");
    regesterForm.classList.remove("active");
}

// login-now -in footer-
var loginNow = document.getElementById('login-now');
loginNow.onclick = function() {
    loginForm.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCard.classList.remove("active");
    navbar.classList.remove("active");
    regesterForm.classList.remove("active");
}

// icon-bars
var iconBars = document.getElementById('icon-bars');

var navbar = document.querySelector('.navbar');
iconBars.onclick = function() {
    navbar.classList.toggle("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCard.classList.remove("active");
    regesterForm.classList.remove("active");
}

// creatingAccountLink
var creatingAccountLink = document.querySelector('.header .login-form .creating-account p span');

var regesterForm = document.querySelector('.regester-form');
creatingAccountLink.onclick = function() {
    regesterForm.classList.toggle("active");
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCard.classList.remove("active");
}

// window-onscroll
window.onscroll = function() {
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCard.classList.remove("active");
    regesterForm.classList.remove("active");
}