// documentCookie = 'OTZ=6849680_52_52_123900_48_436380; SID=TQh9QLSVvqNA2OB8FM1lLJmsjkspi9F3lQaiAIfw7sB86deZtXZ5NhewMeri8QY-xyxgLA.; APISID=A484dCJZ4MtcpbL4/AWE4hbkBsb5TZaX8B; SAPISID=EA3yvsPb3qwuVYUe/AhQ-x5L1BhQUxu20v; __Secure-1PAPISID=EA3yvsPb3qwuVYUe/AhQ-x5L1BhQUxu20v; __Secure-3PAPISID=EA3yvsPb3qwuVYUe/AhQ-x5L1BhQUxu20v; 1P_JAR=2023-02-06-17; SIDCC=AFvIBn9-toikzw0KnhzGK_oh54ynSWb9rJ_i-2UeTFv3ktW0dOC_grhwQU_FM-sbsdgFC_BnXg';
// let niz = documentCookie.split('; ');
// niz.forEach((el, index) => {
//     niz[index] = el.split('=');
// });
// // let niz2 = niz.map((el) => {
// //     return el.split('=');
// // });
// console.log(niz);
// let obj = {};
// niz.forEach((el) => {
//     obj[el[0]] = el[1];
// });
// console.log(obj);

// document.cookie = 'ime=Marko';
// document.cookie = 'prezime=Markovic; max-age=3600; priority=High';
// document.cookie = 'ime=Nikola';
// document.cookie = 'ime=' + encodeURIComponent('Ћирилица');
// document.cookie = 'novi=Novi; max-age=10000; priority=High';
// document.cookie = 'novi=Noviji; priority=Low';
// document.cookie = 'obrisan=Uskoro; max-age=10';
// document.cookie = 'kodiran=' + encodeURIComponent('šČćĐžKodiran!;+?');

// let niz = document.cookie.split('; ');
// let niz2 = niz.map((el) => {
//     return el.split('=');
// });
// let obj = {};
// niz2.forEach((el) => {
//     obj[el[0]] = el[1];
// });
// console.log(decodeURIComponent(obj.ime));
// console.log(decodeURIComponent(obj.kodiran));

// localStorage.setItem('bgcolor', 'red');
// sessionStorage.setItem('color', 'blue');

// localStorage.removeItem('bgcolor');
// sessionStorage.removeItem('color');

// let bgColor = localStorage.getItem('bgcolor');
// let color = sessionStorage.getItem('color');
// let proba = localStorage.getItem('color');
// console.log(bgColor);
// console.log(color);
// console.log(proba);

// localStorage.setItem('1', '1');
// localStorage.setItem('2', '1');
// localStorage.setItem('3', '1');
// localStorage.setItem('4', '1');

// console.log(localStorage.getItem('1'));

// localStorage.clear();

// console.log(localStorage.getItem('1'));

// localStorage.setItem('proba', 'PROba 123');

// console.log(localStorage.getItem('proba'));

// localStorage.setItem('proba', 'Neka druga proba');

// console.log(localStorage.getItem('proba'));



// localStorage.setItem('1', '1');
// localStorage.setItem('2', '2');
// localStorage.setItem('3', '3');
// localStorage.setItem('4', '4');

// for(let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`Kljuc ${key} ima vrednost ${localStorage.getItem(key)}`);
// }
// console.log(localStorage)

window.addEventListener('storage', (event) => {
    console.log(event);
});

localStorage.setItem('osoba', JSON.stringify({ime: 'Nikola', prezime: 'Nikolic', godine: 101}));
localStorage.setItem('osoba2', {ime: 'Nikola', prezime: 'Nikolic', godine: 101});
localStorage.getItem('osoba');

console.log(JSON.parse(localStorage.getItem('osoba')));

setTimeout(() => {
    localStorage.setItem('osoba', 'druga osoba');
}, 1000);