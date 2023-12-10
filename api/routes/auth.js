import express from "express";
import { register } from "../controllers/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is auth end point ");
});

router.get("/register", register);

export default router;
