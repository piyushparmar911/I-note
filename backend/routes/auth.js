const express = require('express');
const router = express.Router();
const User = require('../modules/User');
const { body, validationResult } = require('express-validator'); 
const bcrypt = require('bcrypt');


router.post('/createuser' ,[
    body('name', 'name is not valid').isLength({min: 3}),
    body('email', 'email is not valid').isEmail(),
    body('password', 'not valid password').isLength({min: 6})
    
], async (req, res) => {
  
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // if user are already existing then show error
  try {
    
    let user = await User.findOne({email: req.body.email});
    if(user )
      {
        return res.status(400).json({error: "it is already created"})
      }  
      let salt =  await bcrypt.genSalt(10);
      let secPass = await bcrypt.hash(req.body.password, salt);
      
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      })
      res.json(user);
    } 
    catch (error) {
    console.error(error.message);
    res.status(500).json({error: "error occurred"});
      
    }
      
})


module.exports = router;