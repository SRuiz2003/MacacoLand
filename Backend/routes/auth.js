const express = require('express');
const router = express.Router();

const {signUp,login,revalidarToken} = require('../controllers/auth')
