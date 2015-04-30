function mymodule(stdlib, foreign, heap) {
 "use asm";
 var H32 = new stdlib.Int32Array(heap);
 var HU32 = new stdlib.Uint32Array(heap);
 var log = foreign.consoleDotLog;
 var g_i = 0;
 var g_f = 0;
 function f(x, y) {
  x = x | 0;
  y = +y;
  log(x | 0);
  log(y);
  x = x + 3 | 0;
  return ((x + 1 | 0) >>> 0) / (x >>> 0) | 0;
 }
 
 function g() {
  g_f = +(g_i | 0);
  return;
 }
 
 function g2() {
  return;
 }
 
 function h(i, x) {
  i = i | 0;
  x = x | 0;
  H32[i >> 2] = x;
  ftable_2[x - 2 & 1]();
 }
 
 var ftable_1 = [f];
 var ftable_2 = [g, g2];
 return {
  "f_export": f, 
  "goop": g
 };
}

