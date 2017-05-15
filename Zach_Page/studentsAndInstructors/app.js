function names(){
  var users = {
   'students': [
       {first_name:  'Michael', last_name : 'Jordan'},
       {first_name : 'John', last_name : 'Rosales'},
       {first_name : 'Mark', last_name : 'Guillen'},
       {first_name : 'KB', last_name : 'Tonel'}
     ],
     'instructors': [
       {first_name : 'Michael', last_name : 'Choi'},
       {first_name : 'Martin', last_name : 'Puryear'}
     ]
   };


  console.log(Object.keys(users)[0]);
  for(var i= 0; i < users.students.length; i++){
    var nameLength = users.students[i].first_name.length + users.students[i].last_name.length;
      console.log( i + "-" + users.students[i].first_name + users.students[i].last_name + "-" + nameLength);
      }


  console.log(Object.keys(users)[1]);
    for(i=0; i < users.instructors.length; i++){
      nameLength = users.instructors[i].first_name.length + users.instructors[i].last_name.length;
      console.log( i + "-" + users.instructors[i].first_name + users.instructors[i].last_name + "-" + nameLength);
      }

  }
  names();
