const express = require('express');

const Users = require('../users/user-model.js');
const router = express.Router();


router.get('/users', async (req, res) => {
    try {
        const user = await Users.get();
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
      }
});

module.exports = router;