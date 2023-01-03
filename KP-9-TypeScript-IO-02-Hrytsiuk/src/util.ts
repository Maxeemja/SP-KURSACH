import fs from "fs";
import chalk from 'chalk'
import path from 'path'
export const Prefixes = {
  SYSTEM_FILE_READ_SUCCESS: (file: string): string => `[` + chalk.magenta("System") + `] ` + chalk.green(`Successfully read ${file} file`),
  SYSTEM_FILE_READ_FAIL: (err: unknown) => `[` + chalk.magenta("System") + `] ` + chalk.red(`An error occured while reading file: ` + `${err}`),
  SYSTEM_WRITE_FILE_SUCCESS: `[` + chalk.magenta("System") + `] ` + chalk.green("Successfully created ASM file"),
  SYSTEM_WRITE_FILE_FAIL: (err: unknown) => `[` + chalk.magenta("System") + `] ` + chalk.red(`Failed to create/write to an ASM file: ` + `${err}`),
  LEXER_START_SUCCESS: `[` + chalk.blue("Lexer") + `] ` + chalk.green("Lexer started successfully"),
  LEXER_GEN_SUCCESS: `[` + chalk.blue("Lexer") + `] ` + chalk.green("Generating tokens process ended successfully"),
  LEXER_FAIL: (pos: number): string => `[` + chalk.blue("Lexer") + `] ` + chalk.red(`Lexer encountered an error at ${pos}`),

}

export const readFile = (file: string): string => {
  try {
    const __dirname = path.resolve();
    const data: string = fs.readFileSync(
      path.resolve(__dirname) + `\\${file}`,
      "utf-8"
    );
    console.log(Prefixes.SYSTEM_FILE_READ_SUCCESS(file));
    return data.toString();
  } catch (e) {
    console.error(Prefixes.SYSTEM_FILE_READ_FAIL(e))
    return '';
  }
};

export const wFile = (contents: string, fileToCreate: string): void => {
  try {
    const __dirname = path.resolve();
    const file = fs.writeFileSync(
      path.resolve(__dirname, "..") + `/${fileToCreate}`,
      contents
    );
    console.log(Prefixes.SYSTEM_WRITE_FILE_SUCCESS);
  } catch (e) {
    console.error(Prefixes.SYSTEM_WRITE_FILE_FAIL(e));
  }
};

export const autoReadFile = (f: string) => setInterval(() => readFile(f), 30000)
