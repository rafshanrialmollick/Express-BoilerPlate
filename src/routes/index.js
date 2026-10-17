import { Router } from "express";

import studentRoutes from "./something.Routes.js";

const router = Router();

router.use("/students", studentRoutes);

export default router;
