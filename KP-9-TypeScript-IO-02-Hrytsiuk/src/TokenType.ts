export default class TokenType {
  name: string;
  regex: string;

  constructor(name: string, regex: string) {
    this.name = name;
    this.regex = regex;
  }
}

export const tokenTypeList = {
  number: new TokenType("NUMBER", "[0-9]*"),
  function: new TokenType("FUNCTION", "def"),
  funcName: new TokenType("FUNCTIONNAME", "func"),
  mainFunc: new TokenType("mainFunc", "main"),
  returnStatement: new TokenType("RETURN", "return"),
  var: new TokenType("VARIABLE", "[a-z]*"),
  colon: new TokenType("COLON", ":"),
  space: new TokenType("SPACE", "[ \\n\\t\\r]"),
  assign: new TokenType("ASSIGN", "\\="),
  plus: new TokenType("PLUS", "\\+"),
  minus: new TokenType("MINUS", "\\-"),
  multiply: new TokenType("MULTIPLY", "\\*"),
  divide: new TokenType("DIVIDE", "\\/"),
  lpar: new TokenType("LPAR", "\\("),
  rpar: new TokenType("RPAR", "\\)"),
  comma: new TokenType("COMMA", "\\,"),
  notEquals: new TokenType("notEquales", "!="),
  whileLoop: new TokenType("whileLoop", "while")
};
