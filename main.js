if (navigator.cookieEnabled == false) {
    alert("Your cookies are not enabled. This application requires cookies to be enabled to work. Try doing /blockedcookieinfo for more information about how to fix this issue.")
    throw('(Not A Real Error) Must Enable Cookies')
    }
    speed = eval("localStorage.getItem('speed"+document.getElementById("search-word").value+"')")
    if (speed == null) {
    speed = window.prompt("Do you want to see each word or each page?(type word or page, or \n/commands for more info)","word/page")
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
    abort = window.confirm("Word "+(JSON.parse(result)+1)+":\nMain Entry: "+document.getElementsByClassName("entry-text")[i].innerHTML+"\nPart of Speech: "+document.getElementsByClassName("word-class")[i].innerHTML)
    result = JSON.parse(result)+1
    if (abort == false || abort1 == false) {
    eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    window.alert("Quick Review Aborted Successfully!");
    throw('(Not A Real Error)Quick Review Aborted Successfully');
    //This isn't really an error...it's just an easy way to stop JS execution.//
    }
    }
    if (document.getElementsByClassName("entry-text")[i] = "undefined" && result<entriesnumber) {
    result = JSON.parse(result)+1
    goto_results('result-list-desktop', result)
    document.getElementById("search-word").style.display = "none"
    eval("localStorage.setItem('nonextbuttoncookie"+document.getElementById("search-word").value+"', result)")
    }
    }
    else {
    result = eval("localStorage.getItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    JSON.parse(result)
    for (i=0;i<document.getElementsByClassName("entry-text").length;i++) {
    abort1 = window.confirm("Word "+JSON.parse(result)+":\nMain Entry: "+document.getElementsByClassName("entry-text")[i].innerHTML+"\nPart of Speech: "+document.getElementsByClassName("word-class")[i].innerHTML)
    result = JSON.parse(result)+1
    if (abort == false || abort1 == false) {
    eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    window.alert("Quick Review Aborted Successfully!");
    throw('(Not A Real Error)Quick Review Aborted');
    //This isn't really an error...it's just an easy way to stop JS execution.//
    }
    }
    if (document.getElementsByClassName("entry-text")[i] = "undefined" && result<entriesnumber) {
    goto_results('result-list-desktop', result)
    document.getElementById("search-word").style.display = "none"
    eval("localStorage.setItem('nonextbuttoncookie"+document.getElementById("search-word").value+"', result)")
    }
    }
    if (result>=entriesnumber) {
    eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    window.alert("Quick Review Complete!")
    }
    } else if (speed == "page") {
    var cookiechecker = eval("localStorage.getItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    var entriesnumberchecker = document.getElementsByTagName('h4')[2].childNodes[2].textContent
    var entriesnumber = JSON.parse(JSON.parse(JSON.stringify(entriesnumberchecker)).split(" ",2)[0]-1)
    var result = 0
    var resultexcep = 0
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
    window.alert("Quick Review Aborted Successfully!");
    throw new Error('(Not A Real Error)Quick Review Aborted Successfully');
    //This isn't really an error...it's just an easy way to stop JS execution.//
    }
    if (result<entriesnumber) {
    goto_results('result-list-desktop', result)
    document.getElementById("search-word").style.display = "none"
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
    if (result >= 31) {
    resultexcep = (((JSON.parse(result)-1)/30)+1)
    }
    abort3 = window.confirm("Page "+(resultexcep)+":\n"+wordres0+", "+wordres1+", "+wordres2+", "+wordres3+", "+wordres4+", "+wordres5+", "+wordres6+", "+wordres7+", "+wordres8+", "+wordres9+", "+wordres10+", "+wordres11+", "+wordres12+", "+wordres13+", "+wordres14+", "+wordres15+", "+wordres16+", "+wordres17+", "+wordres18+", "+wordres19+", "+wordres20+", "+wordres21+", "+wordres22+", "+wordres23+", "+wordres24+", "+wordres25+", "+wordres26+", "+wordres27+", "+wordres28+", "+wordres29)
    if (abort2 == false || abort3 == false) {
    eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    window.alert("Quick Review Aborted Successfully!");
    throw new Error('(Not A Real Error)Quick Review Aborted Successfully');
    //This isn't really an error...it's just an easy way to stop JS execution.//
    }
    if (result<entriesnumber) {
    result = JSON.parse(result)+30
    goto_results('result-list-desktop', result)
    document.getElementById("search-word").style.display = "none"
    eval("localStorage.setItem('nonextbuttoncookie"+document.getElementById("search-word").value+"', result)")
    }
    }
    if (result>=entriesnumber) {
    eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    window.alert("Quick Review Complete!")
    }
    } else if (speed == "/changelog") {
    window.alert("You can find the official Quick Review Changelog here:\nrb.gy/sv2qwb")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    } else if (speed == "/commands") {
    window.alert("These are the current commands:\n1.word\n2.page\n3./changelog\n4./commands\n5./blockedcookieinfo\n6./credits")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    } else if (speed == "/credits") {
    window.alert("Credits:\nProgrammer: Aritra Banerjee\nAlpha Tester: Aaron Chang")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    } else if (speed == "/blockedcookieinfo") {
    window.alert("Chrome Users: Click the three dots on the top right, then click Settings, then click on the \"Privacy & Security\" tab on the left side, click on \"Cookies and other site data\" and set it to \"Allow all cookies\".\n\nSafari Users: Click on the Safari Tab on the top left of your screen, click Preferences on the Drop-Down menu, then click on the Privacy tab and unselect the option for \"Block all cookies\".\n\nFirefox Users: Click the menu button and select options, then select the \"Privacy & Security\" tab on the left and check the option for \"Standard\".")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    } else if (speed == null) {
    window.alert("Quick Review Aborted Successfully!")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    } else{
    window.alert("That is not an option. Try again.(Note: Put a forward-slash before all commands except for word and page.)");
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    }
    