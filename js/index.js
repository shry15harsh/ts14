var opened,lower;
$(document).ready(function(){
		lower=true;
		/*$(document).mousemove(function(e){
			Mx=Math.floor(e.clientX);
			My=Math.floor(e.clientY);
			if(Mx<200&&lower){
				particleCount--;
				lower=false;
			}
			if(Mx>800&&(!lower)){
				particleCount--;
				lower=true;
			}
			if(particleCount==0)
				$("#myCanvas").css('opacity','0');
				
			console.log(particleCount);
			//console.log(Mx);
		});*/
		setTimeout(function(){$("#hint").css("display","none");},9999);
		opened=false;
		$(".header #year").click(function(){
			$("#hint").css("display","none");
			toggleTranslate();
	})
	/*document.querySelector( '.forkit' ).addEventListener( 'forkit-open', function() {
  // fired when the curtain is pulled down
	});

	document.querySelector( '.forkit' ).addEventListener( 'forkit-close', function() {
  // fired when the curtain retracts
	});*/
	$('.line').mouseenter(function(){
		$('#clickToShare').css('display','block');
	});
	$('.line').mouseout(function(){
		$('#clickToShare').css('display','none');
	});
});
function toggleTranslate(){
	if(opened){
		$(".hole").css('-webkit-transform','scale(0)');
		$(".header").css('-webkit-transform','translateY(0%)');
		$(".down").css('-webkit-transform','translateY(0%)')
		$(".hole").css('transform','scale(0)');
		$(".header").css('transform','translateY(0%)');
		$(".down").css('transform','translateY(0%)');;
		opened=false;
	}
	else{
		$(".hole").css('-webkit-transform','scale(1)');
		$(".header").css('-webkit-transform','translateY(-15%)');
		$(".down").css('-webkit-transform','translateY(50%)');
		$(".hole").css('transform','scale(1)');
		$(".header").css('transform','translateY(-15%)');
		$(".down").css('transform','translateY(50%)');
		opened=true;
	}
}
