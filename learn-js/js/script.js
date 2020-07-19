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