// GIVEN I am using a daily planner to create a schedule
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var currentDay = $("#currentDay");
var currentHour = (moment().hours())- 12;

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
            $(this).addClass("past");
        } else if (currentHour === blockHour) {
            $(this).addClass("present");
        } else if(currentHour > blockHour){ 
            $(this).addClass("future");
        }
    })
// if check to see if current hour is greater, less, or the same as hour blocks
// if hour block is less than current hour, add class of "past"
// if hour block is the same as current hour, add class of "preset"
// if hour block is greater than current hour, add class of "future"
}

// function to get user input for event
function userEvent(){
    
}

// function to save event for time block into local storage
// make sure to use window.localstorage if i use locally scoped variables
// so that when I refresh the page, the storage is still saved 
function storeEvent(){

}
// event listener to click time block

// actually display current day
getCurrentDay();
colorCode();