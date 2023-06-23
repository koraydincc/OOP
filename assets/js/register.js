const Data = [];

const svgElementGithub = document.querySelector(".github").addEventListener("click", function () {
    window.open("https://github.com/koraydincc", "_blank");
});

const svgElementTwitter = document.querySelector(".twitter").addEventListener("click", function () {
    window.open("https://twitter.com/koraydincc", "_blank");
});

const svgElementLinkedin = document.querySelector(".linkedin").addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/koray-din%C3%A7-30185a25b/", "_blank");
});

let reference = {
  ad: document.getElementById("name"),
  soyad: document.getElementById("lastname"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  rePassword: document.getElementById("re-password")
};

document.querySelector(".registerPageBtn").addEventListener("click", function() {
  if (reference.email.value === '' || reference.password.value === '') {
    registerClear();
    SwalWarning('Kayıt Başarısız! Eksik Yerleri Doldurun');
    return false;
  }

  let already = handleUser();
  if (already) {
    return false;
  }

  Data.push({
    ad: reference.ad.value,
    soyad: reference.soyad.value,
    email: reference.email.value,
    password: reference.password.value,
    rePassword: reference.rePassword.value
  });

 
  
  registerClear();

  if (Data.length > 0) {
    SwalSuccess('Anasayfaya Yönlendiriliyorsunuz!');
     setTimeout(() => {
       GoToPage("../pages/index.html");
     }, 2000);
  }

  console.log(Data);
});

function registerClear() {
  reference.ad.value = "";
  reference.soyad.value = "";
  reference.email.value = "";
  reference.password.value = "";
  reference.rePassword.value = "";
}

function SwalSuccess(message) {
    Swal.fire(
        'Kayıt Başarılı!', message, 'success'
    );
}

function handleUser() {
    let already = false;
    Data.forEach(item => {
      if (reference.email.value == item.email) {
        already = true;
      }

   });
   if (already) {
     SwalWarning('Bu email ile daha önceden kayıt olunmuştur!')
     registerClear();
     return true;
    
   }
   return false;
  
}

function SwalWarning(message) {
    Swal.fire(
        'Bir Hata Oluştu!', message, 'warning'
    );
}

function GoToPage(page){
    location.href = page;
}
