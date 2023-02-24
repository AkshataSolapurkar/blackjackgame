let player={
  name: "akshata",
  chips: 200
}
let sum = 0
let messageEL = document.getElementById("message-ed")
let sumEl= document.getElementById("sumel")
console.log(messageEL)
let cardEL = document.getElementById("cardel")
let set = []
let isalive = false
let hasjack = false
let message = " "
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $"+ player.chips


function getRandom(){
  let random=Math.floor(Math.random()*13)+1    // in black jack A is worth 11 
                                          // and J Q K are treated as 10 so create a if where returned walue is 1 the value should be 12
                                          //and if the returned value is 11 12 13 then the value should be 10
  if(random>10){
    return 10
  }else if(random === 1){
    return 11
  }else{
    return random
  }

}

function startend(){
  isalive= true
  let fristcard = getRandom()
  let secondcard = getRandom()
  sum = fristcard+ secondcard
  set =[fristcard,secondcard]
  rendard()
}

  function rendard(){
    cardEL.textContent = "Cards: " 
    for(let i=0; i<set.length; i++){
      cardEL.textContent += set[i] + " "
    }
    if( sum<21){
        message = "you can draw another card ?"
    }
    else if( sum===21){
        message = "wuuhooowww! you won the Black Jack"
        hasjack= true
    }
    else{
        message = "Sorry !!! You are out of the game"
        isalive = false
    }

     messageEL.textContent = message   
     sumEl.textContent = "Sum: " + sum
}
    function newcard() {
      if( isalive === true && hasjack === false){
      let sets= getRandom()
      set.push(sets)
      sum +=sets
      rendard()
      }
    }
    

    // if we console log the value in the frist it shows the card already which are gonna be put if that happens
    //it will be fishy even strating the game before it even starts so to fix that problem you have to assign the valuen
    // of the cards and the set inside of the 