// horizontal progress bar
const progressBar1 = document.getElementById('bar1');
const percent1 = document.getElementById('percent1');

let count1 = 0;
let progress1 = 0;

setInterval(() => {
  if (count1 < 100) {
    count1++;
    progress1 += 1;
    progressBar1.style.width = `${progress1}%`;
    percent1.innerText = `${progress1}%`;
  }
}, 50);

// circular progress bar
const progressBar2 = document.getElementById('bar2');
const percent2 = document.getElementById('percent2');

let count2 = 0;
let progress2 = 0;

setInterval(() => {
  if (count2 < 100) {
    count2++;
    progress2 += 3.6;
    progressBar2.style.transform = `rotate(${progress2}deg)`;
    percent2.innerText = `${count2}%`;
  }
}, 50);