
#include "simple_ast.h"

int main(int argc, char **argv) {
  // Read input file
  FILE *f = fopen(argv[1], "r");
  assert(f);
  fseek(f, 0, SEEK_END);
  int size = ftell(f);
  char *src = new char[size+1];
  rewind(f);
  int num = fread(src, 1, size, f);
  assert(num == size);
  fclose(f);
  src[size] = 0;

  cashew::Parser<Ref, ValueBuilder> builder;
  Ref ast = builder.parseToplevel(src);

  if (argc == 2) {
    ast->stringify(std::cout, true);
    std::cout << "\n";
  } else {
    JSPrinter jser(argv[2][0] == '1', argv[3][0] == '1', ast);
    jser.printAst();
    std::cout << jser.buffer << "\n";
  }
}

