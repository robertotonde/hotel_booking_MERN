import express from "express";

import { createError } from "../utils/error.js";
import {
  createHotel,
  deleteHotel,
  getHotelById,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id",verifyAdmin, updateHotel);
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotelById);
//GET ALL
router.get(
  "/",
  getHotels
  // const failed = true;
  // if (failed) return next(createError(401, "your not authnticated"));
);

export default router;
