var pin1 = parseInt(prompt("Please enter a 4-digit Pin."));
var pin2 = parseInt(prompt("Please re-enter a 4-digit Pin."));

if (pin1 == pin2)
{
    console.log("Password is set.");
}
else if (pin1 != pin2)
{
    console.log("ERROR, Passwords are different.");
}