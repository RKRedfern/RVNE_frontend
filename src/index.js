const baseURL = "http://localhost:3000/api/v1/";
//buttons
const loginButton = document.querySelector("#login-button");
const submitButton = document.querySelector("#submit-button");
const backButton = document.querySelector("#back-button");
// user-inputs
let userNameValue = document.querySelector("#username").value;
//const content = document.querySelector("#rvne").value;
//divs
const rvneVessel = document.querySelector("#rvne-vessel");
const rvneList = document.querySelector("#rvne-list");
//localStorage
const savedUsername = localStorage.username;
//const savedUserID = localStorage.user_id;
//const newRvne = {content: rvneInput, user_id: savedUserID}
const savedContent = localStorage.content;


loginButton.addEventListener('click', () => {
    login()
    renderRvneView()
    getRvnes()
})

backButton.addEventListener('click', (e) => {
    toggleLandingView(true)
    clearList()
    localStorage.clear()
})

submitButton.addEventListener('click', (e) => {
    rvnePost()
    getRvnes()
})

function renderRvneView(){
    toggleLandingView(false)
}

function toggleLandingView(showLanding) { 
    document.getElementById("rvne-landing").hidden = !showLanding;
    document.getElementById("rvne-create").hidden = showLanding;
    document.getElementById("rvne-vessel").hidden = showLanding;
}

function clearList(){
    const listItems = document.getElementsByClassName("rvne-item")
    Array.from(listItems).forEach(element => element.parentNode.removeChild(element)
)}

function getRvnes() {
    fetch(baseURL + 'rvnes')
    .then(response => response.json())
    .then(render)
}

function render(rvne) {
    const liElements = rvne.data.map(function(item) {
        const li = document.createElement('li')
        li.innerText = 
            `${item.attributes.content}
            ${item.attributes.user.username}`
            li.classList.add("rvne-item")
        return li
    });
    clearList()
    liElements.forEach(element => {
        rvneVessel.appendChild(element)
    });
}

function login() {
    
    let username = document.querySelector("#username").value
    const options = {
        method: "POST",
        body: JSON.stringify({
            user: {
                username 
            }
        }),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    fetch(baseURL + 'users', options)
        .then(response=>response.json())
        .then(json=> {

            localStorage.setItem('user_id', json.data.id);
            localStorage.setItem('username', json.data.attributes.username);
        }
)}

function rvnePost() {
    let user_id = localStorage.user_id;
    let content = document.querySelector("#rvne").value;
    const options = {
        method: "POST",
        body: JSON.stringify({
            rvne: {
                content, user_id 
            }
        }),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    fetch(baseURL + 'rvnes', options)
        .then(response=>response.json())
        .then(data => {
            console.log('Success', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}


