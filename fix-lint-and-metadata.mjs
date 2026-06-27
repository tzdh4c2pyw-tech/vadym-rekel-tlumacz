import fs from "fs";

const eslintFile = "eslint.config.mjs";

if (fs.existsSync(eslintFile)) {
  const eslintConfig = `import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "build/**",
      "_backup*/**"
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off"
    },
  },
];

export default eslintConfig;
`;
  fs.writeFileSync(eslintFile, eslintConfig, "utf8");
  console.log("Poprawiono eslint.config.mjs");
} else {
  console.log("Brak eslint.config.mjs");
}

const layoutFile = "app/layout.tsx";

if (fs.existsSync(layoutFile)) {
  let s = fs.readFileSync(layoutFile, "utf8");

  if (s.includes("export const metadata") && !s.includes("metadataBase: new URL")) {
    s = s.replace(
      /export const metadata\s*=\s*{/,
      'export const metadata = {\n  metadataBase: new URL("https://vadymrekel.pro"),'
    );
    fs.writeFileSync(layoutFile, s, "utf8");
    console.log("Dodano metadataBase do app/layout.tsx");
  } else {
    console.log("metadataBase już istnieje albo brak export const metadata");
  }
}
