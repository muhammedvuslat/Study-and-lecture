/* ====================== Loops While ======================


/* Example
/*Eng:Asking the user for a grade between 0 100 and the grade entered is 0
If it is different from 100, it is necessary to warn the user to enter a note between 0 100 again.
Write the code with a while loop */

/*Tr:Kullanıcıdan 0 100 arasında bir not isteyen ve girilen not 0
100 'den farklı ise Kullanıcıyı uyararak yeniden 0 100 arasında not girmeye
zorlayan kodu while döngüsü ile yazınız*/

let score = Number(prompt("Please enter a score between 0 and 100"));

while (score < 0 || score > 100) {
  alert("Score must be between 0 and 100");
  score = Number(prompt("Please enter a score between 0 and 100"));
}

console.log("Your score:", score);

/* ====================== Loops Do - While ======================


/* Example2
/*Eng:Asking the user for a grade between 0 100 and the grade entered is 0
If it is different from 100, it is necessary to warn the user to enter a note between 0 100 again.
Write the code with a do while loop */

/*Tr:Kullanıcıdan 0 100 arasında bir not isteyen ve girilen not 0
100 'den farklı ise Kullanıcıyı uyararak yeniden 0 100 arasında not girmeye
zorlayan kodu do while döngüsü ile yazınız*/

let score2;
do {
  score2 = +prompt("Please enter a score between 0 and 100");
  if (score2 < 0 || score2 > 100) {
    alert("Score must be between 0 and 100");
  }
} while (score2 < 0 || score2 > 100);

console.log("Your score:", score2);
