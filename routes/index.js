const express = require('express');
const router = express.Router();

// Import controllers
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

module.exports = function() {
    router.get('/', homeController.home);

    router.get('/create-account', userController.formCreateAccount);
    router.post('/create-account', userController.createNewAccount);

    // Login
    router.get('/login', userController.formLogin);

    return router;
}