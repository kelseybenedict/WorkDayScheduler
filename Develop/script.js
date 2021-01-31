// GIVEN I am using a daily planner to create a schedule
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var currentDay = $("#currentDay");
var currentHour = (moment().hours());
var saveBtn = $("button");
// getting IDs of text fields for each hour
// var nineText = $("#nineText");
// var tenText = $("#tenText");
// var elevenText = $("#elevenText");
// var noonText = $("#noonText");
// var oneText = $("#oneText");
// var twoText = $("#twoText");
// var threeText = $("#threeText");
// var fourText = $("#fourText");
// var fiveText = $("#fiveText");
// var sixText = $("sixText");

//function to get the current day
function getCurrentDay(){
    var currentTime = moment().format('MMMM Do YYYY, h:mm a');
    currentDay.text(currentTime);
}

// function to color code time blocks
function colorCode(){
    $(".time-block").each(function () {
        // getting id and turning into a numerical value
        var blockHour = parseInt($(this).attr("id"));
        console.log("block hour " +blockHour + ", current hour: " + currentHour)
        
        // if block hour is less than current hour, add class of "past"
        if (currentHour < blockHour) {
            $(this).addClass("future");
        // if hour block is the same as current hour, add class of "presentt"
        } else if (currentHour === blockHour) {
            $(this).addClass("present");
        // if hour block is greater than current hour, add class of "future"
        } else if(currentHour > blockHour){ 
            $(this).addClass("past");
        }
    })
}

// function to save event for time block into local storage
// make sure to use window.localstorage if i use locally scoped variables
// so that when I refresh the page, the storage is still saved 
function storeEvent(){
    userEvents = {
        nineText: $.trim($("#nineText").val()),
        tenText: $.trim($("#tenText").val()),
        elevenText: $.trim($("#elevenText").val()),
        noonText: $.trim($("#noonText").val()),
        oneText: $.trim($("#oneText").val()),
        twoText: $.trim($("#twoText").val()),
        threeText: $.trim($("#threeText").val()),
        fourText: $.trim($("#fourText").val()),
        fiveText: $.trim($("#fiveText").val()),
        sixText: $.trim($("#sixText").val()),
    }
    // store the event in local storage
    window.localStorage.setItem("events", JSON.stringify(userEvents));
    
    // display event from local storage on page
    var userInput = JSON.parse(localStorage.getItem("events"));
    userInput.html("events");
}
// function to display what was saved in local storage
// function displayEvent(){
//     var userInput = JSON.parse(window.localStorage.getItem(userEvents));
//     console.log(userInput)
// }
// event listener to save time block
saveBtn.click(storeEvent);
// actually display current day
getCurrentDay();
// show color coding
colorCode();
//displayEvent();