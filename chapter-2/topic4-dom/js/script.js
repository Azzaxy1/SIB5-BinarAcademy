//* Pemanggilan Html menggunakan Js
//! document.write("HELLO WORLD!");
//! document.write("<h2>Saya sedang belajar JavaScript</h2>");

//* Style Css in JavaScript with DOM selector
// Memilih elemen dengan id
let heading = document.getElementById("heading");

// mengisi teks ke dalam elemensss
heading.innerHTML = "Tutorial JavaScript";

// Menambahkan Css
heading.style.backgroundColor = "gold";
heading.style.fontFamily = "Helvetica";
heading.style.fontSize = "30px";
heading.style.fontWeight = "bold";
heading.style.marginTop = "20px";
heading.style.marginBottom = "20px";

//* CHANGE COLOR APP
const bgColor = document.getElementById("bg-color");
const txtColor = document.getElementById("text-color");

// it will detect, if there any change in the bgColor input,
// the function in the evenetListener will be ran
bgColor.addEventListener("change", () => {
  document.body.style.backgroundColor = bgColor.value;
});
// it will detect, if there any change in the textColor input,
// the function in the evenetListener will be ran
txtColor.addEventListener("change", (event) => {
  document.body.style.color = event.target.value;
});

//* Create a paragraph rainbow
let paragraf = document.getElementsByClassName("paragraf");
setInterval(() => {
  paragraf[0].style.color = "red";
  paragraf[1].style.color = "green";
  paragraf[2].style.color = "blue";

  setTimeout(() => {
    for (let i = 0; i < paragraf.length; i++) {
      paragraf[i].style.color = "black";
    }
  }, 500);
}, 1000);

//* MEMBUAT ELEMEN HTML DENGAN DOM
// Create HTML element
let judul = document.createElement("h3");

// mengisi konten elemen
judul.textContent = "Belajar JavaScript";

// menambahkan elemen ke dalam tag body
document.body.append(judul);

//* MENGHAPUS ELEMEN DENGAN DOM
// Memilih elemen berdasarkan id
let removeElement = document.getElementById("judul2");

// Menghapus elemen yang sudah dipoles
removeElement.remove();

console.log("elemen sudah di hapus");
console.log(removeElement);
