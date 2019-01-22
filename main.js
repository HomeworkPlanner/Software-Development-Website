//One day (24 hours) is 86 400 000 milliseconds.
var y = false;
var val;
var doesDataExist = false;
var isLogin;
var z;
//Time vars
function addData() {
	var listData = document.data.box.value;
	var list =listData;
	document.getElementById('list').innerHTML += list;
}
function NavBarAnimation() {
	document.getElementById('signOut').style.transition = 'color 1s';
	document.getElementById('signOut').style.color = 'orange';
	document.getElementById('signUp').style.transition = 'color 1s';
	document.getElementById('signUp').style.color = 'orange';
	document.getElementById('or').style.transition = 'color 1s';
	document.getElementById('or').style.color = 'orange';
	document.getElementById('logIn').style.transition = 'color 1s';
	document.getElementById('logIn').style.color = 'orange';
	document.getElementById('header').style.transition = 'background-color 1s';
	document.getElementById('header').style.backgroundColor = 'white';
	document.getElementById('title').style.transition = 'color 1s';
	document.getElementById('title').style.color = 'orange';
}
function resetMove() {
	document.getElementById('signOut').style.transition = 'color .6s';
	document.getElementById('signOut').style.color = 'white';
	document.getElementById('signUp').style.transition = 'color 0.6s';
	document.getElementById('signUp').style.color = 'white';
	document.getElementById('or').style.transition = 'color 1s';
	document.getElementById('or').style.color = 'white';
	document.getElementById('logIn').style.transition = 'color 1s';
	document.getElementById('logIn').style.color = 'white';
	document.getElementById('header').style.transition = 'background-color .6s';
	document.getElementById('header').style.backgroundColor = 'orange';
	document.getElementById('title').style.transition = 'color .6s';
	document.getElementById('title').style.color = 'white';
}
function recordDate() {
	/*var dd = currentDate.getDate();
	var mm = currentDate.getMonth()+1; //January is 0!
	var yyyy = currentDate.getFullYear();
	currentDate = yyyy + '-' + mm + '-' + dd;*/
	var counter = 2;
	for(var i=0; i<localStorage.length; i++) {
		if (localStorage.key(i).startsWith("A") == true) {
			counter++;
		}
	}
	//1526747391022
	//1526733000000
	var number = counter/4;
	localStorage.setItem("Assignment Date " + number, document.getElementById('date1').valueAsNumber);
	localStorage.setItem("Assignment Time " + number, document.getElementById('time1').valueAsNumber);
	localStorage.setItem("Assignment Date Letters " + number, document.getElementById('date1'));
	localStorage.setItem("Assignment Time Letters " + number, document.getElementById('time1'));
	localStorage.setItem("NoOfAssignment", number);
	var date = parseInt(localStorage.getItem("Assignment Date " + number));
	var time = parseInt(localStorage.getItem("Assignment Time " + number));
	//var currentDate = new Date();
	var d = new Date();
	var currentDate = d.getTime();
	var dueDate = (date + time + 14400000); 
	var dueDateBefore = (date + time + 14400000 + (-86400000));
	//var dueTime = new Date(time);
	/*document.getElementById('date1').value.toString()*///localStorage.getItem("Assignment Date "+ counter-1)); //document.getElementById('time1').value);
	if (currentDate < dueDate) {
		if (dueDateBefore <= currentDate) {
			document.getElementById('colorCirc').style.backgroundColor = "#ffff00";
		}
		else {
			document.getElementById('colorCirc').style.backgroundColor = "green";
		}
	}
	else if (currentDate > dueDate && (dueDate != "Mon Jan 01 1900 00:00:00 GMT-0500 (Eastern Standard Time)" || dueDate == null)) {
		document.getElementById('colorCirc').style.backgroundColor = "red";
	}
	else {
		document.getElementById('colorCirc').style.backgroundColor = "#ffdf80";
	}
	//console.log("Assignment " + number + " " + dueDate);
	//console.log(currentDate);
	//console.log(localStorage.getItem("Assignment Date " + number));
	//console.log(currentDate);
	//console.log("currentDate " + currentDate);
	//console.log("dueDate " + dueDate);
	//console.log("Assignment Time " + number + dueTime);
	//console.log(localStorage.getItem("Assignment Time " + number));
	//console.log(localStorage.getItem("Assignment Date " + number));
}
function checkDate() {
	
	var counter = 2;
	for(var i=0; i<localStorage.length; i++) {
		if (localStorage.key(i).startsWith("A") == true) {
			counter++;
		}
	}
	var number = counter/4;
	var newNumber = number + (-1);
	var date = parseInt(localStorage.getItem("Assignment Date " + newNumber));
	var time = parseInt(localStorage.getItem("Assignment Time " + newNumber));
	//var currentDate = new Date();
	var d = new Date();
	var currentDate = d.getTime();
	var dueDate = (date + time + 14400000); 
	var dueDateBefore = (date + time + 14400000 + (-86400000));
	//var dueTime = new Date(time);
	/*document.getElementById('date1').value.toString()*///localStorage.getItem("Assignment Date "+ counter-1)); //document.getElementById('time1').value);
	if (currentDate < dueDate) {
		if (dueDateBefore <= currentDate) {
			document.getElementById('colorCirc').style.backgroundColor = "#ffff00";
		}
		else {
			document.getElementById('colorCirc').style.backgroundColor = "green";
		}
	}
	else if (currentDate > dueDate && (dueDate != "Mon Jan 01 1900 00:00:00 GMT-0500 (Eastern Standard Time)" || dueDate == null)) {
		document.getElementById('colorCirc').style.backgroundColor = "red";
	}
	else {
		document.getElementById('colorCirc').style.backgroundColor = "#ffdf80";
	}
	//console.log("currentDate " + currentDate);
	//console.log("dueDate " + dueDate);
}
function resetValue() {
	var counter = 2;
	for(var i=0; i<localStorage.length; i++) {
		if (localStorage.key(i).startsWith("A") == true) {
			counter++;
		}
	}
	var number = counter/4;
	var newNumber = number + (-1);
	document.getElementById('date1').valueAsNumber.innerHTML = localStorage.getItem("Assignment Date Letters" + newNumber);
	document.getElementById('time1').valueAsNumber.innerHTML = localStorage.getItem("Assignment Time Letters" + newNumber);
}
function predict() {
	var d = localStorage.getItem("numberOfGraphInputs ");
	var timeNeeded = 0;
	var predictionVal = 0;
	if (d => 10) {
		for(var i=1; i<d; i++) {
			predictionVal += parseInt(localStorage.getItem("Day " + i));
		}
		var s = localStorage.getItem("Subject1")
		document.getElementById('prediction').innerHTML = 'You should take about ' + Math.round((predictionVal/d)+1) + ' minutes for ' + s + ' homework.';
	}
}
function resetWebsite() {
	//localStorage.setItem("isLogin", false);
	// Signed out
	//document.getElementById("loggedInAlert").style.display = "none";
	//myTimer();
	var myVar = setInterval(checkDate, 1000);
	checkDate();
	if (localStorage.getItem("doesDataExist") == true) {
		localStorage.setItem("isLogin", true);
		document.getElementById("genInfo").style.display = "none";
		document.getElementById("warning").style.display = "none";
	}
	else if(localStorage.getItem("doesDataExist") == false) {
		localStorage.setItem("isLogin", false);
		localStorage.setItem("doesDataExist", false);
		document.getElementById('s1').innerHTML = " ";
		document.getElementById('s2').innerHTML = " ";
		document.getElementById('s3').innerHTML = " ";
		document.getElementById('s4').innerHTML = " ";
		document.getElementById("genInfo").style.display = "block";
		document.getElementById("warning").style.display = "none";
		document.getElementById('Username').value = "";
		document.getElementById('Password').value = "";
		document.getElementById('Email').value = "";
		document.getElementById('Grade').value = "";
		document.getElementById('subject1').value = "";
		document.getElementById('subject2').value = "";
		document.getElementById('subject3').value = "";
		document.getElementById('subject4').value = "";
	}
	if(localStorage.getItem("isLogin") == "true") {
		if(localStorage.getItem("Subject1") != null) {
			document.getElementById('s1').innerHTML += localStorage.getItem("Subject1");
			//doesDataExist = true;
			//localStorage.setItem("doesDataExist", true);
		}
		if(localStorage.getItem("Subject2") != null) {
			document.getElementById('s2').innerHTML += localStorage.getItem("Subject2");
			//doesDataExist = true;
			//localStorage.setItem("doesDataExist", true);
		}
		if(localStorage.getItem("Subject3") != null) {
			document.getElementById('s3').innerHTML += localStorage.getItem("Subject3");
			//doesDataExist = true;
			//localStorage.setItem("doesDataExist", true);
		}
		if(localStorage.getItem("Subject4") != null) {
			document.getElementById('s4').innerHTML += localStorage.getItem("Subject4");
			//doesDataExist = true;
			//localStorage.setItem("doesDataExist", true);
		}
	}
	else {
		document.getElementById('s1').innerHTML = " ";
		document.getElementById('s2').innerHTML = " ";
		document.getElementById('s3').innerHTML = " ";
		document.getElementById('s4').innerHTML = " ";
	}
	
}

function resetWebsite2() {
	
	if(localStorage.getItem("Subject1") != null) {
		document.getElementById('s1').innerHTML += localStorage.getItem("Subject1");
		//doesDataExist = true;
		//localStorage.setItem("doesDataExist", true);
	}
	if(localStorage.getItem("Subject2") != null) {
		document.getElementById('s2').innerHTML += localStorage.getItem("Subject2");
		//doesDataExist = true;
		//localStorage.setItem("doesDataExist", true);
	}
	if(localStorage.getItem("Subject3") != null) {
		document.getElementById('s3').innerHTML += localStorage.getItem("Subject3");
		//doesDataExist = true;
		//localStorage.setItem("doesDataExist", true);
	}
	if(localStorage.getItem("Subject4") != null) {
		document.getElementById('s4').innerHTML += localStorage.getItem("Subject4");
		//doesDataExist = true;
		//localStorage.setItem("doesDataExist", true);
	}
	// Signed out
	if (localStorage.getItem("doesDataExist") == true) {
		localStorage.setItem("isLogin", true);
		document.getElementById("genInfo").style.display = "none";
		document.getElementById("warning").style.display = "none";
	}
	else if(localStorage.getItem("doesDataExist") == false) {
		localStorage.setItem("isLogin", false);
		localStorage.setItem("doesDataExist", false);
		document.getElementById('s1').innerHTML = " ";
		document.getElementById('s2').innerHTML = " ";
		document.getElementById('s3').innerHTML = " ";
		document.getElementById('s4').innerHTML = " ";
		document.getElementById("genInfo").style.display = "block";
		document.getElementById("warning").style.display = "none";
		document.getElementById('Username').value = "";
		document.getElementById('Password').value = "";
		document.getElementById('Email').value = "";
		document.getElementById('Grade').value = "";
		document.getElementById('subject1').value = "";
		document.getElementById('subject2').value = "";
		document.getElementById('subject3').value = "";
		document.getElementById('subject4').value = "";
	}
}

function addGenInfo() {
	localStorage.setItem("isLogin", true);
	localStorage.setItem("doesDataExist", true);
	var x = document.getElementById("genInfo");
    //x.style.display = "none";
	var a = document.getElementById('subject1').value;
	var b = document.getElementById('subject2').value;
	var c = document.getElementById('subject3').value;
	var d = document.getElementById('subject4').value;
	var e = document.getElementById('Username').value;
	var f = document.getElementById('Password').value;
	var g = document.getElementById('Email').value;
	var h = document.getElementById('Grade').value;
	if ((a.length > 0) && (b.length > 0) && (c.length > 0) && (d.length > 0) && (e.length > 0) && (f.length > 0) && (g.length > 0) && (h.length > 0)) {
		x.style.display = "none";
		y = true;
		localStorage.setItem("doesDataExist", true);
		if (typeof(Storage) !== "undefined") {
			// Store
			localStorage.setItem("Subject1", a);
			localStorage.setItem("Subject2", b);
			localStorage.setItem("Subject3", c);
			localStorage.setItem("Subject4", d);
			localStorage.setItem("Username", e);
			localStorage.setItem("Password", f);
			localStorage.setItem("Email", g);
			localStorage.setItem("Grade", h);
			// Retrieve
			document.getElementById('s1').innerHTML = localStorage.getItem("Subject1");
			document.getElementById('s2').innerHTML = localStorage.getItem("Subject2");
			document.getElementById('s3').innerHTML = localStorage.getItem("Subject3");
			document.getElementById('s4').innerHTML = localStorage.getItem("Subject4");
		} 
		else {
			document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
	}
	else {
		document.getElementById("warning").style.display = "block";
	}
}
function hideGenInfo() {
	document.getElementById("genInfo").style.display = "none";
	document.getElementById("warning").style.display = "none";
}
function signUp() {
	if(localStorage.getItem("isLogin") == "true") {
		alert("You are already logged in");
	}
	else {
		document.getElementById("genInfo").style.display = "block";
		document.getElementById("warning").style.display = "none";
	}
}




/*var a = i-9;
var b = i-8;
var c = i-7;
var d = i-6;
var e = i-5;
var f = i-4;
var g = i-3;
var h = i-2;
var k = i-1;
var j = i-0;*/
var lineChart;
var i = 1;
var n;
function Subject1(){
	//if (doesDataExist == false) {
		//document.getElementById("S1Page").style.display = "none";      //S1 Page
		//document.getElementById("genInfo").style.display = "block";    //sign up if needed
		//document.getElementById("warning").style.display = "none";
		//document.getElementById('s1').style.display = "none";         //s1
		//document.getElementById('s2').style.display = "none";         //s2
		//document.getElementById('s3').style.display = "none";         //s3
		//document.getElementById('s4').style.display = "none";         //s4
		//localStorage.setItem("doesDataExist", false);
		//window.location = "file:///C:/Users/Joyce/Desktop/capstone.html";
	//}
	document.getElementById('title2').innerHTML += localStorage.getItem("Subject1");
	/*var popCanvas = document.getElementById("popChart");
	var lineChart = new Chart(popCanvas, {
	type: 'line',
	data: {
		labels: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7", "Day8", "Day9", "Day10"],
		datasets: [{
		label: 'homework time',
		data: [],
		backgroundColor: [
			'#3e95cd'
		]
		}]
	}
	});*/
	/*if (a<1)
	{
		a = 1;
		b = 2;
		c = 3;
		d = 4;
		e = 5;
		f = 6;
		g = 7;
		h = 8;
		k = 9;
		j = 10;
	}*/
	var ctx = document.getElementById('myChart');
	lineChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [/*"Day "+ a, "Day "+b, "Day "+c, "Day "+d, "Day "+e, "Day "+f, "Day "+g, "Day "+h, "Day "+k, "Day "+j*/],
        datasets: [{
            label: "homework time",
            backgroundColor: 'red',      //DeepSkyBlue
            borderColor: 'red',     // DeepSkyBlue
			lineTension: 0.2,
			fill: false,
            data: [/*localStorage.getItem("Day" + a), localStorage.getItem("Day" + b), localStorage.getItem("Day" + c), localStorage.getItem("Day" + d), localStorage.getItem("Day" + e), localStorage.getItem("Day" + f), localStorage.getItem("Day" + g), localStorage.getItem("Day" + h), localStorage.getItem("Day" + k), localStorage.getItem("Day" + j)*/],
        }]
    },

    // Configuration options go here
    options: {
		title: {
			display: true,
			text: "Amount of time taken for " +  localStorage.getItem("Subject1")
		}
		
	}
	});
	//localStorage.setItem("numberOfInputs", i)
		/*if (lineChart.data.datasets[0].data[0] != null) {
		n = 1;
		if (lineChart.data.datasets[0].data[1] != null) {
			n = 2;
			if (lineChart.data.datasets[0].data[2] != null) {
				n = 3;
				if (lineChart.data.datasets[0].data[3] != null) {
					n = 4;
					if (lineChart.data.datasets[0].data[4] != null) {
						n = 5;
						if (lineChart.data.datasets[0].data[5] != null) {
							n = 6;
							if (lineChart.data.datasets[0].data[6] != null) {
								n = 7;
								if (lineChart.data.datasets[0].data[7] != null) {
									n = 8;
									if (lineChart.data.datasets[0].data[8] != null) {
										n = 9;
										if (lineChart.data.datasets[0].data[9] != null) {
											n = 10;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}*/
}
function addData() {
	var counter = 0;
	for(var i=0; i<localStorage.length; i++) {
		if (localStorage.key(i).startsWith("D") == true) {
			counter++;
		}
	}
	localStorage.setItem("numberOfGraphInputs ", counter+1);
	var n = counter;                                          //change if amount of local storage vars change
	val = document.getElementById('time').value;
	if (val == null || val == NaN) {
		val = 0;
	}
    lineChart.data.datasets[0].data[n] = val;
	lineChart.data.labels[n] = 'Day ' + (n+1);
	lineChart.update();
	localStorage.setItem("Day " + (n+1), val);
	n++;
	/*if (typeof(Storage) !== "undefined") {
		localStorage.setItem("numberOfInputs", i);
	}*/	
	predict();
}
function setDataAfterReload() {
	//val = document.getElementById('time').value;
	var q = 0;
	var counter = 0;
	for(var i=0; i<localStorage.length; i++) {
		if (localStorage.key(i).startsWith("D") == true) {
			counter++;
		}
	}
	while(q < counter ) {
		//localStorage.getItem("Day" + q);
		lineChart.data.datasets[0].data[q] = localStorage.getItem("Day " + (q+1));
		//lineChart.data.datasets[0].data[n+1] = localStorage.getItem("Day2");
		lineChart.data.labels[q] = 'Day ' + (q+1);
		lineChart.update();
		//localStorage.setItem("Day" + i, val);
		q++;
	}
	/*if (typeof(Storage) !== "undefined") {
		localStorage.setItem("numberOfInputs", i);
	}*/
	predict();
}
function signOut() {
	isLogin = false;
	//window.location = "file:///C:/Users/Joyce/Desktop/capstoneS1.html";
	localStorage.setItem("doesDataExist", false);
	localStorage.setItem("isLogin", false);
	document.getElementById('s1').innerHTML = " ";
	document.getElementById('s2').innerHTML = " ";
	document.getElementById('s3').innerHTML = " ";
	document.getElementById('s4').innerHTML = " ";
	document.getElementById("genInfo").style.display = "block";
	document.getElementById("warning").style.display = "none";
	document.getElementById('Username').value = "";
	document.getElementById('Password').value = "";
	document.getElementById('Email').value = "";
	document.getElementById('Grade').value = "";
	document.getElementById('subject1').value = "";
	document.getElementById('subject2').value = "";
	document.getElementById('subject3').value = "";
	document.getElementById('subject4').value = "";
	
}
function gotoS1() {
	if (localStorage.getItem("doesDataExist") == 'true') {
		window.location = "file:///C:/Users/Joyce/Desktop/capstoneS1.html";
	}
}
function logIn() {
	resetWebsite2();
	if (document.getElementById("Username2").value == localStorage.getItem("Username") && document.getElementById("Password2").value == localStorage.getItem("Password")) {
		localStorage.setItem("doesDataExist", true);
		localStorage.setItem("isLogin", true);
		document.getElementById('s1').innerHTML = localStorage.getItem("Subject1");
		document.getElementById('s2').innerHTML = localStorage.getItem("Subject2");
		document.getElementById('s3').innerHTML = localStorage.getItem("Subject3");
		document.getElementById('s4').innerHTML = localStorage.getItem("Subject4");
		//document.getElementById("genInfo").style.display = "block";
		//document.getElementById("warning").style.display = "none";
	}
	document.getElementById("Username2").value = "";
	document.getElementById("Password2").value = "";
}
//#ffdf80
