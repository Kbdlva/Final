const signUpBtnLink = document.querySelector(".signUpBtn-link");
const signInBtnLink = document.querySelector(".signInBtn-link");
const wrapper = document.querySelector(".wrapper");

signUpBtnLink.addEventListener('click', () =>{
    wrapper.classList.toggle("active");
});


signInBtnLink.addEventListener('click', () =>{
    wrapper.classList.toggle("active");
});
function registration(form){
    console.log(form['number'].value);
    let number = form['number'].value;
    let name = form['name'].value;
    let pass = form['pass'].value;
    $.ajax({
        url: 'register.php',
        type: 'POST',
        data: { number,name,pass},
        success: (result) => {
            console.log(result);
            if(result=='true'){
                setCookie('number',number,20);
                window.location.replace("../AboutUs/aboutUs.html");
            }
            else {
                window.alert("Number is taken by another user!");
                location.reload();
            }
        },
        error: () => {
            console.log('error');
        }
    });
}
function login(form){
    console.log(form['number']);
    let number = form['number'].value;
    let pass = form['pass'].value;
    $.ajax({
        url: 'login.php',
        type: 'POST',
        data: { number,pass},
        success: (result) => {
            console.log(result);
            if(result=='true'){
                setCookie('number',number,20);
                window.location.replace("../AboutUs/aboutUs.html");
            }
            else {
                window.alert("Your number or password is incorrect!");
                location.reload();
            }
        },
        error: () => {
            console.log('error');
        }
    });
}




//Cookie handler
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function deleteCookie(cname){
    let expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = cname + "=" + ";" + expires + ";path=/";
  }
  function checkCookie(cname) {
    let username = getCookie(cname);
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }
  
  
  
