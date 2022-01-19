"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken



// Funktionsaufruf, call
// test();



// Funktionsrumpf (body), calee
function test()
{
    console.log("Hallo!");
}


// Funktionen 2
// Parametrisierung + Datenübergabe von INNEN 

// Aufruf, call
// ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // console.log("Hallo 1!");
    let firstName = "Anna"; // what happens in Vegas....
    console.log("Hallo " + firstName + "!");
}
// refactoring

// console.log(firstName); // stays in Vegas!

// Funktionen 3
// Parametrisierung und Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) {

    const cond1 = (firstName == "");
    const cond2 = (firstName == undefined);

     // if (cond1 || cond2 ){
     if (!(firstName > " ")) // Numerische Aquivalent ASCII
     {
        firstName = " Nobody";
     }

    console.log("Hallo " + firstName + "!");
     }



// ausgabeNamenParam(" xx"); // Argumente (args), Daten für Parameter
// ausgabeNamenParam();
// ausgabeNamenParam(prompt("Vorname?"));

// Funktionen - mehrere Parameter

function ausgabeNamenParams(firstName, familyName) {
    console.log("Hallo " + firstName + " " + familyName + "!");
}

ausgabeNamenParams("Maxime", "Mütze");
ausgabeNamenParams(prompt("Vorname?"), prompt("Nachname?"));






