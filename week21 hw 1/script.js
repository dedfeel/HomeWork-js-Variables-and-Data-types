let text = document.getElementById('text')
let tazalau = document.getElementById('tazalau')
let saqtau = document.getElementById('saqtau')

saqtau.addEventListener('click', function(){
    localStorage.setItem("text", text.value)
})

tazalau.addEventListener('click', function () {
    localStorage.clear()
    window.location.reload()
})
