let num = 4936;
last = num % 10;
tens = (num % 100 - last) / 10;
hunds = (num % 1000 - tens * 10 - last) / 100;
thous = (num - hunds * 100 - tens * 10 - last) / 1000;

console.log('ones digit is ' + last);
console.log('tens digit is ' + tens);
console.log('hunds digit is ' + hunds);
console.log('thousands digit is ' +thous);
