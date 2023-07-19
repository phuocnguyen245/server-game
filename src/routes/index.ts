import express from "express";
import currencyRouter from "./currency.ts";
import roleRouter from "./role.ts";
import userRouter from "./user.ts";

const router = express.Router();

router.use("", currencyRouter);
router.use("", roleRouter);
router.use("", userRouter);

export default router;
