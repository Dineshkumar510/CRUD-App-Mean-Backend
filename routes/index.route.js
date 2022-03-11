const express = require('express');
const User = require('../models/index.model');
const router = express.Router();


router.get('/', (req,res)=> {
    User.find({}, (err, users)=>{
        res.json(users)
    })
});


router.post('/', (req, res)=> {
    user = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        phone_Number: req.body.phone_Number
    })
    user.save(()=>{
        res.json(user)
    })
});


router.put('/:id', async(req, res)=> {
    user = await User.findById(req.params.id);
    user.name = req.body.name;
    user.age = req.body.age;
    user.email = req.body.email;
    user.phone_Number = req.body.phone_Number;
    user.save(()=>{
        res.json(user)
    })
});

router.delete('/:id', (req, res)=> {
    User.findByIdAndDelete(req.params.id, (err)=> {
        res.json({'message':'deleted'});
    })
});

module.exports = router;