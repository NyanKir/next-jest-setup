module.exports = {
  preset: 'ts-jest',
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json"
    }
  },
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  verbose: true,
};
