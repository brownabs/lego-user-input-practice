fetch("http://localhost:8088/colors")
    .then(colors => colors.json())
    .then(parsedColors => {
        parsedColors.forEach(color => {
        console.log(color)
        let dropdownColors = document.querySelector("#colors")
        dropdownColors.innerHTML += `<option value="${color.id}">${color.name}</option>`
        })
    })











