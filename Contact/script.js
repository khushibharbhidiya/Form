const form = document.querySelector("form"),
nextBtn = form.querySelector(".nextBtn");
backBtn = form.querySelector(".backBtn");
allInput = form.querySelector(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input =>{
        if(input.value != ""){
            form.classList.add("secActive");
        }else{
            form.classList.remove("secActive");

        }
    })


})

backBtn.add("click", () => form.classList.remove("secActive"));
