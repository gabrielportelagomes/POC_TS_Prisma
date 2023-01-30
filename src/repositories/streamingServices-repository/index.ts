import { streaming_services } from "@prisma/client";
import prisma from "../../config/database";

async function selectStreamingServices(): Promise<streaming_services[]> {
  return await prisma.streaming_services.findMany();
}

async function selectStreamingServiceById(
  id: number
): Promise<streaming_services> {
  return await prisma.streaming_services.findUnique({
    where: { id },
  });
}

const streamingServicesRepositoy = {
  selectStreamingServices,
  selectStreamingServiceById,
};

export default streamingServicesRepositoy;
