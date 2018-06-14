window.onload = function(){

  fade("#answer", "0", "0s");

  var listofanswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
  var onClick = function()
  {
    fade("#answer","0","0s")
    var question = prompt("What do you want to know")
    shake("#magic8Ball")

    var randomIndex = Math.floor((Math.random() * (listofanswers.length)));
    var answer = listofanswers[randomIndex]
    console.log(answer)
    document.querySelector("#magic8Ball").setAttribute("src","magic8BallAnswer.png")
    document.querySelector("#answer").textContent = answer
    fade("#answer","1","7s")
  };

  document.querySelector("#questionButton").addEventListener("click", onClick);

};
