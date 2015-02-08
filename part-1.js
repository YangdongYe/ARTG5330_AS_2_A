//Assignment 2-A Part 1
//Due Feb 12
//This short exercise will help you gain additional proficiency working with JavaScript objects


//Information about cities can be easily represented as JavaScript objects
var city1 = {
	name:"Boston",
	pop:657000,
	"year founded":1630
};
var city2 = {
	name:"Cambridge",
	pop:120000,
	"year founded":1631
};

//TODO: write a function that takes two city objects as parameter
//and returns the name of city that has a larger population
function whichCityIsLarger(a,b){
	//hint: since a and b are objects, you can access their "pop" property using a.pop
	//compare populations, and return the "name" property of the appropriate city
	//console.log( a,b );
	if (a.pop > b.pop) {
		return "The larger city is "+a.name;
	} else if (a.pop < b.pop) {
		return "The larger city is "+b.name;
	} else {
		return "They are the same";
	}
}

console.log( whichCityIsLarger(city1,city2) );


//TODO: write a function that returns the name of the city that is older
function whichCityIsOlder(a,b){
	//hint: more or less the same as above, but notice something weird about the property name "year founded"?
	//Can you still use the dot notation? If not, what should you do?
	var sa = JSON.stringify(a);
	var sb = JSON.stringify(b);
	if (YearFounded(sa) < YearFounded(sb)) {
		return "The older city is "+a.name;
	} else if (YearFounded(sa) > YearFounded(sb)) {
		return "The older city is "+b.name;
	} else {
		return "They are the same";
	}
}

var StringStart = 0;
var StringEnd = 0;

function YearFounded(s){
	var CharStart = s.indexOf("year founded");
	for (i = CharStart; i<s.length; i++){
		if (s[i]==":") {
			StringStart = i+1;
		}
		if (s[i]=="}") {
			StringEnd = i;
		};
	};
	return s.slice(StringStart,StringEnd);
}
console.log( whichCityIsOlder(city1,city2) );