let green = document.getElementById('jasyl')
green.addEventListener("click", function(){
    box.style.backgroundColor = "green"
})

let eniUzartu = document.getElementById('eni')
eniUzartu.addEventListener("click", function(){
    box.style.width = "220px"
})

let uzynUzartu = document.getElementById('biik')
uzynUzartu.addEventListener("click", function(){
    box.style.height ="220px"
})


let text = document.getElementById('matin')
let box = document.getElementById('qorap')

box.addEventListener('mouseenter', function(){
    text.textContent = "Сіздің мышкаңыз қораптың ішінде!"
})

box.addEventListener('mouseleave', function(){
    text.textContent = "Сіздің мышкаңыз қораптан шығып кетті!"
})



// Берілгендер: 
// Бетте сұр түсті төртбұрышты қорап (div) және үш батырма (button) орналасқан. 
// Қораптың бастапқы ені 200px, биіктігі 200px, ал ішінде келесідей мәтін жазылған: "Өзгеріс көру үшін мышкаңызды қорапқа алып келіңіз". 
// Тапсырма: 

// Оқушылар батырмалар мен оқиғаларды пайдаланып, келесі функционалдарды жүзеге асыруы керек: 
// "Жасыл" батырмасы: Басылған кезде қораптың фоны жасыл түске боялуы керек.
// "Ұзарту" батырмасы: Басылған кезде қораптың енін (width) 20px-ке ұзарту қажет. 
// "Биіктігін ұзарту" батырмасы: Басылған кезде қораптың биіктігін (height) 20px-ке ұзарту қажет. 
// Мышкамен әрекет: 
// Егер тышқан қораптың ішіне кірсе, қораптың ішінде: "Сіздің мышкаңыз қораптың ішінде!" деген мәтін пайда болуы керек.
// Егер тышқан қораптан шықса, қораптың ішінде: "Сіздің мышкаңыз қораптан шығып кетті!" деген мәтін шығуы керек.
// Бастапқы мәтін: 
// Мышкамен қорапқа кірмей тұрып, қорапта: "Өзгеріс көру үшін мышкаңызды қорапқа алып келіңіз" деген мәтін тұруы қажет.
