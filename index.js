const url = 'http://localhost:3000/api/v1/'
const rvneApi =  new RvneApi(url)
const userApi = new UserApi(url)
const savedUserID = localStorage.user_id
const loginButton = document.querySelector("#login-button");
const rvneInput = document.querySelector("#rvne")
const submitButton = document.querySelector("#submit-button");


//userApi.getUsers()
rvneApi.getRvnes()

// form.addEventListener('submit', handleSubmit)

// function handleSubmit(e){
//     e.preventDefault()
//     itemApi.createItem()
//     e.target.reset()
// }

loginButton.addEventListener('click', () => {
    login()
    renderRvneView()
})

// backButton.addEventListener('click', (e) => {
//     toggleLandingView(true)
//     clearList()
//     localStorage.clear()
// })

submitButton.addEventListener('click', (e) => 
    createRvne()
)

function renderRvneView(){
    toggleLandingView(false)
}

function toggleLandingView(showLanding) { 
    document.getElementById("rvne-landing").hidden = !showLanding;
    document.getElementById("rvne-create").hidden = showLanding;
    document.getElementById("rvne-vessel").hidden = showLanding;
}


// const baseURL = "http://localhost:3000/api/v1/";
// //buttons
// 
// 
// const backButton = document.querySelector("#back-button");
// // user-inputs
// let userNameValue = document.querySelector("#username").value;
// //const content = document.querySelector("#rvne").value;
// //divs
// const rvneVessel = document.querySelector("#rvne-vessel");
// const rvneList = document.querySelector("#rvne-list");
// //localStorage
// const savedUsername = localStorage.username;
// //const savedUserID = localStorage.user_id;
// //const newRvne = {content: rvneInput, user_id: savedUserID}
// const savedContent = localStorage.content;




// function clearList(){
//     const listItems = document.getElementsByClassName("rvne-item")
//     Array.from(listItems).forEach(element => element.parentNode.removeChild(element)
// )}

// function getRvnes() {
//     fetch(baseURL + 'rvnes')
//     .then(response => response.json())
//     .then(render)
// }

// function render(rvne) {
//     const liElements = rvne.data.map(function(item) {
//         const li = document.createElement('li')
//         li.innerText = 
//             `${item.attributes.content}
//             ${item.attributes.user.username}`
//             li.classList.add("rvne-item")
//         return li
//     });
//     clearList()
//     liElements.forEach(element => {
//         rvneVessel.appendChild(element)
//     });
// }

// function rvnePost() {
//     let user_id = localStorage.user_id;
//     let content = document.querySelector("#rvne").value;
//     const options = {
//         method: "POST",
//         body: JSON.stringify({
//             rvne: {
//                 content, user_id 
//             }
//         }),
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         }
//     }

//     fetch(baseURL + 'rvnes', options)
//         .then(response=>response.json())
//         .then(data => {
//             console.log('Success', data);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         })
// }


