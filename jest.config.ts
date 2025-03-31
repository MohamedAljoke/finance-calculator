import { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node", // or 'jsdom' for frontend testing
  testMatch: ["**/__tests__/**/*.test.ts", "**/*.spec.ts"], // Customize test file pattern if needed
  verbose: true,
};

export default config;
