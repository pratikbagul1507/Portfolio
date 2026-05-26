// button select 
let btn = document.getElementById("btn");

btn.addEventListener("click" , function(){
    
    document.getElementById("projects").scrollIntoView({
        behavior:"smooth"
    })
})

// text change 
let text = document.querySelector(".hero h1");

setTimeout(()=>{
    text.innerText = "Welcome to my Portfolio 🔥";
} , 2000);

// Initialize EmailJs

(function(){
 emailjs.init("tzm-L8qXotbC5dI6W"); 
})();
// form fetch
let form = document.getElementById("contact-form");

//submit event

form.addEventListener("submit" , function(e){
    e.preventDefault();
    
    // Data send 
    let data = {
           name : document.getElementById("name").value, 
           email : document.getElementById("email").value, 
           message : document.getElementById("message").value, 
    };

    //send email

    emailjs.send("service_hlcf2pg" , "template_q4bkty4" , data)
    .then(function(){
        alert("Message sent ")
    })
    .catch(function(){
        alert("Failed")
    });
  
});