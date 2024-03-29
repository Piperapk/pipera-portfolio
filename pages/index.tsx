import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React, { createRef, useState } from "react";
import { EasterEggContext } from "../context/EasterEggContext"
import type { PortfolioWorks, OpenSourceWorks } from "../types/PortfolioData.Interface"

/* Components */
import HeroPage from "../components/HeroPage";
import Navigation from "../components/Navigation";
import AboutMe from "../components/AboutMe";
import Work from "../components/Work";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import EasterEggCounter from "../components/EasterEggCounter";

const STRAPIURL = process.env.STRAPI_LOCAL_URL;

export interface Props {
    works: PortfolioWorks[]
    openSourceWorks: OpenSourceWorks[]
}

const Home: NextPage<Props> = ({
    works,
    openSourceWorks
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
    }

    const contextValues = {
        eggCount,
        isMaxEggs,
        updateEggCount
    }

    const portfolioData = {
        works,
        openSourceWorks
    }

    return (
        <div>
            <Head>
                <title>
                    Ivan Krushkov - Software Developer - Personal Portfolio and Work
                </title>
                <meta
                    name="description"
                    content="I use Software and Business Development to create long-term value through technology."
                />

                <meta property="og:url" content="http://ikrushkov.com/" />
                <meta
                    property="og:title"
                    content="Ivan Krushkov - Software Developer - Personal Portfolio and Work"
                />
                <meta
                    property="og:description"
                    content="I use Software and Business Development to create long-term value through technology."
                />
                <meta
                    property="og:image"
                    content={`https://www.ikrushkov.com/_next/image?url=%2Fmedia%2Fprofile_picture_500x.jpg&w=256&q=75`}
                />

                <link rel="icon" href="/favicon.svg" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={addProductJsonLd()}
                    key="product-jsonld"
                />
            </Head>
            <div>
                <EasterEggContext.Provider value={contextValues}>
                    <Navigation />
                    <HeroPage containerWidth={containerWidth} />
                    <AboutMe id="about" containerWidth={containerWidth} />
                    <Work id="work" ref={workRef} containerWidth={containerWidth} portfolioData={portfolioData} />
                    <Resume id="resume" containerWidth={containerWidth} />
                    <Contact id="contact" containerWidth={containerWidth} />
                    <EasterEggCounter />
                </EasterEggContext.Provider>
            </div>
        </div>
    );
};

// Get data from Strapi. We call getStaticProps as this is the only Next.js page on the website.
export const getStaticProps: GetStaticProps = async () => {

    try {
        const resWork = await fetch(`${STRAPIURL}/works?populate=*`);
        const dataWork = await resWork.json();
        const works: PortfolioWorks = dataWork.data;

        const resOpenSourceWork = await fetch(`${STRAPIURL}/open-source-works?populate=*`);
        const dataOpenSourceWork = await resOpenSourceWork.json();
        const openSourceWorks: PortfolioWorks = dataOpenSourceWork.data;

        return {
            props: {
                works,
                openSourceWorks
            },
        }
    } catch (error) {
        console.error(error);
        return {
            props: {},
        }
    }


}

export default Home;
