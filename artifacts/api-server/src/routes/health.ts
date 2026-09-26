import { Router } from "express";
import { HealthCheckResponse } from "@workspace/api-zod";

type HealthResponse = {
  json: (body: unknown) => void;
};

const router = Router();

router.get("/healthz", (_req: unknown, res: HealthResponse) => {
  const data = HealthCheckResponse.parse({ status: "ok" });
  res.json(data);
});

export default router;
