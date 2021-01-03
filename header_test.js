function toggleMenu() {
  document.getElementById('toggling_elem').classList.toggle('showMenu');
}

// To close the menu, if we click outside of it.
window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {
    let x = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < x.length; i++) {
      if (x[i].classList.contains('showMenu') == true) {
        x[i].classList.remove('showMenu');
      }
    }
  }
}