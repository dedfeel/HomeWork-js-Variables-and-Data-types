let artists = [
    {name: "Michael Jackson", songs: ["Smooth Criminal", "Billie Jean", "Beat it", "Earth song"]},
    {name: "Billie Eilish", songs: ["Bad Guy", "lovely", "lunch", "Chihiro", "Billie Jean", "Beat it", "Earth song"]}, // songy 3 muzyka na primere
    {name: "Kairat Nurtas", songs: ["Auyrmaidy Zhurek", "Ol sen emes"]},
]

artists[2].songs[1] = "Baiqa"
console.log(artists);


console.log(artists[0].songs[3]);

console.log(artists[0].name , artists[0].songs[3]);

let sliceElement = artists[1].songs.slice(0,6)
console.log(sliceElement);






// Массив және объектілер құрыңыз:
// 1. Кодта artists (әншілер) атты массив бар, оның ішінде әр элемент объект түрінде берілген. Әр объект:
//  - name (аты) және
//  - songs (әндері) атты қасиеттерден тұрады.
//  - әндерді суреттегідей сақтаңыз.
// 2. Объектінің мәнін өзгертіңіз:
//  Массивтің үшінші элементінің (яғни Kairat Nurtas әншісінің) songs массивіндегі екінші мәнін "Baika" деп өзгертіңіз.

// 3.Әншінің атын және соңғы әнін басып шығарыңыз:
// Массивтің бірінші элементінің (яғни Michael Jackson әншісінің) соңғы әнін экранға шығарыңыз.

// 4.Billie Eilish әншісінің ұзындығы 6 символдан аспайтын әндерін экранға шығарыңыз.

// Әндерді filter әдісі арқылы сүзгілеңіз