import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button_Badge_Array from "../buttons/Button_Badge_Array";
import { Button } from "../buttons/Button_Badge";

export interface Props {
  containerWidth?: string; //Max width of the container

  title: string;
  textBodyCase: string;
  textBodyOutcome: string;
  tagButtons: Button[];
  linkButtons: Button[];
  image: string;
}

const Work_Card = ({
  containerWidth,
  title,
  textBodyCase,
  textBodyOutcome,
  tagButtons,
  linkButtons,
  image,
}: Props) => {
  //Dynamic resize of the card element's text padding
  const [cardTopBarHeight, setCardTopBarHeight] = useState<number>();
  const cardTopBarHeight_ref = useRef<HTMLDivElement>(null);

  const resize = () => {
    let newHeight = cardTopBarHeight_ref.current?.clientHeight as number;
    //Adding extra 12px of padding to the total height
    setCardTopBarHeight(newHeight + 12);
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  //Base 64 image to use as a placeholder image whilst loading
  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUiWysBwADJgF/SiqohwAAAABJRU5ErkJggg==";

  return (
    <div className={`${containerWidth} m-auto`}>
      <h1
        className="sm:px-5 pb-1
            text-2xl font-normal text-slate-800 dark:text-slate-200"
      >
        {title}
      </h1>
      <div className="relative">
        <div className="flex flex-wrap">
          <div className="hidden sm:block">
            <div
              className="flex-auto min-w-full min-h-max absolute bg-gray-300/30 z-10
                            rounded-t-2xl backdrop-blur-lg flex flex-wrap"
              ref={cardTopBarHeight_ref}
            >
              <div
                className="basis-[70%] min-h-[48px] 
                                flex flex-wrap justify-start items-center px-5 py-2 gap-1"
              >
                <Button_Badge_Array
                  buttons={tagButtons}
                  bgColor="bg-secondary"
                  textSize="text-sm"
                  paddingY="py-[2px]"
                />
              </div>

              <div
                className="basis-[30%] min-h-[48px]
                                flex flex-wrap justify-end items-center pr-5 py-2 gap-1"
              >
                <Button_Badge_Array
                  buttons={linkButtons}
                  bgColor="bg-primary"
                  hoverColor="rose-400"
                  textSize="text-sm"
                  paddingY="py-1.5"
                />
              </div>
            </div>
          </div>

          <div
            className="flex-auto basis-[395px] sm:basis-[45%] 
                    rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none 
                    overflow-hidden flex justify-center items-stretch"
          >
            <Image
              src={image}
              alt="work project"
              height="500"
              width="700"
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>

          <div className="sm:hidden flex-auto">
            <div
              className="flex-auto min-w-full min-h-max bg-gray-300/30 dark:bg-slate-400
                            flex flex-wrap"
            >
              <div
                className="min-h-[48px] flex-auto
                                flex flex-wrap justify-start items-center px-5 py-2 gap-1"
              >
                <Button_Badge_Array
                  buttons={tagButtons}
                  bgColor="bg-secondary"
                  textSize="text-sm"
                  paddingY="py-[2px]"
                />
              </div>

              <div
                className="min-h-[48px]
                                flex flex-wrap justify-end items-center px-5 py-2 gap-1"
              >
                <Button_Badge_Array
                  buttons={linkButtons}
                  bgColor="bg-primary"
                  hoverColor="rose-400"
                  textSize="text-sm"
                  paddingY="py-1.5"
                />
              </div>
            </div>
          </div>

          <div
            className="flex-auto basis-[480px] sm:basis-[55%]  bg-white dark:bg-slate-600 text-black dark:text-white
                    rounded-b-2xl sm:rounded-r-2xl sm:rounded-l-none
                    p-5 pt-4"
            style={{ paddingTop: cardTopBarHeight }}
          >
            <span className="font-bold text-base">Case: </span>
            <p className="font-light text-base whitespace-pre-line">
              {textBodyCase}
            </p>
            <div className="border-t border-slate-300 my-2" />
            <span className="font-bold text-base">Outcome: </span>
            <p className="font-light text-base whitespace-pre-line">
              {textBodyOutcome}
            </p>
          </div>
        </div>
        <div
          className="flex-auto basis-[100%] absolute inset-0 -z-10
                shadow-md-center rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Work_Card;
