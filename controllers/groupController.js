const Categories = require('../models/Categories');
const Groups = require('../models/Groups');

exports.formNewGroup = async (req, res) => {
    const categories = await Categories.findAll();

    res.render('new-group', {
        pageName: 'Create a new group',
        categories
    })
}

// Save a new group

exports.createGroup = async (req, res) => {
    const group = req.body;

    // try {
    //     // Save in Database

    //     await Groups.create(group);
    //     req.flash('success', 'You have succesfully created a new group!');
    //     res.redirect('/admin');

    // } catch(error) {
    //     console.log(error);
    //     req.flash('error', error);
    //     res.redirect('/new-group');
    // }

    console.log(group);
}