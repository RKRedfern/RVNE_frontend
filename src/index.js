const baseURL = "http://localhost:3000/api/v1/rvnes"

document.addEventListener('DOMContentLoaded', () => {
    getRvnes()

    const newRvne = document.querySelector("#create-rvne-form")

    newRvne.addEventListener("submit", (e) => 
        newRvneHandler(e))
})


function getRvnes(){
    fetch(baseURL)
    .then(response => response.json())
    .then(rvne => {
        rvne.data.forEach(rvne => {
            const rvneMarkup = `
            <div data-id=${rvne.id}>
            <h3>${rvne.attributes.content}</h3>
            <p>${rvne.attributes.user.username}</p>
            <button data-id=${rvne.id}>edit</button>
            </div>
            <br><br>`;
            document.querySelector('#rvne-container').innerHTML += rvneMarkup;
        })
    })
}

function newRvneHandler(e){
    e.preventDefault()
    const rvneInput = document.querySelector("#input-string").value
    postFetch(rvneInput)
} 

function postFetch(content) {
    fetch(baseURL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            content: content
        })
    })
    .then(response => response.json())
    .then(rvne => {
        console.log(rvne);
    })
}


function newUserFormHandler(e) {
    e.preventDefault()
    const usernameInput = e.target.querySelector("#").value
    loginFetch(usernameInput)
}

function fetchMakeNewUser() {

    let newUserNameValue = document.getElementById("new-user-name").value

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username: newUserNameValue
        })
    })

    .then(resp=> resp.json())
    .then(function(json){
        if (json["username"][0] ===  "has already been taken") {
            alert("This username has already been taken");
        } else {
            user = new User(json.id, json.username)
            document.getElementById("container").setAttribute("data-user-id", `${user.id}`);
        }

    })
    .then(function(){
        Order.fetchMakeNewOrder() 
    })
};