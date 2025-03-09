const btn = document.querySelectorAll(".cell")
let lastToken = "X"

btn.forEach((btn) => {

    btn.addEventListener('click', () => {
    if (btn.textContent === "X" || btn.textContent === "O") return; // Impede reescrever o token
    if (lastToken === "X") btn.style.color = 'red'
    btn.textContent = lastToken === "X" ? "O" : "X" //define textcontent de btn com um desses
    lastToken = btn.textContent
    console.log(`teste`)
    })
})
