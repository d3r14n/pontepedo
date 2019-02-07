pp =
{
	"carta":
	[
		"A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
	],
	"juego":
	[
		"TODOS TOMAN",
		"PALABRA PROHIBIDA",
		"ALFABETO",
		"CARICACHUPAS",
		"YO NUNCA NUNCA",
		"ESCLAVO",
		"7-PUM",
		"REGLA",
		"CASCADA",
		"PREGUNTAS SECRETAS",
		"TOMA IZQUIERDA",
		"TOMA DERECHA",
		"TOMAS TÚ"
	],
	"instruccion":
	[
		"Todos los participantes toman",
		"El participante que sacó la carta escoge una palabra prohibida, el que diga la palabra deberá tomar, la palabra se mantiene prohibida hasta que alguien saque de nuevo una carta de \"PALABRA PROHIBIDA\"",
		"El participante que sacó la carta dirá una palabra que empiece con la letra A, el siguien repite dicha palabra mas una que inicie con B, así sucesivamente para todo el alfabeto hasta que alguien se equivoque, quien deberá tomar",
		"Al ritmo de caricachupas, quien haya sacado la carta escogerá la categoría y por turnos, los participantes deberás decir un elemento perteneciente a la categoría, el primero en equivocarse o no decir un elemento tomará",
		"Quien sacó la carta dirá, \"Yo nunca nunca\" y algo que nunca haya realizado, todos los participante que lo hayan hecho deberán tomar",
		"El jugador que sacó la carta escogerá a un participante para que sea su esclavo, el esclavo no podrá realizar ninguna acción si que su amo le dé permiso, en caso de desobedecer deberá tomar, el participante seguirá siendo esclavo hasta que un participante saque otra carta de \"ESCLAVO\"",
		"Los participantes deberán contar, uno por uno, sin decir el 7 ni alguno de sus multiplos (7, 14, 17, 21, 27, 28, 35, 37, etc), en su lugar deberán de aplaudir, el primero en equivocarse deberá tomar",
		"El participante que sacó la carta pondrá una regla que nadie podrá romper, el que la rompa deberá de tomar, la regla seguirá activa hasta que se saque otra carta de \"REGLA\"",
		"El participante que sacó la carta empezará a tomar en el momento que quiera (el juego continua), el siguiente jugador empezará a tomar y así sucesivamente en forma de cascada, en cuanto el primer participante deje de tomar, el siguiente podrá dejar de tomar, y así sucesivamente en forma de cascada.",
		"El participante le hará una pregunta al oído a otro participante cuya respuesta será algún otro participante, en vez de responder, el participante al que se le realizó la pregunta, irá hacia al participante que es su respuesta, y le hará una nueva pregunta, el proceso se repite hasta llegar a un participante al que ya se le haya realizado una pregunta, en cuyo caso, el participante en vez de hacer una pregunta, sólo dirá que la sesión de preguntas terminó",
		"El participante a la izquierda de quien tomó la carta toma",
		"El participante a la derecha de quien tomó la carta toma",
		"El participante que tomó la carta toma"
	]
};

function randomNumber(n, m=1)
{
	return Math.floor((Math.random() * (n+1)) + m);
}

function sacarCarta()
{
	document.getElementById('baraja').style.background = "#FFFAFA";
	var nextCard = randomNumber(12, 0);
	document.getElementById('carta').innerHTML = pp.carta[nextCard];
	document.getElementById('juego').innerHTML = pp.juego[nextCard];
	document.getElementById('instructivo').innerHTML = "<button id='btnCerrar' onclick='cerrarInstrucciones()'>X</button>" + pp.instruccion[nextCard];
}

function mostrarInstrucciones()
{
	document.getElementById('instructivo').style.display = "block";
}

function cerrarInstrucciones()
{
	document.getElementById('instructivo').style.display = "none";
}