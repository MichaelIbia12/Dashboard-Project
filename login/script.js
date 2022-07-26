const first_name =  document.getElementById("User")
const Password =  document.getElementById("Password")
const Email =  document.getElementById("Email")
const submit =  document.getElementById("Submit")


let profile_storage
submit.addEventListener("click", (e) => {
    e.preventDefault()
    for (let index = 0; index < localStorage.length; index++) {
      profile_storage = JSON.parse(localStorage.getItem(localStorage.key(index)))
        console.log(profile_storage);
        if(profile_storage.Name_first === first_name.value && profile_storage.Email === Email.value && profile_storage.password === Password.value){
            localStorage.setItem(localStorage.key(index), JSON.stringify(profile_storage))
            window.open("/Dashboard/index.html")
            break
        } else{
            first_name.style.borderColor = "red"
            Password.style.borderColor = "red"
            Email.style.borderColor = "red"
            
        }
    }
    
})
