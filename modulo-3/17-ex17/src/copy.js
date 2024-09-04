const resultInput = document.getElementById('result')
const copyBtn = document.getElementById('copyToClipboard')

copyBtn.addEventListener('click', function (ev) {
    const button = ev.currentTarget
    if (button.innerText === "Copy") {
        button.innerText = "Copied!"
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = "Copy"
        button.classList.remove('success')
    }
})

export { copyBtn } 

