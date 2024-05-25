const express = require('express');
const router = express.Router();
const User = require('../modules/User');
const { body, validationResult } = require('express-validator'); 

router.post('/' ,[
    body('name', 'name is not valid').isLength({min: 3}),
    body('email', 'email is not valid').isEmail(),
    body('password', 'not valid password').isLength({min: 6})
    
],(req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(user => res.json(user))
      .catch(err => {console.log(err)
      res.json({err: "enter unique email"})});
})


module.exports = router;