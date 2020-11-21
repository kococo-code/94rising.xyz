// JS Unit Test Lib
// JEST Configure

module.exports = {
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            diagnostics: true,
        },
    },
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/setupTests.ts',
        '!src/index.tsx',
    ],
    setupFiles: ['<rootDir>/src/setupTests.ts'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
    automock: false,
    moduleDirectories: ['node_modules', 'src'],
    modulePaths: [],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            'identity-obj-proxy',
        '\\.(css|less)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
