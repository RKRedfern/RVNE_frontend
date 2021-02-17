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

function render(rvne) {
    const rvneMarkup = `
            <div data-id=${rvne.id}>
            <h3>${rvne.attributes.content}</h3>
            <p>${rvne.attributes.user.username}</p>
            
            </div>
            <br><br>`;
            document.querySelector('#rvne-container').innerHTML += rvneMarkup;
}

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
            localStorage.setItem('user_id', json.data.id);
            localStorage.setItem('username', json.data.attributes.username);
        });
}

function getRvnes(){
    fetch(baseURL + 'rvnes')
    .then(response => response.json())
    .then(rvne => {
        rvne.data.forEach(rvne => {
            render(rvne)
        })
    })
}

function newRvneHandler(e){
    e.preventDefault()
    const rvneInput = document.querySelector("#input-string").value
    const user_id = localStorage.user_id
    const newRvne = {content: rvneInput, user_id: user_id}
    rvnePost(newRvne)
} 

function rvnePost(newRvne) {
    
    fetch(baseURL + 'rvnes', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRvne),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
    
}
