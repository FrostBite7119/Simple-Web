const fungsiScroll = function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('header').style.backgroundColor = "#282A35";
  } else {
    document.getElementById('header').style.backgroundColor = "transparent";
  }
}

window.onscroll = fungsiScroll;

const modal = document.getElementById('id01');

modal.onclick = function(e){
  if(modal == e.target){
    modal.style.display = 'none';
  }
};