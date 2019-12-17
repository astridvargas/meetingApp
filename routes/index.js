const express = require('express');
const router = express.Router();

// Import controllers
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');
const groupController = require('../controllers/groupController');

module.exports = function() {
    router.get('/', homeController.home);

    router.get('/create-account', userController.formCreateAccount);
    router.post('/create-account', userController.createNewAccount);

    // Login
    router.get('/login', userController.formLogin);

    // Admin
    router.get('/admin', adminController.adminPanel)

    // New groups
    router.get('/new-group',
        groupController.formNewGroup
    );

    router.post('/new-group',
        groupController.createGroup
    )

    return router;
}