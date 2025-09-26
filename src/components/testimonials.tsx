"use client";
import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      comment:
        "“Your staff is very courteous and quick to respond to any service call we might have. Highly recommended.”",
      name: "Jane Cooper",
      rank: "Google Co-Founder",
    },
    {
      comment:
        "“Their fresh perspective and innovative strategies have given our business a much-needed revamp.”",
      name: "Anna Perry",
      rank: "Director of Recon",
    },
    {
      comment:
        "“They've not only met our expectations but exceeded them in every project. We give a big thumbs up!”",
      name: "Andrew Doe",
      rank: "CEO of Rondu",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center px-2 py-6 text-center md:px-6 md:py-16">
      <div className="mb-12 flex h-fit w-fit items-center gap-2 rounded-md border border-gray-300 px-3 py-1 font-normal md:mb-16">
        <div className="h-1.5 w-1.5 animate-[blink_0.75s_steps(1,_start)_infinite] rounded-xs bg-[#636edf]"></div>
        <span className="h-full">Hear from customer</span>
      </div>

      <div className="relative w-full max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div key={index} className="w-full flex-shrink-0 md:px-4">
              <p className="text-medium text-3xl leading-8 font-semibold text-wrap md:text-5xl md:leading-13">
                {t.comment}
              </p>
              <div className="mt-10 text-gray-600">
                <span className="font-medium text-black">{t.name}</span> ·{" "}
                {t.rank}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              resetAutoSlide();
            }}
            className={`h-2 w-2 rounded-full transition ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
