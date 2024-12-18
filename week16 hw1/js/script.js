let data = [
    {title: '"Абай жолы" - Муктар Ауезов ', 
        description: 'Абайдын омиримен Казак тарихынын шежыресы'
    },
    {title: '"Qan men ter" - Abdizhamil Nurpeisox ', 
        description: 'qazaq halqynyn qiyn kezenderinin epikalyq baiany '
    },
    {title: '"Koshpendiler" - Ilias esenberlin ', 
        description: 'Qazaq halqynyn qalyptasu tarihy'
    },
    {title: '"Za nimi moskva" -Aleksandr bek ', 
        description: 'Panfilovshylardyn erzhurektigi turaly tarihi derekti roman'
    },
]


let divElement = document.getElementById('container')

let card1 = document.createElement('div')
card1.innerHTML = data[0]


divElement.appendChild(card1)

let card2 = document.createElement('div')
card2.innerHTML = data[1]

divElement.appendChild(card2)

let card3 = document.createElement('div')
card3.innerHTML = data[2]

divElement.appendChild(card3)

let card4 = document.createElement('div')
card4.innerHTML = data[3]

divElement.appendChild(card4)







// 1.Жиынтығымызда бірнеше деректер бар (data массиві). 
// 2.Әрбір деректі HTML құжатына карта (card) ретінде шығару қажет. 
// 3.Әр картада: 
// Тақырыбы (title) 
//  Сипаттамасы (description) 
//  Бір батырма болады ("Жою"). 
// Талаптар: 
//  Карта JavaScript арқылы динамикалық түрде құрылады (createElement). 
//  Әр картаны ата-аналық контейнерге қосу үшін appendChild қолданылады. 
//  Батырманы басқанда карта жойылады (removeChild).