import  express  from "express";
import { signup,signin } from "../controller/controller";
export const router = express.Router()

router.post('/signup', signup)
router.post('/signin',signin)