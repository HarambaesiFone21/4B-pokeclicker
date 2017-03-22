// JavaScript Document

//These are the variables for the number of pokeballs and the pokemon.
var pokeballs = 0;
var greatballs = 0;
var ultraballs = 0;
var masterballs = 0;

var bulbasaur = 0;/*{
	
purchased:0
bonus:0.2
	
	}*/
var charmander = 0;/*{
	purchased:0
	bonus:3
	
	}*/
var Squirtle = 0;
var Pikachu = 0;
var Leafeon = 0;
var Ratatta= 0;
var Nidoran = 0;
var Drantini = 0;
var MewTwo = 0;
var Arceus = 0;

var Ivysaur = 0;
var Charmeleon =0;
var Wartortle = 0;
var Raticate = 0;
var Nidorino = 0;
var Dragonair = 0; 

window.onload=load_cookies;
//COOKIES
//This saves the cookies. 
function save_cookies() {
	//This creates a experation date 120 days from when the person enters the app.
	var d = new Date();
	d.setTime(d.getTime() + (120*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	
	document.cookie = "pokeballs=" + pokeballs + "; " + expires;
	document.cookie = "greatballs=" + greatballs + "; " + expires;
	document.cookie = "ultraballs=" + ultraballs + "; " + expires;
	document.cookie = "masterballs=" + masterballs + "; " + expires;

	
	document.cookie = "bulbasaur=" + bulbasaur + "; " + expires;
	document.cookie = "charmander=" + charmander + "; " + expires;
	document.cookie = "Squirtle=" + Squirtle + "; " + expires;
	document.cookie = "Pikachu=" + Pikachu + "; " + expires;
	document.cookie = "Leafeon =" + Leafeon  + "; " + expires;
	document.cookie = "Ratatta=" + Ratatta + "; " + expires;
	document.cookie = "Nidoran=" + Nidoran + "; " + expires;
	document.cookie = "Drantini=" + Drantini + "; " + expires;
	document.cookie = "MewTwo=" + MewTwo + "; " + expires;
	document.cookie = "Arceus=" + Arceus + "; " + expires;
}

function load_cookies() {
	// "Arceus=0; Drantini=0; Nidoran=0; Pikachu=0; Ratatta=0; Squirtle=0; bulbasaur=0; charmander=0; greatballs=0; pokeballs=15; ultraballs=0"
	// var myArray = [1,2,3, "text"];
	// alert(myArray[3]); -> "text"
	// myArray.length -> 4
	// split("; ");
	
	var str = document.cookie;
	var mainArray = str.split("; ");

	for( var i = 0; i < mainArray.length; i++) {
		
		var tempArray = mainArray[i].split("=");
		var key = tempArray[0];
		var value = tempArray[1];
		
		switch(key) {
			
			case "pokeballs":
				pokeballs = Number(value);
				break;
			case "greatballs":
				greatballs = Number(value);
				break;
			case "ultraballs":
				ultraballs = Number(value);
				break;
			case "masterballs":
				masterballs = Number(value);
				break;
			case "bulbasaur":
				bulbasaur = Number(value);
				break;
			case "charmander":
				charmander = Number(value);
				break;
			case "Squirtle":
				Squirtle = Number(value);
				break;
			case "Pikachu":
				Pikachu = Number(value);
				break;
			case "Leafeon":
				Leafeon = Number(value);
				break;
			case "Ratatta":
				Ratatta = Number(value);
				break;
			case "Nidoran":
				Nidoran = Number(value);
				break;
			case "Drantini":
				Drantini = Number(value);
				break;
			case "MewTwo":
				MewTwo = Number(value);
				break;
			case "Arceus":
				Arceus = Number(value);
				break;
			

			
			}
		
		
	}
	

}
//This function updates the button clicks and the bonus so that the pokeballs are added to the dispaly smoothly.
function update() {
	document.getElementById("numberofpokeballs").value = Math.round(10*pokeballs)/10;
}
 
 
//This function below which is the buttonclick makes it so that the pokeclicker works and is spamable.  It also hase a Math.round that makes it so it rounds the value of the pokeballs to the nearest tenth.
function buttonClick() {
	pokeballs++;
	greatballbonus();
	ultraballbonus();
	masterballbonus();
	update();
	save_cookies();
}


//This is the shop. This makes it so that when you click the button for the pokemon it starts the code in the corresponding case. It is also used to by other ball types like Greatball.
function shop(pokemon) {
	
	switch(pokemon) {
		
		case "bulbasaur":
			if(pokeballs>=10) {
				bulbasaur++;
				pokeballs-=10;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "charmander":
			if(pokeballs>=150) {
				charmander++;
				pokeballs-=150;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Squirtle":
			if(pokeballs>=2500) {
				Squirtle++;
				pokeballs-=2500;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Pikachu":
			if(pokeballs>=24200) {
				Pikachu++;
				pokeballs-=24200;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Leafeon":
			if(pokeballs>=45000) {
				Leafeon++;
				pokeballs-=45000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Ratatta":
			if(pokeballs>=75500) {
				Ratatta++;
				pokeballs-=75500;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Nidoran":
			if(pokeballs>=300000) {
				Nidoran++;
				pokeballs-=300000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Drantini":
			if(pokeballs>420000) {
				Drantini++;
				pokeballs-=420000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "MewTwo":
			if(pokeballs>4000000) {
				MewTwo++;
				pokeballs-=4000000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Arceus":
			if(pokeballs>=15000000) {
				Arceus++;
				pokeballs-=15000000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "Greatball":
			if(pokeballs>=500) {
				greatballs++;
				pokeballs-=500;
			}	
			else {
				alert("Please collect more pokeballs.");
			}
			break;
		case "Ultraball":
			if(pokeballs>=15000) {
				ultraballs++;
				pokeballs-=15000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;
		case "masterballs":
			if(pokeballs>=1500000) {
				masterballs++;
				pokeballs-=1500000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Ivysaur":
			if(pokeballs>=10000) {
				Ivysaur++;
				pokeballs-=10000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Charmeleon":
			if(pokeballs>=100000) {
				Charmeleon++;
				pokeballs-=100000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Wartortle":
			if(pokeballs>=600000) {
				Wartortle++;
				pokeballs-=600000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Raticate":
			if(pokeballs>=500000) {
				Raticate++;
				pokeballs-=500000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Nidorino":
			if(pokeballs>=1000000) {
				Nidorino++;
				pokeballs-=1000000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		case "Dragonair":
			if(pokeballs>=2500000) {
				Dragonair++;
				pokeballs-=2500000;
			}
			else {
				alert("Please collect more pokeballs.");
				}
			break;	
		default:
			alert("Please collect more pokeballs.");
			break;
				
			
	}
	update();
	save_cookies();
}


//EVOLUTIONS
//when a player buys an evoltion change value of Charmander by a percentage
// Pokemons wiht Evolutions Bulbasaur(Increase 1000%) Charmander (Increase 750%) Wartortle (500%) Raticate (Increase 200%) Nidorian (150%) Dratini (Increase 150%) Mewtwo (Still thinking :3)



//This is the setInterval that makes it so that the pokemon add pokeballs over time. It does this by activating the bonus function.
	setInterval(bonus,1000);

	
//This function is the bonus function that controlls how many pokeballs you get per second based on the number of pokemon you have.
function bonus() {
	
		/*switch(pokemon) {
			
			case "Ivysaur": 
				if(Ivysaur>=1) {
					
					var clickspersecondb = 0.2
					
					}*/
				
		pokeballs+= bulbasaur * 0.2;
	
		pokeballs+= charmander * 3;

		pokeballs+= Squirtle * 31;
		
		pokeballs+= Pikachu * 320;
		
		pokeballs+= Leafeon * 420;
		
		pokeballs+= Ratatta * 650;
		
		pokeballs+= Nidoran * 2200;
		
		pokeballs+= Drantini * 4000;
		
		pokeballs+= MewTwo * 47000;
		
		pokeballs+= Arceus * 250000;
		
		update();
		
		clickspersecond();
		save_cookies();
}
//This is the clicks per second function. This tells you how many clicks per second you get with your pokemon.
function clickspersecond() {
	
	document.getElementById("numberofclicks").value = Math.round( 10 *[(bulbasaur * 0.2) + (charmander * 3) + (Squirtle * 31) + (Pikachu * 320) + (Leafeon * 420) + ( Ratatta * 650) + (Nidoran * 2200) + (Drantini * 4000) + (MewTwo * 47000) + (Arceus * 250000)] )/10;
	
}

//OTHER TYPES OF POKEBALLS

//This function adds three to the number of poke balls you make when you click. For example when you click the pokeball you will only get 1 pokeball per click. With a single great ball though, it will bring your clicks on the pokeball to 4 per click becuase it adds 3.
function greatballbonus () {
	pokeballs+= greatballs*3;
	}
function ultraballbonus () {
	pokeballs+= ultraballs*100;
}
function masterballbonus () {
	pokeballs+= masterballs*5000;
}