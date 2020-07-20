var x="I'm in global";
console.log(x);
/*var a=function(){
	var x="I'm in a ";
	console.log(x);
	b();
}

function b(){
	console.log(x);
 }
a();
var x=4,y=5;
if(x==y)
	console.log("equal");*/
/*
var company=new Object();
company.name="facebook";
console.log(company.name);
company.ceo=new Object();
company.ceo.firstname="mark";
company["stock of the fb"]=100;
console.log(company["stock of the fb"]);
console.log(company.ceo.firstname);
var quote="Our Motto";
company[quote]="we make people feel close to each other";
console.log(company[quote]);
var facebook={
	name: "facebook",
	ceo: {
		firstname: "Mark",
		favcolor: "Blue"
	},
	"stock price": 110
};
console.log(facebook);
function makemultiplier(multiplier)
{
	var myfunc= function(x){
		return multiplier*x;
	};
	return myfunc;
}
var result= makemultiplier(3);
console.log(result(10));
var doubleme=makemultiplier(2);
console.log(doubleme(100));*/
//function constructors
function Circle(radius){
	this.radius=radius;
}
Circle.prototype.Getarea = function() {
	return Math.PI * Math.pow(this.radius,2);
};
var mycircle=new Circle(10);
console.log(mycircle.Getarea());

