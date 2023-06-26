// STEP 1 CAMEL CASE
// let someMonth;
// function theMonth();
// let currentMonth;
// let summerMonth;
// let myLibraryFunction

// STEP 2 EXPRESSIONS
// let x = 5;
// let firstName = 'Justin', lastName = 'Palmer';
// let isAwesome = true;
// let haters = null;

// STEP 3 COMPLEX EXPRESSIONS
// let step = 3;
// step += 1;

// let headline = `${firstName} \"Code God\" ${lastName}`;

// STEP 4 DECLARE DONT ASSIGN
// let strfirstName;
// let strlastName;
// let straddress;
// let strcity;
// let strstate;
// let izipCode;
// let iyourAge;
// let strrefSource;
// let bmayWeContactYou

// STEP 5 DECLARE AND ASSIGN
// const strfirstName = 'Justin';
// let strstate = 'California';
// bmayWeContactYou = false;

// STEP 6 (COERCED TO STRING)
// let satisfaction = 100 + "100";
// console.log(typeof satisfaction); //DISPLAYS STRING

// STEP 7 (EVERYONE BEATS BOOLEAN)
// let justinPalmer = "Loves Coding" + true; 
// console.log(typeof justinPalmer)     //DISPLAYS STRING

// let isValid = 100 + true;
// console.log(typeof(isValid))     //DISPLAYS NUMBER

// STEP 8 (TEST VALIDITY)(INVALID, NEEDS TICKS INSTEAD OF QUOTES)
// let someString = 'Who once said, "Only two things are infinite, the
// universe and human stupidity, and I'm not sure about the former."';
// window.console.log(someString);

// let someString = `Who once said, "Only two things are infinite, the 
// universe and human stupidity, and I'm not sure about the former."`;
// window.console.log(someString);

// STEP 9 (NULL VS UNDEFINED)
// let position = null;
// console.log(position); 

// let position2;
// console.log(position2);

// STEP 10 (TYPEOF OPERATORS)
// let total = 14 + 3
// console.log(typeof total); // DISPLAYS NUMBER

// const firstName = 'Justin', lastName = 'Palmer';
// let name = lastName;
// name += ', ';
// name += firstName;
// console.log(typeof name);       //DISPLAYS STRING

// let cash = 40;
// let cost = 60;
// console.log(cost <=cash);  //DISPLAYS BOOLEAN

// let x
// console.log(x)   //DISPLAYS UNDEFINED

// var obj = new String();
// console.log(typeof obj);    //DISPLAYS OBJECT


// STEP 11 (CONCATENATION)
// alert('Hello ' + 'Justin Palmer' + ', welcome to the JavaScript class!')

// STEP 12 (CONCATENATION WITH VARIABLE)
// let name = 'Justin Palmer'
// alert('Hello ' + name + ', welcome to the JavaScript class!')

// STEP 13 (CONCAT)
// let name = 'Justin Palmer'  //FROM STEP 12 SO CODE WILL RUN
// let course = 'JavaScript'
// alert('Hello ' + name + ', welcome to the ' + course + ' class!')

// STEP 14 (CONCAT)
// let name = 'Justin Palmer'  //FROM STEP 12 SO CODE WILL RUN
// let course = 'JavaScript'   //FROM STEP 13 SO CODE WILL RUN
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!')

// STEP 15 (CONCAT)
// let name = prompt('What is your name?') 
// let course = 'JavaScript'   //FROM STEP 13 SO CODE WILL RUN
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!')

// STEP 16 (ESCAPE OPERATOR)
// let name = prompt('What is your name?')   //FROM STEP 15 SO CODE WILL RUN
// let course = prompt('What class are you taking?')
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!')

// STEP 17 (SUM)
// let x = 10
// let y = 20
// console.log(x +y)  //RETURNS 30

// STEP 18 (CONCAT OPERATOR)
// let x = 20
// x += 20
// console.log(x)  //RETURNS 40

// STEP 19 (MULTIPLICATION)
// let x = 20
// x *= 5
// console.log(x)  //RETURNS 100

// STEP 20 (MODULUS AND DIVISION)
// x = 20 % 3
// x /= 1
// console.log(x)

// STEP 21
// let testscore = 82
// let passing = 80
// console.log(testscore >= passing) //RETURNS TRUE

// STEP 22
// let wifeHome = 1800, fastFood = 1730, dinnerTime = 1700;
// console.log((wifeHome || fastFood) <= dinnerTime); //RETURNS FALSE
