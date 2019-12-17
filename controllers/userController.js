// Immport Users
const Users = require('../models/User');

exports.formCreateAccount = (req, res) => {
    res.render('create-account', {
        pageName: 'Create your account'
    })
}

exports.createNewAccount = async (req, res) => {
    const user = req.body;
    console.log(user);

    // try {
    //     await Users.create(user);
    //     // const newUser = await Users.create(user);

    //     // console.log(newUser);

    //     // Flash messages
    //     req.flash('success', 'We have sent an E-mail. Please confirm your account');
    //     res.redirect('/login');

    // } catch (error) {
    //     // Filtering the error mssages
    //     const errorsSequelize = error.errors.map(err => err.message);

    //     // console.log(errorsSequelize);

    //     req.flash('error', errorsSequelize);
    //     res.redirect('/create-account');
        
    // }
}

// Login

exports.formLogin = (req, res) => {
    res.render('login'), {
        pageName: 'Log In'
    }
}