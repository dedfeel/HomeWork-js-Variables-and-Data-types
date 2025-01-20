

async function fetchData() {
    try{
        let user = await fetch(' https://jsonplaceholder.typicode.com/users ')
   
        if(!user.ok){
            throw new Error('new error')
        }

        let data = await user.json()
        console.log(data);
        

        for(let i = 0; i<data.length; i++){
            let div = document.createElement('div')

            div.innerHTML = `
             <h2>${data[i].name}</h2>
             <p>${data[i].email}</p>`
            
             container.appendChild(div)
        }
    }catch(err){
        console.error(err.message)
    }
}

fetchData()