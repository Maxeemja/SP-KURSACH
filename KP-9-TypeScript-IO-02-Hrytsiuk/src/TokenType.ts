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
  mainFunc: new TokenType("MAIN_FUNCTION", "int main"),
  returnStatement: new TokenType("RETURN", "return"),
  endOfLine: new TokenType("SEMICOLON", "\\;"),
  whileLoop: new TokenType("whileLoop", "while"),
  ifOperator: new TokenType("IF", "if"),
  elseOperator: new TokenType("ELSE", "else"),
  var: new TokenType("VARIABLE", "[a-z_]*"),
  space: new TokenType("SPACE", "[ \\n\\t\\r]"),
  equals: new TokenType("equals", "\\=="),
  assign: new TokenType("ASSIGN", "\\="),
  plusAssign: new TokenType("PLUS_ASSIGN", "\\+="),
  multiplyAssign: new TokenType("MULTIPLY_ASSIGN", "\\*="),
  modulusOperator: new TokenType("MODULUS_OPERATOR", "\\%"),
  greater: new TokenType("GREATER_THAN", "\\>"),
  less: new TokenType("LESS_THAN", "\\<"),
  plus: new TokenType("PLUS", "\\+"),
  minus: new TokenType("MINUS", "\\-"),
  multiply: new TokenType("MULTIPLY", "\\*"),
  divide: new TokenType("DIVIDE", "\\/"),
  lpar: new TokenType("LPAR", "\\("),
  rpar: new TokenType("RPAR", "\\)"),
  lbrace: new TokenType("LBRACE", "\\{"),
  rbrace: new TokenType("RBRACE", "\\}"),
  comma: new TokenType("COMMA", "\\,"),
  notEquals: new TokenType("notEquals", "!="),
};
