
var 
tl = new TimelineLite({paused:false}),
trans = '-=.5',

hive = $("#hive"),


// Compositions
comp_1 = $('#comp_1');
comp_2 = $('#comp_2');
comp_3 = $('#comp_3');
comp_4 = $('#comp_4');
comp_5 = $('#comp_5');

// comp_1
football_field = $("#football_field"),
main_char = $("#main_char"),
guy_char = $("#guy_char"),
meera_char = $("#meera_char"),
football = $("#football"),
garbage = $("#garbage"),
c1_broom_stick = $("#c1_broom_stick"),
c1_gloves = $("#c1_gloves"),
c1_mask = $("#c1_mask"),
c1_dustbin = $("#c1_dustbin"),
c1_dustbin_dust = $("#c1_dustbin_dust"),

// comp_2
c2_guy_char = $("#c2_guy_char"),
c2_meera_char = $("#c2_meera_char"),
c2_main_char = $("#c2_main_char"),
c2_broom_stick = $("#c2_broom_stick"),
c2_gloves = $("#c2_gloves"),
c2_mask = $("#c2_mask"),

// comp_3

c3_home = $("#c3_home"),
c3_dad = $("#c3_dad"),
c3_mom = $("#c3_mom"),
c3_main_char = $("#c3_main_char")
c4_sd4 = $("#c4_sd4")

// comp_4

c4_fb_field = $("#c4_fb_field"),

// squesnce

head = 0,

char = 0,

read = 1;


function hideTxt () {
	$("#text-container").fadeOut();
}

function showTxt () {
	$("#text-container").fadeIn();
	console.log('Done.')
}

$(document).ready(function () {


	$('.next').on('click', function() {
		if(read) {
			tl.play();
			head++;
			read = 0
		}
	});

	$('#prev').on('click', function() {
		tl.stop();
	});
	$(document).keypress(function(e) {
		if(e.which == 13) {
			$('.next').click();
		}
	});



	tl

//.set(hive_wm,{display:'none'})

.fromTo(hive_wm,.4,{autoAlpha:0},{autoAlpha:1,onComplete: pause_tl},trans) //'+=3'

.set(hive_wm,{display:'none'})

// Comp_1 
.set(hive_wm,{autoAlpha:0,display:'none'})
.set(comp_1,{display:'block'})
.to(comp_1, 0, {autoAlpha:1,},trans)
.from([football_field,garbage],1,{autoAlpha:1, ease:Power4.easeOut},trans)
.fromTo(main_char,1,{x:450,top:270,autoAlpha:0},{x:440,top:320,autoAlpha:1, ease: SteppedEase.config(12)},trans)
.fromTo(guy_char,1,{x:450,top:280,autoAlpha:0},{x:400,top:310,autoAlpha:1, ease: SteppedEase.config(12)},trans)


.to(body,.1,{display:'block',onComplete: showTxt})
.to(body,.1,{display:'block',onComplete: pause_tl})

.fromTo(football,1.5,{x:375,top:380,autoAlpha:0},{x:375,top:380,autoAlpha:1},trans)
.fromTo(main_char,.5,{x:440,top:320, ease: SteppedEase.config(12)},{x:375,top:325,autoAlpha:1, ease: SteppedEase.config(12)},trans)

.fromTo(football,.5,{x:375,top:380},{x:125,top:350,ease:Power1.easeOut,onComplete: pause_tl},'-=0.25')
.to(main_char,1,{x:175,top:320,autoAlpha:1, ease: SteppedEase.config(20)},trans)
.to(guy_char,1,{x:210,top:320,autoAlpha:1,  ease: SteppedEase.config(20)},trans)

.to(body,.1,{display:'block',onComplete: pause_tl})

.to(body,.1,{display:'block',onComplete: pause_tl})

.to(body,.1,{display:'block',onComplete: pause_tl})

.to(body,.1,{display:'block',onComplete: pause_tl})

.to(body,.1,{display:'block',onComplete: pause_tl})

.fromTo(meera_char,1,{x:320,top:220,autoAlpha:0},{x:240,top:280,autoAlpha:1, ease: SteppedEase.config(12)})

.to(comp_1,1,{scale:2, x:'50%', top: '-20%'},trans)

.to(body,.1,{display:'block',onComplete: pause_tl}) // 7

.to(body,.1,{display:'block',onComplete: pause_tl}) // 8

.to(body,.1,{display:'block',onComplete: pause_tl}) // 9

.to(body,.1,{display:'block',onComplete: pause_tl}) // 10

.to(body,.1,{display:'block',onComplete: hideTxt}) // hide text

.to(comp_1,.1,{display:'none'})

// Comp_2
.set(comp_2,{display:'block'})
.set(main_char,{autoAlpha:0})
.set(guy_char,{autoAlpha:0})
.set(meera_char,{autoAlpha:0})
.to(comp_2,.1,{autoAlpha:1})

.fromTo(c2_guy_char,1,{autoAlpha:0,x:150,y:300},{scale:1.5,autoAlpha:1,ease:Power4.easeOut},trans)
.fromTo(c2_broom_stick,1,{autoAlpha:0,x:150,y:100},{scale:3,autoAlpha:1,ease:Power4.easeOut},trans)
.fromTo(c2_meera_char,1,{autoAlpha:0,x:350,y:300},{scale:1.5,autoAlpha:1,ease:Power4.easeOut},trans)
.fromTo(c2_gloves,1,{autoAlpha:0,x:350,y:100},{scale:1.5,autoAlpha:1,ease:Power4.easeOut},trans)
.fromTo(c2_main_char,1,{autoAlpha:0,x:550,y:300},{scale:1.5,autoAlpha:1,ease:Power4.easeOut},trans)
.fromTo(c2_mask,1,{autoAlpha:0,x:550,y:100},{scale:3,autoAlpha:1,ease:Power4.easeOut},trans)

.to(comp_2, 1, {autoAlpha:0, display:'none',ease:Power4.easeOut})	 
.set(comp_2,{display:'none'})

// Comp_1 Continue

.set(garbage,{autoAlpha:1})
.to(comp_1, 1, {autoAlpha:1, display:'block', ease:Power4.easeOut},"-=1")
.fromTo(c1_gloves,1,{autoAlpha:0,x:120,top:235,scale:0.2},{autoAlpha:1, ease:Power4.easeOut},trans)
.fromTo(c1_broom_stick,1,{autoAlpha:0,x:100,top:285,scale:0.2},{autoAlpha:1, ease:Power4.easeOut},trans)
.fromTo(c1_mask,1,{autoAlpha:0,x:100,top:260,scale:0.2},{autoAlpha:1, ease:Power4.easeOut},trans)
.fromTo(meera_char,1,{x:320,top:220,autoAlpha:0},{x:240,top:280,autoAlpha:1, ease: SteppedEase.config(12)},trans)
.fromTo(main_char,1,{x:320,top:220,autoAlpha:0},{x:212,top:320,autoAlpha:1, ease: SteppedEase.config(20)},trans)
.fromTo(guy_char,1,{x:320,top:220,autoAlpha:0},{x:180,top:280,autoAlpha:1,  ease: SteppedEase.config(20)},trans)

.fromTo(football_field,1,{webkitFilter:"brightness(1) contrast(1) grayscale(0)", ease:Power4.easeOut},{webkitFilter:"brightness(0.8) contrast(1.1) grayscale(1)", ease:Power4.easeOut})





.fromTo(c1_dustbin,1,{autoAlpha:0,x:130,top:350,scale:0.6},{autoAlpha:1,ease:Power4.easeOut},trans)

.to(body,.1,{display:'block',onComplete: showTxt}) // show text
.to(body,.1,{display:'block',onComplete: pause_tl}) // 12


.to(garbage,1,{autoAlpha:0, ease:Power4.easeOut},'-=1')
.fromTo(c1_dustbin_dust,1,{autoAlpha:0,x:150,top:355,scale:0.5},{autoAlpha:1,ease:Power4.easeOut},trans)



.to(body,.1,{display:'block',onComplete: pause_tl}) // 12
.to(body,.1,{display:'block',onComplete: hideTxt}) // hide text

.to([c1_mask,c1_broom_stick,c1_gloves,c1_dustbin,football,c1_dustbin_dust,garbage,guy_char,main_char,meera_char],1,{autoAlpha:0})

.to(football_field,1,{webkitFilter:"brightness(1) contrast(1) grayscale(0)", ease:Power4.easeOut},trans)

.to(garbage,1,{autoAlpha:1, ease:Power4.easeOut},trans)




//.fromTo(football,.5,{x:375,top:380},{x:125,top:350,autoAlpha:1,ease:Power1.easeOut},trans) // improvement
.fromTo(meera_char,1,{x:320,top:220,autoAlpha:0},{x:240,top:280,autoAlpha:1, ease: SteppedEase.config(12)},trans)
.fromTo(main_char,1,{x:320,top:220,autoAlpha:0},{x:212,top:320,autoAlpha:1, ease: SteppedEase.config(20)},trans)
.fromTo(guy_char,1,{x:320,top:220,autoAlpha:0},{x:180,top:280,autoAlpha:1,  ease: SteppedEase.config(20)},trans)

.to(body,.1,{display:'block',onComplete: showTxt}) // show text
.to(body,.1,{display:'block',onComplete: pause_tl}) // 14
.to(body,.1,{display:'block',onComplete: pause_tl}) // 15
.to(body,.1,{display:'block',onComplete: pause_tl}) // 16
.to(body,.1,{display:'block',onComplete: hideTxt}) // hide text



// Comp 3
.set(comp_3,{display:'block'},trans)
.to(comp_3, 1, {autoAlpha:1, ease:Power4.easeOut},trans)
.fromTo(c3_home,1,{autoAlpha:0, top:35},{scale:1.6,autoAlpha:1,ease:Power4.easeOut},trans)
.fromTo(c3_dad,1,{autoAlpha:0,x: 380, top: 180},{autoAlpha:1,ease:Power4.easeOut},trans)
.fromTo(c3_mom,1,{autoAlpha:0,x: 440, top: 190},{autoAlpha:1,ease:Power4.easeOut},trans)
.fromTo(c3_main_char,1,{autoAlpha:0,x: 690, top: 280},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(body,.1,{display:'block',onComplete: showTxt}) // show text
.to(body,.1,{display:'block',onComplete: pause_tl}) // 17
.to(body,.1,{display:'block',onComplete: pause_tl}) // 18
.to(body,.1,{display:'block',onComplete: pause_tl}) // 19
.to(body,.1,{display:'block',onComplete: pause_tl}) // 20
.to(body,.1,{display:'block',onComplete: pause_tl}) // 21
.to(body,.1,{display:'block',onComplete: hideTxt}) // hide text

.to(comp_3,1,{autoAlpha:0,ease:Power4.easeOut})
.set(comp_3,{display:'none'},trans)

.set(comp_1,{display:'block'},trans)
.to(comp_1,1,{autoAlpha:1,ease:Power4.easeOut},trans)

.to(body,.1,{display:'block',onComplete: showTxt}) // show text
.to(body,.1,{display:'block',onComplete: pause_tl}) // 22
.to(body,.1,{display:'block',onComplete: pause_tl}) // 23
.to(body,.1,{display:'block',onComplete: pause_tl}) // 24
.to(body,.1,{display:'block',onComplete: pause_tl}) // 25
.to(body,.1,{display:'block',onComplete: pause_tl}) // 26
.to(body,.1,{display:'block',onComplete: pause_tl}) // 27
.to(body,.1,{display:'block',onComplete: hideTxt}) // hide text

.set(comp_1,{autoAlpha:0})
.set(comp_1,{display:'none'})

// Comp 4
.set(comp_4,{display:'block'})
.set(comp_4, {autoAlpha:1},"-=1")
.fromTo(c4_fb_field,.1,{autoAlpha:0,top:0, ease:Power4.easeOut},{autoAlpha:1, ease:Power4.easeOut},trans)
.fromTo(c4_fb_field,.1,{webkitFilter:"blur(0px)", ease:Power4.easeOut},{webkitFilter:"blur(6px)", ease:Power4.easeOut},trans)
.fromTo(c4_sd4,1,{autoAlpha:0,top:300,x:350,scale:2,ease:Power4.easeOut},{autoAlpha:1,},trans)
.to(c4_sd4,1,{x:115,top:80,ease:Power4.easeOut},trans)
.fromTo(c4_screen_box,1,{autoAlpha:0,left:132,height:422,width:556,top:100,scale:.1},{autoAlpha:1,scale:1,ease:Power4.easeOut},trans)


.fromTo(c4_cs1,.5,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(c4_cs1,8,{autoAlpha:1})
.to(c4_cs1,.5,{autoAlpha:0,display:'none',ease:Power4.easeOut},trans)

.fromTo(c4_cs2,.5,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(c4_cs2,10,{autoAlpha:1})
.to(c4_cs2,.5,{autoAlpha:0,display:'none',ease:Power4.easeOut},trans)

.fromTo(c4_cs3,.5,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(c4_cs3,12,{autoAlpha:1})
.to(c4_cs3,.5,{autoAlpha:0,display:'none',ease:Power4.easeOut},trans)

.fromTo(c4_cs4,.5,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(c4_cs4,6,{autoAlpha:1})
.to(c4_cs4,.5,{autoAlpha:0,display:'none',ease:Power4.easeOut},trans)

.fromTo(c4_cs5,.5,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(c4_cs5,8,{autoAlpha:1})
.to(c4_cs5,.5,{autoAlpha:0,display:'none',ease:Power4.easeOut},trans)

.fromTo(c4_cs6,.5,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(c4_cs6,8,{autoAlpha:1})
.to(c4_cs6,.5,{autoAlpha:0,display:'none',ease:Power4.easeOut},trans)

.fromTo(c4_cs7,.5,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(c4_cs5,6,{autoAlpha:1})
.to(c4_cs7,.5,{autoAlpha:0,display:'none',ease:Power4.easeOut},trans)

.set(comp_4, {autoAlpha:0})
.set(c4_screen_box,{autoAlpha:0},trans)
.set(c4_sd4,{autoAlpha:0})
.set(comp_4,{display:'none'})

// Comp 5
.set(comp_5,{display:'block'})
.set(c5_fb_field,{autoAlpha:0})
.to(comp_5, 1, {autoAlpha:1,scale:1.2, ease:Power4.easeOut},"-=1")
.fromTo(c5_main_char,1,{x:450,top:270,autoAlpha:0},{x:440,top:320,autoAlpha:1, ease: SteppedEase.config(12)},trans)
.fromTo(c5_guy_char,1,{x:450,top:280,autoAlpha:0},{x:400,top:310,autoAlpha:1, ease: SteppedEase.config(12)},trans)
.fromTo(c5_meera_char,1,{x:450,top:280,autoAlpha:0},{x:500,top:350,autoAlpha:1, ease: SteppedEase.config(12)},trans)
.fromTo(c5_corporator,1,{x:150,top:300,autoAlpha:0},{x:200,top:350,autoAlpha:1, ease: SteppedEase.config(12)},trans)

.to(body,.1,{display:'block',onComplete: showTxt}) // show text
.to(body,.1,{display:'block',onComplete: pause_tl}) // 28
.to(body,.1,{display:'block',onComplete: pause_tl}) // 29
.to(body,.1,{display:'block',onComplete: pause_tl}) // 30
.to(body,.1,{display:'block',onComplete: pause_tl}) // 31
.to(body,.1,{display:'block',onComplete: pause_tl}) // 32
.to(body,.1,{display:'block',onComplete: pause_tl}) // 33
.to(body,.1,{display:'block',onComplete: pause_tl}) // 34
.to(body,.1,{display:'block',onComplete: pause_tl}) // 35
.to(body,.1,{display:'block',onComplete: hideTxt}) // hide text

.set([c5_office,c5_corporator],{autoAlpha:0})

.fromTo(c5_fb_field,.1,{autoAlpha:0,x:400,top:50,scale:2,ease:Power4.easeOut},{autoAlpha:1,ease:Power4.easeOut})

.fromTo(c5_garbage,1,{autoAlpha:0, x:200, top: 400},{autoAlpha:1})
.fromTo(c5_mobile,1,{autoAlpha:0, scale: .35,top:-120,x: 400},{autoAlpha:1},trans)

.to(body,.1,{display:'block',onComplete: showTxt}) // show text
.to(body,.1,{display:'block',onComplete: pause_tl}) // 36

.fromTo(c5_photo,1,{autoAlpha:0, scale: .8,top:370,x: 180},{autoAlpha:1})

.to(body,.1,{display:'block',onComplete: pause_tl}) // 37

.fromTo(c5_flash,1,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut})
.fromTo(c5_garbage_ss,.1,{autoAlpha:0,top:370,x:190,ease:Power4.easeOut},{autoAlpha:1},trans)
.to(c5_photo,.1,{autoAlpha:0},trans)
.to(c5_flash,1,{autoAlpha:0,ease:Power4.easeOut},trans)
.to(c5_garbage_ss,1,{top:110,x:515,scale:.5,ease:Power4.easeOut},trans)

.to(body,.1,{display:'block',onComplete: pause_tl}) // 38

.fromTo(c5_location,1,{autoAlpha:0,top:0,x: 220},{autoAlpha:1,top:310,x: 220})
.to(c5_location,1,{top:210,x:550,scale:.5,ease:Power4.easeOut},trans)


.to([c5_fb_field,c5_garbage],.1,{autoAlpha:0})
.to([c5_office,c5_corporator],.1,{autoAlpha:1},"-=.2")

.to(body,.1,{display:'block',onComplete: pause_tl}) // 39
.to(body,.1,{display:'block',onComplete: pause_tl}) // 40
.to(body,.1,{display:'block',onComplete: pause_tl}) // 41
.to(body,.1,{display:'block',onComplete: pause_tl}) // 42
.to(body,.1,{display:'block',onComplete: hideTxt}) // hide text

.to([c5_office,c5_corporator,c5_location,c5_garbage_ss,c5_mobile],.1,{autoAlpha:0})
.set(comp_5, {autoAlpha:0,display:'none'})


// Comp 4
.set(comp_6,{display:'block'})
.to(comp_6, 1, {autoAlpha:1, ease:Power4.easeOut},"-=.7")
.fromTo(c6_fb_field,1,{autoAlpha:0,top:0, ease:Power4.easeOut},{autoAlpha:1, ease:Power4.easeOut},trans)
.fromTo(c6_fb_field,1,{webkitFilter:"blur(0px)", ease:Power4.easeOut},{webkitFilter:"blur(6px)", ease:Power4.easeOut},trans)
.fromTo(c6_sd6,1,{autoAlpha:0,top:300,x:350,scale:2,ease:Power4.easeOut},{autoAlpha:1,},trans)
.to(c6_sd6,1,{x:115,top:80,ease:Power4.easeOut},trans)
.fromTo(c6_screen_box,1,{autoAlpha:0,left:132,height:422,width:556,top:100,scale:.1},{autoAlpha:1,scale:1,ease:Power4.easeOut},trans)

.fromTo(c6_cs1,2,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(c6_cs1,6,{autoAlpha:1})
.to(c6_cs1,1,{autoAlpha:0,display:'none',ease:Power4.easeOut},trans)

.fromTo(c6_cs2,2,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(c6_cs2,8,{autoAlpha:1})
.to(c6_cs2,1,{autoAlpha:0,display:'none',ease:Power4.easeOut})

.fromTo(c6_cs3,2,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(c6_cs3,15,{autoAlpha:1})
.to(c6_cs3,1,{autoAlpha:0,display:'none',ease:Power4.easeOut})

.fromTo(c6_cs4,2,{autoAlpha:0},{autoAlpha:1,ease:Power4.easeOut},trans)
.to(c6_cs4,8,{autoAlpha:1})
.to(c6_cs4,1,{autoAlpha:0,display:'none',ease:Power4.easeOut},trans)


.set([meera_char,guy_char,main_char], {x:460,top:305})

.set(comp_1,{display:'block'})
.set(garbage,{display:'none'})
.to(comp_1, .1, {autoAlpha:1},"-=.7")

.to(comp_6, .1, {autoAlpha:0, ease:Power4.easeOut})
.set(comp_6,{display:'none'})

.from([football_field],1,{autoAlpha:1, ease:Power4.easeOut},trans)

.fromTo(main_char,1,{x:450,top:270,autoAlpha:0},{x:200,top:300,autoAlpha:1, ease: SteppedEase.config(30)},trans)
.fromTo(guy_char,1,{x:450,top:280,autoAlpha:0},{x:240,top:285,autoAlpha:1, ease: SteppedEase.config(30)},trans)
.fromTo(meera_char,1,{x:460,top:305,autoAlpha:0},{x:240,top:330,autoAlpha:1, ease: SteppedEase.config(30)},trans)
.fromTo(football,1.5,{x:375,top:380,autoAlpha:0},{x:375,top:380,autoAlpha:1},trans)


.to(body,.1,{display:'block',onComplete: showTxt}) // show text
.to(body,.1,{display:'block',onComplete: pause_tl}) // 43
.to(body,.1,{display:'block',onComplete: pause_tl}) // 44
.to(body,.1,{display:'block',onComplete: pause_tl}) // 45
.to(body,.1,{display:'block',onComplete: hideTxt}) // hide text

.to(comp_1,.1,{scale:1, x:"0%",top:0})
.to(slide_1,.1,{autoAlpha:1})

});