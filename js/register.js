$(document).ready(function(){
	$('#course').change(function(){
		if($(this).find(":selected").text()=='Other')
		$('#otherCourse').css('display','block');
		else
		$('#otherCourse').css('display','none');
	});
});