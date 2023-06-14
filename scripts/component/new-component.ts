import path from "path";
import fs, { Dirent } from "fs";

import inquirer from "inquirer";

import handlebars from "handlebars";

interface Answers {
  scope: string;
  selectorName: string;
  className: string;
  description: string;
  version: string;
  directory: string;
}

const prompt = (): Promise<Answers> => {
  return inquirer.prompt([
    {
      type: "input",
      name: "scope",
      default: "@openscd",
      message: "Component scope",
    },
    {
      type: "input",
      name: "selectorName",
      message: "Selector name",
      validate: (input: string) => {
        return input.includes("-") ? true : "Selector must contain a hyphen";
      },
    },
    {
      type: "input",
      name: "directory",
      message: "Directory",
      validate(input: string) {
        return fs.existsSync(
          path.join(__dirname, "../", "../", "packages", input)
        )
          ? true
          : "Path does not exist";
      },
    },
    {
      type: "input",
      name: "className",
      message: "Class name",
    },
    {
      type: "input",
      name: "description",
      default: "",
      message: "Description",
    },
    {
      type: "input",
      name: "version",
      default: "0.0.0",
      message: "Version",
    },
  ]);
};

const main = () => {
  prompt().then((answers) => {
    const rootDir = path.join(
      __dirname,
      "../",
      "../",
      "__templates__",
      "component"
    );

    const readDir = (rootDir: string, currentDir: string): string[] => {
      const dir: string = path.join(rootDir, currentDir);
      const files: Dirent[] = fs.readdirSync(dir, {
        encoding: "utf-8",
        withFileTypes: true,
      });
      return [
        ...files
          .filter((file) => file.isDirectory())
          .flatMap((file) =>
            readDir(rootDir, path.join(currentDir, file.name))
          ),
        ...files
          .filter((file) => file.isFile())
          .map((file) => path.join(currentDir, file.name)),
      ];
    };

    const templateFile = (path: string, model: any): Promise<string> => {
      return new Promise((resolve, reject) => {
        fs.readFile(
          path,
          {
            encoding: "utf-8",
          },
          (err: NodeJS.ErrnoException | null, data: string) => {
            if (err) {
              return reject(err);
            }

            const template = handlebars.compile(data);

            return resolve(template(model));
          }
        );
      });
    };

    const writeFile = (input: string, file: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        fs.mkdirSync(path.dirname(file), { recursive: true });

        fs.writeFile(
          file,
          input,
          {
            encoding: "utf-8",
          },
          (err: NodeJS.ErrnoException | null) => {
            return err ? reject(err) : resolve();
          }
        );
      });
    };

    const files: string[] = readDir(rootDir, "");

    const model = {
      componentSelector: answers.selectorName,
      scope: answers.scope,
      componentClass: answers.className,
      description: answers.description,
      version: answers.version,
      directory: answers.directory,
    };

    files.forEach((file) => {
      const fileName = file
        .replace("__componentSelector__", answers.selectorName)
        .replace("__componentClass__", answers.className);

      templateFile(path.join(rootDir, file), model).then((output) => {
        writeFile(
          output,
          path.join(
            __dirname,
            "../",
            "../",
            "packages",
            answers.directory,
            answers.selectorName,
            fileName
          )
        );
      });
    });

    readDir(
      path.join(__dirname, "../", "../", "__templates__", "stories"),
      ""
    ).forEach((file) => {
      const fileName = file
        .replace("__componentSelector__", answers.selectorName)
        .replace("__componentClass__", answers.className);

      templateFile(
        path.join(__dirname, "../", "../", "__templates__", "stories", file),
        model
      ).then((output) => {
        writeFile(
          output,
          path.join(
            __dirname,
            "../",
            "../",
            "stories",
            answers.directory,
            answers.selectorName,
            fileName
          )
        );
      });
    });
  });
};

main();
