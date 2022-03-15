function wypisz_calkowite()
{
	var liczba_1 = document.getElementById("pole_1").value;
	var liczba_2 = document.getElementById("pole_2").value;
	var napis = "";
	
	if(liczba_1 < liczba_2){
		for(i = liczba_1; i <= liczba_2; i++)
		{
			napis = napis + i + " ";
		}
	}
	else {
		for(i = liczba_1; i >= liczba_2; i--)
		{
			napis = napis + i + " ";
		}
	}
	
	document.getElementById("wynik_calk").innerHTML = napis;
}