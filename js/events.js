var grids,json,jsonString;	//the original json and grids

var des=true,rr=false,ps=false,con=false;
var widget_base_width=200,widget_base_height=200;

var description_on_flag=false;
/*$(document).mousemove(function(e){
		Mx=Math.floor(e.clientX);
		My=Math.floor(e.clientY);
		if(Mx>screen.width-100){
			if(description_on_flag&&events_on_flag){
			description_on_flag=false;
			$(".eventScreen .descriptionsite").css('transform','translateX(170%)');
			$(".eventScreen .eventssite").css('transform','translateY(0%)');
	}
	else if(events_on_flag){
			events_on_flag=false;
			$(".eventScreen .gridster").css('transform','translateY(0%)');
			$(".eventScreen .eventssite").css('transform','translateX(170%)');
			$(".eventScreen .backbox").css('display','none');
	}
		}
		console.log(Mx+','+My);
});*/

$(function(){
    grids=$(".gridster ul").gridster({
        widget_base_dimensions: [widget_base_width, widget_base_height],
        widget_margins: [5, 5],
        helper: 'clone',
        resize: {
          enabled: true
        },
		serialize_params: function($w, wgd) {
			return {
				x: wgd.col,
				y: wgd.row,
				width: wgd.size_x,
				height: wgd.size_y,
				id: $($w).attr('data-event'),
			};
		}
    }).data('gridster');
	json = grids.serialize();
	//addDeleteAndOverlay();
});


//overlay display on hover
$(document.body).on('mouseover', '.gridster ul li', function() {
	//$(this).find('.overlay').css('opacity','1');
});
$(document.body).on('mouseout', '.gridster ul li', function() {
	//$(this).find('.overlay').css('opacity','0.5');
});

//Show particular event details
$(document.body).on('click', '.gridster li', function() {
	events_on_flag=true;
	$(".eventScreen .gridster").css('transform','translateY(120%)');
	setTimeout(function() {
		$(".eventScreen .gridster").css('display','none');
	}, 1000);
	
	$(".eventScreen .eventssite").css('display','block');
	setTimeout(function() {
		$(".eventScreen .eventssite").css('transform','translateX(0%)');
	}, 1000);
	
	$(".eventScreen .backbox").css('display','block');
});

$(document.body).on('click', '.eventScreen .eventssite a', function() {
	description_on_flag=true;
	$(".eventScreen .descriptionsite").css('display','block');
	$(".eventScreen .descriptionsite").attr('data-content',$(this).html());
	setTimeout(function() {
		$(".eventScreen .descriptionsite").css('transform','translateX(0%)');
	}, 500);
	
	setTimeout(function() {
		$(".eventScreen .eventssite").css('display','none');
	}, 500);
	$(".eventScreen .eventssite").css('transform','translateY(150%)');
});

$(document.body).on('click', '.eventScreen .backbox', function() {
	if(description_on_flag&&events_on_flag){
		description_on_flag=false;
		$(".eventScreen .descriptionsite .content").html('');	//removes previous content
		$(".eventScreen .descriptionsite").css('transform','translateX(170%)');
		setTimeout(function() {
			$(".eventScreen .descriptionsite").css('display','none');
		}, 500);
		
		$(".eventScreen .eventssite").css('display','block');
		setTimeout(function() {
			$(".eventScreen .eventssite").css('transform','translateY(0%)');
		}, 500);
	}
	else if(events_on_flag){
		events_on_flag=false;
		$(".eventScreen .eventssite").html('');	//removes previous events' details
		$(".eventScreen .gridster").css('display','block');
		setTimeout(function() {
			$(".eventScreen .gridster").css('transform','translateY(0%)');
		}, 500);
		$(".eventScreen .eventssite").css('transform','translateX(170%)');
		setTimeout(function() {
			$(".eventScreen .eventssite").css('display','none');
		}, 500);
		$(".eventScreen .backbox").css('display','none');
	}
});