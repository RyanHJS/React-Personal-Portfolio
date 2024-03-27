import React from "react";
import { motion } from "framer-motion";
import CardImage from "./CardImage";
import CardText from "./CardText";
import { Cardo } from "next/font/google";
import Image from "next/image";
import sapLogo from '../../../public/static/sapLogo.png'
import monerisLogo from '../../../public/static/monerisLogo.jpeg'
import activisionLogo from '../../../public/static/activisionLogo.jpeg'

const Work = () => {
  let sapJobTitle = "Software Logistics Engineer (BTP Core Platform Services)";
  let monerisJobTitle = "Software Logistics Engineer (BTP Core Platform Services)";
  let activisionJobTitle = "Software Logistics Engineer (BTP Core Platform Services)";
  let sapJobDate = "Sep 2021 - May 2022";
  let monerisJobDate = "Sep 2023 - May 2024";
  let activisionJobDate = "May 2024 - Aug 2024";
  let sapJobDescription = `
   SAP iXp intern on the BTP Core Platform Services team.
        `;
  let monerisJobDescription = `
   SWE intern on the Moneris Go POS Restaurant Solutions teams.
        `;
  let activisionJobDescription = `
   Front end developer intern on the Activision Experience Optimization team.
        `;

  let sapTags = ["debugging", "database", "linux"];
  let monerisTags = ["javascript / typescript", "react-native"];
  let activisionTags = ["javascript", "jquery", "css/sass"];
  let showIcons = false;

  return (
    <>
      <section className="min-h-screen pt-20 pb-96">
        <h2 className="text-3xl md:text-3xl text-center pt-20 pb-8 text-teal-600 font-semibold dark:text-teal-400">
          My Work Experience
        </h2>

        <div className="flex flex-col items-center gap-5">
          <div id="sap" className="flex flex-col items-center text-center">
            <CardImage
              imageSrc={sapLogo}
              imageCaption={"imageCaption"}
              imageTitle={sapJobTitle}
              imageBody={sapJobDate}
              tags={sapTags}
              showIcons={showIcons}
            />
            <CardText textBody={sapJobDescription} />
          </div>
          <div id="moneris" className="flex flex-col items-center text-center">
            <CardImage
              imageSrc={monerisLogo}
              imageCaption={"imageCaption"}
              imageTitle={monerisJobTitle}
              imageBody={monerisJobDate}
              tags={monerisTags}
              showIcons={showIcons}
            />
            <CardText textBody={monerisJobDescription} />
          </div>
          <div id="activision" className="flex flex-col items-center text-center">
            <CardImage
              imageSrc={activisionLogo}
              imageCaption={"imageCaption"}
              imageTitle={activisionJobTitle}
              imageBody={activisionJobDate}
              tags={activisionTags}
              showIcons={showIcons}
            />
            <CardText textBody={activisionJobDescription} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
