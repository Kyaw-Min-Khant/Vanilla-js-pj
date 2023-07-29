//variables
const fonts = ["abin", "Lato", "Merriweather", "Roboto"];
const text = document.querySelector("#text");
const color = document.querySelector("#color");
const bgColor = document.querySelector("#bgcolor");
const fontSize = document.querySelector("#font-size");
const fontFamily = document.querySelector("#font-family");
const textArea= document.querySelector("#text-area");
const images=document.querySelectorAll("#image");

fonts.forEach(font=>{
    fontFamily.append(new Option(font));
});
//functions
text.addEventListener("keyup",(event)=>{
    textArea.value=text.value;
});

color.addEventListener("change",event=>{
  textArea.style.color=color.value;
});
fontSize.addEventListener("change",event=>{
    textArea.style.fontSize=fontSize.value+"px";
});
bgColor.addEventListener("change",event=>{
    textArea.style.backgroundColor=bgColor.value;
});
fontFamily.addEventListener("change",event=>{
    textArea.style.fontFamily=fontFamily.value;
}
);
// images.addEventListener("change",event=>{
//     textArea.attributes(src)=images.src
// });