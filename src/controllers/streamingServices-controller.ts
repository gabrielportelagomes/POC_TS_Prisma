import streamingServicesRepositoy from "../repositories/streamingServices-repository";
import { Request, Response } from "express";

export async function getStreamingServices(req: Request, res: Response) {
  try {
    const result = await streamingServicesRepositoy.selectStreamingServices();

    const streamingServices = result.rows;

    return res.status(200).send(streamingServices);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
