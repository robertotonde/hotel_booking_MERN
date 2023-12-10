import express from "express";

import { createError } from "../utils/error.js";
import {
  createHotel,
  deleteHotel,
  getHotelById,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";

const router = express.Router();
//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
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
