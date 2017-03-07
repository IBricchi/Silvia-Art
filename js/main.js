var onuse=1;
var base=2;
var max=24;
var inImgFull=false;
// transition from section to section
function changemain(xdif,xtime) {
	if (xtime!=0) {
		xtime=750;
	}
	if(onuse==xdif){
		return;
	}
	if(onuse>xdif){
		$("#main" + xdif).show(0);
		$("#main" + onuse).slideUp(xtime, "swing");
	}
	if (onuse<xdif) {
		$("#main" + xdif).slideDown(xtime, "swing");
		$("#main" + onuse).delay(xtime).slideUp(0);
	}
	if (onuse==2) {
		indepthdel();
	}
	onuse=xdif;
};
// home slider
function imageslide() {
	var newbase=base;
	if (newbase>max) {
		newbase=1;
	};
	$("#p").css("background-image","url(img/" + base + ".jpg)").animate({width:"100%"}, 1000).animate({width:"0"}, 0);
	setTimeout(function(){
		$("#g").css("background-image","url(img/" + newbase + ".jpg)");
	}, 1000);
	base=base+1;
	if(base>max){
		base=1;
	};
};
setInterval(imageslide, 5000);
// load set up
$(function(){
	$(".main").css("float","right");
	$(".main").hide();
	$("#main1").show();
	imageslide();
	$("nav div img").hide();
});
// gallery functions
// titles
var title = ["Tree Of Life",
			"Dancers from the sky",
			"Doll",
			"Fly, Frida, Fly",
			"Kites and Hope",
			"La Guadalupana",
			"Mother at Sunrise",
			"Mother I",
			"Mother II",
			"A Tribute to Diego",
			"Pueblo Magico",
			"Monarchs",
			"Lizzard",
			"Chihuahua",
			"Feline",
			"Owl",
			"Peacock",
			"Tin Angels I",
			"Tin Angels II",
			"Red Sunset",
			"Twister",
			"Heart I",
			"Heart II",
			"Tango"]
//sold
var sold = [true,
			true,
			false,
			true,
			true,
			false,
			false,
			false,
			false,
			true,
			true,
			false,
			true,
			false,
			false,
			false,
			false,
			true,
			false,
			false,
			false,
			false,
			false,
			true]
//info
var info  = ["Oil on canvas - 60x80cm",
			"Oil on canvas - 100x100cm",
			"Oil on canvas - 80x60cm",
			"Oil on canvas - 60x80cm",
			"Oil on canvas - 100x120cm",
			"Oil on canvas - 120x60cm",
			"Oil on canvas - 80x100cm",
			"Oil on canvas - 60x40",
			"Oil on canvas - 70x90cm",
			"Oil on canvas - 60x80cm",
			"Oil on canvas - 70x50cm",
			"Mixed media - diptych - 120x80cm",
			"Oil on canvas - 60x40cm",
			"Oil on canvas - 30x20cm",
			"Oil on canvas - 30x20cm",
			"Oil on canvas - 30x20cm",
			"Oil on canvas - 30x20cm",
			"Oil on canvas - diptych - 50x100cm",
			"Mixed media - Triptic - 60x140cm",
			"Oil on canvas - 60x80cm",
			"Mixed media - 60x80cm",
			"Oil on canvas - 50x40cm",
			"Oil on canvas - 50x40cm",
			"Oil on canvas - ?x?cm"]
// create sections
$(function(){
	for (var k = 1; k <= max; k++) {
		$("#main2").append("<div class='galimg' id='galimg"+k+"' onclick='indepth("+k+")'>"+ 
			"<h2 id='galtxt'>" + title[k-1] + "</h2></div>");
		$("#galimg" + k).css("background-image","url('img/" + k + ".jpg')");
	}
})
//organise sections
setInterval(function(){
    if($("body").width()>1500){
        $(".galimg").animate({
            width: "20%",
            height: "35%",
            marginLeft: "4%"
        },500);
    }else if($("body").width()>1000){
        $(".galimg").animate({
            width: "28%",
            height: "46%",
            marginLeft: "4%"
        },500);
    }else if ($("body").width()>500) {
        $(".galimg").animate({
            width: "42%",
            height: "50%",
            marginLeft: "6%"
        },500);
    }else if($("body").width()<=500) {
        $(".galimg").animate({
            width: "70%",
            height: "50%",
            marginLeft: "15%"
        },500);
    }
}, 500)
// in depth
var soldInfo;
function indepth(l) {
	if (sold[l-1]==false) {
		soldInfo = "";
	}else{
		soldInfo = "(sold)";
	}
	$("#main2").append('<div id="nccover"><div id="nc"><h2>'+title[l-1]+" "+soldInfo+
		'</h2><h2 onclick="indepthdel()" id="ncexit">x</h2>'+
		'<p id="ncinfo">'+info[l-1]+'</p>'+
		'<img id="ncimg" src="img/'+l+'.jpg"></div></div>');
	$("#nccover").hide(0).fadeIn();
}
function indepthdel(){
	$("#nccover").fadeOut();
	setTimeout(function(){
		$("#nccover").remove();
	},400)
}2
// fancy under line hover
$(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('#li1').hover(function(){
			changemain(1);
		});
		$('#li2').hover(function(){
			changemain(2);
		});
		$('#li3').hover(function(){
			changemain(3);
		});
		$('#li4').hover(function(){
			changemain(4);
		});
	}else{
		$("nav div").hover(function(){
			$(this).css("opacity", "0.8");
			$(this).children("p").css("margin-bottom", "0");
			$(this).children("img").slideDown(0);
		},function(){
			$(this).css("opacity", "0.5");
			$(this).children("p").css("margin-bottom", "9%");
			$(this).children("img").hide();
		});
	}
});