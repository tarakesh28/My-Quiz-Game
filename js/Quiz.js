class Quiz {
  constructor(){
    this.results = createElement('h1');
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("cyan");
    //write code to show a heading for showing the result of Quiz
    fill("white");
    textSize(30);
    text("Results",340,50);
    text("-------------",320,65);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      var ans = 235;
      fill("white");
      textSize(20);
      text("NOTE: Contestant who answered correct are highlighted in green color!",130,230);

    }

    //write condition to check if contestantInfo is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
    for(var plr in allContestants){
      var correctAns = "2";
      var correctAns2 = "Envelope";
      var correctAns3 = "envelope";
      if(correctAns === allContestants[plr].answer || correctAns2 === allContestants[plr].answer || correctAns3 === allContestants[plr].answer)
       fill("Green");
      else
        fill("red");

      ans+=35;
      textSize(30);  
      text(allContestants[plr].name + ": " + allContestants[plr].answer, 180, ans);
     }
     
  }

}
