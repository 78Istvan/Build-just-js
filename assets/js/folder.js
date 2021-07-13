var d = new Date();
theDay = d.getDay();
switch(theDay){
    case 1:
        document.write('<br>This is a boring Monday again</br>');
        break;
    case 2:
        document.write('<br>Slowley but we getting there with this Tuesday</br>');  
        break;  
    case 3:
        document.write('<br>Wednesday is the half way of the week');
        break;
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

// button specific alert massege
function myAlert(txt) {
    alert(txt).style.color ='red'
}
let x 
if (x == null) {
   can = 'pecs'
   document.write(can);
}
//for loop
var i = 0;
for (var i = 0; i <= 5; i++ ) {
   
}
document.getElementById('number').innerHTML = 'The number is' + ' ' + i;

var i=3;
for (i; i >= -5; i-=2)
{document.write("The number is " + i);
document.write("<br />");
}

//write text with for loop
for (i = 1; i <= 6; i++) {
    document.write('<h' + i + '>This is a heading' + i + '</h' + i + '>');
}