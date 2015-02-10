var activated=0;
var origPosition=new Array();
var orig;
var totalTires;
var Mx,My;//mouse cursor position

//constants
var LEFT=-1,UP=-1,RIGHT=1,DOWN=1;
$(document).ready(function(){
	totalTires=$('.chain ul li').length;
	for(var i=1;i<=totalTires;i++){
		origPosition[i]=$('.chain ul li:nth-child('+i+')').position();
	}
	orig=$('.chain ul li:nth-child(5)').position();
	$('li').click(function(){
		activated=$(this).index()+1;
	});
	$(document).mousemove(function(e){
		oldMx=Mx;
		oldMy=My;
			
		Mx=Math.floor(e.clientX);
		My=Math.floor(e.clientY);
		if(oldMx>Mx)
			horizDirection=LEFT;
		else
			horizDirection=RIGHT;
		
		if(oldMy>My)
			vertDirection=UP;
		else
			vertDirection=DOWN;
		Move(activated);
	});
});
function Move(liNum){
	if(liNum==0)
		return;
		var secondTire=$('li:nth-child(2)').position();
	if(secondTire.left>=origPosition[1].left+100&&horizDirection==1)
	return;
		
	var element='li:nth-child('+liNum+')';
	var point=75*(totalTires-liNum);
	var xpos=Mx-orig.left-(25+point);
	var ypos=My-orig.top-25;
	if(xpos>=75){
		Move(liNum-1);
	}
	if(liNum%2!=0)
		$(element).css('transform','translate('+xpos+'px,'+ypos+'px)');
	else
		$(element).css('transform','translate('+xpos+'px,'+ypos+'px) rotateY(-60deg)');
		console.log(origPosition[1].left+100);
}