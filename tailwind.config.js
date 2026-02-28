/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        // UDA Green (Strong, Authoritative)
        primary: '#007A33', 
        // UDA Yellow/Gold (Vibrant, Campaign-focused)
        secondary: '#FFCD00', 
        // Darker Green for hover states and heavy text
        accent: '#004d20',
        // Adding a dark neutral for text clarity
        hustlerBlack: '#1a1a1a', 
      },
    },
  }, // Removed the extra brace that was here
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};