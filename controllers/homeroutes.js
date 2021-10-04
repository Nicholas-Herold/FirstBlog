const router = require('express').Router();
const { User,blogPost } = require('../models');



router.get('/',(req,res)=>{
    res.render('homepage')
});

router.get('/login',(req,res)=>{
    res.render('login')
});

router.get('/signup', (req,res)=>{
    res.render('signup')
})

router.get('/dashboard', async (req,res)=>{

    // const dashData = await blogPost.findAll({
    //     include: [
    //         {
    //             model: User,
    //         attributes: ['username']
    //         }
    //     ]
    // });
    res.render('dashboard')
})
module.exports = router;