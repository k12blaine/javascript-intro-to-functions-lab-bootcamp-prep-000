function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase()) 
}

function logWhisper(string) {
  console.log(string.toLowerCase()) 
}

function sayHiToGrandma(string)
{
  var uppercase = "HELLO!"
  var lowercase = 'hello!'
  var mixedCase = 'Hi there!'
  
  uppercase.toUpperCase() === uppercase // true
  
  
   
  lowercase.toLowerCase() === lowercase // true
   
  
   
  mixedCase.toLowerCase() === mixedCase // false
  
  mixedCase.toUpperCase() === mixedCase // false
}
