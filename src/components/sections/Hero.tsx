import { motion } from "framer-motion";
import Container from "../layout/Container";
import profileImage from "../../assets/images/quatre.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { fr } from "../../locales/fr";
import { en } from "../../locales/en";

export default function Hero() {
  const { language } = useLanguage();
  const t = language === "fr" ? fr : en;

  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-teal-400 mb-4">
              {t.hero.greeting}
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Oumy Khairy Itelvina Sané
              </span>
            </h1>

            <h2 className="text-2xl text-slate-700 dark:text-slate-300">
              {t.hero.role}
              <br />
              {t.hero.speciality}
            </h2>

            <p className="mt-8 text-lg text-slate-400 max-w-xl">
              {t.hero.description}
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-teal-500 px-6 py-3 rounded-xl font-medium hover:bg-teal-400 transition text-white">
                {t.hero.projects}
              </button>
              <button className="border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl hover:border-slate-500 transition">
                {t.hero.download}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="rounded-3xl p-8 backdrop-blur-xl border transition-all duration-300 bg-white border-slate-200 shadow-xl dark:bg-slate-900/70 dark:border-slate-800 dark:shadow-2xl">
              <div className="flex flex-col items-center">

                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Oumy Khairy Itelvina Sané"
                    className="w-48 h-48 rounded-full object-cover border-4 border-teal-400 shadow-xl"
                  />
                  <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-2 border-white dark:border-slate-900" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-center text-slate-900 dark:text-white">
                  Oumy Sané
                </h3>

                <p className="mt-2 text-center text-slate-600 dark:text-slate-400">
                  {t.hero.speciality} • {t.hero.role}
                </p>

                <div className="w-full mt-8 space-y-6">

                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-500">
                      {t.hero.location}
                    </p>
                    <p className="text-slate-900 dark:text-white">
                      Dakar, Senegal 🇸🇳
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-500">
                      {t.hero.education}
                    </p>
                    <p className="text-slate-900 dark:text-white">
                      Bachelor's Degree in Digital Transformation
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-500">
                      {t.hero.learning}
                    </p>
                    <p className="text-slate-900 dark:text-white">
                      CI/CD • Docker • GitHub Actions
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-500">
                      {t.hero.achievement}
                    </p>
                    <p className="text-slate-900 dark:text-white">
                      IBM TechXchange Finalist 🏆
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}