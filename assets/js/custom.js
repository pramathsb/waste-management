$(document).ready(function () {

	var playing = false;
	$('#audio-control').on('click', function() {
			


			if(playing == true) {

				$('#Audio').trigger('pause')
				$(this).text('Play');
				playing = false;
			}
			else {
				$('#Audio').trigger('play')
				$(this).text('Pause');
				playing = true;		

			} 
	});


	$('#update-name').on('click', function () {
		localStorage.setItem("studentName", $('#name-input').val());
		localStorage.setItem("schoolName", $('#school-input').val());
		if ($('#name-input').val()==null || $('#name-input').val()=='' || $('#name-input').val()=="") {

		}
		else {
			$('#user-name').html(localStorage.getItem("studentName"));
			$('#org-name').html(localStorage.getItem("schoolName"));
			$('#name-modal').modal('hide')
		}

		if(playing == true) {

				$('#Audio').trigger('pause')
				$(this).text('Play');
				playing = false;
			}
			else {
				$('#Audio').trigger('play')
				$(this).text('Pause');
				playing = true;		

			} 


	});


	// After everything

	// Check for existing student
//	if (localStorage.getItem("studentName") === null) {
		$('#name-modal').modal({backdrop: 'static',keyboard: false,show: true});
	//}
	// else {
	// 	$('#user-name').html(localStorage.getItem("studentName"));
	// }

	// reset student name 
	$('#reset').on('click', function() {

		function emptystudentName () {
			$('#name-input').val(null)
			localStorage.removeItem("studentName");
			$('#user-name').html("Annonymous");
		}
		emptystudentName();
		$('#name-modal').modal({backdrop: 'static',keyboard: false,show: true});
				tl.restart();
	});


});


