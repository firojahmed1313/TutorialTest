import { manData } from "@/backend/controler/man";
import { createRouter  } from "next-connect";

const router = createRouter();

router.get(manData);

export default router.handler()