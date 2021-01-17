let teacher = [
	'teacher@school.org', 
	['Lessons', '#lessons'], 
	['Libraries', '#libraries'],
	];

	
let student = [
	'student@school.org', 
	['Assignments', '#assignments'],
	];


function changeUser() {
	let userClicked = document.getElementById('user_to_choose');
	
	if (userClicked.innerHTML == teacher[0]) {
		toggleUserMenu(teacher, student);
	} else if (userClicked.innerHTML == student[0]) {
		toggleUserMenu(student, teacher);
	}
}


function toggleUserMenu(user_clicked, user_current){
    document.getElementById('user_to_choose').innerHTML = user_current[0];
	document.getElementsByClassName('dropbutton')[0].childNodes[0].nodeValue = user_clicked[0];
	
	let x = document.getElementsByClassName('header_menu');
	for (let i = 0; i < user_clicked.length; i++) {
		if ((user_clicked[i+1] === undefined) && (x[i])) {
			while (x[i]) {
				x[i].remove();
			}
		} else if ((user_clicked[i+1]) && (x[i])) {
			x[i].innerHTML = user_clicked[i+1][0];
			x[i].href = user_clicked[i+1][1];
		} else if ((user_clicked[i+1]) && (!x[i])) {
			let newLi = document.createElement('li');
			let newA = document.createElement('a');
			let newText = document.createTextNode(`${user_clicked[i+1][0]}`);
			
			newA.appendChild(newText);
			newLi.appendChild(newA);
			newA.classList.add('header_menu');
			newA.href = user_clicked[i+1][1];
			
			document.getElementsByTagName('ul')[0].appendChild(newLi);
			document.getElementsByClassName('dropdown')[0].insertAdjacentElement('beforebegin', newLi);
		}
	}
}

	