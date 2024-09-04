export const clearBtn = document.getElementById('clear')

clearBtn.addEventListener('click', function () {
    input.value = ''
    input.focus()
})

import { input } from "./addkey.js"

