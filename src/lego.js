document.querySelector(".saveAllButton").addEventListener("click", event => {
    const creator = document.querySelector("#legoCreator").value
    const color = document.querySelector("#legoColor").value
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

    // Once you have collected all the values, build your data structure
    // how do I transfer the information to this object? factory function?

    // Now you must use fetch to create your lego in the API. The default method for fetch is GET, 
    // so you've never had to specify and configuration options before. 
    // However, with POST, you need to configure the request. POST meaning it's adding to the data, right

//      should i store the value of the user inputs into legoParts?? 
    // function creatLego(legoParts = []) {
    // //      return {
    //     type: "lego", 
    //     creator: creator.value,
    //     color: color.value,
    //     shape: shape.value, 
    //     creation: creation.value, 
    //     
    // };
    // }
        //function that will take the values of the input and turn into an object
        //should return legoToSave
         // return const legoToSave = {
    //     type: "lego",
    //     creator: value,
    //     color: value,
    //     shape: value, 
    //     creation: 
    // }
    //}

//      fetch should be the last logic inside the event listener
//     fetch("  http://localhost:8088/legoCreation", { 
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(legoToSave)
// })
