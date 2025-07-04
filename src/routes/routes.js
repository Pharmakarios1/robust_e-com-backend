import express from "express";
import { register, login } from "../controllers/user.controllers.js";
const router = express.Router();

router.post("/register", register);
router.post("/register", login);

export default router;
