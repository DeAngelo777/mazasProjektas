 const input = document.querySelector("input");
 const btn = document.querySelector(".btn");
 const result = document.querySelector(".result");


 btn.addEventListener("click", countVowel);

 function countVowel() {
    let vowelCount = 0;
    let wordVal = input.value.toLocaleLowerCase();


    for (let i = 0; i < wordVal.length; i++) {
        const letter = wordVal[i];
        if(letter.match(/([a,e,i,o,u])/)) {
            vowelCount++
        }
    }
    result.innerHTML = `${input.value.toUpperCase()} has ${vowelCount} vowels`
 }


