import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div>
      <div className="text-center pt-28 px-20">
        <h2 className="text-5xl pt-20 pb-8 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Hi! My name is Ryan He,
        </h2>
        <div className="sm:flex justify-center items-center hidden">
          <TypeAnimation
            sequence={[
              "I am a Computer Science Major ",
              2000,
              "I am a problem solver ",
              2000,
              "I am a lifelong learner ",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-2xl md:text-3xl py-2 dark:text-white"
          />
        </div>

        <p className="text-md py-8 leading-8 md:text-xl max-w-2xl mx-auto text-gray-800 dark:text-gray-200">
          I am a Software Development Engineer based in Vancouver, building ML pipelines and data infrastructure for credit adjudication systems. 
          Passionate about leveraging machine learning to solve complex financial challenges.
          <br />
          <br />
          I have gained valuable
          experiences at:
        </p>

        <p className="text-left text-md leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200 border-l-4 border-teal-600 pl-4">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <span className="font-bold text-teal-600 dark:text-teal-400 border-teal-600">
              {" "}
              &#x2022;RBC Borealis AI - building ML pipelines that power credit adjudication and deliver decisions 🧠
              <br />
              <br />
              &#x2022;Activision Experience Optimization - Call of Duty: Black Ops 6 🔫
              <br />
              <br />
              &#x2022;Moneris Go Restaurant POS - Mobile Team 📱
              <br />
              <br />
              &#x2022;SAP Business Technology Platform - Software Logistics Team 👷‍♂️
            </span>
          </motion.div>
        </p>

        <p className="text-md leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
          <br />
          Click on my social links to learn more about me. Let&apos;s connect
          and create something cool together!
        </p>
      </div>
    </div>
  );
};

export default Introduction;
