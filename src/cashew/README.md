#cashew

Cashew is an asm.js parser written in C++.

 * Cashew has a parser which does not mandate any particular
   AST. You can plug in your AST builder methods.
 * Cashew comes with a simple AST that is similar to Uglify's
   AST. You can either use that, or consider it an example.
 * Cashew parses ASCII input.
 * Cashew is built for speed.
 * Cashew does not do much in terms of error checking.

The main use case for Cashew is to quickly parse known-valid asm.js,
in order to then process it.

##usage

`istring.h` and `cpp` implement an always-interned string class. This
makes parsing much more efficient.

`parser.h` and `cpp` implement the parser. It is templated on the AST
pointer type, and a class that provides methods to build the
various things necessary.

`simple_ast.h` and `cpp` implement an AST using Cashew, and provide
a builder, see ValueBuilder in the header.

`test.cpp` is a simple example of using Cashew and the simple AST. It
is used by `test.py`, which runs the test suite.

##Building

Uses cmake.

```
mkdir build
cd build
cmake ..
make
```

##Testing

```
cd build
../test.py
```

