/**
Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.
**/

function seatsInTheater(nCols, nRows, col, row) {
    return (nRows - row) * (nCols - (col - 1))
    
  }

  console.log(seatsInTheater(16,11,5,3))

/**
 We need a function that can transform a number (integer) into a string.

**/



  function numberToString(num) {
    return num.toString()
  }

  console.log(numberToString(1))

  /**
   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
  **/

   function highAndLow(numbers){
    let split = numbers.split(" ")
    return `${Math.max(...split)} ${Math.min(...split)}`; //my answer was wrong because i didn't have the ...

    // the 3 dot operator or ... is the spread Operator, think of it like a loop statement that saves time
  }

  console.log(highAndLow("1 2 3 4 5"))

  /**
   Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number
  **/

   function createPhoneNumber(numbers){
      //first, this converts the array into a string
       let toString = numbers.toString()
       //this then removes all the commas from the string and just has 10 numbers line up
       let noCommas = toString.replace(/\,/g, "")
       //this divides the numbers into 3,3, and 4, 

       //after the comma, the $1, $2, $3, are the divided sections and what is happening to them
      let phoneNumberFormat = noCommas.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"); 
       return phoneNumberFormat
   }

   console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

      //here is the most popylar solution on code wars
      
   /**
   function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
} 
  **/