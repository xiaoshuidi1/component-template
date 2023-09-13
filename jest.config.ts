import type { Config } from "jest";
import { defaults } from "jest-config";

const config: Config = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    html: '<html lang="zh-cmn-Hant"></html>',
    url: "https://es.ys7.com",
    userAgent: "Agent/007",
  },
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "md",
  ],
  modulePathIgnorePatterns: ["/lib/", "/es/", "/dist/", "/bsite/"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};

export default config;
