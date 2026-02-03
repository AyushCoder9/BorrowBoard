import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = req.headers["user-id"];

  if (!userId) {
    res.status(401).json({ error: "Unauthorized: Missing user-id header" });
    return;
  }

  next();
};
