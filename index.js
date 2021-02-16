const baseURL = "http://localhost:3000/api/v1/rvnes"

document.addEventListener('DOMContentLoaded', () => {
    getRvnes()
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

