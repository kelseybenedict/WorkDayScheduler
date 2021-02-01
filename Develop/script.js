var currentDay = $("#currentDay");
var currentHour = (moment().hours());
var saveBtn = $("button");

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
        //console.log("block hour " + blockHour + ", current hour: " + currentHour)
        
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
}
// function to display what was saved in local storage
function displayEvent(){
    var userInput = JSON.parse(window.localStorage.getItem("events"));
    if(userInput != null){
    $("#nineText").html(userInput.nineText);
    $("#tenText").html(userInput.tenText);
    $("#elevenText").html(userInput.elevenText);
    $("#noonText").html(userInput.noonText);
    $("#oneText").html(userInput.oneText);
    $("#twoText").html(userInput.twoText);
    $("#threeText").html(userInput.threeText);
    $("#fourText").html(userInput.fourText);
    $("#fiveText").html(userInput.fiveText);
    $("#sixText").html(userInput.sixText);
    }

}
// event listener to save time block
saveBtn.click(storeEvent);
// actually display current day
getCurrentDay();
// show color coding
colorCode();
// pulling from local storage
displayEvent();
