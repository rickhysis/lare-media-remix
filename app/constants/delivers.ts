import { RiCommunityLine, RiHonourLine, RiMap2Line } from "react-icons/ri";
import type DeliverType from "@/types/deliver";

const delivers : DeliverType[] = [
    {
        name: "Clients",
        number: 8,
        icon: RiCommunityLine
    },
    {
        name: "Locations",
        number: 20,
        icon: RiMap2Line,
    },
    {
        name: "Delivers",
        number: 50,
        icon: RiHonourLine,
    },
]

export { delivers }