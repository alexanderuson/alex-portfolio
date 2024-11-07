import { IoCall, IoHome, IoLaptopOutline, IoNewspaper, IoPerson } from "react-icons/io5";

export const NavRoutes = [
  {
    label: "Home",
    scrollId: "hero",
    icon: IoHome,
  },
  {
    label: "AboutMe",
    scrollId: "about-me",
    icon: IoPerson,
  },
  {
    label: "Projects",
    scrollId: "projects",
    icon: IoLaptopOutline,
  },
  {
    label: "Certifications",
    scrollId: "certifications",
    icon: IoNewspaper,
  },
  {
    label: "ContactMe",
    scrollId: "contact-me",
    icon: IoCall,
  },
];
