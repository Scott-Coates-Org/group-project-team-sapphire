import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { IoBookmarkSharp, IoCartSharp } from "react-icons/io5";

export const sidebarData = [
  // products
  {
    id: 0,
    title: "Product",
    icon: <IoCartSharp size={22} />,
    iconOpened: <MdKeyboardArrowUp size={25} />,
    iconClosed: <MdKeyboardArrowDown size={25} />,
    subNav: [
      {
        id: 0.1,
        title: "All Products",
        path: "",
      },
      {
        id: 0.2,
        title: "Add Products",
        path: "",
      },
    ],
  },

  // bookings

  {
    id: 1,
    title: "Bookings",
    icon: <IoBookmarkSharp size={20} />,
    iconOpened: <MdKeyboardArrowUp size={25} />,
    iconClosed: <MdKeyboardArrowDown size={25} />,
    subNav: [
      {
        id: 1.1,
        title: "All Bookings",
        path: "",
      },
      {
        id: 1.2,
        title: "Daily Capacity",
        path: "",
      },
    ],
  },

  //   rooms

  {
    id: 2,
    title: "Rooms",
    icon: <AiFillHome size={20} />,
    iconOpened: <MdKeyboardArrowUp size={25} />,
    iconClosed: <MdKeyboardArrowDown size={25} />,
    subNav: [
      {
        id: 2.1,
        title: "All Rooms",
        path: "",
      },
      {
        id: 2.2,
        title: "Add Rooms",
        path: "",
      },
    ],
  },
];