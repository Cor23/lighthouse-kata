const talkingCalendar = function(date) {
  const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let year = date[0] + date[1] + date[2] + date[3];

  let monthNum = date[5] + date[6];
  monthNum = ~~monthNum;
  month = monthArr[monthNum - 1];

  let day = date[8] + date[9];
  day = ~~day;

  if(day > 3 && day < 21){
    day += 'th';
  } else if(day % 10 === 1){
    day += 'st';
  } else if(day % 10 === 2){
    day += 'nd';
  } else if(day % 10 === 3){
    day += 'rd';
  } else {
    day += 'th';
  }

  return month + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));