Generiek structuur
css				bevat algemene css bestanden voor de gehele site
js				bevat generieke javascript (chai, mocha, jsdoc)
snake			bevat alle bestanden specifiek voor de werking van het snake spelletje

Snake structuur
css				bevat snake specifieke css
js				bevat snake specifieke javascript
out				bevat de documentatie gegenereed door jsdoc
test			bevat de test suite voor het snake spelletje			

Voor de verdeling van de functionaliteiten over de verschillende modules,
hebben we als uitgangspunt genomen om tot zo klein mogelijke autonome onderdelen te komen.
De beschrijving is in de volgorde zoals deze geladen worden in snake.html.

jquery.min.js			Library: bevat jquery functionaliteiten
jcanvas.min.js			Library: bevat generieke canvas functionaliteiten
canvas.js				Voor het defineren van canvas properties, o.a. gebaseerd op de waarden uit de html
element.js				Basaal object voor het aanmaken van voedsel en segment objecten.
food.js					Voor het opbouwen van de voedsel elementen
snake.js				Voor het defineren van het snake object plus snake methoden.
canvasutil.js			Voor het manipuleren van de snake en voedselelementen over het canvas
draw.js					Voor het tekenen van de snake en voedsel objecten op het canvas
spelstand.js			Voor het opslaan en laden via Ajax van een specifieke stand tijdens het spelen.
score.js				Voor het opslaan en laden via Ajax van de totaalstand van gewonnen en verloren spellen tijdens een sessie.
snakeapp.js				Voor het starten en controleren van het snake spelletje.			
besturing.js 			Voor het de interactie tussen gebruiker en snakeapp.

Afhankelijkheden van of relatie andere modules
canvas.js				Geen
element.js				Geen
food.js					Geen
snake.js				canvas en canvasutil
canvasutil.js			canvas, element, food, snake, draw (via trigger event "drawCanvas");
draw.js					canvascontrol; Draw luistert naar event "drawCanvas".
spelstand.js			snakeapp (via trigger event "loadGame");
score.js				Geen
snakeapp.js				canvascontrol, 	draw (via trigger event "drawCanvas"), score, spelstand; Snakeapp luister naar event "loadGame".	
besturing.js 			snakeapp.


JSON Formaat spelstand: Versturen naar en Ophalen van server.
{segments : Array van elementen, foods : Array van elementen, direction : String}

Voorbeeld:
{
"segments":[{"radius":10,"x":130,"y":150,"color":"DarkRed"},
			 {"radius":10,"x":130,"y":170,"color":"DarkRed"},
			 {"radius":10,"x":130,"y":190,"color":"DarkOrange"}
			 ],
"foods":[{"radius":10,"x":110,"y":70,"color":"Olive"},
		  {"radius":10,"x":310,"y":130,"color":"Olive"},
		  {"radius":10,"x":50,"y":70,"color":"Olive"},
		  {"radius":10,"x":290,"y":90,"color":"Olive"}
		  ],
"direction":"down"
}

JSON Formaat score: Versturen naar server
{Number}

Voorbeeld
{0}

Afhankelijk van het number verhoogt de server (via code) de waarden van gewonnen of verloren.
Indien niet gelijk aan 0 dan verhoog verloren anders verhoog gewonnen.

JSON Formaat score: Resultaat van versturen naar server.
{gewonnen : Number, verloren : Number}

Voorbeeld
{"gewonnen":0,"verloren":1}


