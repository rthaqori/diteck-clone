"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Plus } from "lucide-react";

export default function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? prev : index));
  };

  const services = [
    {
      title: "Advanced Analytics",
      description:
        "Our strategic solutions unlock opportunities and solve business problems.",
      tags: ["Banner Design", "Graphic Design", "Logo Design"],
      image: "/service_7-768x432.jpg",
    },
    {
      title: "Marketing Strategy",
      description: "We combine audience insights with our strategic expertise.",
      tags: [
        "Art Direction",
        "Banner Design",
        "Graphic Design",
        "Logo Design",
        "Motion",
      ],
      image: "/service_6-768x512.jpg",
    },
    {
      title: "System and Software",
      description:
        "We prototype interaction, animation and experiences to bring UI to life.",
      tags: ["Art Direction", "Motion"],
      image: "/service_5-768x502.jpg",
    },
    {
      title: "Digital Strategy",
      description:
        "Design is at the heart of everything we do, with every solution tailored to the needs of each client.",
      tags: ["Banner Design", "Gr", "Logo Design"],
      image: "/service_4-768x512.jpg",
    },
    {
      title: "Web Development",
      description:
        "Creative yet functional, we develop comprehensive Design Systems.",
      tags: ["Graphic Design", "Logo Design", "Motion"],
      image: "/service_3-768x512.jpg",
    },
  ];

  return (
    <div className="grid px-2 md:grid-cols-7">
      <div className="relative col-span-3 hidden h-full w-full overflow-hidden rounded-2xl md:flex">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={services[activeIndex]?.image}
            alt={services[activeIndex]?.title}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-2xl object-cover"
          />
        </AnimatePresence>
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl bg-[#636edf]">
          <ArrowRight className="text-white" height={20} width={20} />
        </div>
      </div>

      <div className="flex flex-col pr-4 md:col-span-4 md:pl-20">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => toggleIndex(index)}
            className={`flex cursor-pointer items-center justify-between border-b border-gray-300 py-4 md:py-8 ${index === 0 && "border-t"} ${index === 4 && "border-b-0"}`}
          >
            <div className="w-full">
              <div className="flex items-center justify-between">
                <h2
                  className={`text-3xl leading-9 font-medium transition md:text-4xl md:leading-12 ${
                    activeIndex === index ? "text-white" : "text-gray-400"
                  }`}
                >
                  {service.title}
                </h2>
                <Plus
                  className={`text-white ${activeIndex === index && "rotate-225 transition-transform duration-200 ease-in-out"}`}
                />
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      {service.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2 md:mt-24">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="cursor-text rounded-lg border border-gray-500 px-3 py-1 text-sm leading-6 text-gray-200 transition-colors duration-200 ease-in-out hover:border-[#636edf]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
