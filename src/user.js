
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

    fetch('http://localhost:3000/api/v1/users', options)
        .then(response=>response.json())
        .then(json=> {

            localStorage.setItem('user_id', json.data.id);
            localStorage.setItem('username', json.data.attributes.username);
        }
)}