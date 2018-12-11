
// document.getElementById('1').onClick(XO);
// document.getElementById('2').onClick(XO);
// document.getElementById('3').onClick(XO);
// document.getElementById('4').onClick(XO);
// document.getElementById('5').onClick(XO);
// document.getElementById('6').onClick(XO);
// document.getElementById('7').onClick(XO);
// document.getElementById('8').onClick(XO);
// document.getElementById('9').onClick(XO);

var current = 'X'
var rl = [];
var lr = [];
var inputArr= [0,0,0,0,0,0,0,0,0]
var counter = 0
var XO = (e)=>{
    var haveWinner = document.getElementsByClassName('Winner')
    var tr = document.getElementById(e.id)
    if(haveWinner[0].innerHTML){
        alert('Game Already Decided Please Reset')
        return
    }
    if(!tr.innerHTML){
        tr.innerHTML = current
    }else if(tr.innerHTML){
        return
    }

    if(['0','4','8'].includes(e.id)){
        rl.push(current)
    }
    if(['2','4','6'].includes(e.id)){
        lr.push(current)
    }
    if(current === 'X'){
        inputArr[e.id] = current
        current = 'O'
        counter++
    }else {
        inputArr[e.id] = current
        current = 'X'
        counter++
    }
    console.log(rl , lr)
    var matrix = matrixify(inputArr)
    var colMatrix = spin(matrix)
    winner(matrix)
    winner(colMatrix)

 


}
var clearOut= (id) =>{
   const ele =  document.getElementById(id)
   const emp = document.getElementsByTagName('th')
   rl = [];
   lr = [];
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
            
        }
        if(array.every(v => v === 'O')){
            xWinner[0].innerHTML = " O is the Winner"
            current = 'X' 
        }
      })
      if( rl.length === 3){
          if(rl.every(v => v === 'X')){

                  xWinner[0].innerHTML = " X is the Winner"
                  current = 'O' 
          }
          if(rl.every(x => x === 'O')){

                  xWinner[0].innerHTML = " O is the Winner"
                  current = 'X' 
          }
      }
      if( lr.length === 3){
        if(lr.every(v => v === 'X')){
                xWinner[0].innerHTML = " X is the Winner"
                current = 'O' 
        }
        if(lr.every(x => x === 'O')){
                xWinner[0].innerHTML = " O is the Winner"
                current = 'X' 
        }
    }
}