const addBtn = document.querySelector("#addBtn");
const quantity = document.querySelector("#quantity");
const products = document.querySelector("#products");
const invoiceForm = document.querySelector("#invoiceForm");
const list=document.querySelector("#list");
const services= [
  {
    id: 1,
    name: "Domain Services",
    price: 250,
  },
  {
    id: 2,
    name: "Web Design",
    price: 150,
  },
  {
    id: 3,
    name: "Hosting Services",
    price: 100,
  },
  {
    id: 4,
    name: "Education Services",
    price: 500,
  },
];

services.forEach((el=>{
  products.append(new Option(el.name))
}));

const creatTabledata=(service,quantity)=>{
    const creattr=document.createElement("tr");
    const total=service.price*quantity;
    creattr.innerHTML = `
    <td>${service.name}</td>
    <td>${quantity}</td>
    <td>${service.price}</td>
    <td>${total}</td>
    `;return creattr;};
const selectedservice=services.find(service=>{
    service.id==products.value;
})

invoiceForm.addEventListener("submit",(el)=>{
    el.preventDefault();
     console.log(products.value,quantity.valueAsNumber);
     list.append(creatTabledata(products.value,quantity.valueAsNumber));
})