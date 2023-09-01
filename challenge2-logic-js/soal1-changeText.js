function changeWord(selectedText, changedText, text) {
  // Menggunakan regular expression untuk mengganti semua kemunculan selectedText dalam teks
  const regex = new RegExp(selectedText, "gi");
  const newText = text.replace(regex, changedText);
  return newText;
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
