var hour = 8;
var minute = 15;
var period = 'am';


if(minute>30){
  if(period==='am'){
    console.log("It's almost " + hour++ + " in the morning.");
  }
  else{
    console.log("It's almost " + hour++ + " in the evening.");
  }
}
else{
  if(period==='am'){
    console.log("It's just after " + hour + " in the morning.");
  }
  else{
    console.log("It's just after " + hour + " in the evening.");
    }
  }


if(minute < 30){
  time_designation = 'just after'
} else {
  time_designation = 'before';
  hour++
}
if(period == 'am'){
  time_of_day = 'morning'
} else {
  time_of_day = 'afternoon'
}
console.log("It's " + time_designation + ' ' + hour + ' in the ' + time_of_day)
