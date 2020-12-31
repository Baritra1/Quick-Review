var version = "Alpha v4.2";
var name = "";
if (navigator.cookieEnabled == false) {
  alert(
    "Your cookies are not enabled. This application requires cookies to be enabled to work. Try doing /blockedcookieinfo for more information about how to fix this issue."
  );
  throw "(Not A Real Error) Must Enable Cookies";
}
name = "speed" + document.getElementById("search-word").value;
speed = localStorage.getItem(name);
if (speed == null) {
  speed = window.prompt(
    "Version: " +
      version +
      "\nDo you want to see each word or each page?(type word or page, or \n/commands for more info)",
    "word/page/listmaker/quizzer"
  );
  name = "speed" + document.getElementById("search-word").value;
  localStorage.setItem(name, speed);
}
switch (speed) {
  case "word":
    function timer(ms) {
      return new Promise((res) => setTimeout(res, ms));
    }
    async function load() {
      name =
        "nonextbuttoncookie" + document.getElementById("search-word").value;
      cookiechecker = localStorage.getItem(name);
      if (cookiechecker == null) {
        var result = 0;
      } else {
        result = cookiechecker;
      }
      var entriesnumberchecker =
        document.getElementsByTagName("h4")[2].childNodes[2].textContent;
      var entriesnumber = JSON.parse(
        JSON.parse(JSON.stringify(entriesnumberchecker)).split(" ", 2)[0] - 1
      );
      var abort = true;
      var abort1 = true;
      loop1: for (asdf = 0; result < entriesnumber; asdf++) {
        cookiechecker = result;
        document.querySelector(
          "body > div.container > div > div.span8 > div.main-search"
        ).style.visibility = "hidden";
        if (cookiechecker == 0) {
          for (
            i = 0;
            i < document.getElementsByClassName("entry-text").length;
            i++
          ) {
            if (
              document.getElementsByClassName("entry-text")[i].children[0] ==
              undefined
            ) {
              await timer(100);
              abort = window.confirm(
                "Word " +
                  (JSON.parse(result) + 1) +
                  ":\nMain Entry: " +
                  document.getElementsByClassName("entry-text")[i].innerHTML +
                  "\nPart of Speech: " +
                  document.getElementsByClassName("word-class")[i].innerHTML
              );
            } else {
              await timer(100);
              abort = window.confirm(
                "Word " +
                  (JSON.parse(result) + 1) +
                  ":\nMain Entry: " +
                  JSON.parse(
                    JSON.stringify(
                      document.getElementsByClassName("entry-text")[i]
                        .textContent
                    )
                  ).slice(1) +
                  "\nSense: " +
                  document.getElementsByClassName("entry-text")[i].children[0]
                    .innerHTML +
                  "\nPart of Speech: " +
                  document.getElementsByClassName("word-class")[i].innerHTML
              );
            }
            result = JSON.parse(result) + 1;
            if (abort == false || abort1 == false) {
              name =
                "nonextbuttoncookie" +
                document.getElementById("search-word").value;
              localStorage.removeItem(name);
              name = "speed" + document.getElementById("search-word").value;
              localStorage.removeItem(name);
              document.querySelector(
                "body > div.container > div > div.span8 > div.main-search"
              ).style.visibility = "initial";
              window.alert("Quick Review Aborted Successfully!");
              throw "(Not A Real Error)Quick Review Aborted Successfully!";
              //This isn't really an error...it's just an easy way to stop JS execution.//
            }
          }
          name =
            "nonextbuttoncookie" + document.getElementById("search-word").value;
          localStorage.setItem(name, result);
          if (location.pathname == "/advanced-search.php") {
            if (location.search == "") {
              searchfinder =
                "https://unabridged.merriam-webster.com/advanced-search.php?";
              for (i = 5; i <= 16; i++) {
                searchfinder =
                  searchfinder +
                  document.querySelector("#result-list-desktop").children[i]
                    .name +
                  "=";
                searchfinder =
                  searchfinder +
                  document.querySelector("#result-list-desktop").children[i]
                    .value +
                  "&";
              }
              searchfinder = searchfinder + "&start=" + JSON.stringify(result);
              $("div.results").load(searchfinder + " div.results");
              await timer(250);
              continue loop1;
            } else {
              finalurl = document.URL + "&start=" + JSON.stringify(result);
              $("div.results").load(finalurl + " div.results");
              await timer(250);
              continue loop1;
            }
          } else {
            rawurl = document.URL;
            filteredurl = rawurl.slice(50);
            finalurl =
              "https://unabridged.merriam-webster.com/unabridged/" +
              filteredurl +
              "?ref=unabridged&word=" +
              filteredurl +
              "&start=" +
              JSON.stringify(result) +
              "&action=check";
            $("div.results").load(finalurl + " div.results");
            await timer(250);
            continue loop1;
          }
        } else {
          name =
            "nonextbuttoncookie" + document.getElementById("search-word").value;
          result = localStorage.getItem(name);
          JSON.parse(result);
          for (
            i = 0;
            i < document.getElementsByClassName("entry-text").length;
            i++
          ) {
            await timer(250);
            if (
              document.getElementsByClassName("entry-text")[i].children[0] ==
              undefined
            ) {
              await timer(100);
              abort = window.confirm(
                "Word " +
                  (JSON.parse(result) + 1) +
                  ":\nMain Entry: " +
                  document.getElementsByClassName("entry-text")[i].innerHTML +
                  "\nPart of Speech: " +
                  document.getElementsByClassName("word-class")[i].innerHTML
              );
            } else {
              await timer(100);
              abort = window.confirm(
                "Word " +
                  (JSON.parse(result) + 1) +
                  ":\nMain Entry: " +
                  JSON.parse(
                    JSON.stringify(
                      document.getElementsByClassName("entry-text")[i]
                        .textContent
                    )
                  ).slice(1) +
                  "\nSense: " +
                  document.getElementsByClassName("entry-text")[i].children[0]
                    .innerHTML +
                  "\nPart of Speech: " +
                  document.getElementsByClassName("word-class")[i].innerHTML
              );
            }
            result = JSON.parse(result) + 1;
            if (abort == false || abort1 == false) {
              name =
                "nonextbuttoncookie" +
                document.getElementById("search-word").value;
              localStorage.removeItem(name);
              name = "speed" + document.getElementById("search-word").value;
              localStorage.removeItem(name);
              document.querySelector(
                "body > div.container > div > div.span8 > div.main-search"
              ).style.visibility = "initial";
              window.alert("Quick Review Aborted Successfully!");
              throw "(Not A Real Error)Quick Review Aborted Successfully!";
              //This isn't really an error...it's just an easy way to stop JS execution.//
            }
          }
          name =
            "nonextbuttoncookie" + document.getElementById("search-word").value;
          localStorage.setItem(name, result);
          if (location.pathname == "/advanced-search.php") {
            if (location.search == "") {
              searchfinder =
                "https://unabridged.merriam-webster.com/advanced-search.php?";
              for (i = 5; i <= 16; i++) {
                searchfinder =
                  searchfinder +
                  document.querySelector("#result-list-desktop").children[i]
                    .name +
                  "=";
                searchfinder =
                  searchfinder +
                  document.querySelector("#result-list-desktop").children[i]
                    .value +
                  "&";
              }
              searchfinder = searchfinder + "&start=" + JSON.stringify(result);
              $("div.results").load(searchfinder + " div.results");
              await timer(250);
              continue loop1;
            } else {
              finalurl = document.URL + "&start=" + JSON.stringify(result);
              $("div.results").load(finalurl + " div.results");
              await timer(250);
              continue loop1;
            }
          } else {
            rawurl = document.URL;
            filteredurl = rawurl.slice(50);
            finalurl =
              "https://unabridged.merriam-webster.com/unabridged/" +
              filteredurl +
              "?ref=unabridged&word=" +
              filteredurl +
              "&start=" +
              JSON.stringify(result) +
              "&action=check";
            $("div.results").load(finalurl + " div.results");
            await timer(250);
            continue loop1;
          }
          document.getElementsByClassName("main-search")[0].style.display =
            "none";
          document
            .querySelector("div.results")
            .setAttribute(
              onload,
              (document.querySelector(
                "body > div.container > div > div.span8 > div.main-search"
              ).style.visibility = "initial")
            );
          name =
            "nonextbuttoncookie" + document.getElementById("search-word").value;
          localStorage.setItem(name, result);
        }
      }
      if (result >= entriesnumber) {
        name =
          "nonextbuttoncookie" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        name = "speed" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        window.alert("Quick Review Complete!");
        document.querySelector(
          "body > div.container > div > div.span8 > div.main-search"
        ).style.visibility = "initial";
      }
    }
    load();
    break;
  case "page":
    name = "pagenumber" + document.getElementById("search-word").value;
    var pagenumber = localStorage.getItem(name);
    if (pagenumber == null) {
      var pagenumber = 1;
    }
    name = "nonextbuttoncookie" + document.getElementById("search-word").value;
    var cookiechecker = localStorage.getItem(name);
    var entriesnumberchecker =
      document.getElementsByTagName("h4")[2].childNodes[2].textContent;
    var entriesnumber = JSON.parse(
      JSON.parse(JSON.stringify(entriesnumberchecker)).split(" ", 2)[0] - 1
    );
    var result = 0;
    var confirmcontents = "";
    var resultexcep = 1;
    var abort2 = true;
    var abort3 = true;
    if (cookiechecker == null) {
      for (
        i = 0;
        i < document.getElementsByClassName("entry-text").length;
        i++
      ) {
        window["confirmcontents" + i] = "";
        if (
          document.getElementsByClassName("entry-text")[i].children[0] ==
          undefined
        ) {
          window["confirmcontents" + i] = window["confirmcontents" + i].concat(
            document.getElementsByClassName(`entry-text`)[i].innerHTML
          );
        } else {
          window["confirmcontents" + i] = window["confirmcontents" + i].concat(
            JSON.parse(
              JSON.stringify(
                document.getElementsByClassName("entry-text")[i].textContent
              )
            ).slice(1) +
              "(sense " +
              document.getElementsByClassName("entry-text")[i].children[0]
                .innerHTML +
              ")"
          );
        }
        confirmcontents =
          confirmcontents + window["confirmcontents" + i] + ", ";
        result = JSON.parse(result) + 1;
      }
      abort2 = window.confirm(
        "Page " + JSON.parse(pagenumber) + ":\n" + confirmcontents
      );
      if (abort2 == false || abort3 == false) {
        name =
          "nonextbuttoncookie" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        name = "speed" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        name = "pagenumber" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        window.alert("Quick Review Aborted Successfully!");
        throw new Error("(Not A Real Error)Quick Review Aborted Successfully!");
        //This isn't really an error...it's just an easy way to stop JS execution.//
      }
      if (result < entriesnumber) {
        goto_results("result-list-desktop", result);
        pagenumber++;
        document.getElementsByClassName("main-search")[0].style.display =
          "none";
        name =
          "nonextbuttoncookie" + document.getElementById("search-word").value;
        localStorage.setItem(name, result);
        name = "pagenumber" + document.getElementById("search-word").value;
        localStorage.setItem(name, pagenumber);
      }
    } else {
      name =
        "nonextbuttoncookie" + document.getElementById("search-word").value;
      result = localStorage.getItem(name);
      for (
        i = 0;
        i < document.getElementsByClassName("entry-text").length;
        i++
      ) {
        window["confirmcontents" + i] = "";
        if (
          document.getElementsByClassName("entry-text")[i].children[0] ==
          undefined
        ) {
          window["confirmcontents" + i] = window["confirmcontents" + i].concat(
            document.getElementsByClassName(`entry-text`)[i].innerHTML
          );
        } else {
          window["confirmcontents" + i] = window["confirmcontents" + i].concat(
            JSON.parse(
              JSON.stringify(
                document.getElementsByClassName("entry-text")[i].textContent
              )
            ).slice(1) +
              "(sense " +
              document.getElementsByClassName("entry-text")[i].children[0]
                .innerHTML +
              ")"
          );
        }
        confirmcontents =
          confirmcontents + window["confirmcontents" + i] + ", ";
        result = JSON.parse(result) + 1;
      }
      abort3 = window.confirm(
        "Page " + JSON.parse(pagenumber) + ":\n" + confirmcontents
      );
      if (abort2 == false || abort3 == false) {
        name =
          "nonextbuttoncookie" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        name = "speed" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        name = "pagenumber" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        window.alert("Quick Review Aborted Successfully!");
        throw new Error("(Not A Real Error)Quick Review Aborted Successfully!");
        //This isn't really an error...it's just an easy way to stop JS execution.//
      }
      if (result < entriesnumber) {
        pagenumber++;
        goto_results("result-list-desktop", result);
        document.getElementsByClassName("main-search")[0].style.display =
          "none";
        name =
          "nonextbuttoncookie" + document.getElementById("search-word").value;
        localStorage.setItem(name, result);
        name = "pagenumber" + document.getElementById("search-word").value;
        localStorage.setItem(name, pagenumber);
      }
    }
    if (result >= entriesnumber) {
      name =
        "nonextbuttoncookie" + document.getElementById("search-word").value;
      localStorage.removeItem(name);
      name = "speed" + document.getElementById("search-word").value;
      localStorage.removeItem(name);
      window.alert("Quick Review Complete!");
      name = "pagenumber" + document.getElementById("search-word").value;
      localStorage.removeItem(name);
    }
    break;
  case "listmaker":
    name = "pagenumber" + document.getElementById("search-word").value;
    var pagenumber = localStorage.getItem(name);
    if (pagenumber == null) {
      var pagenumber = 1;
    }
    name = "nonextbuttoncookie" + document.getElementById("search-word").value;
    var cookiechecker = localStorage.getItem(name);
    var entriesnumberchecker =
      document.getElementsByTagName("h4")[2].childNodes[2].textContent;
    var entriesnumber = JSON.parse(
      JSON.parse(JSON.stringify(entriesnumberchecker)).split(" ", 2)[0] - 1
    );
    var result = 0;
    var confirmcontents = "";
    var resultexcep = 1;
    var abort2 = true;
    var abort3 = true;
    name = "listcookie" + document.getElementById("search-word").value;
    var listcookie = localStorage.getItem(name);
    if (listcookie == null) {
      var listcookie = "";
    }
    if (cookiechecker == null) {
      for (
        i = 0;
        i < document.getElementsByClassName("entry-text").length;
        i++
      ) {
        window["confirmcontents" + i] = "";
        if (
          document.getElementsByClassName("entry-text")[i].children[0] ==
          undefined
        ) {
          window["confirmcontents" + i] = window["confirmcontents" + i].concat(
            document.getElementsByClassName(`entry-text`)[i].innerHTML
          );
        } else {
          window["confirmcontents" + i] = window["confirmcontents" + i].concat(
            JSON.parse(
              JSON.stringify(
                document.getElementsByClassName("entry-text")[i].textContent
              )
            ).slice(1) +
              "(sense " +
              document.getElementsByClassName(`entry-text`)[i].children[0]
                .innerHTML +
              ")"
          );
        }
        listcookie = listcookie + window["confirmcontents" + i] + "\n ";
        result = JSON.parse(result) + 1;
      }
      if (result < entriesnumber) {
        goto_results("result-list-desktop", result);
        pagenumber++;
        document.getElementsByClassName("main-search")[0].style.display =
          "none";
        name =
          "nonextbuttoncookie" + document.getElementById("search-word").value;
        localStorage.setItem(name, result);
        name = "pagenumber" + document.getElementById("search-word").value;
        localStorage.setItem(name, pagenumber);
        name = "listcookie" + document.getElementById("search-word").value;
        localStorage.setItem(name, listcookie);
      }
    } else {
      name =
        "nonextbuttoncookie" + document.getElementById("search-word").value;
      result = localStorage.getItem(name);
      for (
        i = 0;
        i < document.getElementsByClassName("entry-text").length;
        i++
      ) {
        window["confirmcontents" + i] = "";
        if (
          document.getElementsByClassName("entry-text")[i].children[0] ==
          undefined
        ) {
          window["confirmcontents" + i] = window["confirmcontents" + i].concat(
            document.getElementsByClassName(`entry-text`)[i].innerHTML
          );
        } else {
          window["confirmcontents" + i] = window["confirmcontents" + i].concat(
            JSON.parse(
              JSON.stringify(
                document.getElementsByClassName("entry-text")[i].textContent
              )
            ).slice(1) +
              "(sense " +
              document.getElementsByClassName(`entry-text`)[i].children[0]
                .innerHTML +
              ")"
          );
        }
        listcookie = listcookie + window["confirmcontents" + i] + "\n ";
        result = JSON.parse(result) + 1;
      }
      if (result < entriesnumber) {
        pagenumber++;
        goto_results("result-list-desktop", result);
        document.getElementsByClassName("main-search")[0].style.display =
          "none";
        name =
          "nonextbuttoncookie" + document.getElementById("search-word").value;
        localStorage.setItem(name, result);
        name = "pagenumber" + document.getElementById("search-word").value;
        localStorage.setItem(name, pagenumber);
        name = "listcookie" + document.getElementById("search-word").value;
        localStorage.setItem(name, listcookie);
      }
    }
    if (result >= entriesnumber) {
      name =
        "nonextbuttoncookie" + document.getElementById("search-word").value;
      localStorage.removeItem(name);
      name = "speed" + document.getElementById("search-word").value;
      localStorage.removeItem(name);
      name = "listcookie" + document.getElementById("search-word").value;
      localStorage.removeItem(name);
      window.alert("Quick Review Complete!");
      name = "pagenumber" + document.getElementById("search-word").value;
      localStorage.removeItem(name);
    }
    break;
  case "quizzer":
    var result = 0;
    var answer = "";
    name = "nonextbuttoncookie" + document.getElementById("search-word").value;
    cookiechecker = localStorage.getItem(name);
    var entriesnumberchecker =
      document.getElementsByTagName("h4")[2].childNodes[2].textContent;
    var entriesnumber = JSON.parse(
      JSON.parse(JSON.stringify(entriesnumberchecker)).split(" ", 2)[0]
    );
    if (cookiechecker != 0) {
      result = JSON.parse(cookiechecker);
    }
    tester();
    function tester() {
      document.querySelector("div.hdword").style.visibility = "hidden";
      document.querySelector("#result-list-desktop > ul").style.visibility =
        "hidden";
      sense = document.querySelector(
        "#result-list-desktop > ul > li.selected > a > span > sup"
      );
      node = document.querySelector(
        "#result-list-desktop > ul > li.selected > a > span"
      );
      if (location.pathname != "/advanced-search.php") {
        if (sense == null) {
          answer = document.querySelector(
            "#result-list-desktop > ul > li.selected > a > span.entry-text"
          ).innerHTML;
        } else {
          answer = document.querySelector(
            "#result-list-desktop > ul > li.selected > a > span.entry-text > sup "
          ).nextSibling.wholeText;
        }
      } else {
        if (
          result % document.getElementsByClassName("entry-text").length ==
          0
        ) {
          answer = document.querySelector(
            "#result-list-desktop > ul > li.selected > a > span.entry-text"
          ).innerHTML;
        } else {
          answer = document.querySelector(
            "#result-list-desktop > ul > li:nth-child(" +
              JSON.stringify(
                (result %
                  document.getElementsByClassName("entry-text").length) +
                  1
              ) +
              ") > a > span"
          ).innerHTML;
        }
      }
    }
    document.querySelector(
      "body > div.container > div > div.span8 > div.well.content-body > div.wrapper > div.hdword"
    ).style.display = "none";
    setTimeout(function quizzer() {
      var promptcontent = "";
      var def = "";
      var defremove = "";
      var deffinal = "";
      if (
        document.querySelector(
          "body > div.container > div > div.span8 > div.well.content-body > div.wrapper > div.pron"
        ) != null
      ) {
        promptcontent =
          promptcontent +
          "Pronunciation: " +
          document.querySelector(
            "body > div.container > div > div.span8 > div.well.content-body > div.wrapper > div.pron"
          ).outerText +
          "\n";
      } else {
        promptcontent = promptcontent + "No Pronunciation Listed\n";
      }
      if (
        document.querySelector("#mwEntryData > div > div > div > span")
          .textContent != null
      ) {
        var splitter = "";
        var promptcontent = "";
        word1 = document
          .querySelector(
            "#result-list-desktop > ul > li.selected > a > span.entry-text"
          )
          .innerHTML.split(" ");
        wholedef = document.querySelector(
          "#mwEntryData > div > div > div > span"
        ).textContent;
        if (document.getElementsByClassName("vi").length != 0) {
          for (i = 0; i < document.getElementsByClassName("vi").length; i++) {
            window["splitter" + i] =
              document.getElementsByClassName("vi")[i].textContent;
            wholedef = wholedef.replace(window["splitter" + i], "");
            wholedef = wholedef.replace("\n", "");
          }
          for (i = 0; i < word1.length; i++) {
            wholedef = wholedef.replace(word1[i], "_______");
          }
          finaldef = wholedef;
          if (
            document.querySelector(
              "#mwEntryData > div > div > div > span > strong"
            ) != undefined
          ) {
            realfinaldef = finaldef;
            realfinaldef = realfinaldef.split(
              document.querySelector(
                "#mwEntryData > div > div > div > span > strong"
              ).textContent
            );
            deffinal = "Definition: " + realfinaldef[1] + "\n";
            promptcontent = promptcontent + deffinal;
          } else {
            deffinal = "Definition: " + finaldef + "\n";
            promptcontent = promptcontent + deffinal;
          }
        } else {
          for (i = 0; i < word1.length; i++) {
            wholedef = wholedef.replace(word1[i], "_______");
          }
          if (
            document.querySelector(
              "#mwEntryData > div > div > div > span > strong"
            ) != undefined
          ) {
            realfinaldef = wholedef;
            realfinaldef = wholedef.split(
              document.querySelector(
                "#mwEntryData > div > div > div > span > strong"
              ).textContent
            );
            deffinal = "Definition: " + realfinaldef + "\n";
            promptcontent = promptcontent + deffinal;
          } else {
            deffinal = "Definition: " + wholedef + "\n";
            promptcontent = promptcontent + deffinal;
          }
        }
      } else {
        promptcontent = promptcontent + "No Helpful Definition Listed\n";
      }
      if (
        document.querySelector(
          "body > div.container > div > div.span8 > div.well.content-body > div.section.custom-accordion > div > div > p"
        ) != null
      ) {
        promptcontent =
          promptcontent +
          "Language of Origin: " +
          document.querySelector(
            "body > div.container > div > div.span8 > div.well.content-body > div.section.custom-accordion > div > div > p"
          ).outerText +
          "\n";
      } else if (
        document.querySelector(
          "body > div.container > div > div.span8 > div.well.content-body >div.section > div.section.custom-accordion > div > div > p:nth-child(1)"
        ) != null
      ) {
        promptcontent =
          promptcontent +
          "Language of Origin: " +
          document.querySelector(
            "body > div.container > div > div.span8 > div.well.content-body >div.section > div.section.custom-accordion > div > div > p:nth-child(1)"
          ).outerText +
          "\n";
      } else {
        promptcontent = promptcontent + "No Origin Listed\n";
      }
      if (
        document.querySelector(
          "body > div.container > div > div.span8 > div.well.content-body > div.wrapper > div.fl"
        ) != null
      ) {
        promptcontent =
          promptcontent +
          "Part of Speech: " +
          document.querySelector(
            "body > div.container > div > div.span8 > div.well.content-body > div.wrapper > div.fl"
          ).outerText +
          "\n";
      } else {
        promptcontent = promptcontent + "No Part of Speech Listed\n";
      }
      var userguess = window.prompt(promptcontent);
      if (userguess != null) {
        if (userguess == answer) {
          window.alert("That is correct!");
        } else {
          window.alert(
            "Unfortunately, that's incorrect. The correct spelling is " +
              answer +
              "."
          );
        }
      } else {
        name =
          "nonextbuttoncookie" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        name = "speed" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        window.alert("Quick Review Aborted Successfully!");
        throw "(Not A Real Error)Quick Review Aborted Successfully!";
        //This isn't really an error...it's just an easy way to stop JS execution.//
      }
      result++;
      if (result + 1 < entriesnumber) {
        if (
          result % document.getElementsByClassName("entry-text").length == 0 &&
          result != 0
        ) {
          goto_results("result-list-desktop", result);
          document.getElementsByClassName("main-search")[0].style.display =
            "none";
          name =
            "nonextbuttoncookie" + document.getElementById("search-word").value;
          localStorage.setItem(name, result);
          throw "(Not A Real Error)Ignore this";
        }
        select_ref_result(
          result % document.getElementsByClassName("entry-text").length,
          "result-list-desktop"
        );
        document.getElementsByClassName("main-search")[0].style.display =
          "none";
        name =
          "nonextbuttoncookie" + document.getElementById("search-word").value;
        localStorage.setItem(name, result);
      } else {
        name =
          "nonextbuttoncookie" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        name = "speed" + document.getElementById("search-word").value;
        localStorage.removeItem(name);
        window.alert("Quick Review Complete!");
        document.querySelector("div.hdword").style.visibility = "initial";
        document.querySelector("#result-list-desktop > ul").style.visibility =
          "initial";
      }
    }, 10);
    break;
  case "/changelog":
    window.alert(
      "You can find the official Quick Review Changelog here:\ncutt.ly/quickreviewchangelog"
    );
    name = "speed" + document.getElementById("search-word").value;
    localStorage.removeItem(name);
    break;
  case "/commands":
    window.alert(
      "These are the current commands:\n1.word\n2.page\n3.listmaker\n4.quizzer\n5./changelog\n6./commands\n7./blockedcookieinfo\n8./credits"
    );
    name = "speed" + document.getElementById("search-word").value;
    localStorage.removeItem(name);
    break;
  case "/credits":
    window.alert(
      "Credits:\nProgrammer: Aritra Banerjee\nAlpha Tester: Aaron Chang"
    );
    name = "speed" + document.getElementById("search-word").value;
    localStorage.removeItem(name);
    break;
  case "/blockedcookieinfo":
    window.alert(
      'Chrome Users: Click the three dots on the top right, then click Settings, then click on the "Privacy & Security" tab on the left side, click on "Cookies and other site data" and set it to "Allow all cookies".\n\nSafari Users: Click on the Safari Tab on the top left of your screen, click Preferences on the Drop-Down menu, then click on the Privacy tab and unselect the option for "Block all cookies".\n\nFirefox Users: Click the menu button and select options, then select the "Privacy & Security" tab on the left and check the option for "Standard".'
    );
    name = "speed" + document.getElementById("search-word").value;
    localStorage.removeItem(name);
    break;
  case null:
    window.alert("Quick Review Cancelled!");
    name = "speed" + document.getElementById("search-word").value;
    localStorage.removeItem(name);
    break;
  default:
    window.alert(
      "That is not an option. Try again.(Note: Put a forward-slash before all commands except for word and page.)"
    );
    name = "speed" + document.getElementById("search-word").value;
    localStorage.removeItem(name);
}
