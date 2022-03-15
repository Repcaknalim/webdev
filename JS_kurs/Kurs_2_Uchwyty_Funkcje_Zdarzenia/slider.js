var numer = Math.floor(Math.random() * 5) + 1;

var timer_1 = 0;
var timer_2 = 0;

function ustaw_slajd(numer_slajdu)
{
	clearTimeout(timer_1);
	clearTimeout(timer_2);
	 numer = numer_slajdu - 1;
	
	schowaj();
	setTimeout("zmien_slajd()",500)
}

function schowaj()
{
	$("#slider").fadeOut(500);
}

function zmien_slajd()
{
	numer++;
	if(numer > 5) numer = 1;
	
	var plik = "<img src = \"slajdy/slajd" + numer + ".png\"/>";
	
	document.getElementById("slider").innerHTML = plik;
	$("#slider").fadeIn(500);
	
	timer_1 = setTimeout("zmien_slajd()", 5000);
	timer_2 = setTimeout("schowaj()", 4500);
}