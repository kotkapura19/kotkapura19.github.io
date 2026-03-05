window.onload = function () {

var audio = document.createElement("audio");
audio.id = "simranAudio";
audio.loop = true;

var source = document.createElement("source");
source.src = "Waheguru Simran.mp3";
source.type = "audio/mpeg";

audio.appendChild(source);
document.body.appendChild(audio);

var btn = document.createElement("button");
btn.innerHTML = "🪔 Simran ON";
btn.id = "simranBtn";

btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.background = "#ff9933";
btn.style.color = "white";
btn.style.border = "none";
btn.style.padding = "12px 18px";
btn.style.borderRadius = "30px";
btn.style.cursor = "pointer";
btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";

btn.onclick = function(){

if(audio.paused){
audio.play();
btn.innerHTML="🔇 Simran OFF";
}else{
audio.pause();
btn.innerHTML="🪔 Simran ON";
}

};

document.body.appendChild(btn);

};
