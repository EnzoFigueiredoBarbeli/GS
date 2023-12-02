const nameInput= document.querySelector("#name")
const emailInput = document.querySelector("#email")
const btn = document.querySelector("#register")

console.log(btn);

btn.addEventListener("click", () => {
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/

    if (regex.test(emailInput.value)) {
        nameInput.value = ""
        emailInput.value = ""
        console.log(nameInput,emailInput);
        alert("Agrademos o contato!")
    } else {
        alert("Email invalido")
    }
})