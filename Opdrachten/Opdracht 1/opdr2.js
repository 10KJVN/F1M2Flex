let rijbewijscheck;
let myInput = prompt("Welk jaar ben je geboren");

let calc =(2021 - myInput);

if(calc >= 18){
    alert("Je bent niet oud genoeg");
    rijbewijscheck = prompt("Heb je een rijbewijs?");
}else if(calc == 16){
    rijbewijscheck = prompt("heb je  een brommercertificaat?");
}else(calc >= 16)
    alert("Ga met het openbaar vervoer");
{ 

