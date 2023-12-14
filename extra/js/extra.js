// For1.
// function butunSonlarniChiqarish(a, b) {
//     if (a < b) {
//         console.log(`a = ${a}, b = ${b}`);
//         console.log("Butun sonlar:");
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }

//         console.log("Chiqarilgan sonlar soni:");
//         console.log(b - a + 1);
//     } else {
//         console.log("Noto'g'ri kirish. a < b shart bajarilishi kerak.");
//     }
// }

// var a = 3;
// var b = 8;

// butunSonlarniChiqarish(a, b);



// For2.

// function kamayishTartibdaChiqarish(a, b) {
//     if (a < b) {
//         console.log(`a = ${a}, b = ${b}`);
//         console.log("Butun sonlar kamayish tartibida:");
//         for (let i = b - 1; i > a; i--) {
//             console.log(i);
//         }

//         console.log("Chiqarilgan sonlar soni:");
//         console.log(b - a - 1);
//     } else {
//         console.log("Noto'g'ri kirish. a < b shart bajarilishi kerak.");
//     }
// }

// var a = 3;
// var b = 8;

// kamayishTartibdaChiqarish(a, b);


// For3.

// function konfetNarxi(chiqlikNarxi) {
//     console.log(`1 kg konfet narxi: $${chiqlikNarxi.toFixed(2)}`);
//     console.log(`2 kg konfet narxi: $${(2 * chiqlikNarxi).toFixed(2)}`);
//     console.log(`10 kg konfet narxi: $${(10 * chiqlikNarxi).toFixed(2)}`);
// }

// var chiqlikNarxi = 5.5; 
// konfetNarxi(chiqlikNarxi);


// For4.

// function konfetNarxi(chiqlikNarxi) {
//     for (let vazn = 1.2; vazn <= 2; vazn += 0.2) {
//         let totalNarx = vazn * chiqlikNarxi;
//         console.log(`${vazn.toFixed(1)} kg konfet narxi: $${totalNarx.toFixed(2)}`);
//     }
// }

// var chiqlikNarxi = 5.5; 

// konfetNarxi(chiqlikNarxi);


// For5.

// function butunSonlarYigindisi(a, b) {
//     if (a < b) {
//         let yigindi = 0;
//         for (let i = a; i <= b; i++) {
//             yigindi += i;
//         }

//         console.log(`a = ${a}, b = ${b}`);
//         console.log(`a dan b gacha bo'lgan butun sonlar yig'indisi: ${yigindi}`);
//     } else {
//         console.log("Noto'g'ri kirish. a < b shart bajarilishi kerak.");
//     }
// }

// var a = 3;
// var b = 8;

// butunSonlarYigindisi(a, b);


// For6.

// function butunSonlarKopaytma(a, b) {
//     if (a < b) {
//         let kopaytma = 1;
//         for (let i = a; i <= b; i++) {
//             kopaytma *= i;
//         }

//         console.log(`a = ${a}, b = ${b}`);
//         console.log(`a dan b gacha bo'lgan butun sonlar ko'paytmasi: ${kopaytma}`);
//     } else {
//         console.log("Noto'g'ri kirish. a < b shart bajarilishi kerak.");
//     }
// }

// var a = 3;
// var b = 6;

// butunSonlarKopaytma(a, b);


// For7.

// function kvadratlarYigindisi(a, b) {
//     if (a < b) {
//         let yigindi = 0;
//         for (let i = a; i <= b; i++) {
//             yigindi += i * i;
//         }

//         console.log(`a = ${a}, b = ${b}`);
//         console.log(`a dan b gacha bo'lgan butun sonlar kvadratlarining yig'indisi: ${yigindi}`);
//     } else {
//         console.log("Noto'g'ri kirish. a < b shart bajarilishi kerak.");
//     }
// }

// var a = 2;
// var b = 5;

// kvadratlarYigindisi(a, b);


// For8.

// function yigindiHisobla(n) {
//     if (n > 0) {
//         let S = 0;
//         for (let i = 1; i <= n; i++) {
//             S += 1 / i;
//         }

//         console.log(`n = ${n}`);
//         console.log(`S = 1 + 1/2 + 1/3 + ... + 1/n = ${S}`);
//     } else {
//         console.log("Noto'g'ri kirish. n > 0 shart bajarilishi kerak.");
//     }
// }

// var n = 5;

// yigindiHisobla(n);


// For9.

// function kopaytmaHisobla(n) {
//     if (n > 0) {
//         let S = 1;
//         for (let i = 1.1; i <= n; i += 0.1) {
//             S *= i;
//         }

//         console.log(`n = ${n}`);
//         console.log(`S = 1.1 * 1.2 * 1.3 * ... * n = ${S}`);
//     } else {
//         console.log("Noto'g'ri kirish. n > 0 shart bajarilishi kerak.");
//     }
// }

// var n = 5;

// kopaytmaHisobla(n);


// For10.

// function kvadratniHisobla(n) {
//     if (n > 0) {
//         let natijalar = [];
//         let yigindi = 0;

//         for (let i = 1; i <= n; i++) {
//             yigindi += (2 * i - 1);
//             natijalar.push(yigindi);
//         }

//         console.log(`n = ${n}`);
//         console.log(`1 dan n gacha bo'lgan sonlar kvadrati:`);
//         console.log(natijalar);
//     } else {
//         console.log("Noto'g'ri kirish. n > 0 shart bajarilishi kerak.");
//     }
// }

// var n = 4;

// kvadratniHisobla(n);


// For11.

// function darajaHisobla(n, a) {
//     if (n > 0) {
//         let natija = 1;

//         for (let i = 1; i <= n; i++) {
//             natija *= a;
//         }

//         console.log(`n = ${n}, a = ${a}`);
//         console.log(`a ning n - darajasi: ${natija}`);
//     } else {
//         console.log("Noto'g'ri kirish. n > 0 shart bajarilishi kerak.");
//     }
// }

// var n = 3;
// var a = 2;

// darajaHisobla(n, a);


// For12.

// function barchaDarajalarniChiqar(n, a) {
//     if (n > 0) {
//         console.log(`n = ${n}, a = ${a}`);
//         console.log(`a ning darajalari:`);

//         for (let i = 1; i <= n; i++) {
//             let daraja = Math.pow(a, i);
//             console.log(`a^${i} = ${daraja}`);
//         }
//     } else {
//         console.log("Noto'g'ri kirish. n > 0 shart bajarilishi kerak.");
//     }
// }

// var n = 4;
// var a = 3;

// barchaDarajalarniChiqar(n, a);


// For13.

// function darajalarVaYigindi(n, a) {
//     if (n > 0) {
//         let yigindi = 0;
//         console.log(`n = ${n}, a = ${a}`);
//         console.log(`a ning darajalari va yig'indisi:`);

//         for (let i = 0; i <= n; i++) {
//             let daraja = Math.pow(a, i);
//             yigindi += daraja;
//             console.log(`a^${i} = ${daraja}`);
//         }

//         console.log(`Yig'indisi (S) = ${yigindi}`);
//     } else {
//         console.log("Noto'g'ri kirish. n > 0 shart bajarilishi kerak.");
//     }
// }

// var n = 3;
// var a = 2;

// darajalarVaYigindi(n, a);


// For14.

// function faktorialYigindi(n) {
//     if (n > 0) {
//         let yigindi = 0;
//         console.log(`n = ${n}`);
//         console.log(`Faktoriallar yig'indisi (S) =`);

//         for (let i = 1; i <= n; i++) {
//             let faktorial = 1;
//             for (let j = 1; j <= i; j++) {
//                 faktorial *= j;
//             }
//             yigindi += faktorial;
//             console.log(`${i}! = ${faktorial}`);
//         }

//         console.log(`Jami yig'indisi (S) = ${yigindi}`);
//     } else {
//         console.log("Noto'g'ri kirish. n > 0 shart bajarilishi kerak.");
//     }
// }

// var n = 4;

// faktorialYigindi(n);


// For15.

// function yigindiniHisobla(N, K) {
//     if (N > 0 && K >= 0) {
//         let yigindi = 0;
//         console.log(`N = ${N}, K = ${K}`);
//         console.log(`Yig'indisi (S) =`);

//         for (let i = 1; i <= N; i++) {
//             yigindi += Math.pow(i, K);
//             console.log(`${i}^${K} = ${Math.pow(i, K)}`);
//         }

//         console.log(`Jami yig'indisi (S) = ${yigindi}`);
//     } else {
//         console.log("Noto'g'ri kirish. N > 0 va K >= 0 shartlari bajarilishi kerak.");
//     }
// }

// var N = 3;
// var K = 2;

// yigindiniHisobla(N, K);


// For16.

// function yigindiniHisobla(N) {
//     if (N > 0) {
//         let yigindi = 0;
//         console.log(`N = ${N}`);
//         console.log(`Yig'indisi (S) =`);

//         for (let i = 1; i <= N; i++) {
//             yigindi += Math.pow(i, i);
//             console.log(`${i}^${i} = ${Math.pow(i, i)}`);
//         }

//         console.log(`Jami yig'indisi (S) = ${yigindi}`);
//     } else {
//         console.log("Noto'g'ri kirish. N > 0 sharti bajarilishi kerak.");
//     }
// }

// var N = 3;

// yigindiniHisobla(N);


// For17.

// function butunSonlarniChiqar(A, B) {
//     if (A < B) {
//         console.log(`A = ${A}, B = ${B}`);
//         console.log(`A va B sonlari orasidagi barcha butun sonlar:`);

//         for (let i = A; i <= B; i++) {
//             for (let j = 1; j <= i - A + 1; j++) {
//                 console.log(`${i}`);
//             }
//         }
//     } else {
//         console.log("Noto'g'ri kirish. A < B sharti bajarilishi kerak.");
//     }
// }

// var A = 2;
// var B = 5;

// butunSonlarniChiqar(A, B);


// For18.

// function boluvchilarVaYigindi(son) {
//     if (son > 0) {
//         console.log(`Berilgan son: ${son}`);
//         console.log(`Barcha bo'luvchilar:`);

//         let boluvchilar = [];
//         let yigindi = 0;

//         for (let i = 1; i <= son; i++) {
//             if (son % i === 0) {
//         boluvchilar.push(i);
//                 yigindi += i;
//             }
//         }

//         console.log(boluvchilar);
//     console.log(`Bo'luvchilar soni: ${boluvchilar.length}`);
//     console.log(`Bo'luvchilar yig'indisi: ${yigindi}`);
//     } else {
//         console.log("Noto'g'ri kirish. Sonning qiymati musbat bo'lishi kerak.");
//     }
// }

// var berilganSon = 12;

// boluvchilarVaYigindi(berilganSon);


// For19.

// function tubYokiTubEmasliginiAniqlovchi(n) {
//     if (n > 1) {
//         let tubSon = true;
//         console.log(`Berilgan son: ${n}`);

//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) {
//                 tubSon = false;
//                 break;
//             }
//         }

//         if (tubSon) {
//             console.log("Bu son tub son.");
//         } else {
//             console.log("Bu son tub emas.");
//         }
//     } else {
//         console.log("Noto'g'ri kirish. n > 1 sharti bajarilishi kerak.");
//     }
// }

// var berilganSon = 13;

// tubYokiTubEmasliginiAniqlovchi(berilganSon);


// For20.

function tartibdaChiqar(N) {
    console.log(`N = ${N}`);
    console.log("Berilgan tartibda chiqaruvchi sonlar:");

    for (let i = 1; i <= N; i++) {
        let qator = "";

        for (let j = 1; j <= i; j++) {
            qator += `${j} `;
        }

        console.log(qator);
    }
}

var N = 8;

tartibdaChiqar(N);
