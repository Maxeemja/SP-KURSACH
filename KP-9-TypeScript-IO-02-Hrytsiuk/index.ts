import Lexer from "./src/Lexer";
import Parser from "./src/Parser";
import { readFile } from "./src/util";

const input = readFile("input.c")

const lexer = new Lexer(input);
const parser = new Parser(input)

lexer.lexAnalysis();
lexer.createTokenListFile()
lexer.createASTFile()
parser.biba()