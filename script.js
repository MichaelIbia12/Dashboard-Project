const first_name =  document.getElementById("FirstName")
const last_name =  document.getElementById("LastName")
const Email =  document.getElementById("Email")
const password_one =  document.getElementById("Password-one")
const Password =  document.getElementById("Password")
const submit =  document.getElementById("submit")
let profile
let count = 0
let compare
submit.addEventListener("click", () => {
   
    profile = {
        Name_first:first_name.value,
        Name_last: last_name.value,
        Email:Email.value,
        password: Password.value,
        login: false,
        dark_mode: false,
        login_count: 0
    }
      for (let index = 0; index < localStorage.length; index++) {
       /*  compare = JSON.parse(localStorage.getItem(localStorage.key(index)))
          console.log(compare)*/
          if(password_one.value != Password.value) {
              Password.style.borderColor = "red"
            Password_one.style.borderColor = "red"
            
        }else if(first_name.value === "" && last_name.value === "" && Email.value === "" && Password.value === ""){      
            Password.style.borderColor = "red"
            first_name.style.borderColor = "red"
            last_name.style.borderColor = "red"
            Email.style.borderColor = "red"
        
        }else if(Email.value.match('@') === null || Email.value.match('.com') === null){
            Email.style.borderColor = "red"
            

        }/*else if(compare.Name_first === first_name.value && compare.Email === Email.value  && compare.password === Password.value){
         console.log("account discovered")
         alert("already have an account, Please Login.")
         window.open("/login/index.html")
        }*/else{
            localStorage.setItem("User"+ count++ , JSON.stringify(profile))
            window.open("/Dashboard/index.html")
            break;
          
        }
        
    }
        
})

