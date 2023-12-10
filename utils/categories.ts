import {  AiOutlineLaptop } from "react-icons/ai";
import { FaBusinessTime, FaShirtsinbulk, FaShoePrints, FaTshirt } from "react-icons/fa";
import {  MdStorefront, MdTv} from "react-icons/md";

export const categories = [
    {
        label: "All",
        icon: MdStorefront,
    },
    {
        label: "Jeans",
        icon: FaShirtsinbulk,
    },
    {
        label: "Shoes",
        icon: FaShoePrints,

    },
    {
        label: "T-Shirt",
        icon: FaTshirt,

    },
    {
        label: "Coats",
        icon: AiOutlineLaptop,
    },
    {
        label: "Hoodies",
        icon: MdTv,
    },
    {
        label: "Business Suit",
        icon: FaBusinessTime,
    },
]