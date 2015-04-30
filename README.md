# WebAssembly polyfill library and tools

*This library parses a prototype binary format that is roughly similar to what
WebAssembly may end up being standardized to look like; thus it is currently
just a prototype to demonstrate that a WebAssembly polyfill can not only be
effective, but provide value to users even before there is any native support
(due to smaller download size).*

The library in jslib/ should be ready to use, just copy both files and call loadWebAssembly().

Running 'make' compiles the C++ implementation into the JS files in jslib/ and
into native executables in tools/. (The Makefile is currently super-unportable,
sorry, will fix this in the future.)

The polyfill also comes with a tool (tools/pack-asmjs) that compiles a single JS
file (containing only asm.js) into the prototype WebAssembly format decoded by
the library. There is also a tool (tools/unpack-asmjs) to perform the reverse.
Given an existing asm.js application, one can experiment with this polyfill by
following the steps:
 1. Separate the asm.js module out into a separate file.
 2. Run pack-asmjs to produce a .wasm file.
 3. Refactor the code that called the asm.js module to instead call loadWebAssembly()
    (which returns a promise that resolves to the unlinked asm.js module function).

Demos:
 * [Unity AngryBots](http://lukewagner.github.io/AngryBotsPacked)
 * TODO: Epic TappyChicken

TODO:
 * Decode while downloading by having pack-asmjs split into separately-XHRable files.
 * Perform generic compression on top of the .wasm file (e.g., lzham gives a further 30% boost).
