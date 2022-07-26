const firstName =  document.getElementById("FirstName")
const lastName =  document.getElementById("LastName")
const EmailLogin =  document.getElementById("Email")
const passwordMain =  document.getElementById("Password-one")
const PasswordLogin =  document.getElementById("Password")
const Login =  document.getElementById("submit")
const header = document.getElementById("h1")
const authenticateButton = document.querySelectorAll("#authenticate")

const first_name =  document.getElementById("User")
const Password =  document.getElementById("Password")
const Email =  document.getElementById("Email")
const submit =  document.getElementById("Submit")


let profile_storage




let profile
let count = 0
let compare


function loginMode(){
    $(lastName).fadeOut(1000);
    $(PasswordLogin).fadeOut(1000);
    $(header).fadeOut(10);
    header.innerText = "Login"
    $(header).fadeIn(1000);

    firstName.id = "User"
    passwordMain.id = "Password"
    EmailLogin.id = "Email"
    Login.id ="Submit"
    submit.addEventListener("click", () => {

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
    console.log("lo");
}

function createMode() {
    $(lastName).fadeIn(1000);
    $(PasswordLogin).fadeIn(1000);
    $(header).fadeOut(10);
    header.innerText = "Create Account"
    $(header).fadeIn(1000);

    firstName.id = "FirstName"
    passwordMain.id = "Password-one"
    EmailLogin.id = "Email"
    Login.id ="submit"
    Login.addEventListener("click", () => {
   
        profile = {
            Name_first:firstName.value,
            Name_last: lastName.value,
            Email:EmailLogin.value,
            password: PasswordLogin.value,
            login: false,
            dark_mode: false,
            login_count: 0
        }
        
              
              if(passwordMain.value != Password.value) {
                  Password.style.borderColor = "red"
                Password_one.style.borderColor = "red"
                
            }else if(firstName.value === "" && lastName.value === "" && EmailLogin.value === "" && PasswordLogin.value === ""){      
                PasswordMain.style.borderColor = "red"
                firstName.style.borderColor = "red"
                lastName.style.borderColor = "red"
                EmailLogin.style.borderColor = "red"
            
            }else if(EmailLogin.value.match('@') === null || EmailLogin.value.match('.com') === null){
                Email.style.borderColor = "red"
                
    
            }else{
                localStorage.setItem("User"+ count++ , JSON.stringify(profile))
                window.open("/Dashboard/index.html")
                console.log("working");
              
              
            
            
        }
            
    })
    console.log("cr");
}
for (let index = 0; index < authenticateButton.length; index++) {
    
    authenticateButton[index].addEventListener("click", () => {
        if (index == 1){
            loginMode()       
            console.log("gig");
        }
        
        if (index == 0){
            createMode()     
            console.log("gigdd");
            
        }
    
    })
    
}