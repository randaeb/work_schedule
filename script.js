//Make variables
var currentDay = $(".time")
var hour = moment().format("HH")
console.log(hour)
var container= $(".container")
currentDay.text( moment().format("MMMM Do YYYY"))
container.click(saveTodo)
function saveTodo(event){

    //save in my local storage 
    if (event.target.localName==="i"){
        console.log (event)
        var id = event.target.attributes[0].nodeValue
        var value = $("."+ id).val()
        localStorage.setItem(id,value)
    }
}
//made a for loop
for (var i =9; i <18;i++){
    $("." + i).val(localStorage.getItem(i))
    //if/else statement to create color coded time-blocks for past, present, and future
    if(hour > i) {
        $("." + i).addClass("past")
    } else if (hour == i){
        $("." + i).addClass("present")
    } else {
        $("." + i).addClass("future")
    }
}

