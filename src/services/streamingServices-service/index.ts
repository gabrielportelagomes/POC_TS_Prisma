import streamingServicesRepositoy from "../../repositories/streamingServices-repository";
import { streaming_services } from "@prisma/client";
import { notFoundError } from "../../errors";

async function getStreamingServices(): Promise<streaming_services[]> {
  const streamingServices =
    await streamingServicesRepositoy.selectStreamingServices();

  if (!streamingServices) {
    throw notFoundError();
  }

  return streamingServices;
}

const streamingServicesService = {
  getStreamingServices,
};

export default streamingServicesService;
