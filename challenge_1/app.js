
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

var inputArr= [0,0,0,0,0,0,0,0,0]
var XO = (e)=>{
    var tr = document.getElementById(e.id)
    if(!tr.innerHTML){
        tr.innerHTML = current
    }
    if(current === 'X'){
        inputArr[e.id] = current
        current = 'O'
        
    }else {
        inputArr[e.id] = current
        current = 'X'
    }
    console.log(inputArr)
    var matrix = matrixify(inputArr)
    winner(matrix)
 


}
var clearOut= (id) =>{
   const ele =  document.getElementById(id)
   const emp = document.getElementsByTagName('th')
   for(var i = 0; i < emp.length; i++){
       emp[i].innerHTML = ''
   }
   console.log(emp[1])

}

var matrixify= (input)=>{
    var newArr = input.reduce((rows, key, index) => (index % 3 == 0 ? rows.push([key]) 
  : rows[rows.length-1].push(key)) && rows, []);
  return newArr;
}

var winner=(matrix)=>{
    matrix.forEach((array)=>{
        if(array.every(v => v === 'X')){
            console.log('X')
            var xWinner = document.getElementsByClassName('Winner')
            xWinner[0].innerHTML = " X is the Winner"
            console.log(xWinner)
        }
        if(array.every(v => v === 'O')){
            var xWinner = document.getElementsByClassName('Winner')
            xWinner[0].innerHTML = " O is the Winner"
        }
    
      })

}