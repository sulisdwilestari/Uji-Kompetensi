// mengambil element button pada class number karena ingin mengambil semua maka gunakan queryselectorAll
const numbers = document.querySelectorAll(".number")

//untuk menambahkan event listener secara satu persatu maka gunakan forEach, dan menambahkan click event ke setiap element menggunakan addEventListener
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        //untuk mengakses angka maka lakukan input event.target.value yang berasal dari atribut nilai pada tag button 
    inputNumber(event.target.value)
    //dilakukan untuk mengupdate atau merubah angka yang ditampilkan menggunakan function updateScreen dengan variable current number dikarenakanangka yang disimpan adalah sebuah string
    updateScreen(currentNumber)
    })
})

//melakukan query selector untuk mendapatkan satu element pada calculator screen
const calculatorScreen = document.querySelector('.calculator-screen')
// lakukan update untuk memperbarui nilai
const updateScreen = (number) => {
    calculatorScreen.value = number
}
//setelah bagian atas terselesaikan terdapat permasalahan bahwa angka yang ditampilkan diawali dengan nol, untuk memperbaikinya menggunakan if statement
const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
//definisikan 3 variabel menggunakan fitur let
let prevNumber = ''
let calculationOperator = ''
let currentNumber= '0'

//kemudian pilih semua element button pada class operator
const operators = document.querySelectorAll(".operator")

//untuk mennambahkan event listener secara satu persatu maka gunakan forEach, dan menambahkan click event ke setiap element menggunakan addEventListener
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        ///untuk mengakses angka maka lakukan input event.target.value yang berasal dari atribut nilai pada tag button 
        inputOperator(event.target.value)
    })
})

//definisikan inputOperator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
//menabahkan click event ke suatu element jadi menggunakan querySelector dan hanya ada satu sama dengan 
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})
//mendefinisikan function calculate yang tersimpan pada variabel calculationOperator
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat (currentNumber)
            break
        case "-":
            result = parseFloat (prevNumber) - parseFloat (currentNumber)
            break
        case "*":
            result = parseFloat (prevNumber) * parseFloat (currentNumber)
            break
        case "/":
            result = parseFloat (prevNumber) / parseFloat (currentNumber)
            break
        default:
            return
    }
    //memperbarui variabel currentNumber yang menjadikan hasil kalkulasi yang ditampilkan dilayar
    currentNumber = result
    calculationOperator = ''
}

//definisikan fungsi clear number
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
//mengambil element button menggunakan kelas all-clear dan tambahkan click event 
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

//untuk mengalkulasi angka desimal yaitu dengan mengambil element button yang memiliki kelas decimal dan tambahkan clickevent
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

//definisikan function inputDecimal disini beri keterangan dot untuk memberikan bahwa tanda koma diganti dengan titik
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
} 
