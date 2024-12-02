let sRamos = {
    aty: "Ramos",
    tegi: "Sergio",
    jasy: 38,
    goalSany: 117,
    oinaganKomandasy: ["Севилья академия", "Реал мадрит", "PSG", "Севилья"],
    inf: function () {
        return `Atu ${this.aty}, \n tegi ${this.tegi}, jasy ${this.jasy}, \n soqqan goly ${this.goalSany}, \n Oinagan komandalary ${this.oinaganKomandasy}`
    },
    atyJoni: function(){
        return this.tegi + this.aty
    }
}

let info = alert(sRamos.inf())


let goal = alert(`goal salgannan keyingi sany: ${sRamos.goalSany + 2}`)

console.log(`Ui tapsyrmasyna say jauaptar  \n ${sRamos.atyJoni()} \n Qazirgi kluby: Qazir bos agent `);








// 1. Футболшының атын, тегін, жасын, гол санын, ойнаған командаларын енгіз.
// Командаларын массивке жазу керек
// 2. Соңғы ойында ойыншы 2 гол соқты сондықтан гол санын 2 ге арттыр.
// 3. Функция шақыру арқылы атын және тегін бірге шығару керек.
// 4. Функция арқылы қазіргі клубын шығару керек (Қазіргі клубы массив соңында болады).