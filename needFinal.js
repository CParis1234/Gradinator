function updateWeight() {
	
	if (document.getElementById("MSE2001").selected == true) {	
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
	        	myClass = JSON.parse(this.responseText);
				document.getElementById("Test_W").value = 60;
				document.getElementById("Home_W").value = 0;
				document.getElementById("Quiz_W").value = 15;
				document.getElementById("Part_W").value = 0;
				document.getElementById("Final_W").value = 25;
			}
		};
		xmlhttp.open("GET", "http://cs1371.gatech.edu/getClassInfo/?class=CS1371", true);
		xmlhttp.send();
	} else if (document.getElementById("ME3322").selected == true) {	
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
	        	myClass = JSON.parse(this.responseText);
				document.getElementById("Test_W").value = 50;
				document.getElementById("Home_W").value = 10;
				document.getElementById("Quiz_W").value = 0;
				document.getElementById("Part_W").value = 0;
				document.getElementById("Final_W").value = 40;
			}
		};
		xmlhttp.open("GET", "http://cs1371.gatech.edu/getClassInfo/?class=CS1371", true);
		xmlhttp.send();
	} else if (document.getElementById("ISYE3025").selected == true) {	
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
	        	myClass = JSON.parse(this.responseText);
				document.getElementById("Test_W").value = 15;
				document.getElementById("Home_W").value = 25;
				document.getElementById("Quiz_W").value = 25;
				document.getElementById("Part_W").value = 0;
				document.getElementById("Final_W").value = 35;
			}
		};
		xmlhttp.open("GET", "http://cs1371.gatech.edu/getClassInfo/?class=CS1371", true);
		xmlhttp.send();
	} else if (document.getElementById("ECE3741").selected == true) {	
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
	        	myClass = JSON.parse(this.responseText);
				document.getElementById("Test_W").value = 0;
				document.getElementById("Home_W").value = 0;
				document.getElementById("Quiz_W").value = 35;
				document.getElementById("Part_W").value = 35;
				document.getElementById("Final_W").value = 30;
			}
		};
		xmlhttp.open("GET", "http://cs1371.gatech.edu/getClassInfo/?class=CS1371", true);
		xmlhttp.send();
	} else if (document.getElementById("SPAN2001").selected == true) {	
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
	        	myClass = JSON.parse(this.responseText);
				document.getElementById("Test_W").value = 60;
				document.getElementById("Home_W").value = 25;
				document.getElementById("Quiz_W").value = 0;
				document.getElementById("Part_W").value = 15;
				document.getElementById("Final_W").value = 0;
			}
		};
		xmlhttp.open("GET", "http://cs1371.gatech.edu/getClassInfo/?class=CS1371", true);
		xmlhttp.send();
	} else if (document.getElementById("PSYC2270").selected == true) {	
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
	        	myClass = JSON.parse(this.responseText);
				document.getElementById("Test_W").value = 25;
				document.getElementById("Home_W").value = 30;
				document.getElementById("Quiz_W").value = 0;
				document.getElementById("Part_W").value = 20;
				document.getElementById("Final_W").value = 25;
			}
		};
		xmlhttp.open("GET", "http://cs1371.gatech.edu/getClassInfo/?class=CS1371", true);
		xmlhttp.send();
	}
}

function needFinal() {	
	
    var ts = document.getElementById("Test_S").value;
    var hs = document.getElementById("Home_S").value;
    var qs = document.getElementById("Quiz_S").value;
    var ps = document.getElementById("Part_S").value;
    var ec = document.getElementById("EC_S").value;
	
    var tw = document.getElementById("Test_W").value;
    var hw = document.getElementById("Home_W").value;
    var qw = document.getElementById("Quiz_W").value;
    var pw = document.getElementById("Part_W").value;
    var fw = document.getElementById("Final_W").value;
	
	var goal = document.getElementById("Goal").value;
	
	// Weights greater than 100
	if ((+tw)+(+hw)+(+qw)+(+pw)+(+fw) > 100) {
		
		window.alert("Error:  Weights exceed 100%.  Please enter weights as numbers between 0 and 100 and try again.");
	
	//Weights less than 100
	} else if ((+tw)+(+hw)+(+qw)+(+pw)+(+fw) < 100) {
		
		window.alert("Error:  Weights need to add up to 100%.  Please enter weights as numbers between 0 and 100 and try again.")	
	
	// Output grade you need	
	} else {	
		
		needed = (goal - (ts*tw/100 + hs*hw/100 + qs*qw/100 + ps*pw/100))/fw*100 - ec;
		needed = Math.round(needed * 100) / 100;
		document.getElementById("Grade").innerHTML = "You need a "+needed+" to get a "+goal+".";
	
	}
	
	event.preventDefault();
	document.getElementById("tips").style.display = "block";
	
	if (needed >= 90) {
		g = "A";
	} else if (needed >= 80 && needed < 90) {
		g = "B";
	} else if (needed >= 70 && needed < 80) {
		g = "C";
	} else if (needed >= 60 && needed < 70) {
		g = "D";
	}else {
		g = "F";
	}
	document.getElementById(g).style.display = "block";
	
}
