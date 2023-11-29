
let acc = document.querySelectorAll('.accordion')
let panel = document.querySelectorAll('.panel')
console.log(acc);
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        let k = this.lastElementChild
        k.classList.toggle("none")
    })
}


