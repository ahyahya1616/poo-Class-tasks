let userId = sessionStorage.getItem("id");
if (!userId) {
  Swal.fire({
    title: "Error",
    text: "You are not logged in!",
    icon: "error",
    allowOutsideClick: false, 
    confirmButtonText: "OK"
  }).then(() => {
    window.location.replace("login.html"); 
  });

  window.stop(); 
}

class Post{
    static id=1;
    constructor(title,description,userId){
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.id=Post.generatePostId();
    }

    static generatePostId(){
        let lastId = localStorage.getItem("lastPostId")|| "0";
        lastId = parseInt(lastId)+1;
        localStorage.setItem("lastPostId",lastId);
        return lastId;
    }
   static addPost(newPost){
       let posts = JSON.parse(localStorage.getItem("posts")) || [];
       posts.push(newPost);   
       localStorage.setItem("posts",JSON.stringify(posts));
       location.reload();
    }
}

let a = document.getElementById("addPostButton").addEventListener("click",()=>{
    document.getElementById("postForm").classList.remove("hidden");

})

document.getElementById("postButton").addEventListener("click",()=>{
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value;
    if(!title || !description){
        Swal.fire("Error","All the fileds are requiered","error");
        return;
    }
    else{
        let userId = sessionStorage.getItem("id");
        let newPost = new Post(title,description,userId); 
        Post.addPost(newPost);
    }
    
})

document.getElementById("closeForm").addEventListener("click",()=>{
    document.getElementById("postForm").classList.add("hidden");
})


function logout() {
    sessionStorage.removeItem("id");
    window.location.href = "login.html";
}