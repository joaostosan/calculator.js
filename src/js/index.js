import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import themeSwitcher from "./themeSwitcher.js"
import { handleButtonPress, handleKeyPress, handleClear } from "./keyHandlers.js"

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', handleButtonPress)
})
document.querySelector('#clear').addEventListener('click', handleClear)
document.querySelector('#input').addEventListener('keydown', handleKeyPress)
document.querySelector('#equal').addEventListener('click', calculate)
document.querySelector('#copyToClipboard').addEventListener('click', copyToClipboard)
document.querySelector('#themeSwitcher').addEventListener('click', themeSwitcher)