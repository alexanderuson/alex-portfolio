import { scroller } from "react-scroll";
import { NavRoutes } from "@/routes/NavRoutes";
import { Dock, DockIcon } from "./Dock";
import { Separator } from "./Separator";
import ThemeToggle from "./ThemeToggle";

export function Navbar() {
  const handleScroll = (scrollId) => {
    scroller.scrollTo(scrollId, {
      smooth: true,
      duration: 500,
      offset: -50,
    });
  };

  return (
    <nav
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2"
      aria-label="Main Navigation"
    >
      <Dock direction="middle">
        {NavRoutes.map((item, index) => (
          <DockIcon
            key={index}
            onClick={() => handleScroll(item.scrollId)}
            aria-label={`Scroll to ${item.label}`}
          >
            <item.icon size={25} />
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        <DockIcon aria-label="Toggle theme">
          <ThemeToggle />
        </DockIcon>
      </Dock>
    </nav>
  );
}
