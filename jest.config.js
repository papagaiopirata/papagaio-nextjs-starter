const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/src/tests',
    '<rootDir>/node_modules/',
  ],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
