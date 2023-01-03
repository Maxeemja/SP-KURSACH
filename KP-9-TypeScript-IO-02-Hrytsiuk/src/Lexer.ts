import Token from "./Token";
import {tokenTypeList} from "./TokenType";
import {Prefixes, wFile} from "./util";

export default class Lexer {
  code: string;
  pos: number = 0;
  tokenList: Token[] = [];

  constructor(code: string) {
    this.code = code;
  }

  public lexAnalysis(): Token[] {
    console.log(Prefixes.LEXER_START_SUCCESS);
    while (this.nextToken()) {
    }
    this.tokenList = this.tokenList.filter(
        (token) => token.type.name !== tokenTypeList.space.name
    );

    return this.tokenList;
  }

  public nextToken(): boolean | undefined {
    if (this.pos >= this.code.length) {
      return false;
    }
    try {
      const tokenTypeValues = Object.values(tokenTypeList);
      for (let i = 0; i < tokenTypeValues.length; i++) {
        const tokenType = tokenTypeValues[i];
        const regex = new RegExp("^" + tokenType.regex);
        const aboba = this.code.replace(/\s+/g, " ").trim();
        const result = aboba.substr(this.pos).match(regex);
        if (result && result[0]) {
          const token = new Token(tokenType, result[0], this.pos);
          this.pos += result[0].length;
          this.tokenList.push(token);
          return true;
        }
      }
      console.log(this.tokenList);
      console.log(Prefixes.LEXER_GEN_SUCCESS);
    } catch {
      throw new Error(Prefixes.LEXER_FAIL(this.pos));
    }
  }

  public createTokenListFile() {
    wFile(this.tokenListToString(this.tokenList), "tokenList.txt");
  }

  public createASTFile() {
    wFile(this.tokenListToAST(this.tokenList), "ast.txt")
  }

  public tokenListToString(list: Token[]): string {
    let str = "";
    const aboba = list.map((token) =>
        str += `Token { Type: ${token.type.name}, text: "${token.text}", pos: ${token.pos} },\n`)

    return str
  }

  public tokenListToAST(list: Token[]): string {
    let str = "";
    let prevToken: string;
    let flag = false;
    list.map((token) => {
      if(prevToken == 'LBRACE') {
        flag = true;
      }
      str += `${flag ? '\t' : ''}{${token.text}} => (${token.type.name}),\n`
      prevToken = token.type.name;
      if(prevToken == 'RBRACE') {
        flag = false;
      }
    })

    return str
  }
}
