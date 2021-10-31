const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets' : 'src/assets',
    '@context': 'src/context',
    '@helpers': 'src/helpers',
    '@layout': 'src/layout',
    '@pages': 'src/pages',
    '@redux': 'src/redux'
  })(config)

  return config
}