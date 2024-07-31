import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/signup", UserControllers.createSignup);

router.post("/login", UserControllers.createLogin);

router.get("/", UserControllers.getAllUser);

router.delete("/:id", UserControllers.getSingleUser);

router.get("/:id", UserControllers.getSingleUser);

export const UserRoutes = router;
