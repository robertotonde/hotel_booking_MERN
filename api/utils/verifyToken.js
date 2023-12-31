import Jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "you are not aunthenticated!"));
  }
  Jwt.verify(token, process.env.JWT, (error, user) => {
    if (error) return next(createError(401, "token is not correct "));
    req.user = user;

    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isadmin) {
      next();
    } else {
      return next(createError(401, "you are not authorized "));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isadmin) {
      next();
    } else {
      return next(
        createError(401, "you are not authorized you are not admin ")
      );
    }
  });
};
