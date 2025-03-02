/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

    We have a condtional if/else statement that determines what the bear is wearing.

    If the value of the variable `doorChoice` is strictly equal to 1,
    the variable `bearClothing` will be assigned to "hat." This results in a `true`
    statement and the code will proceed to the next block.

    If the value of `doorChoice` is not strictly 1, then the `else` condition will be executed.

2. What variable has a new value assigned to it after the first if statement executes?

    `bearClothing`

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

    `scarf`

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

    We are using the `else if` statement. In this scenario, the if/else if/else structure can only execute one section of instructions run.
    Javascript will read unitl it registers a `true` statement, and not bother with the rest of the code block.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

    Hopefully you are not Indiana Jones, as you'll be dealing with a room full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

    The bear will be told its hat is too small and it will start to cry.

7. What is your favorite ending?

    Certainly the secret door... cause I'm Indiana Jones! :)
*/
