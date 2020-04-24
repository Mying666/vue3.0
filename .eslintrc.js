module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  globals: {
    Vue: true,
    sensors: true,
    wx: true,
    WeixinJSBridge: true
  },
  extends: ['standard', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],

  // 规则
  rules: {
    'prettier/prettier': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'prefer-promise-reject-errors': 'off',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': ['warn', { html: { normal: 'never', void: 'always' } }],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    'vue/no-multi-spaces': [
      'error',
      {
        ignoreProperties: false
      }
    ],
    'vue/max-attributes-per-line': 'off',

    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ]
  }
}
