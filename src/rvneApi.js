// hold all the fetch requests

class RvneApi {

    constructor(url){
        this.baseUrl = `${url}/rvnes`
    }
        

    getRvnes(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then( json => {
            json["data"].forEach(element => {
                const r = new Rvne({id: element.id, ...element.attributes})
                //r.attachToDom()
            })
        })
    }

    createRvne(){

        const rvneInfo = {
            rvne: {
                content: rvneInput.value,
                user_id: savedUserId,
            } 
        }
        console.log(rvneInfo)
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(rvneInfo)
        }
    
       // pessimistic rendering 
        fetch(this.baseUrl, configObj)
        .then(r => r.json())
        .then(json => {
            // renderItem(json.data)
            debugger
            const r = new Rvne({id: json.data.content, ...json.data.attributes})
            //r.attachToDom()
        })
    }

}