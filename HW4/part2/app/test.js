function checkAge() {
  const username = prompt("Please enter your username:");
  let age = Number(prompt("Please enter your age:"));
  const status = prompt("Please enter your status (admin, moderator, user):");
  
  try {
    
    if (!username)  {
      throw new Error("The field is empty! Please enter your username.");
    }      
   
    if (!age)  {
      throw new Error("The field is empty! Please enter your age.");
    }   
                
    if (isNaN(age)) {
      throw new EvalError("Age should be a number.");
    }
    
    if (age < 18 || age > 70) {
      throw new RangeError("Your age is not within the allowed range.");
    }
      
    if (!status)  {
      throw new Error("The field is empty! Please enter your status.");
    }
      
    if (status !== "admin" && status !== "moderator" && status !== "user") {
      throw new EvalError("Invalid status entered.");
    }
    
    alert("You have been granted access to the movie.");
  } catch (error) {
    alert(error.name + ": " + error.message);
  }
}
checkAge();
