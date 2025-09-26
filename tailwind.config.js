// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      perspective: {
        500: "500px",
      },
      rotate: {
        "x-90": "rotateX(90deg)",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
};
