//grabbing the exact hour and calling it variable titled veryMoment
var veryMoment = moment().hour();
//creating a varialbe grabbed from the software titled moment that allows the live time to be displayed at the top
var now = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(now);

//creating a jquery styled function and loop that allows our button to be clickable and save our key & value to local storage
$(".saveBtn").on("click", function () {
    //here we grab the id of the parent div regardless of which timeblock it is in
    var key = $(this).parent().attr("id");
    //here we grab the value of what's written within the description box
    var value = $(this).siblings(".description").val();
    //saving the key and value to local storage
    localStorage.setItem(key, value);
});
//calling our timing sequence function that is written below
timingSequence();

//creating a function to keep track of the timing elements
function timingSequence() {
    //jquery version of a for each method
    $(".time-block").each(function () {
        //we are now grabbing the specific hour of the row and using parse int to grab the actual value of the id
        var rowHour = parseInt($(this).attr("id"));
        //this is a conditional which changes the color of the timeblock to grey if its in the past
        if (rowHour < veryMoment) {
            $(this).addClass('past')
            // a condiditon that changes the color of the timeblock if its in the present 
        } else if (rowHour === veryMoment) {
            $(this).removeClass('past')
            $(this).addClass('present')
    // a condiditon that changes the color of the timeblock if its in the present
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    });
}


//here we are grabbing the value of each timeblock that is inserted by our user
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));