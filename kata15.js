const organizeInstructors = function(instructors) {
  let courseInstructors = {};

  for(let i = 0; i < instructors.length; i++){
    const courses = instructors[i]["course"];

    if(courseInstructors[courses] === undefined){
      courseInstructors[courses] = [];
    }
    courseInstructors[courses].push(instructors[i]["name"]);
  }
  return courseInstructors;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));