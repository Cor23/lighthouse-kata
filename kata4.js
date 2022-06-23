const instructorWithLongestName = function(instructors) {
  let lngth = 0;
  let longest;
  for(let i = 0; i < instructors.length; i++){
    if(instructors[i].name.length > lngth){
      lngth = instructors[i].name.length;
      longest = instructors[i];
    }
  }
  console.log(longest);
  return longest;
};

instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]);

instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]);
