import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <br />

          <h1 className={`${styles.heroSubText} text-white`}>
            Welcome to my corner of the Web!
          </h1>
          <h3 className={`${styles.heroHeadText} text-white`}>
            Hi , I'm <span className="text-[#915EFF]">Mihika</span>
          </h3>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Full Stack Developer
          </p>
          <p
            className={`${styles.sectionpara} mt-2 text-white-100`}
            style={
              {
                lineHeight: "2rem",
                maxWidth: "600px",
                marginTop: "20px",
              }
            }
          >
        I excel in crafting dynamic web applications, boasting mastery in both front-end and back-end technologies.
           
          </p>
          <div className="flex flex-row items-center gap-3 mt-10">
            <a
              href="https://drive.google.com/file/d/1pHe9VidcrBh2D7C829VrZGknuxE2ytaG/view?usp=sharing"
              className="text-[#915EFF] bg-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-200"
            >
              Resume
            </a>
          </div>
          
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
