const fungsiScroll = function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById('header').style.backgroundColor = "#282A35";
  } else {
    document.getElementById('header').style.backgroundColor = "transparent";
  }
}

window.onscroll = fungsiScroll;