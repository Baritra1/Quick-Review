speed = eval("localStorage.getItem('speed"+document.getElementById("search-word").value+"')")
if (speed == null) {
speed = window.prompt("Do you want to see each word or each page?(type word or page)")
eval("localStorage.setItem('speed"+document.getElementById("search-word").value+"', speed)")
}
if (speed == "word") {
cookiechecker = eval("localStorage.getItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
var entriesnumberchecker = document.getElementsByTagName('h4')[2].childNodes[2].textContent
var entriesnumber = JSON.parse(JSON.parse(JSON.stringify(entriesnumberchecker)).split(" ",2)[0]-1)
var result = 0
var abort = true
var abort1 = true
if (cookiechecker == null) {
for (i=0;i<document.getElementsByClassName("entry-text").length;i++) {
abort = window.confirm("Main Entry: "+document.getElementsByClassName("entry-text")[i].innerHTML+"\nPart of Speech: "+document.getElementsByClassName("word-class")[i].innerHTML)
result = JSON.parse(result)+1
if (abort == false || abort1 == false) {
eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
window.alert("Advanced Search Aborted Successfully!");
throw new Error('(Not A Real Error)Advanced Search Aborted Successfully');
//This isn't really an error...it's just an easy way to stop JS execution.//
}
}
if (document.getElementsByClassName("entry-text")[i] = "undefined" && result<entriesnumber) {
result = JSON.parse(result)+1
goto_results('result-list-desktop', result)
eval("localStorage.setItem('nonextbuttoncookie"+document.getElementById("search-word").value+"', result)")
}
}
else {
result = eval("localStorage.getItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
JSON.parse(result)
for (i=0;i<document.getElementsByClassName("entry-text").length;i++) {
abort1 = window.confirm("Main Entry: "+document.getElementsByClassName("entry-text")[i].innerHTML+"\nPart of Speech: "+document.getElementsByClassName("word-class")[i].innerHTML)
result = JSON.parse(result)+1
if (abort == false || abort1 == false) {
eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
window.alert("Advanced Search Aborted Successfully!");
throw new Error('(Not A Real Error)Advanced Search Aborted');
//This isn't really an error...it's just an easy way to stop JS execution.//
}
}
if (document.getElementsByClassName("entry-text")[i] = "undefined" && result<entriesnumber) {
result = JSON.parse(result)+1
goto_results('result-list-desktop', result)
eval("localStorage.setItem('nonextbuttoncookie"+document.getElementById("search-word").value+"', result)")
}
}
if (result>=entriesnumber) {
eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
window.alert("Advanced Search Complete!")
}
} else if (speed == "page") {
var cookiechecker = eval("localStorage.getItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
var entriesnumberchecker = document.getElementsByTagName('h4')[2].childNodes[2].textContent
var entriesnumber = JSON.parse(JSON.parse(JSON.stringify(entriesnumberchecker)).split(" ",2)[0]-1)
var result = 0
var abort2 = true
var abort3 = true
if (cookiechecker == null) {
abort2 = window.confirm (document.getElementsByClassName("entry-text")[0].innerHTML+", "+document.getElementsByClassName("entry-text")[1].innerHTML+", "+document.getElementsByClassName("entry-text")[2].innerHTML+", "+document.getElementsByClassName("entry-text")[3].innerHTML+", "+document.getElementsByClassName("entry-text")[4].innerHTML+", "+document.getElementsByClassName("entry-text")[5].innerHTML+", "+document.getElementsByClassName("entry-text")[6].innerHTML+", "+document.getElementsByClassName("entry-text")[7].innerHTML+", "+document.getElementsByClassName("entry-text")[8].innerHTML+", "+document.getElementsByClassName("entry-text")[9].innerHTML+", "+document.getElementsByClassName("entry-text")[10].innerHTML+", "+document.getElementsByClassName("entry-text")[11].innerHTML+", "+document.getElementsByClassName("entry-text")[12].innerHTML+", "+document.getElementsByClassName("entry-text")[13].innerHTML+", "+document.getElementsByClassName("entry-text")[14].innerHTML+", "+document.getElementsByClassName(
"entry-text")[15].innerHTML+", "+document.getElementsByClassName("entry-text")[16].innerHTML+", "+document.getElementsByClassName("entry-text")[17].innerHTML+", "+document.getElementsByClassName("entry-text")[18].innerHTML+", "+document.getElementsByClassName("entry-text")[19].innerHTML+", "+document.getElementsByClassName("entry-text")[20].innerHTML+", "+document.getElementsByClassName("entry-text")[21].innerHTML+", "+document.getElementsByClassName("entry-text")[20].innerHTML+", "+document.getElementsByClassName("entry-text")[23].innerHTML+", "+document.getElementsByClassName("entry-text")[22].innerHTML+", "+document.getElementsByClassName("entry-text")[25].innerHTML+", "+document.getElementsByClassName("entry-text")[23].innerHTML+", "+document.getElementsByClassName("entry-text")[27].innerHTML+", "+document.getElementsByClassName("entry-text")[24].innerHTML+", "+document.getElementsByClassName("entry-text")[29].innerHTML)
result = JSON.parse(result)+31
if (abort2 == false || abort3 == false) {
eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
window.alert("Advanced Search Aborted Successfully!");
throw new Error('(Not A Real Error)Advanced Search Aborted Successfully');
//This isn't really an error...it's just an easy way to stop JS execution.//
}
if (result<entriesnumber) {
goto_results('result-list-desktop', result)
eval("localStorage.setItem('nonextbuttoncookie"+document.getElementById("search-word").value+"', result)")
}
}
else {
result = eval("localStorage.getItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
abort3 = window.confirm (document.getElementsByClassName("entry-text")[0].innerHTML+", "+document.getElementsByClassName("entry-text")[1].innerHTML+", "+document.getElementsByClassName("entry-text")[2].innerHTML+", "+document.getElementsByClassName("entry-text")[3].innerHTML+", "+document.getElementsByClassName("entry-text")[4].innerHTML+", "+document.getElementsByClassName("entry-text")[5].innerHTML+", "+document.getElementsByClassName("entry-text")[6].innerHTML+", "+document.getElementsByClassName("entry-text")[7].innerHTML+", "+document.getElementsByClassName("entry-text")[8].innerHTML+", "+document.getElementsByClassName("entry-text")[9].innerHTML+", "+document.getElementsByClassName("entry-text")[10].innerHTML+", "+document.getElementsByClassName("entry-text")[11].innerHTML+", "+document.getElementsByClassName("entry-text")[12].innerHTML+", "+document.getElementsByClassName("entry-text")[13].innerHTML+", "+document.getElementsByClassName("entry-text")[14].innerHTML+", "+document.getElementsByClassName(
"entry-text")[15].innerHTML+", "+document.getElementsByClassName("entry-text")[16].innerHTML+", "+document.getElementsByClassName("entry-text")[17].innerHTML+", "+document.getElementsByClassName("entry-text")[18].innerHTML+", "+document.getElementsByClassName("entry-text")[19].innerHTML+", "+document.getElementsByClassName("entry-text")[20].innerHTML+", "+document.getElementsByClassName("entry-text")[21].innerHTML+", "+document.getElementsByClassName("entry-text")[20].innerHTML+", "+document.getElementsByClassName("entry-text")[23].innerHTML+", "+document.getElementsByClassName("entry-text")[22].innerHTML+", "+document.getElementsByClassName("entry-text")[25].innerHTML+", "+document.getElementsByClassName("entry-text")[23].innerHTML+", "+document.getElementsByClassName("entry-text")[27].innerHTML+", "+document.getElementsByClassName("entry-text")[24].innerHTML+", "+document.getElementsByClassName("entry-text")[29].innerHTML)
if (abort2 == false || abort3 == false) {
eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
window.alert("Advanced Search Aborted Successfully!");
throw new Error('(Not A Real Error)Advanced Search Aborted Successfully');
//This isn't really an error...it's just an easy way to stop JS execution.//
}
if (result<entriesnumber) {
result = JSON.parse(result)+31
goto_results('result-list-desktop', result)
eval("localStorage.setItem('nonextbuttoncookie"+document.getElementById("search-word").value+"', result)")
}
}
if (result>=entriesnumber || result>=entriesnumber) {
eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
window.alert("Advanced Search Complete!")
}
} else {
window.alert("That is an invalid answer. Try again");
}
