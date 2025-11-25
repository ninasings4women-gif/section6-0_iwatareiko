import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: globals.browser,
     },
    
    rules: {
      "no-alert": "error",
      "id-length":[
        "error",
         {
          max: 12,
          properties: "never", //languageOptionsへ無効にするため
        }, 
      ],
    }
  },

  { 
    files: ["**/*.js"], 
    languageOptions: { sourceType: "commonjs" }, 
  },
]);
