import { getStreamingServices } from "../controllers";
import { Router } from "express";

const streamingServicesRouter = Router();

streamingServicesRouter.get("/", getStreamingServices);

export { streamingServicesRouter };
