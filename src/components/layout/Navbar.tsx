import Container from "./Container";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { fr } from "../../locales/fr";
import { en } from "../../locales/en";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const t = language === "fr" ? fr : en;

  return (
    <header
      className={`
      fixed
      top-0
      left-0
      w-full
      h-20
      z-50
      backdrop-blur-xl
      border-b
      transition-all
      ${
        theme === "dark"
          ? "bg-slate-950/70 border-slate-800"
          : "bg-white/80 border-slate-200"
      }
      `}
    >
      <Container>
        <div className="h-20 flex items-center justify-between">

          <a
            href="#"
            className="text-3xl font-bold"
          >
            Oumy
            <span className="text-teal-400">.</span>
          </a>

          <nav className="hidden lg:block">
            <ul
              className={`flex gap-10 ${
                theme === "dark"
                  ? "text-slate-300"
                  : "text-slate-700"
              }`}
            >
              <li>
                <a href="#about" className="hover:text-teal-400 transition">
                  {t.nav.about}
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-teal-400 transition">
                  {t.nav.projects}
                </a>
              </li>

              <li>
                <a href="#experience" className="hover:text-teal-400 transition">
                  {t.nav.experience}
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-teal-400 transition">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">

            <div
              className={`flex rounded-xl overflow-hidden border ${
                theme === "dark"
                  ? "border-slate-700"
                  : "border-slate-300"
              }`}
            >
              <button
                onClick={() => setLanguage("fr")}
                className={`px-3 py-2 text-sm transition ${
                  language === "fr"
                    ? "bg-teal-500 text-white"
                    : ""
                }`}
              >
                FR
              </button>

              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-2 text-sm transition ${
                  language === "en"
                    ? "bg-teal-500 text-white"
                    : ""
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className={`
                p-2
                rounded-xl
                transition
                ${
                  theme === "dark"
                    ? "border border-slate-700 hover:bg-slate-800"
                    : "border border-slate-300 hover:bg-slate-100"
                }
              `}
            >
              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-400 transition px-5 py-2 rounded-xl font-semibold text-white"
            >
              {t.nav.resume}
            </a>

          </div>

        </div>
      </Container>
    </header>
  );
}