function asmModule($a,$b,$c){'use asm';
var a=new $a.Int8Array($c);
var b=new $a.Uint8Array($c);
var c=new $a.Int16Array($c);
var d=new $a.Uint16Array($c);
var e=new $a.Int32Array($c);
var f=new $a.Uint32Array($c);
var g=new $a.Float32Array($c);
var h=new $a.Float64Array($c);
var i=$a.Math.imul;
var j=$a.Math.fround;
var $d=$a.Math.acos;
var $e=$a.Math.asin;
var $f=$a.Math.atan;
var $g=$a.Math.cos;
var $h=$a.Math.sin;
var $i=$a.Math.tan;
var $j=$a.Math.exp;
var $k=$a.Math.log;
var $l=$a.Math.ceil;
var $m=$a.Math.floor;
var $n=$a.Math.sqrt;
var $o=$a.Math.abs;
var $p=$a.Math.min;
var $q=$a.Math.max;
var $r=$a.Math.atan2;
var $s=$a.Math.pow;
var $t=$a.Math.clz32;
var $u=$b.one;
var $v=$b.two;
var $w=$b.three;
function $x(){
}
function $y(k){
k=k|0;
return 1.;
}
function $z(k,l){
k=k|0;l=+l;
$F[k&3]();
l=(+$G[k&0](k),l+ +$G[k&0](k),l-+$G[k&0](k));
k=($H[k&1](k,l)|0,k+($H[k&1](k,l)|0)|0);
$F[k+1&3]();
$F[(k|1)&3]();
$F[($H[k&1](k,l)|0)&3]();
$F[a[k>>0]&3]();
return 1;
}
function $A(){
}
function $B(k,l){
k=k|0;l=+l;
return 2;
}
function $C(){
return 1.;
}
function $D(k){
k=j(k);
j($I[0&3](k));
return j(1.1);
}
function $E(k){
k=j(k);
return j(2);
}
var $F=[$x,$A,$x,$x];
var $G=[$y];
var $H=[$z,$B];
var $I=[$D,$E,$D,$E];
return $x;
}
