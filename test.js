//grade A>79, B>60-79, ,C 59-49, D 40-49, E <40//


const studentGrade = prompt("Enter student grade");// prompt user to enter the grade//
const studentGradeInt = parseInt(studentGrade);//limiting the data type to parse integers only//
//we are to make sure number is btwn 0-100//
if(studentGradeInt >=0 && studentGradeInt<=100){
   //naming the function,//
   function gradingSystem(grade){
      if(grade>79){
         return "A"
      }else if(grade >= 60 && grade <= 79){
         return "B";
      
      }else if( grade >= 50 && grade <=59){
         return "C";
      }else if( grade >=40 && grade <= 49){
         return "D";
      }else if(grade <40){
         return "E";
      }

   }
}else{
      alert("Enter a valid grade");
  // alert is like a prompt ifykyk//
  }
const mark = gradingSystem(studentGradeInt)
alert("Your Results!"  + mark)