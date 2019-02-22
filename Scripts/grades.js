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

console.log('SCRIPT END')
