function printRange(start, end, step)
  {
    var range = [];
    if(typeof start=="number"){
        while (step > 0 ? end > start : end < start) {
            range.push(start);
            start += step;
        }
      }
    else
      {
        console.log("Input Numbers");
      }
    return range;
}

console.log(printRange(2, 10, 2));
console.log(printRange(4, 16, 4));
console.log(printRange(0, 12, 2));
console.log(printRange("taco"));
