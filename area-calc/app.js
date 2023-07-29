const btn=document.querySelector("#btn");
const result=document.querySelector("#result");
const width=document.querySelector("#width");
const breadth = document.querySelector("#breadth");
const store = document.querySelector("#store");
const clear = document.querySelector("#clear");
const list = document.querySelector("#list");
// const caculate=document.querySelector("#caculate")
const area=()=>{
     if(result.innerText.length<1){
 const Area = width.valueAsNumber * breadth.valueAsNumber;
 result.innerText = Area + "sqft";
 width.valueAsNumber = breadth.valueAsNumber = null;}
};
btn.onclick=area;
store.onclick=()=>{
    if(result.innerText.length>1){
        list.innerHTML += `<li>${result.innerText}</li>`;
        result.innerText = null;
    };
};
clear.onclick=()=>{
    result.innerText=null;
}
clear.ondblclick=(event)=>{
  if( confirm("Are you sure you delete")){
    list.remove();
   }
}