if (navigator.cookieEnabled == false) {
    alert("Your cookies are not enabled. This application requires cookies to be enabled to work. Try doing /blockedcookieinfo for more information about how to fix this issue.")
    throw('(Not A Real Error) Must Enable Cookies')
    }
    speed = eval("localStorage.getItem('speed"+document.getElementById("search-word").value+"')")
    if (speed == null) {
    speed = window.prompt("Do you want to see each word or each page?(type word or page, or \n/commands for more info)","word/page")
    eval("localStorage.setItem('speed"+document.getElementById("search-word").value+"', speed)")
    }
    switch(speed) {
        case "word":
    cookiechecker = eval("localStorage.getItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    var entriesnumberchecker = document.getElementsByTagName('h4')[2].childNodes[2].textContent
    var entriesnumber = JSON.parse(JSON.parse(JSON.stringify(entriesnumberchecker)).split(" ",2)[0]-1)
    var result = 0
    var abort = true
    var abort1 = true
    if (cookiechecker == null) {
    for (i=0;i<document.getElementsByClassName("entry-text").length;i++) {
    if (document.getElementsByClassName("entry-text")[i].children[0] == undefined) {
    abort = window.confirm("Word "+(JSON.parse(result)+1)+":\nMain Entry: "+document.getElementsByClassName("entry-text")[i].innerHTML+"\nPart of Speech: "+document.getElementsByClassName("word-class")[i].innerHTML)
    } else {
    abort = window.confirm("Word "+(JSON.parse(result)+1)+":\nMain Entry: "+JSON.parse(JSON.stringify(document.getElementsByClassName("entry-text")[i].textContent)).slice(1)+"\nSense: "+document.getElementsByClassName("entry-text")[i].children[0].innerHTML+"\nPart of Speech: "+document.getElementsByClassName("word-class")[i].innerHTML)
    }
    result = JSON.parse(result)+1
    if (abort == false || abort1 == false) {
    eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    window.alert("Quick Review Aborted Successfully!");
    throw('(Not A Real Error)Quick Review Aborted Successfully!');
    //This isn't really an error...it's just an easy way to stop JS execution.//
    }
    }
    if (document.getElementsByClassName("entry-text")[i] = "undefined" && result<entriesnumber) {
    result = JSON.parse(result)+1
    goto_results('result-list-desktop', result)
    document.getElementsByClassName("main-search")[0].style.display = "none"
    eval("localStorage.setItem('nonextbuttoncookie"+document.getElementById("search-word").value+"', result)")
    }
    }
    else {
    result = eval("localStorage.getItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    JSON.parse(result)
    for (i=0;i<document.getElementsByClassName("entry-text").length;i++) {
    if (document.getElementsByClassName("entry-text")[i].children[0] == undefined) {
    abort = window.confirm("Word "+(JSON.parse(result)+1)+":\nMain Entry: "+document.getElementsByClassName("entry-text")[i].innerHTML+"\nPart of Speech: "+document.getElementsByClassName("word-class")[i].innerHTML)
    } else {
    abort = window.confirm("Word "+(JSON.parse(result)+1)+":\nMain Entry: "+JSON.parse(JSON.stringify(document.getElementsByClassName("entry-text")[i].textContent)).slice(1)+"\nSense: "+document.getElementsByClassName("entry-text")[i].children[0].innerHTML+"\nPart of Speech: "+document.getElementsByClassName("word-class")[i].innerHTML)
    }
    result = JSON.parse(result)+1
    if (abort == false || abort1 == false) {
    eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    window.alert("Quick Review Aborted Successfully!");
    throw('(Not A Real Error)Quick Review Aborted Successfully!');
    //This isn't really an error...it's just an easy way to stop JS execution.//
    }
    }
    if (document.getElementsByClassName("entry-text")[i] = "undefined" && result<entriesnumber) {
    goto_results('result-list-desktop', result)
    document.getElementsByClassName("main-search")[0].style.display = "none"
    eval("localStorage.setItem('nonextbuttoncookie"+document.getElementById("search-word").value+"', result)")
    }
    }
    if (result>=entriesnumber) {
    eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    window.alert("Quick Review Complete!")
    }
    break;
        case "page":
    var pagenumber = eval("localStorage.getItem('pagenumber"+document.getElementById("search-word").value+"')")
    if (pagenumber == null) {
    var pagenumber = 1
    }
    var cookiechecker = eval("localStorage.getItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    var entriesnumberchecker = document.getElementsByTagName('h4')[2].childNodes[2].textContent
    var entriesnumber = JSON.parse(JSON.parse(JSON.stringify(entriesnumberchecker)).split(" ",2)[0]-1)
    var result = 0
    var confirmcontents = ""
    var resultexcep = 1
    var abort2 = true
    var abort3 = true
    if (cookiechecker == null) {
    for (i=0;i<document.getElementsByClassName("entry-text").length;i++) {
    eval("var confirmcontents"+[i]+" = \"\"")
    if (document.getElementsByClassName("entry-text")[i].children[0] == undefined) {
    eval("var confirmcontents"+[i]+" = confirmcontents"+[i]+".concat(\'document.getElementsByClassName(\`entry-text\`)["+[i]+"].innerHTML\')")
    } else {
    eval("var confirmcontents"+[i]+" = confirmcontents"+[i]+".concat(\"JSON.parse(JSON.stringify(document.getElementsByClassName(\\\"entry-text\\\")["+[i]+"].textContent)).slice(1)+\\'(sense \"+document.getElementsByClassName(\`entry-text\`)[i].children[0].innerHTML+\")\\'\")")
    } 
    eval("confirmcontents = confirmcontents + eval(confirmcontents"+[i]+")+\", \"") 
    result = JSON.parse(result)+1
    }
    abort2 = window.confirm("Page "+(JSON.parse(pagenumber))+":\n"+confirmcontents)
    if (abort2 == false || abort3 == false) {
    eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('pagenumber"+document.getElementById("search-word").value+"')")
    window.alert("Quick Review Aborted Successfully!");
    throw new Error('(Not A Real Error)Quick Review Aborted Successfully!');
    //This isn't really an error...it's just an easy way to stop JS execution.//
    }
    if (result<entriesnumber) {
    goto_results('result-list-desktop', result)
    pagenumber++
    document.getElementsByClassName("main-search")[0].style.display = "none"
    eval("localStorage.setItem('nonextbuttoncookie"+document.getElementById("search-word").value+"', result)")
    eval("localStorage.setItem('pagenumber"+document.getElementById("search-word").value+"', pagenumber)")
    }
    } else {
    result = eval("localStorage.getItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    for (i=0;i<document.getElementsByClassName("entry-text").length;i++) {
    eval("var confirmcontents"+[i]+" = \"\"")
    if (document.getElementsByClassName("entry-text")[i].children[0] == undefined) {
    eval("var confirmcontents"+[i]+" = confirmcontents"+[i]+".concat(\'document.getElementsByClassName(\`entry-text\`)["+[i]+"].innerHTML\')")
    } else {
    eval("var confirmcontents"+[i]+" = confirmcontents"+[i]+".concat(\"JSON.parse(JSON.stringify(document.getElementsByClassName(\\\"entry-text\\\")["+[i]+"].textContent)).slice(1)+\\'(sense \"+document.getElementsByClassName(\`entry-text\`)[i].children[0].innerHTML+\")\\'\")")
    }
    eval("confirmcontents = confirmcontents + eval(confirmcontents"+[i]+")+\", \"") 
    result = JSON.parse(result)+1
    }
    abort3 = window.confirm("Page "+(JSON.parse(pagenumber))+":\n"+confirmcontents)
    if (abort2 == false || abort3 == false) {
    eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('pagenumber"+document.getElementById("search-word").value+"')")
    window.alert("Quick Review Aborted Successfully!");
    throw new Error('(Not A Real Error)Quick Review Aborted Successfully!');
    //This isn't really an error...it's just an easy way to stop JS execution.//
    }
    if (result<entriesnumber) {
    pagenumber++
    goto_results('result-list-desktop', result)
    document.getElementsByClassName("main-search")[0].style.display = "none"
    eval("localStorage.setItem('nonextbuttoncookie"+document.getElementById("search-word").value+"', result)")
    eval("localStorage.setItem('pagenumber"+document.getElementById("search-word").value+"', pagenumber)")
    }
    }
    if (result>=entriesnumber) {
    eval("localStorage.removeItem('nonextbuttoncookie"+document.getElementById("search-word").value+"')")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    window.alert("Quick Review Complete!")
    eval("localStorage.removeItem('pagenumber"+document.getElementById("search-word").value+"')")
    }
    break;
        case "/changelog":
    window.alert("You can find the official Quick Review Changelog here:\nrb.gy/sv2qwb")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    break;
        case "/commands":
    window.alert("These are the current commands:\n1.word\n2.page\n3./changelog\n4./commands\n5./blockedcookieinfo\n6./credits")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    break;
        case "/credits":
    window.alert("Credits:\nProgrammer: Aritra Banerjee\nAlpha Tester: Aaron Chang")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    break;
        case "/blockedcookieinfo":
    window.alert("Chrome Users: Click the three dots on the top right, then click Settings, then click on the \"Privacy & Security\" tab on the left side, click on \"Cookies and other site data\" and set it to \"Allow all cookies\".\n\nSafari Users: Click on the Safari Tab on the top left of your screen, click Preferences on the Drop-Down menu, then click on the Privacy tab and unselect the option for \"Block all cookies\".\n\nFirefox Users: Click the menu button and select options, then select the \"Privacy & Security\" tab on the left and check the option for \"Standard\".")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    break;
        case null:
    window.alert("Quick Review Cancelled!")
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    break;
        default:
    window.alert("That is not an option. Try again.(Note: Put a forward-slash before all commands except for word and page.)");
    eval("localStorage.removeItem('speed"+document.getElementById("search-word").value+"')")
    }
    