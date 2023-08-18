const scoreTrack = document.getElementById("score");
const cur = document.getElementById("curr");
let compscore = 0;
let playerscore = 0;

function compRand(){
    let a = ["rock", "paper", "scissors"];
    return (a[Math.floor(Math.random()*a.length)]);
}


function selectMove(item){
    if(compscore>=5||playerscore>=5){
        return;
    }
    let comp = compRand();
    if(comp=="rock"&&item=="scissors"||comp=="paper"&&item=="rock"||comp=="scissors"&&item=="paper"){
        scoreTrack.textContent = (`You chose ${item} and Computer chose ${comp}. You lose this round.`);
        compscore++;
        curr.textContent = (`Computer: ${compscore}
        You: ${playerscore}`);

    }
    else if(comp==item){
        scoreTrack.textContent = ("You both chose "+item+ " It's a tie");
        curr.textContent = (`Computer: ${compscore}
        You: ${playerscore}`);
    }
    else{
        scoreTrack.textContent = (`You chose ${item} and Computer chose ${comp}. You win this round.`);
        playerscore++;
        curr.textContent = (`Computer: ${compscore}  
        You: ${playerscore}`);
    }
    if(compscore==5||playerscore==5){
        let x = (compscore>playerscore)?"Computer":"You";
        scoreTrack.textContent = (`${x} won. Reload to start over again`);
    }

}