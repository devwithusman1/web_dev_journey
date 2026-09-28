
function encodeMessage(text) {
  return text
    .trim()
    .toUpperCase()
    .replaceAll("A", "4")
    .replaceAll("B", "8")
    .replaceAll("C", "¢")
    .replaceAll("D", "Ð")
    .replaceAll("E", "3")
    .replaceAll("F", "ƒ")
    .replaceAll("G", "6")
    .replaceAll("H", "#")
    .replaceAll("I", "1")
    .replaceAll("J", "ʝ")
    .replaceAll("K", "₭")
    .replaceAll("L", "£")
    .replaceAll("M", "ʍ")
    .replaceAll("N", "и")
    .replaceAll("O", "0")
    .replaceAll("P", "ρ")
    .replaceAll("Q", "¶")
    .replaceAll("R", "®")
    .replaceAll("S", "5")
    .replaceAll("T", "7")
    .replaceAll("U", "μ")
    .replaceAll("V", "ν")
    .replaceAll("W", "ω")
    .replaceAll("X", "×")
    .replaceAll("Y", "¥")
    .replaceAll("Z", "2")
    .split("")
    .reverse()
    .join("-");
}


function decodeMessage(encodedText) {
  return encodedText
    .split("-")             
    .reverse()              
    .join("")               
    .replaceAll("4", "A")   
    .replaceAll("8", "B")
    .replaceAll("¢", "C")
    .replaceAll("Ð", "D")
    .replaceAll("3", "E")
    .replaceAll("ƒ", "F")
    .replaceAll("6", "G")
    .replaceAll("#", "H")
    .replaceAll("1", "I")
    .replaceAll("ʝ", "J")
    .replaceAll("₭", "K")
    .replaceAll("£", "L")
    .replaceAll("ʍ", "M")
    .replaceAll("и", "N")
    .replaceAll("0", "O")
    .replaceAll("ρ", "P")
    .replaceAll("¶", "Q")
    .replaceAll("®", "R")
    .replaceAll("5", "S")
    .replaceAll("7", "T")
    .replaceAll("μ", "U")
    .replaceAll("ν", "V")
    .replaceAll("ω", "W")
    .replaceAll("×", "X")
    .replaceAll("¥", "Y")
    .replaceAll("2", "Z");
}



const original = "JavaScript Rules";

const secretResult = encodeMessage(original);
console.log("Encoded:", secretResult); 


const decryptedResult = decodeMessage(secretResult);
console.log("Decoded:", decryptedResult); 

