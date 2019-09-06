//a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b
var all = boys.concat(girls);
console.log(all);

//c
var commas = all.join(", "); // [all.join()];  samme kode
var hyphen = all.join("-");
console.log(commas);
console.log(hyphen);

//d + e
all.unshift("Hans", "Kurt");
console.log(all);
all.push("Lone", "gitte");
console.log(all);

//f
all.shift();
console.log(all);
    
//g
all.pop();
console.log(all);

//h
all.splice(3,2);
console.log(all);

//i
all.reverse();
console.log(all);

//j
all.sort();
console.log(all);

//k
var sortIgnoreCase = all.sort(function(a,b){
  
  a = a.toLowerCase();
  b = b.toLowerCase();
  if(a == b) return 0;
  return a < b ? -1 : 1;
});

sortIgnoreCase;
console.log(all);

//l
var uppers = all.map(function(x) { return x.toUpperCase(); });
console.log(uppers);

//m
function isLl(value) {
  return value.charAt(0) === "l" || value.charAt(0) === "L";
}
var m = all.filter(isLl);
console.log(m);