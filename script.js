const contain = document.querySelector(".button-btn")
const refreshBtn = document.querySelector(".button-btn")
const maxCode = 6


//generador de colores en hex

const generatePalette = () => {
    contain.innerHTML = ""

    for ( let i = 0; i < maxCode; i++){

        let randomHex = Math.floor(Math.random () * 0xffffff).toString(16)

        randomHex = `#${randomHex.padStart(6, "0")}`

       // console.log(randomHex)

        const color = document.createElement("li")
        color.classList.add("color")
        color.innerHTML = `

        <div class="plumones" style="background:  linear-gradient(#202010, ${randomHex})">
            <div class="cap"></div>
            <div class="sleeve"></div>
        </div> 
        `
        contain.appendChild(color);

    }

}

generatePalette()

refreshBtn.addEventListener("click", generatePalette)