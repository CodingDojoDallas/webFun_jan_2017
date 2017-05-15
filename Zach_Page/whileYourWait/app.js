function birthdayCountdown(){
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var monthCount = [1,32,60,91,121,152,182,213,244,274,305,335];
      if(month === 3 && day === 21){
        console.log("ITS MY BIRTHDAY!!");
      }
      else if (month === 3 && day < 21-6) {
        day = 21 - day;
        console.log(day+" DAYS UNTIL MY BIRTHDAY!!!");
      }
      else if (month === 2 && day < 23) {
        today = monthCount[month]+day;
        day = 113 - today;
        console.log(day + " days until my birthday. ");
      }
      else {
        today = monthCount[month]+day;
        if(today < 113){
          day = 113 - today;
        console.log(day + " days until my birthday. Such a long time....:(");
        }
        else{
          day = 365 - today;
          console.log(day + " days until my birthday. Such a very long time....:(");
        }
      }

}


birthdayCountdown();
