import { Router } from "express";
import {methods} from "./../controllers/language.controller"

const router = Router();

router.get("/", methods.getLanguage)
router.post("/", methods.createLanguage)
router.get("/:id", methods.getById)
router.delete("/:id", methods.deleteLanguage)
router.patch("/:id", methods.updateLanguage)

export default router;