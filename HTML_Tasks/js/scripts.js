//--------------- Task 14 - My name --------------------
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//getElementById(), querySelectorAll(), getElementsByClassName(), getElementsByTagName() etc
//https://dom.spec.whatwg.org/#selectors        VERY IMPORTANT RESOURCE
//https://www.w3schools.com/jsref/dom_obj_style.asp    Javascript DOM style object

//---------------------------------------------------------

    // var pBar = document.querySelector('.scroll-line');
    // var upperBound = 80;
    // var lowerBound = 50;
    // var tickValue = (upperBound - lowerBound) / window.innerHeight;
    // document.addEventListener('scroll', function(e) {
    // var offset = window.pageYOffset;
    // var count = upperBound - offset * tickValue;
    // pBar.style.width = count + '%';
    // });


//capture scroll as percentage
//https://codepen.io/derekjp/pen/pJzpxB
$(window).scroll(function(){
    var wintop = $(window).scrollTop();
    var docheight = $(document).height(); 
    var winheight = $(window).height();
    var scrolled = (wintop/(docheight - winheight)) * 100;
    $('.scroll-line').css('width', (scrolled + '%'));
});


//vanilla version
// $(window).scroll(function(){
//     var wintop = window.scrollTop;
//     var docheight = document.body.clientHeight; // Returns height of HTML document
//     var winheight = window.body.clientHeight;         // Returns height of browser viewport
//     var scrolled = (wintop/(docheight - winheight)) * 100;
//     document.querySelector('.scroll-line').width = scrolled + '%';
// });



//--------------------------------------------------------
let myName= "My name is Jalal";
document.getElementById('my_name').innerHTML= myName; 

//--------------- Task 15 - if/else - Time of the day --------------------

var c_time = new Date();
var dayTime = document.getElementById('dayTime');

if(c_time.getHours() > 1 && c_time.getHours() < 13){
    document.getElementById('current_time').innerHTML= "Good Morning!";
    //dayTime.src= "https://imgur.com/X4ZJ5EQ.jpg";
    dayTime.src= "images/morning";
    dayTime.alt= "morning image";
}else if(c_time.getHours() >= 13 && c_time.getHours() < 16){
    document.getElementById('current_time').innerHTML= "Good Afternoon!";
    //dayTime.src= "https://imgur.com/xSp0aES.jpg";
    dayTime.src= "images/afternoon.jpg";
    dayTime.alt= "afternoon image";
}else if(c_time.getHours() >= 16 && c_time.getHours() < 20){
    document.getElementById('current_time').innerHTML= "Good Evening!";
    //dayTime.src= "https://imgur.com/JcWS9fx.jpg";
    dayTime.src= "images/evening.jpg";
    dayTime.alt= "evening image";
}else if(c_time.getHours() >= 20 && c_time.getHours() < 24){
    document.getElementById('current_time').innerHTML= "Good Night!";
    //dayTime.src= "https://i.imgur.com/d4ZnKFe.jpg";
    dayTime.src= "images/night.jpg";
    dayTime.alt= "night image";
    //https://imgur.com/a/boe91Ix
}

//--------------- Task 16 - switch - Day of the week --------------------
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
                "Friday", "Saturday"];

//document.getElementById("current_day").innerHTML = days[c_time.getDay()];               

var currentDay = document.getElementById('current_day');
switch(c_time.getDay()) { //0
    case 0:
        currentDay.innerHTML += days[0];
        break;
    case 1:
        currentDay.innerHTML += days[1];
        break;
    case 2:
        currentDay.innerHTML += days[2];
        break;
    case 3:
        currentDay.innerHTML += days[3];
        break;
    case 4:
        currentDay.innerHTML += days[4];
        break; 
    case 5:
        currentDay.innerHTML += days[5];
        break;
    case 6:
        currentDay.innerHTML += days[6];
        break;             
    default:
        currentDay.innerHTML += "Error";
}

//--------------- Task 17 - for-while-do_while - Display count 5 to 15 --------------------

//for loop
for(var i=5; i <= 15; i++){
    var paragraph = document.createElement("p");
    paragraph.innerText = i ; 
    document.getElementById("display_count-for").appendChild(paragraph);
}


//--------------- Task 17a - Nested for-loop --------------------
const colors= ["orange","red", "green" ,"blue", "grey", "purple"];

function create(){
    document.getElementById("playGround").innerHTML = "";
    let steps = parseInt(document.getElementById("steps").value);
    algo(steps);
}

function algo(steps){
    for(let i=1; i <= steps; i++){
        let stars = "";
        for(let j=1; j <= i; j++){
            stars = stars + "* ";
        }
        generate(stars);
    }
}

function generate(text){
    let type = document.createElement("h3");
    let random = Math.floor((Math.random() * colors.length)); //0-1    eg 0.1, 0.9
    type.style.color = colors[random];
    type.style.fontSize = "30px";
    type.style.fontWeight = "900";
    type.style.margin = "0px";
    type.style.padding = "0px";
    type.appendChild(document.createTextNode(text));
    document.getElementById("playGround").appendChild(type);
}

function incDec(count){
    let steps = document.getElementById("steps").value;
    document.getElementById("steps").value = parseInt(steps) + count;
    create();
}

//----------------for in - to traverse objects -------------------------
// in for-in, index of the item is used to traverse the array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
var myObj = { 
    company: "Vanguard Studios", 
    established: "2008", 
    country: "Pakistan", 
    domain: "Software", 
    employees: "16", 
    address: "Abbottabad", 
    ceo: "Jalal Khan"
};

for (var myProp in myObj) {
  //console.log(`${myProp}: ${myObj[myProp]}`);
  var value = "";
  value += myObj[myProp];
  //console.log(value);
  document.getElementById("for-in").innerHTML += value + ", ";
}




//----------------for of - to traverse arrays -----------------------
// in for-of, item from the array is fetched
var myArray = ["Vanguard Studios", "2008", "Pakistan", "Software", "16", 
                "Abbottabad", "Jalal Khan"];
for (let myVar of myArray) {
  document.getElementById("for-of").innerHTML += myVar + ", ";
}

// // another example of "for of" - count specific class usage in documant
// var myTasks = document.querySelectorAll('.task');
// let count = 0;
// for (let tasks of myTasks) {
//     count += 1;
//     tasks.innerHTML += " - " + count; //classList.add('completed');
    
// }
// document.getElementById("for-of").innerHTML = "Total elements found: " + count;

//---------------------------------------------

//while loop
i=0;
while(i <= 15){
    var paragraph = document.createElement("p");
    if(   i % 2 == 0 ){     //even
        paragraph.innerText = i ; 
        document.getElementById("display_count-do-while").appendChild(paragraph);
    }

    i++;
}

//do-while loop
i=0;
do{
    var paragraph = document.createElement("p");
    if(   i % 2 != 0 ){     //odd
        paragraph.innerText = i ; 
        document.getElementById("display_count-while").appendChild(paragraph);
    }
    
    i++;
}while(i <= 15);

//--------------- Task Extra - Loop with condition --------------------

for(var i=0; i <= 10; i++){
    var paragraph = document.createElement("p");
    if(   i % 2 == 0 ){
        paragraph.style.color = "green";
        //document.getElementsByTagName("p")[0].setAttribute("class", "loopClass" + i);
        paragraph.innerText = i + ". Even"; //1
        document.getElementById("display_count-for-if").appendChild(paragraph);
    }else{
        paragraph.style.color = "red";
        //document.getElementsByTagName("p")[0].setAttribute("class", "loopClass" + i);
        paragraph.innerText = i + ". Odd"; //1
        document.getElementById("display_count-for-if").appendChild(paragraph);
    }
}

//if (p.hasAttribute("class")) {      
//    p.setAttribute("class", "task");
//}

//--------------- Task Extra - Multiplication Table --------------------
var table = 9;
var length = 10;
var i = 1;
// console.time("started");
//document.write("Multiplication table: "+ table);
for(i=1; i <= length; i++){
    var heding2 = document.createElement("h2");
    heding2.innerText = table + " x " + i + " = " + (i * table);
    document.getElementById("tableDiv").appendChild(heding2);
}
// console.timeEnd("stopped");

//--------------- Task 18 - Auto refresh after every 10 sec --------------------
/*
window.setTimeout(function pageRefresh() {
    window.location.reload();
}, 5000);
*/

//--------------- Task 19 - *Form Validation (without Constraint Validation API)---
//https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
function formValidate(){
    if( document.getElementById("myName").value.length === 0 ) {
        document.getElementById("formErrorMessage").value = "Name can't be empty!"
        document.biodataForm.myName.focus() ;
        return false;
    }
    if( document.biodataForm.email.value == "" ) {
        document.getElementById("formErrorMessage").value = "Email can't be empty!"
        document.biodataForm.EMail.focus() ;
        return false;
    }
    if( document.biodataForm.address.value == "" || 
        isNaN( document.biodataForm.address.value ) ||
        document.biodataForm.address.value.length != 4 ) {
        
        alert( "Address must be 4 digit format" );
        document.biodataForm.address.focus() ;
        return false;
    }
    if( document.biodataForm.country.value == "-1" ) {
        document.getElementById("formErrorMessage").value = "Please select your country."
        return false;
    }
    return( true );
}

//--------------- Task Extra - Bitwise Operators --------------------
// https://www.programiz.com/javascript/bitwise-operators
// let identifier;

var a = 10;
var b = 1;
var resultBW = a | b;   //OR

//var resultBW = a << b;  //Shift left with 0
//var resultBW = a >> b;  //Shift right with 1
//var resultBW = a >>> b; //Shift right with 0 (Zero-fill right)
/*var resultBW = ~a;      //NOT  gives -(a + 1) ie. -11 
(by using 2's compliment method ie. 1's compliment + 1).
Except Zero-fill right 
https://www.programiz.com/javascript/bitwise-operators
*/
//var resultBW = a & b; 
//var resultBW = a | b; 
//var resultBW = a ^ b;  //XOR,  1 for same bits, 0 for different 

document.querySelector("#bitwise").style.color = 'red';
document.getElementById('bitwise').innerHTML= "a= " + a +
 "<br>b= " + b + "<br>Bitwise a | b = " + resultBW;


//--------------- Task Extra - Count element in document object --------------------

let layout = document.getElementById('layout');
let innerElements = layout.getElementsByClassName('para');
for (let i = 0; i < innerElements.length; i++) {
    console.log(innerElements[i].innerHTML);
}

//--------------- Task  Extra 1- Functions - Table --------------------
function mulTable(){

    let table = parseInt(document.getElementById("tableInput").value);
    let start = parseInt(document.getElementById("tableStart").value);
    let end   = parseInt(document.getElementById("tableEnd").value);

    //alert(typeof start);
    let heading2 = document.createElement("h2");
    for(let j = start; j <= end; j++){
        //heading2.innerText = table + " x " + j + " = " + (j * table);
        heading2.innerHTML += "<br>" + table + " x " + j + " = " + (j * table);
        //document.getElementById("function").appendChild(heading2);
    } 
    document.getElementById("function").innerHTML = heading2.innerHTML;

}

//--------------- Task Extra 2 - Functions - Temperature Converter --------------------
//https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/    Understanding Scope


function temperature(){
    let userInput = parseInt(document.getElementById("userInput").value);

    let fromUnit    = document.getElementById("fromUnit").value;
    let toUnit    = document.getElementById("toUnit").value;

    console.log("userInput: " + userInput + ", fromUnit: " + fromUnit + ", toUnit: " + toUnit);
    
    let result = 0;

    if(fromUnit == toUnit){ //if same units
       document.getElementById('result').value = userInput;
    }else if(typeof userInput == "string"){     //if not a number  -  isNaN(userInput)
        document.getElementById('result').value = "Not a number!";
    }else if(userInput == "" || userInput == " "){     //if empty
        document.getElementById('result').value = "Input can't be empty!";
    }else{
        if(fromUnit == "K" && toUnit == "C"){           
            // K to C = K - 273
            result = userInput - 273.15;
        }else if(fromUnit == "K"  && toUnit == "F"){    
            // K to F = (K - 273)*9/5 + 32
            result = (userInput - 273)*9/5 + 32;    
        }else if(fromUnit == "C"  && toUnit == "K"){    
            // C to K = C + 273
            result = userInput + 273.15;
        }else if(fromUnit == "C"  && toUnit == "F"){    
            // C to F = (C*9/5) + 32
            result = (userInput*9/5) + 32; 
        }else if(fromUnit == "F"  && toUnit == "C"){    
            // F to C = (F - 32)*5/9
            result = (userInput - 32)*5/9;
        }else if(fromUnit == "F"  && toUnit == "K"){
            // F to K =  (F - 32)*5/9 + 273
            result = (userInput -32)*5/9 + 273;        
        }
         //let output = 
        document.getElementById('result').value = result.toFixed(2);
        //output.setAttribute(value, result);
    }
}



//--------------- Task Extra 3 - Functions - Unit Converter --------------------

function feetMeters(){ 
    let feet = parseInt(document.getElementById("convert").value);
    document.getElementById('converted').value = (feet / 3.281).toFixed(2);
}



function clearAll(){ 
    document.getElementById("convert").value = '';
    document.getElementById('converted').value = '';
}


//-----------------------------------------------------------------------
var feet = 30;
function feetMeters2(feet){ //parameters
    return feet * 3.281;
}
document.getElementById('converted').value = feetMeters2(23).toFixed(2); //arguments

//--------------- Task  - Functions - function literals (as expression)--------------------
var feetMeters2 = function(feet) {
    feet * 3.281
 };

 var meters = feetMeters2(23);





//--------------- Task  - Functions - Arrow functions --------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
/* for named functions, arrow expressions are treated like variables.
var meters = (feet) => {
    return feet * 3.281;
} 
console.log(meters);
OR

var meters = feet =>  feet * 3.281;
console.log(meters);
*/

//--------------- Task  - Functions - Function() constructor --------------------
// Runs immediatly

const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));


//--------------- Task  - Objects --------------------------------------
/*Two types of JS Objects:
1. Built-in - Array, Strings, Number, Boolean, RegExp
2. User Defined - Objets created by the programmer
*/

//Object Literals
var lastName = 'Khan';

function mySelf(firstName) {
  if (firstName == 'Jalal') {
    return "Hi, I am " + firstName + ".";
  } else {
    return "I am not " + firstName + ".";
  }
}

var aboutMe = { 
    firstName: 'Jalal', 
    me: mySelf('Jalal'), 
    myCast: lastName 
};

console.log(aboutMe.firstName);
console.log(aboutMe["me"]);
console.log(aboutMe.myCast);

//adding properties
aboutMe.homeTown = "Abbottabad";
//deleting properties
delete aboutMe.myCast;

//Object methods ----------------------------

var aboutMe = { 
    firstName: 'Jalal', 
    me: mySelf('Jalal'), 
    myCast: lastName,
    age: function(){
        return  "Age of " + this.firstName + " is 38";
    } 

};

console.log(aboutMe.age()); //invoke
//console.log(aboutMe.age);   //returns func definition

//useful Array and String Methods 
/* array methods:   (https://codequs.com/p/rJjO3i5NU)
some()          findIndex()     flatMap()
reduce()        find()          reverse()
every()         sort()          forEach() 
map()           concat()        filter()
flat()          fill()          includes()
        
      
//string methods:  (https://morioh.com/p/aef09a3be593)
startsWith()        charAt()        toString()
endsWith()          split()         match()
includes()          replace()       trim()
slice()             repeat()        lastIndexOf()
toUpperCase()       substring()     charCodeAt()
toLowerCase()       valueOf()       concat()
length()            substr()        search()
indexOf()
*/

// Object new Operator ---------------------------
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getName = function() {
	return this.name;
}
Car.prototype.setModel = function(Model) {
	this.model = Model;
}

const car1 = new Car('Honda', 'Civic', 2021);
const car2 = new Car('Toyota', 'Corolla', 2018);
console.log(car1.name);
console.log(car2.model);

car1.getName();
car2.setModel("MarkX");

console.log(car1.name);
console.log(car2.model);

//-----------------------------------------------------------------------
window.onload = pageLoaded;

function pageLoaded() {
  document.getElementById("ratingButtonDiv").onclick = rating;
}

function rating(event){
    let barWidth = 0;
    let value = document.getElementById(event.target.id).value;
    if (event.target.className == 'ratingButton') {
        barWidth = document.getElementById("ratingBar" + value).offsetWidth;
        if(barWidth < 350 ){
            barWidth = barWidth + 35;
            document.getElementById("ratingBar" + value).style.width = barWidth + "px";
        }else{
            document.getElementById("ratingBar" + value).style.width = "350px";
        }
    }
}


//----------------- Add child elements to parent -------------------------

let starsDiv = document.getElementById("starsDiv");
//var star = document.getElementById("starsDiv").appendChild(newStar);
function addStar(){
    let newStar = document.createElement("img");
    newStar.src= "images/star.png";
    newStar.style.width  = "30px";
    newStar.style.height = "30px";

    starsDiv.appendChild(newStar);
}

//----------------- Increment count on button click-------------------------
//https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/

let clapButton = document.querySelector("#clapButton");
let clapCounter = document.querySelector("#clapCounter");

//clapButton.addEventListener("click", addClaps);
clapButton.addEventListener("mouseover", calapsActive);
clapButton.addEventListener("mousedown", addClaps);
clapButton.addEventListener("mouseup", calapsActive);
clapButton.addEventListener("mouseout", calapsInactive);
clapButton.addEventListener("mouseleave", calapsInactive);

function addClaps(){
    clapButton.src = "images/clap.png";
    clapCounter.innerText = parseInt(clapCounter.innerText) + 1;
}

function calapsActive(){
    clapButton.src = "images/calapsActive.png";
    //clapCounter.innerText = parseInt(clapCounter.innerText) + 1;
}

function calapsInactive(){
    clapButton.src = "images/calapsInactive.png";
}


//---------------------------Assignment Extra - Dynamic Form-------------------

var buttonAddField = document.getElementById('addField');
var fields = document.getElementById('fields');

//add fields and delete fields
buttonAddField.addEventListener('click', function () {

    var li = document.createElement('li');
    li.style.listStyleType="none";
    li.style.margin="0";
    li.style.paddingLeft="0";

    var inputName = document.createElement("input");
    inputName.type = "text";
    var inputValue = document.createElement("input");
    inputValue.type = "text";
    var buttonDelete = document.createElement('button');

    li.appendChild(inputName);
    li.appendChild(inputValue);
    li.appendChild(buttonDelete);

    fields.appendChild(li);

    buttonDelete.appendChild(document.createTextNode("Delete"));

    buttonDelete.addEventListener('click', function () {
        fields.removeChild(li);

    });
});


function dataSend(){
    //let myForm = document.getElementById('biodataForm');
    //let data = new FormData(myForm);
    //data.append('username', 'jalal');

    var items = fields.getElementsByTagName('li');
    var output = document.getElementById('output');

    for (var i = 0; i < items.length; i++) {
            console.log(items[i].childNodes[0].value);
            console.log(items[i].childNodes[1].value);
            output.innerHTML = "Output : " + items[i].childNodes[0].value + " : " + items[i].childNodes[1].value + "<br>"
    }

    
}

//-----------------------------------------------------------------------
// Page Redirection ---------------------------
function pageRedirect(){
    window.location.href = "http://www.gtvc-new.com";    

    //with no previous page history
    //window.location.replace('http://gtvc-new.com'); 
}

// Page Reassign ---------------------------
function pageUpdate(){
        //keeps history, safety check, same domain(no cross-origin)
    window.location.assign();  
}

// Page Refresh ---------------------------
function pageRefresh(){
    window.location.reload();
}

// ------------------------Dialog Box ------------------------------
//Alert dialog box

function alertBox(){
    alert ("Heavy rains are expected this week");
}


//Confirm dialog box
function confirmBox(){   
    let choice = confirm("Do you want to upload this form?");
    let textBox = document.getElementById("dialogText");
    console.log("Type: "+ typeof choice + "value: " + choice);
    if(choice == true){
        textBox.style.color = "green";
        textBox.innerText = "File uploaded successfully!";
    }else{
        textBox.style.color = "red";
        textBox.innerText = "File upload cancelled!";
    }
}

//Prompt dialog box
function promptBox(){
    let name = prompt("Please enter you name:", "");
    document.getElementById("dialogText").style.color = "black";
    document.getElementById("dialogText").innerText = "Hi, " + name + " , hope you are doing good today!";
}


// ------------------------ JQuery ------------------------------
//https://www.digitalocean.com/community/tutorials/an-introduction-to-jquery
//JavaScript
//document.getElementById("demo").innerHTML = "Hello, World!";
 
//jQuery
//$("#demo").html("Hello, World!");

//$("#jqDown").hide();
//$("#jqToggle").hide();

// $("#slideDownButton").click(showContent);
// function showContent(){
//     $("#jqDown").slideDown('fast');
// }

//---------------------------------------------
$(document).ready(function() {
    // all custom jQuery will go here

    $('#slideDownButton').click(function(){
        $('#jqMenu').slideDown('slow');  //fast
    });

    $('#slideUpButton').click(function(){
        $('#jqMenu').slideUp(800);   
        // duration default 400ms, .slideUp(duration,easing,complete,)
        // easing default swing, 
    });

    $('#slideToggleButton').click(function(){
        $('#jqMenu').slideToggle('slow');
    });
});





function ageCal(){
    var ageInput = document.getElementById("myAge").value;
    var dob = document.getElementById("dob");
    var dobRresult;

    var age = Number(ageInput);
    var currentDate = new Date();
    var currentYear = Number(currentDate.getFullYear());
    var dobRresult = currentYear-age;

    if(dobRresult > 1995){
        dob.innerHTML = "Hi kiddo, your date of birth is " + dobRresult;
    }else{
        dob.innerHTML =  "Hi sir, your date of birth is " + dobRresult; 
    }

}