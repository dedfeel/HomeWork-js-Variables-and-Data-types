sandar = []

while (true) {
    let san = +prompt("San engiz")
    if (san == 0) {
        break;
    }else{
        if (san / 2 ==0) {
            sandar.unshift(san)
        }if (san / 2 == 1) {
            sandar.push(san)
        }
    }
    sandar[true] = san
}

console.log(sandar);








// 1. Бос массив ашыңыз => sandar = []
// 2. Қолданушыдан сан енгізуді ЦИКЛ арқылы сұрай беріңіз.
// 3. Егер жұп сан болса, Массивтің басына қосасыз, егер тақ болса соңына қосасыз.
// 4. Қолданушы 0 енгізсе тоқтатасыз.
// 5. Соңында массивтің өзін және ұзындығын шығарасыз