import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Metadata } from "next";
import React, { createRef, useState } from "react";
import { EasterEggContext } from "../context/EasterEggContext";
import type { PortfolioData } from "../types/PortfolioData.Interface";
import { getPortfolioData } from "../lib/portfolio";

export const metadata: Metadata = {
  title: "Ivan Krushkov - Software Developer - Personal Portfolio and Work",
  description:
    "I use Software and Business Development to create long-term value through technology.",
  openGraph: {
    title: "Ivan Krushkov - Software Developer - Personal Portfolio and Work",
    description:
      "I use Software and Business Development to create long-term value through technology.",
    url: "http://ikrushkov.com/",
    images: [
      {
        url: "https://www.ikrushkov.com/_next/image?url=%2Fmedia%2Fprofile_picture_500x.jpg&w=256&q=75",
      },
    ],
  },
};

/* Components */
import HeroPage from "../components/HeroPage";
import Navigation from "../components/Navigation";
import AboutMe from "../components/AboutMe";
import Work from "../components/Work";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import EasterEggCounter from "../components/EasterEggCounter";

export type Props = PortfolioData;

const Home: NextPage<Props> = ({
  works,
  openSourceWorks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const containerWidth: string = "max-w-4xl";

  const workRef = createRef<Text>();

  // Structured Data
  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "Person",
        "email": "mailto:i.krushkov@outlook.com",
        "image": "https://ikrushkov.com/_next/image?url=%2Fmedia%2Fprofile_picture_500x.jpg&w=256&q=75",
        "jobTitle": "Software Developer",
        "name": "Ivan Krushkov",
        "givenName": "Ivan",
        "familyName": "Krushkov",
        "url": "http://ikrushkov.com"
      }`,
    };
  }

  // Easter egg state tracker and updater
  const [eggCount, setEggCount] = useState<number>(0);
  const [isMaxEggs, setIsMaxEggs] = useState<boolean>(false);

  const updateEggCount = (newCount: number) => {
    setEggCount(newCount);
    if (newCount >= 8) {
      setIsMaxEggs(true);
    }
  };

  const contextValues = {
    eggCount,
    isMaxEggs,
    updateEggCount,
  };

  const portfolioData = {
    works,
    openSourceWorks,
  };

  return (
    <div>
      <div>
        <EasterEggContext.Provider value={contextValues}>
          <Navigation />
          <HeroPage containerWidth={containerWidth} />
          <AboutMe id="about" containerWidth={containerWidth} />
          <Work
            id="work"
            ref={workRef}
            containerWidth={containerWidth}
            portfolioData={portfolioData}
          />
          <Resume id="resume" containerWidth={containerWidth} />
          <Contact id="contact" containerWidth={containerWidth} />
          <EasterEggCounter />
        </EasterEggContext.Provider>
      </div>
    </div>
  );
};

// Read versioned Markdown at build time. Invalid content fails the build visibly.
export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: getPortfolioData(),
});

export default Home;
