cookiechecker = localStorage.getItem('nonextbuttoncookie')
var entriesnumberchecker = document.getElementsByTagName('h4')[2].childNodes[2].textContent
var entriesnumber = JSON.parse(JSON.parse(JSON.stringify(entriesnumberchecker)).split(" ",2)[0]-1)
var result = 0
if (cookiechecker == null) {
for (i=0;i<document.getElementsByClassName("entry-text").length;i++) {
window.alert(document.getElementsByClassName("entry-text")[i].innerHTML)
result = JSON.parse(result)+1
}
if (document.getElementsByClassName("entry-text")[i] = "undefined" && result<entriesnumber) {
result = JSON.parse(result)+1
goto_results('result-list-desktop', result)
localStorage.setItem("nonextbuttoncookie", result)
}
}
else {
result = localStorage.getItem("nonextbuttoncookie")
JSON.parse(result)
for (i=0;i<document.getElementsByClassName("entry-text").length;i++) {
window.alert(document.getElementsByClassName("entry-text")[i].innerHTML)
result = JSON.parse(result)+1
}
if (document.getElementsByClassName("entry-text")[i] = "undefined" && result<entriesnumber) {
result = JSON.parse(result)+1
goto_results('result-list-desktop', result)
localStorage.setItem("nonextbuttoncookie", result)
}
}
if (result>=entriesnumber) {
localStorage.removeItem("nonextbuttoncookie")
window.alert("Advanced Search Complete!")
}
