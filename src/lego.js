document.querySelector(".saveAllButton").addEventListener("click", event => {
    const creator = document.querySelector("#legoCreator").value
    const color = document.querySelector("#colors").value
    const shape = document.querySelector("#legoShape").value
    const creation = document.querySelector("#legoCreation").value

    const legoToSave = {
        creator: creator, 
        color: color, 
        shape: shape, 
        creation: creation
    }
        fetch("  http://localhost:8088/legoCreation", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
    })
})



