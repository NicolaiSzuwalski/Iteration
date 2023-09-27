/* opgave 1 */
console.group("opgave 1");
// din kode her

opgave1 = document.getElementById("opgave1");
opgave1.appendChild(document.createElement("h2"));
mySpace = " ";

for(i=1; i<11; i++){
    console.log(i)
    opgave1.innerText += " " + i;
}


console.groupEnd();


/* opgave 2 */
console.group("opgave 2");
// din kode her
let opgave2 = document.getElementById("opgave2");
opgave2.appendChild(document.createElement("h2"));
for(i=10; i<12; i++){
    console.log(i)
    opgave2.innerText += " " + i;
};


console.groupEnd();


/* opgave 3 */
console.group("opgave 3");
// din kode her

let opgave3 = document.getElementById("opgave3");
opgave3.appendChild(document.createElement("h2"));

for(i=2; i<40; i+=2){
    console.log(i)
    opgave3.innerText += " " + i;
}


console.groupEnd();









