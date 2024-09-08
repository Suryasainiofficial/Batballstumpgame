
    let data=localStorage.getItem('score');
    let score;
    resetScore(data);
    function resetScore(data){
      score= data? JSON.parse(data):{
      Win:0,
      Lose:0,
      Tie:0,};
     score.showResult=function()
    {return `Won:${score.Win}<br>Loss:${score.Lose}<br>Tie:${score.Tie}`;}
    showResult();
  };
  
  function computerChoice(){
  
    let randomNo=Math.random()*3;

    if(randomNo>0 && randomNo<=1){
     
      return'Bat';
       
    }else if(randomNo>1 && randomNo<=2)
    {
   return 'Ball';
     
    }else {
     return 'stump';
     

    }
  }  

  function getResult(userChoice,Compsel){
   
    if(userChoice==='Bat')
    {
      if(Compsel==='Bat'){
        score.Tie++;
        return 'tie';

        }else if(Compsel==='Ball'){
          score.Win++;
        return 'user win';
      }else if(Compsel==='stump'){
        score.Lose++;
        return 'computer wins';
      }
   
    }else if(userChoice==='Ball'){
      
      if(Compsel==='Bat'){
          score.Lose++;
          return 'computer win';
         
        }else if(Compsel==='Ball'){
          score.Tie++;
        return 'tie';
      }else{
        score.Win++;
        return 'user win';
      }
     
    }else {
      
      if(Compsel==='Bat'){
        score.Win++;
      return 'user win';
     
      }else if(Compsel==='Ball'){
        score.Lose++;
      return 'computer win';
      }else{
        score.Tie++;
      return 'tie';
      }
     
    
    }
  }

  function showResult(userChoice,Compsel,res){
    let scr=localStorage.setItem('score',JSON.stringify(score));
    console.log(scr);
    
    document.querySelector('#txtres').innerHTML=userChoice!==undefined?`User choice is ${userChoice}`:'';

    document.querySelector('#txtres1').innerHTML=userChoice!==undefined?`Computer choice is ${Compsel}`: '';

    document.querySelector('#txtres2').innerHTML= res!==undefined?`Result = ${res}`: 
    '';

    document.querySelector('#txtres3').innerHTML=`${score.showResult()}`;
  }