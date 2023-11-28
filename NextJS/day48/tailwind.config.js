import {nextui} from "@nextui-org/react";
import {next} from "sucrase/dist/types/parser/tokenizer";

const config = {
  content: [
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  // plugins: [nextui()],
  plugins: [
      nextui({
        addCommonColors: true
      })
  ]
}
export default config
