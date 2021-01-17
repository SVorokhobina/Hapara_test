function toggleMenu() {
  document.getElementById('toggling_elem').classList.toggle('showMenu');
  
  let x = document.getElementsByClassName("dropdown-content");
  if (x[0].classList.contains('showMenu') == true) {
      document.getElementById('icon_arrow').src = 'arrow_up.svg';
	  document.getElementById('account_name').classList.add('dropdown_open_style');
  } else {
	  document.getElementById('icon_arrow').src = 'arrow_down.svg';
	  document.getElementById('account_name').classList.remove('dropdown_open_style');
  }
}


// To close the menu, if we click outside of it.
window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
        let x = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < x.length; i++) {
            if (x[i].classList.contains('showMenu') == true) {
                x[i].classList.remove('showMenu');
		        document.getElementById('icon_arrow').src = 'arrow_down.svg';
		        document.getElementById('account_name').classList.remove('dropdown_open_style');
            }
        }
    }
}

