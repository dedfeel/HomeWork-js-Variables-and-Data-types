let student = {
    name: "Aziz",
    age: 21,
    grades: {
        math: 100,
        english: 100,
        sciense: 100,
    },
    address: {
        city: "Almaty",
        street: "Al Farabi",
    },
    name1: "Asan",
    age1: 18,
    grades1: {
        math: 85,
        english: 90,
        sciense: 80,
    },
    address1: {
        city: "Almaty",
        street: "Abaya",
        country: "Japan"
    }
}
// 2 tapsyrma
let classA = ["Alina", "Asan", "Amina"]
let classB = ["Berik", "Baqyt", "Bayan"]

let school = ["Direktor",...classA,...classB,"Mugalim"]
console.log(school);

// let {name, age,  grades, addres} = student
// let adam = student.name
// let matem = student.grades.math
// let qala = student.address.city
// let el = "Qazaqstan"


// console.log("Natije");
// console.log(`Esimi ${adam}`);
// console.log(`Matematika bagasy ${matem}`);
// console.log(`Qalasy ${qala}`);
// console.log(`Memleketi ${el}`);


// Тапсырма 1: Оқушы бағаларын бөліп алу(ыдырату)

// Талаптар:
//    1.Мектепте оқушылардың деректері объектіде сақталады. Кем дегенде 2 оқушы болсын.
//  Деструктуризация арқылы белгілі бір оқушынын ақпаратын бөліп алыңыз. 
//    2. name, math бағасын және city мәнін жеке айнымалыларға бөліп алыңыз.
//    3. Егер объектте country болмаса, оған әдепкі мән ретінде "Қазақстан" орнатыңыз.
//    4. Бөлінген мәндерді шығарыңыз.

// Төменде объектте болу керек ақпарат мысал суреті бар



// Тапсырма 2: Сынып тізімдерін қосу (Spread операторын пайдалану)

// Талаптар:    
//      Екі сынып бір жоба үшін біріктіріледі. Тізімдерді қосыңыз және нәтижеге "Директор" мен "Мұғалім" мәндерін қосыңыз.

// 1. Spread операторын пайдаланып, екі тізімді біріктіріңіз.
// 2. Тізімнің басына "Директор" және соңына "Мұғалім" мәндерін қосыңыз.
// 3. Соңғы тізімді шығарыңыз.

// Төменде суретте массив элементтері және нәтижесін қарасаңыз болады