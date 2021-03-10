var form = document.querySelector('form');
var submitBtn = form.querySelector('button');
var a = form.querySelector('.a input');
var b = form.querySelector('.b input');
var c = form.querySelector('.c input');



submitBtn.addEventListener('click' , (e) => {
	e.preventDefault()

	var output = document.querySelector('.output');

	var a_val = Number(a.value);
	var b_val = Number(b.value);
	var c_val = Number(c.value);

	var b2 = Math.pow(-b_val, 2)
	var a_2 = a_val * 2
	var ac_4 = 4 * a_val * c_val;


	if(a_val === 0) {
		var xval = -c_val / b_val;
		if(typeof xval != NaN) {
			output.innerHTML = `The answer is ${xval}`;
		}
		else {
			output.innerHTML = `Sorry. Something went wrong`;
		}
	} else if(b_val === 0) {
		var rt = c_val / a_val;
		var xval = Math.sqrt(Math.abs(rt));

		if(rt <= 0){
			output.innerHTML = `The answer is ${xval}`;
		} else {
			output.innerHTML = `The answer is ${xval}i`;
		}
	} else if(c_val === 0) {
		var xval = -(b_val / a_val);
		output.innerHTML = `The answer is ${xval}`;
	} else if(c_val < 0) {
		var val_2 = Math.sqrt(b2 - ac_4);
		var val_1 = Math.sqrt(Math.abs(b2 + ac_4));
		
		var xval1 = val_1 / a_2;
		var xval2 = val_2 / a_2;

		output.innerHTML = `The answers are ${xval1}i and ${xval2}`;
	}
	 else {
		if(b2 - ac_4 >= 0) {

			var val_1 = Math.sqrt(b2 - ac_4);
			var val_2 = Math.sqrt(b2 + ac_4);

			var xval1 = val_1 / a_2;
			var xval2 = val_2 / a_2;

			output.innerHTML = `The answers are ${xval1} and ${xval2}`;
		}else if(b2 - ac_4 < 0) {
			var val_1 = Math.sqrt(b2 + ac_4);
			var val_2 = Math.sqrt(Math.abs(b2 - ac_4));
			console.log(val_2);

			var xval2 = val_2 / a_2;
			var xval1 = val_1 / a_2;
			
			

			output.innerHTML = `The answers are ${xval1} and ${xval2}i`;

		} else {
			output.innerHTML = `Complex answer`;
		}
		
	}

//Animation


	output.classList.add('success');

	setTimeout(_ => {
		output.classList.remove('success');
	}, 700)




//HR

document.querySelector('hr').style.transform = `scaleX(0.7)`;
document.querySelector('.hr-2').style.transform = `scaleX(0.7)`;



})
