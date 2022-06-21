module.exports = {
  // 让babel解析到node 和 typescript环境下
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ]
}