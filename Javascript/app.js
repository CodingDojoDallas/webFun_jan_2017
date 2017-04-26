var hour = 5;
var min = 36;
var period = "AM ";
if (min < 30) {
  var x = "its just after";
}
  else {
    var x = "its almost";
    hour += 1
  }
if (period == "AM") {
  var y = "in the morning";
}
else {
  var y = "in the evening";
}
console.log(x,hour,y);
