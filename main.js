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
for (i=0;i<30;i++) {
eval("var confirmcontents"+[i]+" = \"\"")
eval("var confirmcontents"+[i]+" = confirmcontents"+[i]+".concat(\'document.getElementsByClassName(\`entry-text\`)["+[i]+"].innerHTML\')")
eval("wordres"+[i]+" = eval(confirmcontents"+[i]+")")
}
abort2 = window.confirm("Page "+((cookiechecker/31)+1)+":\n"+wordres0+", "+wordres1+", "+wordres2+", "+wordres3+", "+wordres4+", "+wordres5+", "+wordres6+", "+wordres7+", "+wordres8+", "+wordres9+", "+wordres10+", "+wordres11+", "+wordres12+", "+wordres13+", "+wordres14+", "+wordres15+", "+wordres16+", "+wordres17+", "+wordres18+", "+wordres19+", "+wordres20+", "+wordres21+", "+wordres22+", "+wordres23+", "+wordres24+", "+wordres25+", "+wordres26+", "+wordres27+", "+wordres28+", "+wordres29)
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
for (i=0;i<30;i++) {
eval("var confirmcontents"+[i]+" = \"\"")
eval("var confirmcontents"+[i]+" = confirmcontents"+[i]+".concat(\'document.getElementsByClassName(\`entry-text\`)["+[i]+"].innerHTML\')")
eval("wordres"+[i]+" = eval(confirmcontents"+[i]+")")
}
abort3 = window.confirm("Page "+((cookiechecker/31)+1)+":\n"+wordres0+", "+wordres1+", "+wordres2+", "+wordres3+", "+wordres4+", "+wordres5+", "+wordres6+", "+wordres7+", "+wordres8+", "+wordres9+", "+wordres10+", "+wordres11+", "+wordres12+", "+wordres13+", "+wordres14+", "+wordres15+", "+wordres16+", "+wordres17+", "+wordres18+", "+wordres19+", "+wordres20+", "+wordres21+", "+wordres22+", "+wordres23+", "+wordres24+", "+wordres25+", "+wordres26+", "+wordres27+", "+wordres28+", "+wordres29)
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
eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
}

