var waitTime = setInterval(checkLoaded, 500);
clearInterval(waitTime);

chrome.extension.onMessage.addListener(function(request, sender, response) {
  if (request.type === 'getDoc') {
    waitTime = setInterval(checkLoaded, 500);
  }

  return true;
});

function checkLoaded() {
  if (document.getElementsByClassName("responsive--hidden--sm responsive--hidden--xs ng-scope").length > 0)
  {
    clearInterval(waitTime);
    if (document.getElementsByClassName("wguplus_accordion").length < 1) {
      var myButton = document.createElement("button");
      var buttonHTML = "&nbsp;&nbsp;Quick Links";
      myButton.className = "wguplus_accordion";
      myButton.innerHTML = buttonHTML;

      var myTable = document.createElement("table");
      var tableW = document.createAttribute("width");
      tableW.value = "100%";
      myTable.setAttributeNode(tableW);

      var splitURL = window.location.href.split("/");
      var currClass = splitURL[5];

      var linkTypeArr = [""];
      var linkImgArr = [""];
      var linkNameArr = [""];
      var linkAddrArr = [""];

      var xhr = new XMLHttpRequest();
      xhr.open('GET', chrome.extension.getURL('links/' + currClass + '.txt'), true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var lines = xhr.responseText.split("\n");
          for (i = 2; i < lines.length; i++) {
            if (lines[i] != "") {
              var elements = lines[i].split("|");
              var currType = "";
              var currName = "";
              var currAddr = "";
              if (elements.length == 3) {
                currType = elements[0].replace(/^\s+|\s+$/g, "");
                currName = elements[1].replace(/^\s+|\s+$/g, "");
                currAddr = elements[2].replace(/^\s+|\s+$/g, "");
              }
              var currImg = "";
              if (currType != "") {
                switch(currType.toLowerCase()){
                  case "ucertify":
                    currImg = chrome.extension.getURL("images/ucertify.png");
                    break;
                  case "lynda":
                    currImg = chrome.extension.getURL("images/lynda.png");
                    break;
                  case "testout":
                  case "labsim":
                    currImg = chrome.extension.getURL("images/testout.png");
                    break;
                  default:
                    currImg = chrome.extension.getURL("images/other.png");
                    break;
                }
              }
              else {
                currType = "ERROR";
                currImg = "ERROR";
              }
              if (currName != "") {
              }
              else {
                switch(currType.toLowerCase()) {
                  case "ucertify":
                    currName = "uCertify";
                    break;
                  case "lynda":
                    currName = "Lynda";
                    break;
                  case "testout":
                  case "labsim":
                    currName = "Test Out";
                    break;
                  default:
                    currName = "ERROR";
                    break;
                }
              }
              if (currAddr != "") {

              }
              else {
                currAddr = "ERROR";
              }
              linkTypeArr.push(currType);
              linkImgArr.push(currImg);
              linkNameArr.push(currName);
              linkAddrArr.push(currAddr);
            }
          }
          linkTypeArr.splice(0,1);
          linkImgArr.splice(0,1);
          linkNameArr.splice(0,1);
          linkAddrArr.splice(0,1);

          for (i = 0; i < linkAddrArr.length; i++) {
            if (linkTypeArr[i] != "ERROR" && linkNameArr[i] != "ERROR" && linkAddrArr[i] != "ERROR") {

              maxNameLen = 11;

              var fontSize = 100;

              if (linkNameArr[i].length > maxNameLen) {
                var diff = (linkNameArr[i].length - maxNameLen);
                var mult = (diff / 5) * 10;
                fontSize = Math.ceil(fontSize - mult);
              }

              if (fontSize < 75) {
                fontSize = 75;
              }

              var myRow = document.createElement("tr");
              myRow.innerHTML = "<td class='wguplus_td_image'><a href='" + linkAddrArr[i] + "'><img src='" + linkImgArr[i] + "' width='50' height='50'></a></td>" +
                                "<td class='wguplus_td_title'><a href='" + linkAddrArr[i] + "'><span style='font-size:" + fontSize + "%;'>" + linkNameArr[i] + "</span></a></td>";
              myTable.append(myRow);
            }
          }

          var myP = document.createElement("p");
          myP.append(myTable);
          var myContent = document.createElement("div");
          myContent.className = "wguplus_content";
          myContent.append(myP);
          var myPanel = document.createElement("div");
          myPanel.className = "wguplus_panel";
          myPanel.append(myContent);

          document.getElementsByClassName("responsive--hidden--sm responsive--hidden--xs ng-scope")[0].prepend(myPanel);
          document.getElementsByClassName("responsive--hidden--sm responsive--hidden--xs ng-scope")[0].prepend(myButton);

          var acc = document.getElementsByClassName("wguplus_accordion");
          var i;

          for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function() {
              this.classList.toggle("active");
              var pan = this.nextElementSibling;
              if (pan.style.maxHeight){
                pan.style.maxHeight = null;
                pan.style.border = "none";
              } else {
                pan.style.maxHeight = pan.scrollHeight + "px";
                pan.style.border = "1px solid rgba(0,0,0,0.25)";
              }

            }
          }
        }
      }
      xhr.send();
    }
  }
}
