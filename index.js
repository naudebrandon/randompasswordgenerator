const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

//Get the 2 display fields
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let password="";

function randomGenerator(){
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}

function generatePasswords(){
    passOne="";
    passTwo="";

    for (let i = 0; i < 16; i++)
    {
        password = randomGenerator();
        passOne += password;
        password = randomGenerator();
        passTwo += password;
    }
    
    //Display generated passwords
    passwordOne.textContent = passOne;
    passwordTwo.textContent = passTwo;
}

//Function to copy generated password to the clipboard
function copyToClipboardP1() {
    var copyText = passOne;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
    });
  }

  function copyToClipboardP2() {
    var copyText = passTwo;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
    });
  }