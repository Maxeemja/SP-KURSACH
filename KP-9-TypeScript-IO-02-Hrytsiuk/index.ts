import Lexer from "./src/Lexer";
import Parser from "./src/Parser";
import { readFile, wFile, autoReadFile } from "./src/util";

const aboba = readFile("input.c")

const lexer = new Lexer(aboba);
const parser = new Parser(aboba)

lexer.lexAnalysis();
lexer.createTokenListFile()
lexer.createASTFile()
parser.aboba()