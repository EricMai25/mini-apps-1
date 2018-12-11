
var player1 = document.getElementsByClassName('player1')
var player2 = document.getElementsByClassName('player2')
var current = 'X'
var rl = [];
var lr = [];
var xWin = [];
var oWin = [];
var inputArr= [0,0,0,0,0,0,0,0,0]
var counter = 0
var XO = (e)=>{
    var turn = document.getElementsByClassName('turn')
    var haveWinner = document.getElementsByClassName('Winner')
    var tr = document.getElementById(e.path[0].id)
    if(haveWinner[0].innerHTML){
        alert('Game Already Decided Please Reset')
        return
    }
    if(!tr.innerHTML){
        tr.innerHTML = current
    }else if(tr.innerHTML){
        return
    }

    if(['0','4','8'].includes(e.path[0].id)){
        rl.push(current)
    }
    if(['2','4','6'].includes(e.path[0].id)){
        lr.push(current)
    }
    if(current === 'X'){
        
        inputArr[e.path[0].id] = current
        current = 'O'
        player2[0].classList.toggle("glow")
        player1[0].classList.toggle("glow")

        counter++
    }else {
        inputArr[e.path[0].id] = current
        player2[0].classList.toggle("glow")
        player1[0].classList.toggle("glow")

        current = 'X'
        counter++
    }
    const matrix = matrixify(inputArr)
    const colMatrix = spin(matrix)
    winner(matrix)
    winner(colMatrix)
    diagCheck()
    tally(oWin,xWin)
    turn[0].innerHTML= 'Turn: ' + current


 


}
var tally = (o , x)=>{
    var talX = document.getElementsByClassName('tallyX')
    var talO = document.getElementsByClassName('tallyO')

    talX[0].innerHTML = talX[0].innerHTML += x.join('')
    talO[0].innerHTML = talO[0].innerHTML += o.join('')

}
var clearOut= (id) =>{
   const ele =  document.getElementById(id)
   const emp = document.getElementsByTagName('th')
    rl = [];
    lr = [];
    xWin = [];
    oWin = [];
   inputArr= [0,0,0,0,0,0,0,0,0]
   counter= 0
   for(var i = 0; i < emp.length; i++){
        emp[i].innerHTML = ''
        var xWinner = document.getElementsByClassName('Winner')
        xWinner[0].innerHTML = ""

   }

}

var matrixify= (input)=>{
    var newArr = input.reduce((rows, key, index) => (index % 3 == 0 ? rows.push([key]) 
  : rows[rows.length-1].push(key)) && rows, []);
  return newArr;
}

var spin= (matrix)=>{
    var spun = []
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[0].length; j++){
            spun[j] ? spun[j].push(matrix[i][j]) : spun[j] = [matrix[i][j]]
        }
    }
    return spun
}

var winner=(matrix)=>{
    var xWinner = document.getElementsByClassName('Winner')
    if(counter === 9){
        xWinner[0].innerHTML = "TIE Reset To Play Again"
    }
    matrix.forEach((array)=>{
        if(array.every(v => v === 'X')){
            xWinner[0].innerHTML = " X is the Winner"
            current = 'O'    
            xWin.push('l')
            return
            
        }
        if(array.every(v => v === 'O')){

            xWinner[0].innerHTML = " O is the Winner"
            current = 'X' 
            oWin.push('l')
            return

        }
      })
      
}

var diagCheck = ()=>{
    var xWinner = document.getElementsByClassName('Winner')
    if( rl.length === 3){
        if(rl.every(v => v === 'X')){

              xWinner[0].innerHTML = " X is the Winner"
              current = 'O' 
              xWin.push('l')

        }
        if(rl.every(x => x === 'O')){

              xWinner[0].innerHTML = " O is the Winner"
              current = 'X' 
              oWin.push('l')

        }
        return
    }
    if( lr.length === 3){
      if(lr.every(v => v === 'X')){

              xWinner[0].innerHTML = " X is the Winner"
              current = 'O'
              xWin.push('l')

      }
      if(lr.every(x => x === 'O')){
              xWinner[0].innerHTML = " O is the Winner"
              current = 'X' 
              oWin.push('l')

      }
      return
  }
}

var tester= (event)=>{
    console.log(event)
    console.log(event.path[0].id)
}

var player=()=>{
    var play = prompt("Ready Player: ", 'One')
    var play2= prompt("Ready Player: ", "Two")
    player1[0].classList.toggle("glow")
    player1[0].innerHTML = play
    player2[0].innerHTML = play2
}

var rotate=()=>{
    var table = document.getElementsByClassName('thetable')
    table[0].classList.toggle("rotated")
}