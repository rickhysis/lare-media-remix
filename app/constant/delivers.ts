import { RiCommunityLine, RiMap2Line } from "react-icons/ri";
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
]

export { delivers }