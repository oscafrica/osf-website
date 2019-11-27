module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': `<rootDir>/test/jest-preprocess.js`
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/test/mocks/file-mock.js`,
    '^@components(.*)$': '<rootDir>/src/components/$1'
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `.cache`,
    `public`,
    `cypress/integration`
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/test/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js']
};
