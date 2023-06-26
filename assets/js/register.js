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

let referance = {
  ad: document.getElementById("ad"),
  soyad: document.getElementById("soyad"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  rePassword: document.getElementById("rePassword")
};


document.querySelector(".registerPageBtn").addEventListener("click", function() {
  
  event.preventDefault()

  

  let already = handleUser();
  if (already) {
    return false;
  }
  
  let validation = registerValidation();
  if (validation == false) return false

  Data.push({
    ad: referance.ad.value,
    soyad: referance.soyad.value,
    email: referance.email.value,
    password: referance.password.value,
    rePassword: referance.rePassword.value
  });
  

 
  
  registerClear();

  if (Data.length > 0) {
    SwalSuccess('Anasayfaya Yönlendiriliyorsunuz!');
     setTimeout(() => {
       GoToPage("../pages/index.html");
     }, 2000);
  }

  console.log(Data);
  console.log(validation);
  
});

function registerClear() {
  referance.ad.value = "";
  referance.soyad.value = "";
  referance.email.value = "";
  referance.password.value = "";
  referance.rePassword.value = "";
}

function registerValidation() {
  let formItem = [
    {
      name: "ad",
      message: "Lütfen isim alanını doldurunuz",
    },
    {
      name: "soyad",
      message: "Lütfen soyad alanını doldurunuz"
    },
    {
      name: "email",
      message: "Lütfen email alanını doldurunuz",
    },
    {
      name: "password",
      message: "Lütfen şifre alanını doldurunuz"
    },
    {
      name: "rePassword",
      message: "Lütfen şifre doğrulama alanını doldurunuz"
    }
  ];

  let formDolumu = true;

  formItem.forEach(item => {
    if (referance[item.name].value == "") {
      document.getElementById(item.name + "-message").innerHTML = item.message;
      formDolumu = false;
    }
    else {
      document.getElementById(item.name + "-message").innerHTML = "";
    }
  });

  return formDolumu;
}


function SwalSuccess(message) {
    Swal.fire(
        'Kayıt Başarılı!', message, 'success'
    );
}

function handleUser() {
    let already = false;
    Data.forEach(item => {
      if (referance.email.value == item.email) {
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
