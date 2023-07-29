//variables
const text = document.querySelector("#text");
const addBtn = document.querySelector("#add-btn");
const editBtn = document.querySelector("#edit-btn");
const list = document.querySelector("#list");
const rightBtn = document.querySelector("#right-btn");
const totalList = document.querySelector("#totalList");
const totalDone = document.querySelector("#totalDone");

const done = (event) => {
console.dir(event.target);
  event.target.nextElementSibling.classList.toggle("text-decoration-line-through")
counter()
};
const delBtn =(event) => {
   
  event.target.closest("li").remove();
   counter();
// event.target.parentElement.remove();
};
// const showtotal=(event) => {
//     addTotal=list.children.length;
//     totalList.innerText=addTotal
// };
// const donetotal=(event) => {
//     const check=[...list.children].filter((li) =>
//         li.querySelector(".form-check-input").checked===true
//     ).length;
//     totalDone.innerText=check;
// };
    

const counter = () => {
  const totalCount = list.children.length;
  const doneTotalCount = [...list.children].filter(
    (el) => el.querySelector(".form-check-input").checked===true
  ).length;
  console.log(doneTotalCount)
  totalList.innerText = totalCount;
  totalDone.innerText = doneTotalCount;
};

const creatlist=(text)=>{
    const dynamicId=Math.random();
    const list = document.createElement("li");
    list.style.height="60px";
    list.id="list-item";
    counter();
    list.className="list-group-item d-flex justify-content-between";
        list.innerHTML = ` <div class=" d-flex justify-content-start">
                        <input class="form-check-input" type="checkbox" value="" id="${dynamicId}" onchange="done(event)">
  <label class="form-check-label" for="${dynamicId}">
  ${text}
  </label>
                    </div>
                    <div id="right-btn">
                        <button class=" btn btn-dark p-2"><i class="bi bi-pencil" onclick=editBtn(event)></i>Edit</button>
                        <button class=" btn btn-dark p-2"><i class="bi bi-trash" onclick=delBtn(event)></i>Del</button>
                    </div>`;
                    return list;
};

//functions
addBtn.addEventListener("click",(event) => {
   
  list.append(creatlist(text.value));
  text.value=null;
  counter();
});
text.addEventListener("keyup",(event) => {
   if(event.keyCode===13){
     list.append(creatlist(text.value));
     text.value = null; 
     counter();
   }
});


window.addEventListener("load", counter);





