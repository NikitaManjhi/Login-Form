document.addEventListener('DOMContentLoaded',function(){
    const loginBtn=document.getElementById("login-btn");
    const loginId=document.getElementById("login-id");
    const password=document.getElementById("password");
    const loginForm = document.querySelector('.login-form');
    const imageContainer = document.querySelector('.image-container');
    const navbar=document.querySelector(".navbar");
    const footer=document.querySelector(".footer");
    const loginDiv = document.querySelector(".login"); 
    console.log(navbar);
    
    imageContainer.addEventListener('animationend', function(event) {
        if (event.animationName === 'moveright') {
            navbar.querySelector(".navbar-right").classList.add("fadeInUp");
            navbar.querySelector(".logo").classList.add("show");
            navbar.querySelector(".logo-text").classList.add("show");
            footer.classList.add("fadeInUp");
            loginDiv.classList.add("fadeInUp"); 
        }
    });


    const updateButton = function(){
       if(loginId.value.trim()!=="" && password.value.trim()!==""){
        loginBtn.style.backgroundColor="#528a31";
        loginBtn.disabled=false;
       }
       else{
        loginBtn.style.backgroundColor="#868585";
        loginBtn.disabled=true;
       
       }
    }


    
    const handleClick = function() {
        const inputBoxes = document.querySelectorAll(".input-box");
        inputBoxes.forEach((box) => {
            box.classList.add("hover-disabled");
            box.style.backgroundColor = "#B7B7B7";
            box.querySelector("input").style.color = "#494545";
            box.querySelector("input").disabled = true;
            box.querySelector("label").style.textShadow = "none";
            box.querySelector("label").style.color = "#494545";
        });

        loginBtn.disabled = true;
        loginBtn.classList.add("loading");

        
        const loader = document.querySelector('.loader');
        loader.style.display = 'block'; 
        setTimeout(() => {
            footer.classList.add('hide');
            navbar.querySelector(".logo-text").classList.add("hide");
            navbar.querySelector(".navbar-right").classList.add("hide");
            loginDiv.classList.add("hide");

           
                imageContainer.classList.add('shrink');
                imageContainer.addEventListener('animationend', function(event) {
                    if (event.animationName === 'shrink-image') {
                       document.querySelector(".logo").classList.add("move");
                    }
                });
           
        }, 1500); 
    }
    
    updateButton();
    loginId.addEventListener("input",updateButton);
    password.addEventListener("input",updateButton);
    loginBtn.addEventListener("click",handleClick);

})
