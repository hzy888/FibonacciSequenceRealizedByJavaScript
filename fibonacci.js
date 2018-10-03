/*
author : merlinhu 
*/
var feibonaqiArr = [];

function feibonaqi(a) {
	if (0 <= a) {
		var b = 0 == a || 1 == a ? 1 : feibonaqiArr[a - 2] && feibonaqiArr[a - 1] && feibonaqiArr[a] ? feibonaqiArr[a] : feibonaqi(a - 2) + feibonaqi(a - 1);
		feibonaqiArr[a] = b;
		return b ;
	}
}
console.time("a");
feibonaqi(20);
console.timeEnd("a");