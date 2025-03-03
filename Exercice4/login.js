document.getElementById("loginButton").addEventListener("click" , ()=>{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
     
    let user = users.find(u => u.email === email && u.password === password);
    if(user){
        sessionStorage.setItem("id",user.id);
        window.location.replace("index.html");
    }
    else{
        Swal.fire("Error", "Email or password are incorrecte","error");
    }
    


})