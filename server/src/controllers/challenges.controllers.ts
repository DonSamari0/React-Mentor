import { Request, Response } from "express";

async function getChallenges(req: Request, res: Response) {
  res.send("Challenges");
}

async function getSingleChallenge(req: Request, res: Response) {
  res.send("Challenge");
}

export { getChallenges, getSingleChallenge };
