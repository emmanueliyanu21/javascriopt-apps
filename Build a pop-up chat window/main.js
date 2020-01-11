const myForm = document.querySelector("#myForm");
const message = document.querySelector("#message1")
// const searchButton = document.querySelector("#myForm");


function openform() {
    document.getElementById("myform").style.display = "block";
}

function closeform() {
    document.getElementById("myform").style.display = "block";
}

function submitForm() {
    console.log(message.value);
}

myForm.addEventListener("click", () => {
    submitForm();
});
