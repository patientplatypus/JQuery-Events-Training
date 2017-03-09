console.log("Sanity Check: JS is working!");

$(document).ready(function(evt){

  $("#time").text( Date.now() );
  console.log("event",evt);

  function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
  }

  	var leftvalue = 0;
  	var rightvalue = 0;
  	var random = getRandomArbitrary(1,101);
  	var total = random;
  	var change = false;

	var s = $('<input type="number" class="add" id="random">');
	$("#time").after(s);

	$("#random").val(random);
	$("#total").val(random);
	$("#right").val(rightvalue);
	$("#left").val(leftvalue)


	$( "#right" ).on("input",function() {
		  leftvalue = $('#left').val();
		  rightvalue = $('#right').val();
		  total = parseFloat(leftvalue) + parseFloat(rightvalue) + parseFloat(random);
		  $('#total').val(total);
	});

	$( "#left" ).on("input",function() {
		  leftvalue = $('#left').val();
		  rightvalue = $('#right').val();
		  total = parseFloat(leftvalue) + parseFloat(rightvalue) + parseFloat(random);
		  $('#total').val(total);
	});


	setInterval(function (){
		console.log("total", total);
		if (total != 0){
			var resetbox = $("body").find("#reset");
			var htmlbody = $("body");

			if (resetbox.length > 0){
				$("#reset").click(function(){
					random = getRandomArbitrary(1,101);
					$("#left").val(0);	
					$("#right").val(0);
					$("#random").val(random);
					$("#total").val(random);
				});
			}else{
				var r = $('<input type="button" value="RESET" id="reset"/>');
	       		$("body").append(r);
			}
		}
	},500);


//	$('#add').on('change',function(){
//		alert("hey");
//	})


//	$('#total').on("change", function(){
//		alert("hey");
//	});


//	if (change===true){
//		if (total!=0){
//			 var r= $('<input type="button" value="new button"/>');
//       		 $("body").append(r);
//		}
//		change=false;
//	}


 // evt.keydown(function(){

	 
	//})



})
