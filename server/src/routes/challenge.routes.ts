import { Router } from "express";
import {
  getChallenges,
  getSingleChallenge,
} from "../controllers/challenges.controllers";
const router = Router();

router.get("/challenges", getChallenges);
router.get("/challenge", getSingleChallenge);

export default router;
