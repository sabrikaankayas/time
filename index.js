const hourEl = document.querySelector("#hour")
const minuteEl = document.querySelector("#minutes")
const secondEl = document.querySelector("#seconds")
const ampmEl = document.querySelector("#ampm")
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm

  if (h > 6 && h < 12 && ampm === "AM") {
    document.body.style.background = "url(https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)";
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }
    else if ((h < 7 && ampm === "PM") || (h = 12 && ampm === "AM")) {
    document.body.style.background ="url(https://images.unsplash.com/photo-1588144214372-fdf95ed8625b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80)"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }
  else if (h < 12 && ampm === "PM") {
    document.body.style.background ="url(https://images.unsplash.com/photo-1493515322954-4fa727e97985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }
  else {
    document.body.style.background = "url(https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)";
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
  }

  setTimeout(() => {
      updateClock();
    }, 1000)
}
updateClock();
