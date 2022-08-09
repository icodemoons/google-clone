module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://www.google.com", "https://www.storage.googleapis.com"],
    plugins: [
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/typography"),
      // ...
    ],
  },
};
