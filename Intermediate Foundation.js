
//1
function sigma(num) {
var sum = 0;
for (var i = 0; i <= num; i++) {
sum += i;
}
console.log(sum);
return sum;
}
sigma(5);
sigma(3);

function reverseSigma(num) {
var sum = 0;
for (var i = 0; i < num; i++) {
sum += num – i;
}
console.log(sum);
return sum;
}
sigma(5);
sigma(3);


//2
function factorial(num) {
var sum = 1;
for (var i = 1; i <= num; i++) {
sum *= i;
}
console.log(sum);
return sum;
}
factorial(3);
factorial(4);

//4
var element = fragment_arr.slice(-2)[0];
alert(element);


//5
var x = [6,7,8,9,10,11];
var val = x[x.length - 1];



//6
x[12,145,177,285,349,658];
var secondMax = function (x){ 
    var max = Math.max.apply(null, x), 
        maxi = x.indexOf(max);
    x[maxi] = -Infinity; 
    var secondMax = Math.max.apply(null, x);
    x[maxi] = max;
    return secondMax;
}; // This is something I found online to do? Not sure if this is correct?







//7
 function doubleconvert(x){
 var dub=[];
 for(let i=0;i<=x.length-1;i++){
 dub.push(x[i]);
 dub.push(x[i]);
 }
 return dub;
 }

 doubleconvert([4, "Ulysses", 42, false])






 int n1=0,n2=1,n3,i,count=10;    
 System.out.print(n1+" "+n2);    
    
 for(i=2;i<count;++i)
 {    
  n3=n1+n2;    
  System.out.print(" "+n3);    
  n1=n2;    
  n2=n3;    
 }    
  








//fib

function Fib(1)
{
	if( n=0 or n==1)
		return n;
	return Fib(n-2)+ Fib (n-1)
}
Fib (2)
}




