module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 2020,  // Sử dụng con số thay vì 'latest'
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',  // Sử dụng 'detect' để tự động phát hiện phiên bản React
    },
  },
  plugins: ['react', 'react-hooks', 'scss'],  // Sửa lỗi trong phần 'plugins'
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-unresolved': 'off',
  },
};
