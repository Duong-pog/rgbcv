target = document.getElementById('jump')

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function myOverFunction(x){
    x.style["top"] = getRandomInt(-1,1) * getRandomInt(100, 200) + "px"
    x.style["right"] = getRandomInt(-1,1) * getRandomInt(100, 200) + "px";
    console.log("enter");
}


function myClickFunction(x) {
  x.style["top"] = getRandomInt(-1, 1) * getRandomInt(200, 300) + "px";
  x.style["right"] = getRandomInt(-1, 1) * getRandomInt(200, 300) + "px";
  console.log("enter");
}

function runAlert(){
  alert("Xin cảm ơn rất nhiều=)) hết rồi, mới làm được có nhiêu đó thôi")
}