// var hourlySlots = document.querySelector('.hourlyslots')
// var divName = document.getElementById('9am')
var veryMoment = moment().hour();

// setInterval(function () {

var now = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(now);

//     for( var i = 1; i<10; i++){

//         savingTask("text" + i, "" + i)
//         displayTextArea("text" + i)

//         // if(now.hour() > document.getElementById("hour"+(i+8)){
//         //     //whatever javascript code can manipulate the color of div document.getElementById("hour"+(i+8))
//         // }
//     }

// }, 1000);

// //Task saving process
// function savingTask(textId, buttonId) {
//     //get the text area
//     var textArea = document.getElementById(textId)
//     //get the save button
//     var saveButton = document.getElementById(buttonId)
//     //add an on click event listener to saveButton
//     saveButton.addEventListener('click', function () {

//         //get the value of the user's input
//         var userInput = document.getElementById(textId).value
//         //saving each item into local storage with a unique description and id
//         localStorage.setItem('description' + textId, userInput)

//     });

// };

// function displayTextArea(textId) {

//     var displayText = localStorage.getItem('description' + textId);
//     document.getElementById(textId).textContent = displayText
// };

function timingSequence() {
    $(".time-block").each(function () {
        var rowHour = parseInt($(this).attr("id"));

        if (rowHour < veryMoment) {
            $(this).addClass('past')
        } else if (rowHour === veryMoment) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    });
}

timingSequence();

$(".saveBtn").on("click", function () {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();

    localStorage.setItem(key, value);
});

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));



// function colorChanger(x,y) {

//    var t = x+y
//    console.log(t)

// };

// var testOne = colorChanger(4,4);
// var testTwo = colorChanger(3,2);
// var testThree = colorChanger(5,5);

// console.log("Hello Nash")

// saveButton

// var userInput =

// const saveToLocalStorage = () => {
// localStorage.setItem(divName, userInput)
// };

// // localStorage.setItem("9am", userInput);

// // saveButton.addEventListener("click",  )
