function rot13() {
  let string = document.querySelector('#cipher').value
  let str = string.toUpperCase();
  console.log(str);
  let special_caracter = "!?,.-¡¿_".split('')
  let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  let newStr="";
  
  for (let i=0; i< str.length;i++){
    let currentLetter = str[i];
    let currentSpecial =special_caracter.indexOf(currentLetter);
    if(currentLetter === ' '){
      newStr += currentLetter;
      continue;
    }else if(currentSpecial !== -1){
      newStr += special_caracter[currentSpecial]
      continue;
    }

    let currentIndex = al.indexOf(currentLetter);
    let newIndex = currentIndex + 13;
    if(newIndex > 25){
      newIndex = newIndex - 26;
    }

    newStr += al[newIndex]

  }
  const pResponse = document.querySelector('.response')
    pResponse.innerHTML= newStr;
}


// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))

const btn = document.querySelector('#send')

btn.addEventListener('click', rot13);
