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

var luchador;
var contrincante;

//luchador values
var hPluchador;
var aPluchador;
//contrincante values
var hPcontrincante;
var cPcontrincante;
//first time program runs
var counter=0;

$("#SeptNewgrohP").append(SeptNegro.hp);
$("#CienCarashP").append(CienCaras.hp);
$("#BlueDemonhP").append(BlueDemon.hp);
$("#ZeushP").append(Zeus.hp);


$("#chooseFighter").on("click",".fighters",function(){
	
	luchador=$(this).attr("id");

	switch (luchador){

		case "SeptiembreNegro":
			console.log(luchador);
			hPluchador=SeptNegro.hp;
			aPluchador=SeptNegro.aP;
			
			break;
		case "CienCaras":
			console.log(luchador);
			hPluchador=CienCaras.hp;
			aPluchador=CienCaras.aP;
		
			break;
		case "BlueDemon":
			console.log(luchador);
			hPluchador=BlueDemon.hp;
			aPluchador=BlueDemon.aP;
		
			break;
		case "Zeus":
			console.log(luchador);
			hPluchador=Zeus.hp;
			aPluchador=Zeus.aP;
			
			break;	
	}

	console.log(hPluchador);
	console.log(aPluchador);
	

	var clicked=$(this).detach();
	clicked.appendTo("#yourFighter");
	$(this).toggleClass("fighters");
	$(this).toggleClass("luchador");

	var notclicked=$(".fighters").detach();
	notclicked.appendTo("#chooseAdversary");
});

$("#chooseAdversary").on("click",".fighters",function(){
	
	contrincante=$(this).attr("id");

	switch (contrincante){

		case "SeptiembreNegro":
			console.log(contrincante);
			hPcontrincante=SeptNegro.hp;
			cPcontrincante=SeptNegro.cP;

			break;
		case "CienCaras":
			console.log(contrincante);
			hPcontrincante=CienCaras.hp;
			cPcontrincante=CienCaras.cP;

			break;
		case "BlueDemon":
			console.log(contrincante);
			hPcontrincante=BlueDemon.hp;
			cPcontrincante=BlueDemon.cP;

			break;
		case "Zeus":
			console.log(contrincante);
			hPcontrincante=Zeus.hp;
			cPcontrincante=Zeus.cP;

			break;	
	}

	console.log(hPcontrincante);
	console.log(cPcontrincante);

	var clicked2=$(this).detach();
	clicked2.appendTo("#adversaryArea");
	$(this).toggleClass("fighters");
	$(this).toggleClass("contrincante");

});

$("#fightButton").on("click",function(){
	
	if($("#adversaryArea").html()==""){
		$(".msg").text("You need to pick a contrincante before fighting");
	}
	else{


		if(counter===0)
		{
			hPluchador=hPluchador-cPcontrincante;
			hPcontrincante=hPcontrincante-aPluchador;
			alert(hPluchador);
			alert(hPcontrincante);
			$(".msg1").text(luchador+" has attacked for "+ aPluchador);
			$(".msg2").text(contrincante+" attacked you back for "+ cPcontrincante);
			$(".luchador .hp").text(hPluchador);
			counter++;
		}
		else{
			alert(hPluchador);
			aPluchador=aPluchador+aPluchador;
			hPluchador=hPluchador-cPcontrincante;
			$(".msg1").text(luchador+" has attacked for "+ aPluchador);
			$(".msg2").text(contrincante+" attacked you back for "+ cPcontrincante);
		}
		
	}	
});










		



