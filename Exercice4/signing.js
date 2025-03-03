class User{
    static id=1;
    constructor(nom,email,password){
        this.nom = nom ;
        this.email =email;
        this.password = password;
        this.id=User.generateLastId();
    }
    static generateLastId(){
        let lastId = localStorage.getItem("lastUserId")|| "0";
        lastId = parseInt(lastId)+1;
        localStorage.setItem("lastUserId",lastId);
        return lastId;
    }
   static addUser(newUser){
        let users = JSON.parse(localStorage.getItem("users")) || [];
        if(users.some(user => user.email === newUser.email )){
            Swal.fire("Error" , "This email is already used" ,"error")
        }else{
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users));
        Swal.fire("Success", "Your account has been created!", "success");
    }
}
    
}



document.getElementById("signupButton").addEventListener("click", function() {
    let fullName = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!fullName || !email || !password) {
        Swal.fire("Error", "Please fill all the fields!", "error");
        return;
    }

    let newUser = new User(fullName , email , password);
    User.addUser(newUser);
});
