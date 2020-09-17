cookiechecker = localStorage.getItem("nonextbuttoncookie");
if (cookiechecker == null) {
  for (i = 0; i < document.getElementsByClassName("entry-text").length; i++) {
    window.alert(document.getElementsByClassName("entry-text")[i].innerHTML);
  }
  if ((document.getElementsByClassName("entry-text")[i] = "undefined")) {
    var result = 31;
    goto_results("result-list-desktop", result);
    localStorage.setItem("nonextbuttoncookie", result);
  }
} else {
  result = localStorage.getItem("nonextbuttoncookie");
  JSON.parse(result);
  for (i = 0; i < document.getElementsByClassName("entry-text").length; i++) {
    window.alert(document.getElementsByClassName("entry-text")[i].innerHTML);
  }
  if ((document.getElementsByClassName("entry-text")[i] = "undefined")) {
    var result = JSON.parse(result) + 31;
    goto_results("result-list-desktop", result);
    localStorage.setItem("nonextbuttoncookie", result);
  }
}
