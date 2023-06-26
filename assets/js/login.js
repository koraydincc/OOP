const ui = new UI()

function GoToPage(page) {
    location.href = page
  }
  


const svgElementGithub = document.querySelector(".github").addEventListener("click", function () {
    window.open("https://github.com/koraydincc", "_blank");
});

const svgElementTwitter = document.querySelector(".twitter").addEventListener("click", function () {
    window.open("https://twitter.com/koraydincc", "_blank");
});

const svgElementLinkedin = document.querySelector(".linkedin").addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/koray-din%C3%A7-30185a25b/", "_blank");
});

ui.registerBtn.addEventListener("click",function () {
    ui.login_form.classList.add("active");
    GoToPage("../pages/register.html")

    
    
})

ui.girisBtn.addEventListener("click",function () {
    
    event.preventDefault();

    let validation = loginValidation()
    if(validation == false) return false;
    
})

function loginValidation() {
    let validation = [
        {
         name: "email",
         message: "Lütfen email bilginizi girin!"
        },
        {
        name: "password",
        message: "Lütfen şifrenizi girin!"
        }]
        
        let formDolumu = true;

        validation.forEach(item=>{
            if (referance[item.name].value == "") {
                document.getElementById(item.name + "-message").innerHTML = item.message;
                formDolumu = false;
                
            }
            else{
                document.getElementById(item.message + "-message").innerHTML = "";
                formDolumu = true;
            }
            
        })
        return formDolumu;
       
    
}

let referance = {
    email: document.getElementById("email"),
    password: document.getElementById("password")
}
    

