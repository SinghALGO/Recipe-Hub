const express = require('express');
const router = express.Router();
const {getUserByUsernameAndPassword} = require('./database');

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  getUserByUsernameAndPassword(username, password)
    .then(user => {
      if (user) {
         res.status(200).json({ message: 'Login successful', user: { id: user.id, name: user.username } });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

// Logout route
router.post('/logout', (req, res) => {
  // Clear user session or token as needed
  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;