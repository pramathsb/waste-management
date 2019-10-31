
function forcePpause () {
	tl.pause();

	//.to(body,.1,{display:'block',onComplete: forcePpause})
}
function pause_tl () {

	tl.pause();

	switch (head) {

		case 1 : 
		txt_update ('thumb_user_l','Hey, Lets play football.')

		// $('.next').click();
		break;


		case 2 : 
		txt_update ('thumb_user_l','Oh God! Garbage! I wont get the ball.')

		// $('.next').click();
		break;

		case 3 : 
		txt_update ('thumb_guy_l','I too wont get the ball.')

		// $('.next').click();
		break;

		case 4 : 
		txt_update ('thumb_user_l','Hey you still want to play right?')

		// $('.next').click();
		break;

		case 5 : 
		txt_update ('thumb_guy_l','Yes, of course!')

		// $('.next').click();
		break;

		case 6 : 
		txt_update ('thumb_user_l','By the way who threw garbage inside the playground?')

		// $('.next').click();
		break;

		case 7 : 
		txt_update ('thumb_guy_l','I don’t know, Let us wait for Meera to come. May be she will know.')

		// $('.next').click();
		break;

		case 8 : 
		txt_update ('thumb_meera_l','Hey! Why are you guys not playing?')

		// $('.next').click();
		break;

		case 9 : 
		txt_update ('thumb_user_l','We cannot play because the ball has fallen inside the garbage dump.')

		// $('.next').click();
		break;

		case 10 : 
		txt_update ('thumb_guy_l','So what do we do now?')

		// $('.next').click();
		break;

		case 11 : 
		txt_update ('thumb_meera_l','Guys, it is simple. if we have to play, We got to clean, come lets get cleaning!')

		// $('.next').click();
		break;

		case 12 : 
		txt_update ('thumb_guy_l','Hey good job cleaning the garbage!')
		// $('.next').click();
		break;


		case 13 : 
		txt_update ('thumb_meera_l','Its Late. Let us meet tomorrow evening here.')
		// $('.next').click();
		break;


		case 14 : 
		txt_update ('thumb_guy_l','Oh! There is garbage again! What do we do?')
		// $('.next').click();

		break;

		case 15 : 
		txt_update ('thumb_user_l','We need to know who is dumping the garbage!')
		// $('.next').click();
		break;


		case 16 : 
		txt_update ('thumb_meera_l','Why dont we check at our house and get back!')
		// $('.next').click();
		break;

		case 17 : 
		txt_update ('thumb_user_l','Dad, Did you throw garbage inside the playground yesterday?')
		// $('.next').click();
		break;

		case 18 : 
		txt_update ('thumb_dad_l','Yes!')
		// $('.next').click();
		break;

		case 19 : 
		txt_update ('thumb_user_l','Why did you throw it inside the playground?')
		// $('.next').click();
		break;

		case 20 : 
		txt_update ('thumb_dad_l','There is no other option my son as there is no dump yard in our locality and the garbage collector is absent from one week.')
		// $('.next').click();
		break;

		case 21 : 
		txt_update ('thumb_user_l','Oh okay. I will have to go back and meet my friends. Bye!')
		// $('.next').click();
		break;


		case 22 : 
		txt_update ('thumb_meera_l','What did you guys find out?')
		// $('.next').click();
		break;


		case 23 : 
		txt_update ('thumb_user_l','My parents have dumped garbage yesterday!')
		// $('.next').click();
		break;

		case 24 : 
		txt_update ('thumb_guy_l','Yes, My parents have dumped too!')
		// $('.next').click();
		break;

		case 25 : 
		txt_update ('thumb_user_l','It seems there is no dump yard in our locality and the garbage collector is absent from one week.')
		// $('.next').click();
		break;

		case 26 : 
		txt_update ('thumb_guy_l','So, What do we do now?')
		// $('.next').click();
		break;

		case 27 : 
		txt_update ('thumb_meera_l','Wait, My dad is a civic governance expert. He might know the solution. Come lets talk to him!')
		// $('.next').click();
		break;

		case 28 : 
		txt_update ('thumb_meera_l','Hello sir!')
		// $('.next').click();

		break;

		case 29 : 
		txt_update ('thumb_corporator_l','Hello, How may I help you?')
		// $('.next').click();

		break;

		case 30 : 
		txt_update ('thumb_user_l','Sir, there is garbage inside the football playground, And we are not able to play.')
		// $('.next').click();

		break;

		case 31 : 
		txt_update ('thumb_corporator_l','Okay. Why don’t you talk to the garbage collector tomorrow to clean it.')
		// $('.next').click();

		break;

		case 32 : 
		txt_update ('thumb_guy_l','Sir, the garbage collector is absent from last one week.')
		// $('.next').click();

		break;



		case 33 : 
		txt_update ('thumb_meera_l','And there is no dump yard as well in our locality.')
		// $('.next').click();

		break;


		case 34 : 
		txt_update ('thumb_corporator_l','Okay. Please raise a complaint regarding this. I shall look into it.')
		// $('.next').click();

		break;

		case 35 : 
		txt_update ('thumb_user_l','How do we do it sir?')
		// $('.next').click();
		break;

		case 36 : 
		txt_update ('thumb_corporator_l','First, write a request letter.')
		// $('.next').click();
		break;

		case 37 : 
		txt_update ('thumb_corporator_l','Take a photograph as an evidence to the problem.')
		// $('.next').click();

		break;

		case 38 : 
		txt_update ('thumb_corporator_l','Mention the location where the problem exists.')
		// $('.next').click();
		break;

		case 39 : 
		txt_update ('thumb_user_l','Sir, please accept our complaint.');
		// $('.next').click();
		break;

		case 40 : 
		txt_update ('thumb_corporator_l','Okay. Your complaint Is registered. Here is your complaint no #14587')
		// $('.next').click();
		break;

		case 41 : 
		txt_update ('thumb_corporator_l','You can follow up on the progress with our secretary.')
		// $('.next').click();
		break;

		case 42 : 
		txt_update ('thumb_meera_l','Sure sir, We will follow up. Thank you very much.')
		// $('.next').click();
		break;

		case 43 : 
		txt_update ('thumb_guy_l','Hey, Awesome! The problem is resolved. ')
		// $('.next').click();
		break;


		case 44 : 
		txt_update ('thumb_meera_l','Come, lets play now.')
		// $('.next').click();
		break;


		case 45 : 
		txt_update ('thumb_user_l','Yes!')


		break;
	}


}

function txt_update (char,a) {
	$('#TxT').hide();
	$('.thumb-img').hide('100');
	$('#TxT').html(a);
	$("#"+char).fadeIn('100');
	$('#TxT').fadeIn('100');
	console.log('hit enter')
	read = 1;
}
