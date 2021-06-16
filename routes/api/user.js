const express = require('express');

const router = express.Router();

const User = require('../../models/User');

router.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

router.get('/users', (req, res) => {
  User.find((err, users) => {
    if (err) throw err;
    res.status(200).json(users);
  });
});

router.get('/user/:id', (req, res) => {
  User.findOne({ id: req.params.id }, (err, user) => {
    if (err) throw err;
    res.status(200).json(user);
  });
});

module.exports = router;