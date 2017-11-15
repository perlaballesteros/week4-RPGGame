var SeptNegro={
	hp: 120,
	aP:1,
	cP:11,
};
var CienCaras={
	hp: 100,
	aP:10,
	cP:4,
};
var BlueDemon={
	hp: 150,
	aP:11,
	cP:9,
};
var Zeus={
	hp: 180,
	aP:7,
	cP:1,
};

var hPluchador;
var hPContrincante;
var aPluchador;
var aPcontrincante;
var cPluchador;
var cPcontrincante;

$("#SeptNewgrohP").append(SeptNegro.hp);
$("#CienCarashP").append(CienCaras.hp);
$("#BlueDemonhP").append(BlueDemon.hp);
$("#ZeushP").append(Zeus.hp);


$("#chooseFighter").on("click",".fighters",function(){
	
	var luchador=$(this).attr("id");

	switch (luchador){

		case "SeptNegro":
			console.log(luchador);
			hPluchador=SeptNegro.hp;
			aPluchador=SeptNegro.aP;
			cPluchador=SeptNegro.cP;
			break;
		case "CienCaras":
			console.log(luchador);
			hPluchador=CienCaras.hp;
			aPluchador=CienCaras.aP;
			cPluchador=CienCaras.cP;
			break;
		case "BlueDemon":
			console.log(luchador);
			hPluchador=BlueDemon.hp;
			aPluchador=BlueDemon.aP;
			cPluchador=BlueDemon.cP;
			break;
		case "Zeus":
			console.log(luchador);
			hPluchador=Zeus.hp;
			aPluchador=Zeus.aP;
			cPluchador=Zeus.cP;
			break;	
	}

	console.log(hPluchador);
	console.log(aPluchador);
	console.log(cPluchador);

	var clicked=$(this).detach();
	clicked.appendTo("#yourFighter");
	$(this).toggleClass("fighters");
	$(this).toggleClass("luchador");

	var notclicked=$(".fighters").detach();
	notclicked.appendTo("#chooseAdversary");
});

$("#chooseAdversary").on("click",".fighters",function(){
	
	var contrincante=$(this).attr("id");

	switch (contrincante){

		case "SeptNegro":
			console.log(contrincante);
			hPcontrincante=SeptNegro.hp;
			aPcontrincante=SeptNegro.aP;
			cPcontrincante=SeptNegro.cP;
			break;
		case "CienCaras":
			console.log(contrincante);
			hPcontrincante=CienCaras.hp;
			aPcontrincante=CienCaras.aP;
			cPcontrincante=CienCaras.cP;
			break;
		case "BlueDemon":
			console.log(contrincante);
			hPcontrincante=BlueDemon.hp;
			aPcontrincante=BlueDemon.aP;
			cPcontrincante=BlueDemon.cP;
			break;
		case "Zeus":
			console.log(contrincante);
			hPcontrincante=Zeus.hp;
			aPcontrincante=Zeus.aP;
			cPcontrincante=Zeus.cP;
			break;	
	}

	console.log(hPcontrincante);
	console.log(aPcontrincante);
	console.log(cPcontrincante);

	var clicked2=$(this).detach();
	clicked2.appendTo("#adversaryArea");
	$(this).toggleClass("fighters");
	$(this).toggleClass("contrincante");

});










		



