import prisma from "../../config/database";
import { StreamingService } from "../../protocols";

async function selectStreamingServices() {
  return await prisma.streaming_services.findMany();
}

async function selectStreamingServiceById(id: number) {
  return await prisma.streaming_services.findUnique({
    where: { id },
  });
}

const streamingServicesRepositoy = {
  selectStreamingServices,
  selectStreamingServiceById,
};

export default streamingServicesRepositoy;
