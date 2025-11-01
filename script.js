let images=['img/lemon.webp', 'img/banana.webp', 'img/cherry.webp', 
	'img/grape.webp', 'img/orange.webp', 'img/pear.webp', 'img/plum.webp' ]
let username=prompt("Введіть ім'я");
if(!username||username.trim()===""){
	username="Гравець";
}
document.getElementById("userName").innerHTML=username;
let rounds=1;
const reset = document.getElementById("reset");
reset.style.display = "none";
let history = document.getElementById("history");
function generate(col){
  let column= document.getElementById(col);
  column.innerHTML="";
  let arr = [...images].sort(() => Math.random() - 0.5);
  let select = arr.slice(0, 3);
for (let src of select) {
        column.innerHTML += `<img src="${src}">`;
    }
    return select;
}
function check(row1, row2, row3){
  return row1===row2&&row2===row3;
}
document.getElementById("btn").addEventListener("click", () =>{
if (rounds > 3) return;
const col1 = generate("col1");
const col2 = generate("col2");
const col3 = generate("col3");
let wins=false;
for (let i = 0; i < 3; i++) {
        if (check(col1[i], col2[i], col3[i])) {
            wins = true;
            break;
        }
    }
document.getElementById("rounds").textContent = `Спроба ${rounds} з 3`;
const resultH = wins ? `Раунд ${rounds}: Вітаю, ви виграли!` : `Раунд ${rounds}: На жаль, ви програми раунд`;
  const li = document.createElement("li");
  li.textContent = resultH;
  history.appendChild(li);
    rounds++;
     if (wins) {
        alert("Вітаємо, ви виграли!");
        reset.style.display = "inline";
        return;
    }

    if (rounds > 3 && !wins) {
        alert("Ви програли. Спробуйте знову!");
        reset.style.display = "inline";
    }
}
  );
reset.addEventListener("click", () => {
    rounds = 1;
    document.getElementById("rounds").textContent = `Спроба 1 з 3`;
    document.getElementById("col1").innerHTML = "";
    document.getElementById("col2").innerHTML = "";
    document.getElementById("col3").innerHTML = "";
    document.getElementById("btn").disabled = false;
    reset.style.display = "none";
    history.innerHTML="";
});