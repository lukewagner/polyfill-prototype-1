# WebAssembly Polyfill (experimental)

**This repo currently contains a prototype designed to demonstrate the real-world efficacy of a WebAssembly polyfill.  Standardization work is ongoing in the [spec repo](https://github.com/WebAssembly/spec/blob/master/BinaryEncoding.md) to design a real binary format and will be tracked by this repo. The current prototype also makes no attempt to call native browser decoding and will remain a plain JS library until there is a standardized, stable, WebAssembly v.1.**

## Usage instructions for current prototype

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
   * AngryBots-asm.js goes from 19mb to 6.3mb.
   * AngryBots-asm.js.gz goes from 4.1mb to 3.0mb.
   * Decode time: 240ms on 2.4Ghz Xeon
 * TODO: Epic TappyChicken

TODO:
 * Decode while downloading by having pack-asmjs split into separately-XHRable files.
 * Perform generic compression on top of the .wasm file (e.g., lzham gives a further 30% boost).
