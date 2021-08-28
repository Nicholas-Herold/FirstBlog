const router = require('express').Router();

router.post('/',async (req,res)=>{
    try {
        const userInfo = await User.create(req.body)
        res.render('homepage')
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;