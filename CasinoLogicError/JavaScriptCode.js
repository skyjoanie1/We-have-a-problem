// Skylar Baumgartner
//This is the first funtion, the function assigns it to the "displayWelcome" for you to use later in the HTML page
function displayWelcome() { //Opening scope operator- this means that the code is starting up
    //this is saying that what you want written on the page will appear when the function is called
    document.write("<h2>Scroll down to land at the space port and enter the Casino!</h2>");
}//closing scope operator- this means its closing that piece of code and opening up the space for new code
//this function is doing the same thing of assigning the "displayInstructions"
function displayInstructions() {//Opening scope operator- this means that the code is starting up
    //this is saying that what you want written on the page will appear when the function is called
    document.write("<br/><p>This is how you play....<br/>Refresh the page to roll the antigravity dice!</p><br/><p><p>You can't win if you don't play!</p><br/>");
}//closing scope operator- this means its closing that piece of code and opening up the space for new code
//this function is assigning "play" to the code down below- this is where the game starts
function play() {//Opening scope operator- this means that the code is starting up
    //var is assigning die1 to a limit of 6 for 6 sided die
    var die1 = Math.ceil(Math.random() * 6);
    //var is assigning die2 to a limit of 6 for 6 sided die
    // bad code : var die2 = Math.ceil(Math.random() * 12);
    //the new code was that the die needed to be 6 in order for it to be a 6 sided die
    var die2 = Math.ceil(Math.random() * 6);
    //var is assigning sum to be the answer when die 1 and die 2 are added together
    var sum = die1 + die2
    //this is the text showing on the page. die1 = the random number of 1-6 
    document.write("Die 1 = " + die1)
    //this is a break or space in the page so the lines above and below arent right on top of each other
    document.write("<br/>")
    //this is the text showing on the page. die2 = the random number of 1-6 
    document.write("Die 2 = " + die2)
    //this is a break or space in the page so the lines above and below arent right on top of each other
    document.write("<br/>")
    //this is the text showing on the page. Sum= the answer for the random numbers of die1 and die2 being added together
    document.write("Sum = " + sum)
    //this is a break or space in the page so the lines above and below arent right on top of each other
    document.write("<br/>")
    //this is saying that if this happens from the random numbers- a reaction will occur. Bad code : if (sum == 8 || sum == 11) it needs to be 7 for it to be fair, not 8 
    if (sum == 7 || sum == 11) {//Opening scope operator- this means that the code is starting up
        //this is what the reaction is, text will show on the screen to say you lose.
        document.write("You lose Space Cadet!")
        //this is a break or space in the page 
        document.write("<br/>")
    }//closing scope operator- this means its closing that piece of code and opening up the space for new code
    //this is saying that if this happens from the random numbers- a reaction will occur.
    else if (die1 == die2 && die1 % 2 == 0) {//Opening scope operator- this means that the code is starting up
        //this is what the reaction is, text will show on the screen to say you won
        document.write("DOUBLES - you win Space Ranger!")
        //this is a break or space in the page 
        document.write("<br/>")
    }//closing scope operator- this means its closing that piece of code and opening up the space for new code
    //this is saying that if anything other than what was already said in code above- a reaction will occur.
    else {//Opening scope operator- this means that the code is starting up
        //this is what the reaction is, text will show on the screen to say you tied and you must roll again to win or lose
        document.write("Roll again Space Cadet!")
        //this is a break or space in the page 
        document.write("<br/>")
    }//closing scope operator- this means its closing that piece of code and opening up the space for new code
}//closing scope operator- this means its closing that piece of code and opening up the space for new code
