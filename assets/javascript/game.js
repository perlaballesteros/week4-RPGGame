var SeptNegro={
	hp: 120,
	aP:1,
	cP:11,
};
var CienCaras={
	hp: 100,
	aP:0.5,
	cP:50,
};
var BlueDemon={
	hp: 150,
	aP:2,
	cP:90,
};
var Zeus={
	hp: 180,
	aP:5,
	cP:19,
};

var luchador;
var contrincante;

//luchador values
var hPluchador;
var hPluchadorreset;
var aPluchador;
//contrincante values
var hPcontrincante;
var cPcontrincante;
//first time program runs
var counter=0;
//-------------------test-----------------------
var counter2=1;
//-----------------------------------------------
//---------------------function-------------------
function createresetbutton(){
	var resetbutton=$('<input class="reset" type="button" value="ResetGame" />');
	 $(".msg2").text(" ");
	 resetbutton.appendTo($(".msg2"));

}
//-------------------------------------------------

//-----------ASSIGNING hP FOR EACH PLAYER---------------
$("#SeptiembreNegrohP").text(SeptNegro.hp);
$("#CienCarashP").append(CienCaras.hp);
$("#BlueDemonhP").append(BlueDemon.hp);
$("#ZeushP").append(Zeus.hp);

//-----------CHOOSING YOUR LUCHADOR--------------------
$("#chooseFighter").on("click",".fighters",function(){
	
	luchador=$(this).attr("id");

	switch (luchador){

		case "SeptiembreNegro":
			
			hPluchador=SeptNegro.hp;
			aPluchador=SeptNegro.aP;
			
			break;
		case "CienCaras":
			
			hPluchador=CienCaras.hp;
			aPluchador=CienCaras.aP;
		
			break;
		case "BlueDemon":
			
			hPluchador=BlueDemon.hp;
			aPluchador=BlueDemon.aP;
		
			break;
		case "Zeus":
			
			hPluchador=Zeus.hp;
			aPluchador=Zeus.aP;
			
			break;	
	}
	//-------------------test-----------------------
	console.log(hPluchador);
	console.log(aPluchador);
	//-----------------------------------------------
	hPluchadorreset=hPluchador;
	//----MOVING YOUR CHOSEN LUCHADOR TO YOURFIGHTERDIV-------
	var clicked=$(this).detach();
	clicked.appendTo("#yourFighter");
	$(this).toggleClass("fighters");
	$(this).toggleClass("luchador");

	//----MOVING YOUR REMAINING ADVERSARIES TO CHOOSE ADVS------
	var notclicked=$(".fighters").detach();
	notclicked.appendTo("#chooseAdversary");
});

//-----------CHOOSING YOUR ADVERSARY--------------------
$("#chooseAdversary").on("click",".fighters",function(){
	
	contrincante=$(this).attr("id");

	switch (contrincante){

		case "SeptiembreNegro":
			
			hPcontrincante=SeptNegro.hp;
			cPcontrincante=SeptNegro.cP;

			break;
		case "CienCaras":
			
			hPcontrincante=CienCaras.hp;
			cPcontrincante=CienCaras.cP;

			break;
		case "BlueDemon":
			
			hPcontrincante=BlueDemon.hp;
			cPcontrincante=BlueDemon.cP;

			break;
		case "Zeus":
			
			hPcontrincante=Zeus.hp;
			cPcontrincante=Zeus.cP;

			break;	
	}
	//-------------------check-----------------------
	console.log(hPcontrincante);
	console.log(cPcontrincante);
	//-----------------------------------------------

	//-----MOVING CHOSEN ADVERSAY TO ADVAREADIV------------
	var clicked2=$(this).detach();
	clicked2.appendTo("#adversaryArea");
	$(this).toggleClass("fighters");
	$(this).toggleClass("contrincante");

	//setting msg blanck incase msg appeared before adv was chosen
	$(".msg1").text(" ");

});

//-------------FIGHT BUTTON-------------------------
$("#fightButton").on("click",function(){
	
	//----EMPTY ADVERSARY AREA DELIVER MSG---------
	if($("#adversaryArea").html()===""){
		$(".msg1").text("You need to pick a contrincante before fighting");
	}
	else{

		//----IF FOR FIRST TIME PROGRAM RUNS--------
		if(counter===0)
		{
			hPluchador=hPluchador-cPcontrincante;
			hPcontrincante=hPcontrincante-aPluchador;

			//-------------------test-----------------------
			console.log("hPluchador1 "+hPluchador);
			console.log("hPcontrincante1 "+hPcontrincante);
			//-----------------------------------------------

			$(".msg1").text(luchador+" has attacked for "+ aPluchador);
			$(".msg2").text(contrincante+" attacked you back for "+ cPcontrincante);
			$(".luchador .hp").text(hPluchador);
			$(".contrincante .hp").text(hPcontrincante);
			counter++;
		}
		//----FOR THE SECOND AND ON RUNS OF FIGHTBUTTON ----
		else{

			//-------------------test-----------------------
			counter2++;
			console.log(counter2);
			console.log("hPluchadorb "+ hPluchador);
			console.log("aPb "+ aPluchador);
			console.log("hPcontrincanteb "+ hPcontrincante);
			console.log("cPcontrincanteb "+ cPcontrincante);
			//-----------------------------------------------

			aPluchador=aPluchador+aPluchador;
			hPluchador=hPluchador-cPcontrincante;
			hPcontrincante=hPcontrincante-aPluchador;
			$(".msg1").text(luchador+" has attacked for "+ aPluchador);
			$(".msg2").text(contrincante+" attacked you back for "+ cPcontrincante);
			$(".luchador .hp").text(hPluchador);
			$(".contrincante .hp").text(hPcontrincante);

			//-------------------test-----------------------
			console.log("hPluchador "+ hPluchador);
			console.log("aP "+ aPluchador);
			console.log("hPcontrincante "+ hPcontrincante);
			console.log("cPcontrincante "+ cPcontrincante);
			//-----------------------------------------------

			//-------RUN IF ADVER LOOSES---------------------
			if(hPcontrincante<0)
			{
				$(".msg2").text(" ");
				//---IF REMEINING ADVS--------------
				if($("#chooseAdversary").html()!=="")
				{
					var looser=$("#adversaryArea .contrincante").detach();
					looser.appendTo($(".loosers"));
					$(".msg1").text("Well done, choose another contrincante");
					hPluchador=hPluchadorreset;
					$(".luchador .hp").text(hPluchador);


				}
				//---IF NOREMEINING ADVS REST BUTTON-------
				if($("#chooseAdversary").html()==="")
				{
					$(".msg1").text("Congrats, you are the ultimate champ!");
					createresetbutton()
				}
			}
			//-------RUN IF LUCHADOR WINS---------------------
			else if(hPluchador<0)
			{
				$(".msg1").text("You've been defeated...GAME OVER!!!");
				createresetbutton();
			}

		}
		
	}	
});

$(".msg2").on("click",".reset", function(){
	
	location.reload();

});










		



