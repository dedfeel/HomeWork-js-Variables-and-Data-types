
let select = document.getElementById('selectGroup')

select.addEventListener('change', function(){
    console.log(`Tandalgan top ${this.value}`);
})

let formInput = document.getElementById('form')
let errorMassage = document.getElementById('check')

formInput.addEventListener('submit', function(event){
    event.preventDefault()
    let text = document.getElementById('textBal').value
    if(text.length >= 15){
        errorMassage.textContent = 'Pikir maksimaldy 15 aripten quraluy kerek'
        errorMassage.style.color = 'red'
    }else{
        errorMassage.textContent =""
        errorMassage.textContent = "sizde bari durys, Qabyldandy"
        errorMassage.style.color = "green"
        console.log(`Oqushy pikiri boiynsha zhinalgan aqparattar ${{group: select, feedback: text,}}`);
    }
})

let renge = document.getElementById('rangeCheck')
let san = document.getElementById('san') 

renge.addEventListener("fokus", function(){

})


// Бағалау (Range Input): 

// Оқиға: input 
//  Бағалау мәнін таңдау кезінде value арқылы оның ағымдағы мәнін алуға болады.
//   Мысалы, егер бағалау жасалған болса, сол мәнді динамикалық түрде экранда көрсету керек. 
// Форма жіберу (Submit Button): 

// Оқиға: submit 
// Қалай қолдану керек: Форма жіберілетін кезде барлық өрістердің тексерілуі қажет.
//  Егер барлық өрістер дұрыс болса, ақпарат консольға шығарылады. 
// Қолданылатын әдістер: 
// document.getElementById(): Элементтерді табу үшін. 
// document.querySelector(): Бірінші сәйкес элементті табу үшін. 
// addEventListener(): Оқиғаларды тыңдау үшін. 
// textContent / innerHTML: Хабарламаларды көрсету үшін. 
// value: Форманың мәндерін алу үшін