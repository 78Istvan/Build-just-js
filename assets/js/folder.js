var d = new Date();
theDay = d.getDay();
switch(theDay){
    case 5:
        ducument.write('<br>Finally Friday</br>');
        break;
    case 6:
        document.write('<br>Super Saturday</br>');
        break;
    case 0:
        document.write('<br>Sleepy Sunday</br>');
        break;
    default:
        document.write('<br><h1>Can this week over</h1></br>');

}
//alert pop up window message
function show_alert() {
    alert('Hello! I am an alert box!')
}

//confirm message pop up window

function show_confirm() {
    var r = confirm('Press a button!');
    if (r == true) 
    {
    alert('You pressed Ok!');
    }
     else 
     {
    alert('You pressed cancel!');
    }
}

//prompt messages pop up window
function show_prompt() {
    var name = prompt('Please enter your name','');
    if (name != null && name != '') {
        document.write('Hello '+ name + '! How are you today');
    }
}

//breaking text line in the pop up windows
function breakText() {
    alert("I will berak this text here"+'\n'+"because I want to do this here!")
}

