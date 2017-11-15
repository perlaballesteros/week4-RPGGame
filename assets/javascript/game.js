var hp=



$("#startposition").on("click",".imgs1",function(event){
	var clicked=$(this).detach();
	$(this).toggleClass("imgs1");
	clicked.appendTo("#yourChar");

	var notclicked=$(".imgs1").detach();
	notclicked.appendTo("#availEnem");
});

$("#availEnem").on("click",".imgs1",function(event){
	var clicked2=$(this).detach();
	$(this).toggleClass("imgs1");
	clicked2.appendTo("#defenderArea");	
});







		



