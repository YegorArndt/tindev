"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import cn from "classnames";

import { Button } from "app/components/ui";
import { Accordion } from "./";
import { ThreeDots, Carret, Heart, Share } from "app/components/icons";

export default function Card({
  img,
  companyName,
  description,
  jobTitle,
  location,
  salary,
  jobType,
  postedAt,
  id,
  className,
}) {
  return (
    <section
      className={cn(
        "p-4 shadow-md bg-base clr-base transition-shadow duration-300 rounded-sm overflow-hidden",
        className
      )}
      aria-label={companyName}
    >
      <header className="flex justify-between items-center">
        <div className="flex items-center">
          {/* If we have a company image, we'll use it. Otherwise, we'll use the first letter of the company name as a placeholder. */}
          {img ? (
            <Image
              src={img}
              alt={companyName}
              width={50}
              height={50}
              className="rounded-full"
            />
          ) : (
            <div className="flex-center w-12 h-12 bg-gray-200 rounded-full">
              {companyName[0]}
            </div>
          )}
          <section aria-label={companyName} className="ml-3">
            <h3 className="text-lg font-semibold">{companyName}</h3>
            <p className="text-sm text-gray-500">posted at: {postedAt}</p>
          </section>
        </div>
        <Button className="clr-primary">
          <ThreeDots />
        </Button>
      </header>
      <div className="mt-4">{description}</div>
      <Accordion
        toggler={({ isExpanded, setIsExpanded }) => (
          <footer className="flex justify-between items-center mt-auto pt-5">
            <div className="flex items-center gap-2">
              {[
                {
                  icon: <Heart />,
                  onClick: () => null,
                  id: "like",
                },
                {
                  icon: <Share />,
                  onClick: () => null,
                  id: "share",
                },
              ].map(({ icon, onClick, id }) => (
                <Button
                  key={id}
                  onClick={onClick}
                  className="clr-primary hover:bg-secondary p-2 rounded-full [&>*]:h-5 [&>*]:w-5"
                >
                  {icon}
                </Button>
              ))}
            </div>
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              animate={{ rotate: isExpanded ? -90 : 0 }}
              className="clr-primary"
            >
              <Carret />
            </motion.button>
          </footer>
        )}
        expandedContent={<div className="pt-5">Expanded content</div>}
      />
    </section>
  );
}
