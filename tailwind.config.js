module.exports = {
  content: ["./index.html", "./thank-you.html"],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
      },
      colors: {
        body: "#606263",
        white: {
          DEFAULT: "#FFF",
          400: "#F1F4F8",
        },
        black: {
          DEFAULT: "#000",
        },
        grey: {
          DEFAULT: "#21312A",
          800: "#2D2230",
          600: "#85958F",
          400: "#9DABA6",
          100: "#D9DCDF",
        },
        primary: {
          DEFAULT: "#8D6B93",
        },
        secondary: {
          DEFAULT: "#ED1E79",
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      fontFamily: {
        sans: ["Inter"],
      },
      fontSize: {
        sm: ["0.875rem"], // 14px

        "base-sm": ["0.9375rem", "20px"], // 15px

        base: ["1rem", "24px"], // 16px

        md: ["1.125rem", "30px"], // 18px

        "2md": ["1.25rem", "30px"], // 20px

        "3md": ["1.5rem"], // 24px

        lg: "2rem", // 30px

        xl: ["2.5rem", "48px"], // 40px

        "2xl": ["2.75rem", "56px"], // 44px

        "3xl": ["3.5rem", "65px"], // 56px
      },
    },
  },
};
