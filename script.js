document.getElementById("b1").onclick = function () {
  let q = document.getElementById("s1").value;
  window.location.href = "https://www.google.com/search?q=" + q;
};
document.getElementById("b2").onclick = function () {
  let q = document.getElementById("s2").value;
  window.location.href = "https://gemini.google.com/app?q=" + q;
};
document.getElementById("b3").onclick = function () {
  let q = document.getElementById("s3").value;
  window.location.href = "https://chat.openai.com/?q=" + q;
};
document.getElementById("b4").onclick = function () {
  let q = document.getElementById("s4").value;
  window.location.href = "https://www.bing.com/search?q=" + q;
};
document.getElementById("b5").onclick = function () {
  let q = document.getElementById("s5").value;
  window.location.href = "https://www.deepseek.com/search?q=" + q;
};

document.getElementById("b6").onclick = function () {
  let q = document.getElementById("s6").value;
  window.location.href = "https://github.com/search?q=" + q;
};
document.getElementById("b7").onclick = function () {
  let q = document.getElementById("s7").value;
  window.location.href = "https://www.youtube.com/results?search_query=" + q;
};
document.getElementById("b8").onclick = function () {
  let q = document.getElementById("s8").value;
  window.location.href =
    "https://en.wikipedia.org/wiki/Special:Search?search=" + q;
};
document.getElementById("b9").onclick = function () {
  let q = document.getElementById("s9").value;
  window.location.href = "https://www.amazon.in/s?k=" + q;
};
let arr = [
  "google",
  "google gemini",
  "chatgpt",
  "microsoft edge",
  "deepseek",
  "github",
  "youtube",
  "wikipedia",
  "amazon",
];
const first = document.getElementById("s10");
const suggestionBox = document.getElementById("suggestions");

first.addEventListener("input", () => {
  let value = first.value.toLowerCase();
  suggestionBox.innerHTML = "";
  if (value === "") {
    return;
  }
  let newarr = arr.filter((n) => {
    // return n.startsWith(value);
    // this only return start with
    return n.includes(value);
    // above return includes value
  });
  newarr.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    li.onclick = function () {
      first.value = item;
      suggestionBox.innerHTML = "";
    };
    suggestionBox.appendChild(li);
  });
});

let cricketArr = [
  "cricket live score",
  "ipl live score",
  "india vs australia",
  "india vs pakistan",
  "cricket world cup",
  "ipl points table",
  "ipl schedule",
  "virat kohli stats",
  "rohit sharma stats",
  "ms dhoni",
  "t20 world cup",
  "cricket news",
  "today cricket match",
  "cricbuzz live score",
  "espn cricinfo",
  "highest score in odi",
  "fastest century in cricket",
  "top cricket players",
  "ipl teams",
  "wpl cricket",
];

const s11 = document.getElementById("s11");
const sujjestions1 = document.getElementById("sujjestions1");
s11.addEventListener("input", () => {
  let val1 = s11.value.toLowerCase();
  sujjestions1.innerHTML = "";
  if (val1 === "") {
    return;
  }
  let newarr1 = cricketArr.filter((n) => {
    return n.includes(val1);
  });
  newarr1.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    li.onclick = function () {
      s11.value = item;
      sujjestions1.innerHTML = "";
    };
    sujjestions1.appendChild(li);
  });
});
