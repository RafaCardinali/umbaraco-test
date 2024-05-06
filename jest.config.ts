import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  transformIgnorePatterns: [
    "/node_modules/(?!axios).+\\.(js|jsx|ts|tsx)$"
  ],

  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    "\\.(css|less|scss|sss|styl)$": "identity-obj-proxy"
  },

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*.d.ts',
    '!**/index.tsx',
  ],

  coverageDirectory: 'coverage',

  coverageReporters: ['text', 'lcov'],
};

export default config;
