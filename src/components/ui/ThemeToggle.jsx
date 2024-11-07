import { useTheme } from "@/context/ThemeProvider";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="text-orange-400">
      {theme === "light" ? <IoSunny size={25} /> : <IoMoon size={25} />}
    </button>
  );
}
