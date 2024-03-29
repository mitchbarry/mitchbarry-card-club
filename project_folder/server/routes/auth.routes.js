import { Router } from 'express';

import authController from '../controllers/auth.controller.js';

const router = Router();

router.route("/register") // Register a new user
    .post(authController.registerUser);
    
router.route("/login") // Login route
    .post(authController.loginUser);
    
router.route("/logout") // Logout route
    .post(authController.logoutUser);
    
router.route("/user") // login with a token route
    .get(authController.getUserInfo);

export default router;