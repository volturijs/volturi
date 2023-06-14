import path from "path";
import fs, { Dirent } from "fs";

interface Export {
  kind: string;
  name: string;
  declaration: {
    name: string;
    module: string;
  };
}

interface Declaration {
  kind: string;
  description: string;
  name: string;
  members?: any[];
  superclass?: {
    name: string;
    package: string;
  };
  cssProperties?: {
    description?: string;
    name: string;
    default?: string;
  }[];
}

interface Module {
  kind: string;
  path: string;
  declarations?: Declaration[];
  exports: Export[];
}

interface CustomElements {
  schemaVersion: string;
  readme: string;
  modules: Module[];
}

const createDistFolder = (): void => {
  const rootDir = path.join(__dirname, "../", "../");

  if (!fs.existsSync(path.join(rootDir, "dist"))) {
    fs.mkdirSync(path.join(rootDir, "dist"));
  }
};

const readCustomElements = (dir: string): CustomElements => {
  const file = path.join(dir, "custom-elements.json");

  return JSON.parse(fs.readFileSync(file, { encoding: "utf-8" }));
};

const writeCssVariables = (
  dir: string,
  input: { description?: string; name: string; default?: string }[]
): void => {
  const fileInput = `| Variable | Default | Description |
| -- | -- | -- |
${input.map(
  (line) => `| ${line.name} | ${line.default} | ${line.description} |`
)}`;

  fs.writeFileSync(path.join(dir, "css.md"), fileInput, { encoding: "utf8" });
};

const main = (): void => {
  createDistFolder();

  const rootDir = path.join(__dirname, "../", "../");

  const dirs: Dirent[] = fs
    .readdirSync(path.join(rootDir, "packages"), {
      withFileTypes: true,
    })
    .filter((file) => file.isDirectory());

  const cssProps = dirs
    .map((dir) => {
      return path.join(rootDir, "packages", dir.name);
    })
    .flatMap((dir) => {
      return fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((file) => file.isDirectory())
        .map((d) => path.join(dir, d.name));
    })
    .map((p) => readCustomElements(p))
    .flatMap((ce) => ce.modules)
    .flatMap((m) => m.declarations || [])
    .flatMap((d) => d.cssProperties || []);

  console.log(cssProps);

  writeCssVariables(path.join(rootDir, "dist"), cssProps);
};

main();
