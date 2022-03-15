function odliczanie()
{
	var dzis = new Date();
	var dzien = dzis.getDate();
	if(dzien < 10) dzien = "0" + dzien;
	var miesiac = dzis.getMonth() + 1;
	if(miesiac < 10) miesiac = "0" + miesiac;
	var rok = dzis.getFullYear();
	var godzina = dzis.getHours();
	if(godzina < 10) godzina = "0" + godzina;
	var minuta = dzis.getMinutes();
	if(minuta < 10) minuta = "0" + minuta;
	var sekunda = dzis.getSeconds();
	if(sekunda < 10) sekunda = "0" + sekunda;
			
	document.getElementById("zegar").innerHTML = dzien + "/" + miesiac + "/" + rok + " | " + godzina + ":" + minuta + ":" + sekunda;
			
	setTimeout("odliczanie()", 1000);
}	