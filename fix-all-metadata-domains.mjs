import fs from "fs";

const files = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      if (!["node_modules", ".next", ".git"].includes(entry.name)) walk(full);
    } else if (/\.(tsx|ts|js|jsx|mjs)$/.test(entry.name)) {
      files.push(full);
    }
  }
}

walk("app");
walk("components");

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  const before = s;

  s = s.replaceAll("https://vadym-rekel-tlumacz.vercel.app", "https://vadymrekel.pro");
  s = s.replaceAll("https://www.tlumaczrosyjskiegoiukrainskiego.pl", "https://vadymrekel.pro");
  s = s.replaceAll("https://tlumaczrosyjskiegoiukrainskiego.pl", "https://vadymrekel.pro");

  if (s !== before) {
    fs.writeFileSync(file, s, "utf8");
    console.log("Poprawiono domenę:", file);
  }
}

const layoutFile = "app/layout.tsx";

if (fs.existsSync(layoutFile)) {
  let s = fs.readFileSync(layoutFile, "utf8");

  if (!s.includes("const siteUrl = ")) {
    s = s.replace(
      `import "./globals.css";`,
      `import "./globals.css";\n\nconst siteUrl = "https://vadymrekel.pro";`
    );
  }

  if (s.includes("export const metadata") && !s.includes("metadataBase: new URL")) {
    s = s.replace(
      /export const metadata\s*:\s*Metadata\s*=\s*{/,
      `export const metadata: Metadata = {\n  metadataBase: new URL("https://vadymrekel.pro"),`
    );
  }

  s = s.replace(/url:\s*"https:\/\/[^"]+"/g, `url: "https://vadymrekel.pro"`);
  s = s.replace(/canonical:\s*"\/"/g, `canonical: "https://vadymrekel.pro"`);

  fs.writeFileSync(layoutFile, s, "utf8");
  console.log("Sprawdzono app/layout.tsx");
}
