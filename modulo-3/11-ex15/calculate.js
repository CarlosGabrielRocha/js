const resultInput = document.getElementById('result')
document.getElementById('equal').addEventListener('click', calculate)

export default function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    const result = eval(input.value)
    
    resultInput.value = result
    resultInput.classList.remove('error')
}