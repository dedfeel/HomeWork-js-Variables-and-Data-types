
let saqtau = document.getElementById("saqtau")
let tazalau = document.getElementById('tazalau') 

saqtau.addEventListener('click', function(){
    let color = document.getElementById('color').value

    sessionStorage.setItem('color', color)
    console.log(color);
    
    if(color){
        document.body.style.backgroundColor = color
    }else{
        console.log("Анықталмады");
    }
})

tazalau.addEventListener('click', function(){
    sessionStorage.clear()
    window.location.reload()
})