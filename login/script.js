const first_name =  document.getElementById("User")
const Password =  document.getElementById("Password")
const Email =  document.getElementById("Email")
const submit =  document.getElementById("Submit")

let profile;
let profile_storage
submit.addEventListener("click", (e) => {
    
    e.preventDefault()
    
    for (let index = 0; index < localStorage.length; index++) {
        
       var profile_storage = JSON.parse(localStorage.getItem("User"+index))
        console.log(profile.Name_first);
       
        if(profile_storage.Name_first === profile.Name_first && profile.Email === profile_storage.Email && profile_storage.password === profile.password){
            localStorage.setItem("User"+ index, JSON.stringify(profile.login))
            window.open("/Dashboard/index.html")

        } else{
            
            first_name.style.borderColor = "red"
            Password.style.borderColor = "red"
            Email.style.borderColor = "red"
            
            // localStorage.setItem("User"+count++, JSON.stringify(profile))
                
             
        
        }
    }
    
})
