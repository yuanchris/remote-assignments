function calculate(args){
	let result;
	if(args.op==="+"){
		result=args.n1+args.n2;
	}else if(args.op==="-"){
		result=args.n1-args.n2;
	}else{
		result="Not supported";
	}
	return result;
}

console.log("First way: " + calculate({n1: 3, n2: 4, op: '+' }));

let cal = [];
cal.n1 = 3;
cal.n2 = 4;
cal.op = '+';
console.log("Second way: " + calculate(cal));