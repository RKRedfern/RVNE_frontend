class UserApi {

    constructor(url){
        this.baseUrl = `${url}/users`
    }
        

    getUsers(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then( json => {
            json["data"].forEach(element => {
                const u = new User({id: element.id, ...element.attributes})
                //c.addToDom()
            })
        })
    }
}