$(document).ready(function(){
    moment().format();
    var now = moment().format('lll');
//Define global vars
    var blockOrder = [9,10,11,12,13,14,15,16,17]
    var timeBlockRow;
    var ele;
    var noteHold;
    var noteIn;
//Feeds date into header element
    document.getElementById("currentDay").innerHTML = now;
//This for loop drives the creation of all the content
    for (var i=0; i < blockOrder.length; i++) {
      var timeBlockRow = document.createElement("tr");
      timeBlockRow.className="row";
      document.getElementById("tableBlock").append(timeBlockRow);
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
//Setting td1 (hour) attributes 
      td1.setAttribute("class", "hour");
      td1.setAttribute("width", "15%");
//Proper moment formatting for calling time from array. Remember to reference this in td2 for setting class (i.e. past, present, future)
      var timePlace = (moment(blockOrder[i],"h:mm a").format("h:mm a"));
      var currentHour = moment().hours();
      td1.textContent = timePlace;
//Setting td2 (time-block) attributes
    if (currentHour < (blockOrder[i])) {
      td2.setAttribute("class", "future");
    }
    if (currentHour == blockOrder[i]) {
      td2.setAttribute("class", "present");
    }
    if (currentHour > blockOrder[i]) {
      td2.setAttribute("class", "past");
    }
      td2.setAttribute("id", "timeArea"+ i);    
      td2.setAttribute("width", "70%");
//Here I am creating a textInput, with unique ID for each div. It works, but looks ugly. For now it will do.
      var ele = document.createElement("textarea");
      ele.setAttribute("class", "textarea"+i);
      ele.setAttribute("id", "textBox"+ i);
      ele.setAttribute("value", i);
      ele.cols=90;
      td2.appendChild(ele);
// Local Storage part where I check if there is a value already
    if (localStorage.getItem('note'+i) !== null) {
        var noteIn = window.localStorage.getItem('note'+i);
        ele.value=noteIn;
      }
//Setting td3 (saveBtn) attributes
      td3.setAttribute("type", "button");
      td3.setAttribute("class", "saveBtn");
      td3.setAttribute("id", "saveIt"+i);
      td3.setAttribute("value", i);
      td3.setAttribute("width", "15%");
      var discDiv= document.createElement("div");
      discDiv.setAttribute("class", "fas fa-save");
      td3.append(discDiv);
//Append tds to row  
      timeBlockRow.append(td1);
      timeBlockRow.append(td2);
      timeBlockRow.append(td3);
    }
//Local Storage part where I set the Local Storage value, probably
      var saveNote = "";

      $('.saveBtn').on('click', function(){
      var saveVal = $(this).attr("value");
      var saveNote = document.getElementById("textBox"+saveVal).value;
      console.log(saveNote);
      window.localStorage.setItem('note'+saveVal, saveNote);
  })

    });