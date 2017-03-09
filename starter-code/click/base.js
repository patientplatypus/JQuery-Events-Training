console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	//var assignment


	$("span").eq(0).click(function(){
		r =$('<li>Fire the missiles!</li>') 
		$('ul').append(r);
	});
	
	$("span").eq(1).click(function(){
		r =$('<li>Launch the armada!</li>') 
		$('ul').append(r);
	});
	
	$("span").eq(2).click(function(){
		r =$('<li>Charge!</li>') 
		$('ul').append(r);
	});
	
	$("span").eq(3).click(function(){
		r =$('<li>Exterminate!</li>') 
		$('ul').append(r);
	});
	
	$("span").eq(4).click(function(){
		r =$('<li>Into the breech!</li>') 
		$('ul').append(r);
	});
	
	$("span").eq(5).click(function(){
		r =$('<li>This is Sparta!</li>') 
		$('ul').append(r);
	});
	
	$("span").eq(6).click(function(){
		r =$('<li>Huzzah!</li>') 
		$('ul').append(r);
	});
	


})
