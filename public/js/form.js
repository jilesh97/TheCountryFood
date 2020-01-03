$(document).ready(function() {

	$('#reg_frm').on('submit', function(event) {
		//alert('in');
		//alert($('input#passinput').val());
		var data = {
				first_name : $('#firstnameinput').val(),
				last_name : $('#lastnameinput').val(),
				password : $('#passinput').val(),
				email : $('#emailinput').val(),
				contact : $('#contactinput').val(),
				type : $('#typeinput option:selected').val()
			}
		$.ajax({
			header : {
				'Content-Type': 'application/json;charset=UTF-8',
        		'Access-Control-Allow-Origin':'*'
			},
			data : JSON.stringify(data, null, '\t'),
			type : 'POST',
			url : 'http://127.0.0.1:5000/api/users/register',
			crossDomain: true,
			dataType:'json',
			contentType: 'application/json;charset=UTF-8',
			processData: false
		})
		.done(function(data) {

			if (data.error) {
				$('#errorAlert').text(data.error).show();
				$('#successAlert').hide();
			}
			else {
				$('#successAlert').text(data.name).show();
				$('#errorAlert').hide();
			}

		});

		event.preventDefault();

	});
	$('#log_frm').on('submit', function(event) {
		alert('in');
		//alert($('input#passinput').val());
		var data = {
				password : $('#passinput').val(),
				email : $('#emailinput').val()
			}
		$.ajax({
			header : {
				'Content-Type': 'application/json;charset=UTF-8',
        		'Access-Control-Allow-Origin':'*'
			},
			data : JSON.stringify(data, null, '\t'),
			type : 'POST',
			url : 'http://127.0.0.1:5000/api/users/login',
			crossDomain: true,
			dataType:'json',
			contentType: 'application/json;charset=UTF-8',
			processData: false
		})
		.done(function(data) {

			if (data.error) {
				$('#errorAlert').text(data.error).show();
				$('#successAlert').hide();
			}
			else {
				$('#successAlert').text(data.name).show();
				$('#errorAlert').hide();
			}

		});

		event.preventDefault();

	});

});