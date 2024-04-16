import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    languageOptions: { globals: globals.browser },
    files: ['src/**/*.{js,ts}'],
    ignores: ['**/*.config.{js,cjs}', '!**/eslint.config.js'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
