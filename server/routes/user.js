const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)),
  });
  try {
    await newUser.save();
    res.json('Inscription ok !');
  } catch (e) {
    return res.status(400).json("L'inscription a echoué");
  }
});

module.exports = router;
