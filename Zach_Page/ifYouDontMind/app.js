var hour = 8;
var minute = 50;
var period = "AM";
var timeOfDay;
var hourHalve;

function whatTime(hour,minute,period){
  if(period === "AM"){
     timeOfDay = "Morning";
  }
  else {
     timeOfDay = "Evening";
  }

  if(minute < 30){
     hourHalve = "after";
  }
  else if (minute > 30) {
    hourHalve = "before";
    hour = hour + 1;
    minute = 60-minute+" minutes";
  }
  else {
     minute = "half past";
     hourHalve = "";
  }

  return "It is "+minute+" "+hourHalve+" "+hour+" in the "+timeOfDay;
}
//
// whatTime(8,15,"PM");
// whatTime(8,15,"AM");
// whatTime(8,30,"PM");
// whatTime(6,5,"AM");

console.log(whatTime(7,45,"am"));
