import express from "express";

import {
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkaunthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in and you can delete your account ");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin , you are logged in and you can delete your account ");
});

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUserById);
//GET ALL
router.get(
  "/",
  verifyAdmin,
  getUsers
  // const failed = true;
  // if (failed) return next(createError(401, "your not authnticated"));
);

// router.get("/", (req, res) => {
// res.send("this is auth end point ");
// });

// router.get("/register", (req, res) => {
//     res.send("this is auth end point for register  ");
//     });

export default router;
