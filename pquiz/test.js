window.onload=whattodo();
function whattodo(){
	alert('Just think of all the things in your mind mentioned, and go for the appropriate choice.');
}
function showform(id){
	document.getElementById(id).style.display='block';
	document.getElementById(id).style.zIndex='3';
}
var result=new Array();
var ele=new Array();
var txt=new String(" ");
var i;
function arrayiter(array)
{
	for(i=0;i<array.length;i++)
	{
		if(array[i].checked)break;
	}
	return i;
}
function check()
{
	colorform();//for the colorform
	ladderform();
	horseform();
	stormform();
	flowerform();
	alert(result.join("\n"));
	return true;
}
function colorform()
{
	var cname=document.colorform.color.selectedIndex;
	switch(cname)
	{
		case 0:txt="If the cube is transparent, you are open to others, you don’t hide anything from your friends or family.";break;
		case 1:txt="Black is the color of authority, elegance, sophistication. It can also mean the dark side of the personality";break;
		case 2:txt="White symbolizes innocence, purity, non-judgemental personality, objectivity, and lack of strong opinions.";break;
		case 3:txt="Red is the color of dominance, power,and love. You may be an attention seeker.";break;
		case 4:txt="Yellow represents playfulness, optimism and energy.";break;
		case 5:txt="Green represents compassion, prosperity, money, and vitality.";break;
		case 6:txt="Blue represents knowledge, loyalty and calmness.";break;
	}
	result.push(txt);
	var csize=document.colorform.sizer;
	var k=arrayiter(csize);
	switch(k)
	{
	 case 0:txt="The bigger the ratio, the bigger your ego is.";break;
	 case 1:txt="A small ratio means that you recognize that you are just one part of this world and there are many other things out there beside you.";break;
	}
	result.push(txt);
	var cposn=document.colorform.posn;
	var j=arrayiter(cposn);
	switch(j)
	{
		case 0:txt="You are down to earth";break;
		case 1:txt="You are a dreamer";break;
	}
	result.push(txt);
	/*alert(result[1]);
	alert(j);*/
	return true;
}
function ladderform()
{
	var islean=document.ladder.lean;
	var k=arrayiter(islean);
	switch(k)
	{
		case 0:txt="You distance yourself from your friends.";break;
		case 1:txt="Your friends are relying on you or expecting you to act according to their wishes.";break;
	}
	result.push(txt);
	var ladcolor=document.ladder.lcolor.selectedIndex;
	switch(ladcolor)
		{
			case 0:txt="You are a stable person.";break;
			case 1:txt="You are sophisticated with a dark side of personality";break;
			case 2:txt="You are very objective, innocent and pure.";break;
			case 3:txt="You are dominant and powerful. You may be an attention seeker.";break;
			case 4:txt="Yellow ladder represents your enthusiasm and optimism.";break;
		}
	result.push(txt);
	return true;
}
function horseform()
{
	var hdist=document.horse.dist2;
	var k=arrayiter(hdist);
	var info="The distance between the cube and the horse shows how close or distant you are in relationships."
	switch(k)
	{
		case 0:txt="You prefer to maintain a difference from your loved ones.";break;
		case 1:txt="You are closer to your loved ones.";break;
	}
	var res=info.concat(txt);
	result.push(res);
	var hcolors=document.horse.hcolor.selectedIndex;
	switch(hcolors)
	{
		case 0:txt="You have a stable relationship with your partner.";break;
		case 1:txt="You share a non-judgemental relationship with your partner.";break;
		case 2:txt="You maintain a distance from your partner.";break;
	}
	result.push(txt);
	var isfree=document.horse.free;
	k=arrayiter(isfree);
	switch(k)
	{
		case 0:txt="You give freedom to your partner.";break;
		case 1:txt="You are a very possessive person.";break;
	}
	result.push(txt);
	return true;
}
function stormform()
{
	var stsize=document.stormform.ssize;
	var k=arrayiter(stsize);
	switch(k)
	{
		case 0:txt="You are a calm and positive person. You do not like being angry and try to quickly shift your mood if you notice that anger gets activated in you.";break;
		case 1:txt="You always try to make a drama out of something. Or that you have big problems in your life.";break;
	}
	result.push(txt);
	var sposn=document.stormform.sloc;
	k=arrayiter(sposn);
	switch(k)
	{
		case 0:txt="You are intensely affected by the problems of your life.";break;
		case 1:txt="The problems of your life just vanish away.";break;
	}
	result.push(txt);
	return true;
}
function flowerform()
{
	var fnum=document.flower.fqty;
	var k=arrayiter(fnum);
	var info="The flower represents your children or desire to have children."
	switch(k)
	{
		case 0:txt="The more the flowers, more children you desire of.";break;
		case 1:txt="Fewer flowers imply less desire for children";break;
	}
	var res=info.concat(txt);
	result.push(res);
	var fposn=document.flower.floc;
	k=arrayiter(fposn);
	switch(k)
	{
		case 0:txt="You are more closer to your children.";break;
		case 1:txt="The greater the distance, between the cube and flowers, the greater is the distance between you and children.";break;
	}
	return true;
}