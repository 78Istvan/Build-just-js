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
        document.write('<br>Can this week over</br>');

}

function show_alert() {
    alert('Hello! I am an alert box!')
}
