Generiek structuur
css				bevat algemene css bestanden voor de gehele site
js				bevat generieke javascript (chai, mocha, jsdoc)
snake			bevat alle bestanden specifiek voor de werking van het snake spelletje

Snake structuur
css				bevat snake specifieke css
js				bevat snake specifieke javascript
out				bevat de documentatie gegenereed door jsdoc
test			bevat de test suite voor het snake spelletje			

Voor de verdeling van de functionaliteiten over de verschillende bestanden
hebben we als uitgangspunt genomen om tot zo klein mogelijke autonome onderdelen te komen.

snakeapp		Voor het starten en controleren van het snake spelletje.
canvasutil		Voor het opbouwen en manipuleren van het canvas.
element			Basaal object voor het aanmaken van voedsel en segment objecten.
segment			Voor het opbouwen van de segmenten van de snake
snake			Voor het manipuleren van de snake over het canvas
snakeutil		Algemene functies voor ondersteuning snake
food			Voor het opbouwen van de voedsel elementen
draw			Voor het tekenen van de snake en voedsel objecten op het canvas
properties		Container voor de constanten.
