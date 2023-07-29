const photoUploader = document.querySelector("#photoUploader");
const inputfile = document.querySelector("#inputfile");

photoUploader.addEventListener("click",()=>{
    inputfile.click();
});
inputfile.addEventListener("change",(event) => {
    // console.dir(event.target.files);
    [...event.target.files].forEach((file) => {
        const img=new Image(300);
        const reader=new FileReader();
        reader.addEventListener("load",(event) => {
            console.log(event.target);
            img.src = event.target.result;
            photoUploader.append(img);
            photoUploader.querySelector("h3").style.display = "none";
        })  
            reader.readAsDataURL(file);    
    })

})