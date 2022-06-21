module.exports = {
  transform: {
    // vue文件使用vue-jest 处理
    '^.+\\.vue$': 'vue-jest',
    // js和jsx文件使用babel-jest 处理
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
  collectCoverage: true,
  coverageReporters: ["json", "html"]
}