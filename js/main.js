console.log("Ready!")

//Create The Variables You'll Need For The Assignments
var roundNum = -1;					//Variable Containing the round the player is in.
var playerHP = 12;					//Variable Containing the player's starting "health".
var enemyHP = 5;					//Variable containing the "enemy's health."


//Create the daddies object to contain the information you'll need later, as as to make it more readable. 
function daddies(name, lore) {
	this.theirName = name;
	this.theirLore = lore;
}

//-----------------------------------------------------------------------------------------
								//TEXT//

	var firstBoss = new daddies("Clayton 'the Deaf' George.", "As you approach the steps of Black Cat Holiday Inn, you see a corpse seated by the door. You recognize the corpse to be that of the legendary bouncer, Clayton George. Legend says that he wasn't actually a bouncer, rather he liked drinking so much that he never left the establishment. Now, his body forever sits outside the Inn. It really ties the place together, y'know? </br> Still, you'd better destroy it. ");

	var secondBoss = new daddies("Door 'The Door' Door.", "Past the remains of Clayton George's body, is the primary door to the establishment. You try pulling on the door-knob, but it just won't budge. </br> You take a moment to consider your options. </br> . . . </br> . . . </br> Ah-ha! You've got it. The issue is that you didn't ask the door for consent before opening it. You spend the next few minutes deliberating a speech to try and convince the door to open. Afterwards, you reherse it twice. Once by yourself, and once with the remains of Clayton George. Once you are ready you approach the door and give it you best speech. The door isn't moved. Oh, well. Time to kill it.");
	var thirdBoss = new daddies("a bottle of lotion.", "A crumbled pile of wood stands before you. Well done! Before you continue you ought to put on some lotion. You skin is sensitive, after all.");
	var forthBoss = new daddies("an existential crisis.", "You put the lotion on your skin without the hose again. Now that you've finished preparing, you can go on inside. Once you do that it shouldn't take too long to find the whiskey. Once you're done with that, you'll be the hero of the hour! But. . . wait. . . are you even worthy of such a title? And if you were, would that mean that the people surrounding you would only be doing so because of your accomplishments rather than who you really are? After you return home, would they even care that you returned home our would it all just be part of");
	var fifthBoss = new daddies("a wee splinter.", "and what about the military industrial complex, huh?! Did you ever think about that? Wait. Yes. You did. You decided that you didn't care. Oh, well. You take a deep breath and prepare to enter the building,  when all of a sudden you realize that you got a splinter from breaking down the door. This requires immediate medical attention. Do you think you can bandage it up before you bleed out?");
	var sixthBoss = new daddies("a table.", "Crisis averted! You decide to go on in before anything else happens. The inside of the Inn is vast and spacious. Whatever furnature once furnished these halls, was probably all taken by prospectors and looters. All, save tor a single table blocking your path foward. Do you think you can take it?");
	var seventhBoss = new daddies("the layout map", "You try to go through it, under it, above it, but it tuns out that the best way is to go around it. After doing so, you find yourself at the receptionist's desk. On top lay a single layout map. Perhaps, if you solve it you'll be able to find the whiskey.");
	var eighthBoss = new daddies("your sense of direction.", "Ah-ha! You've done it! All the map's secrets are now yours to command. Map! Where is the whiskey? Uh-huh. Uh-huh. HUH. It all makes sense now. The map is for a different building. You'll have to rely on your own sense of direction.");
	var ninthBoss = new daddies("a weird red circle.", "It all comes natural to you. It's OBVIOUSLY that way. And so, off you go. You follow that way all the way to the very end. Whereupon, you find an open door to the basement of the establishment. What better place to hide whiskey than a basement? You venture down into the basement. You don't the whiskey, but instead you see a weird red circle drawn in ketchup on the floor. The circle seems incomplete, perhaps if you finish it you'll be able to find the whiskey.");
	var tenthBoss = new daddies("Omnewoihb'hwo, god of the the waking agony.", "Good news, you! I think you've perfected the circle. Turns out that it's just an ordinary circle. . . but watch out, because that's no ordinary circle! Instead, green flames burst forth from the circle and million, million tiny wasps burst forth from the fire. Each of the wasps has the face of a man and a tongue of steal. They swirl around and around, chanting in a mysterious tongue. After mere seconds, a second wave of flame bursts from the circle, only this time a ball of ooze and tentacles comes out from within. </br> 'Mortal,' a voice rings inside your head, 'you have done well to release me. If you have any finish wish before I destroy your pathetic world, speak them now. Consider it, your reward. ' ");

										//TEXT END//
//-----------------------------------------------------------------------------------------
//Create an array containing all the fights. We'll cycle through these later.
	var saloon = [firstBoss, secondBoss, thirdBoss, forthBoss, fifthBoss, sixthBoss, seventhBoss, eighthBoss, ninthBoss, tenthBoss];

// Create a function to generate a random number.
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
//-----------------------------------------------------------------------------------------
//Create function to bot pull and introduce each encounter.
function summon() {
	//Using a for loop we can automate the proces of pulling each encounter, but calling it from the array we place it in.
	for (var i = 0; i < roundNum; i++) { 
		document.querySelector(".fiend").innerHTML = "You face " + saloon[i].theirName + "</br>" + saloon[i].theirLore;
	}
	fight();				//Call the fight function that we haven't written yet, to continue the process.
} 


//-----------------------------------------------------------------------------------------
//Create a fight function to simulate the random-hits.
function fight() {
	playerHP = 12;
	enemyHP = 3 * roundNum;	//Using the roundNum variable, we can automate the scaling process of the fights.
	var text = "";

	//Use a while loop to automate the fights until either the player or enemy health reaches (or passes) zero.
	while (enemyHP > 0 && playerHP > 0 ) {
		
		
		playerHP = playerHP - getRandomInt(2);
		enemyHP = enemyHP - getRandomInt(4);
		text += "Your patience is at " + playerHP + "." + " Meanwhile, the time remaining to solve the obstacle " + enemyHP + "." + "</br>";
		document.querySelector(".text").innerHTML = text;


	} 
//Using an if statement, we can set-up a fail-state as well as allow the player to continue should they win.
	if (playerHP <= 0) {
		document.querySelector(".text").innerHTML += "Unable to overcome the obstable before you, you decide to go home. Upon arrival you are sentenced to death.";
		//By setting the roundNum so low and calling climb, we can innitiate the fail state. Requiring the player to his Restart to reset the roundNum.
		roundNum = -2; 
		climb();
	} else {
		document.querySelector(".text").innerHTML += "You did it!";
		//Should the player win, we will reset the stats here for the next round.
		playerHP = 12;
		enemyHP = 3 * roundNum;
		return enemyHP ;
	}

}

//-----------------------------------------------------------------------------------
//Create a function to check the players score and react to when the press the venture button.
function climb() {
	//If the player loses, he'll be sent to this if statemtn and be forced to reset the score.
	if (roundNum == -2){
		document.querySelector(".text").innerHTML += "</br> <strong> Press restart to sell a stock of your soul, travel back in time, and a try again. </strong>";
	//Using the innitial value of roundNum, we can set an introduction scene to play whenever the player's score is reset.
	} else if (roundNum == -1) {
		document.querySelector(".fiend").innerHTML = "You arrive at the Black Cat Holiday Inn & Pizzaria of Old Waerloga. The abandoned establishment was once the heart of Old Waerloga's tourism industry. If anyplace is likely to have whiskey, it's there. </br> Press 'Venture' to Enter";
		roundNum = roundNum + 1;
		//This statement throws the player into a fight(by calling the summon function), if they've not reached the end. 
	} else if (roundNum <= 9) {
	roundNum = roundNum + 1;		//Create a variable to increment the score after each fight.
	summon();
	// Write some fluff text in case they win. Nerds.
} else {
	document.querySelector(".fiend").innerHTML = "You ask the weird ball thing where the whiskey is hidden. 'Is that it? Is that truly all that you would ask me for? Are mortals truly so fearless in this day and age, that they care only to ask for such petty things despite being in my presence?' </br> Despite the thing's ramblings, you look at it expectingly. </br> 'Take your drink, mortal. You passed it on the way here. They are hidden on in the bathroom sink -- a place where mortals fear not thread. But know this, you and your kin shall be first to suffer my wrath. When I  leave this place it shall be to destroy you and all you hold dear.";
	document.querySelector(".text").innerHTML = "You did it! </br> You got the drinks! Now you can go home and sleep. Good job?";
}

	return roundNum;
}

//-----------------------------------------------------------------------------------
//Create a function, that when called will force the player to reset their game.
function restart() {
	roundNum = -1;
	document.querySelector(".text").innerHTML = " ";
	climb();
}