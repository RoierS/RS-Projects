module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/prismjs/prism.css",
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/emptyModule.js",
  },
};
