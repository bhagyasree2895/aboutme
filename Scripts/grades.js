console.log('SCRIPT START')

console.log('Declare testable functions.....................')
function parsing(x) {
    return parseInt(x)
}
function gradeCalculator(x, y, z) {
    return ((x + y + z) / 3)
}
console.log('Defined gradeCalculator=' + gradeCalculator)

console.log('Declare event listeners .......................')

function myFunction() {


    //const s = document.getElementById('guest').value
    const origCount=parseInt(localStorage.getItem('countOfClicks'))||0
    const i = parseInt(document.getElementById('firstNumber').value)
    console.log('i=' + i)
    const j = parseInt(document.getElementById('secondNumber').value)
    console.log('j=' + j)
    const k = parseInt(document.getElementById('thirdNumber').value)
    console.log('k=' + k)
    const ct=origCount+1
    const ans = ' your grade is ' + gradeCalculator(parsing(i), parsing(j), parsing(k)) + '. This has been clicked:'+ct+'.times' 
    document.getElementById('result').innerHTML = ans
    localStorage.setItem('countOfClicks', ct)
     console.log("This has been clicked:",ct)
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }

console.log('SCRIPT END')
function testingfunc(a,b,c){
   grade1 = a;
    grade2 = a;
   grade3 = a;
    var result;
    var sum;
    if(grade1<0 || grade2<0 || grade3<0){
        result = 0;
    }
    else if(grade1>4 || grade2>4 || grade3>4){
        result = 0;
    }
    else if(grade1== null || grade2== null || grade3== null){
        return 0
    }
    else{
       sum = grade1+grade2+grade3;
       result = sum/3;
    }
    return result;

}
