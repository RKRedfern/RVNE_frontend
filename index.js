const baseURL = "http://localhost:3000/api/v1/rvnes"

document.addEventListener('DOMContentLoaded', () => {
    getRvnes()
})

function getRvnes(){
    fetch(baseURL)
    .then(response => response.json())
    .then(addRvnesToDom)
}

function addRvnesToDom(rvne){
    // Find the best way to add to DOM - certainly won't all be within a function?
}

