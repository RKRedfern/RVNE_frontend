const baseURL = "http://localhost:3000/api/v1/"

document.addEventListener('DOMContentLoaded', () => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        const username = document.getElementById('username');
        username.value = savedUsername;
    }

    const usernameButton = document.getElementById('submit-username');
    usernameButton.addEventListener('click', () => {
        const username = document.getElementById('username');
        if (username.value === "") {
            alert("Please enter a Username to continue!");
            return;
        }

        const usernameContainer = document.getElementById('username-container');
        const mainContainer = document.getElementById('main-container');

        usernameContainer.style.display = "none";
        mainContainer.style.display = "block";
        login();
    })

    getRvnes()

    const newRvne = document.querySelector("#create-rvne-form")

    newRvne.addEventListener("submit", (e) => 
        newRvneHandler(e))
})

function login() {
    const username = document.getElementById('username').value;
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
            localStorage.setItem('user_id', json.data.userID);
            localStorage.setItem('username', json.data.username);
        });
}

function getRvnes(){
    fetch(baseURL + 'rvnes')
    .then(response => response.json())
    .then(rvne => {
        rvne.data.forEach(rvne => {
            const rvneMarkup = `
            <div data-id=${rvne.id}>
            <h3>${rvne.attributes.content}</h3>
            <p>${rvne.attributes.user.username}</p>
            
            </div>
            <br><br>`;
            document.querySelector('#rvne-container').innerHTML += rvneMarkup;
        })
    })
}

function newRvneHandler(e){
    e.preventDefault()
    const rvneInput = document.querySelector("#input-string").value

    rvneFetch(rvneInput)
} 

function rvneFetch(content) {
    console.log(content);
}