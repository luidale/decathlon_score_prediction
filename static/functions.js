function deca_score() {
	var variable1 = highjump();
	var variable2 = run400m();
	if (variable1 != false & variable2 != false) { 
  //add test for variable type
		document.getElementById('alert').innerHTML =	 'Ennustatav tulemus on '
			+ Math.round(753.139 + 2.396 * variable2 + 4.582 * variable1) + "(+- 200) punkti.";
			}
	}
function highjump() {
	var result = document.getElementById('highjump').value;
	// Input check
	if (result >2.5) { // Result is too big
		document.getElementById('alert').innerHTML = "Ebareaalselt suur kõrgushüppe tulemus!";
		return false;
	} else if (isNaN(Number(result))) { // Result is text
		document.getElementById('alert').innerHTML = "Kõrgushüppe sisend on tekst, sisesta number!";
		return false;				
	}
	if (result > 0.75) {
		return jump(0.8465, 0.75, 1.42, result);
	} else {
		return 0;
	}
}
function run400m() {
	var result= document.getElementById('run400m').value;
	if (result.search("(k)") != -1) { //in case of handtime (k) is removed and time is recalculated
		result = Number(result.split("(k)")[0]) + 0.14;
	} else {
		result = Number(result);
	}
	// Input check
	if (result <40) { // Result is too small
		document.getElementById('alert').innerHTML = "Ebareaalselt väike 400m jooksu tulemus!";
		return false;
	} else if (isNaN(Number(result))) { // Result is text
		document.getElementById('alert').innerHTML = "400m jooksu sisend on tekst, sisesta number!";
		return false;				
	}
	if (result == 0 || result > 82) {
		return 0;
	} else {
		return run1(1.53775, 82, 1.81, result);
	}
}
function jump(a, b, c, resul) {
	return (a * (Math.pow((100 * (resul - b)), c)));
}
function run1(a,b,c,resul) {
	return (a * Math.pow((b - resul), c));
}