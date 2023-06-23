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

