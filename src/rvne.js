// build a rvne
// remember all the users
// the html we want to put on the dom
// contain the event listeners 

class Rvne{
    static all = []

    //static categoryContainer = document.getElementById('cat-container')

    constructor({content, user_id}){
        this.content = content
        this.user_id = user_id

        //this.element = document.createElement('button')

        Rvne.all.push(this)
    }

    createRvne(this)
    
}