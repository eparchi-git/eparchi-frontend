function loginBuyer() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var data = {
        "email":email,
        "password":password
    }

        $.ajax({
          url : "http://127.0.0.1:3000/api/v1/users/login",
          type: "POST",
          async: false,
          crossDomain: true,
          xhrFields: {
                 withCredentials: true  
            },
          data: JSON.stringify(data),
          contentType: "application/json; charset=utf-8",
          dataType   : "json",
          success    : function(response){
              // console.log("Pure jQuery Pure JS object");
            //   document.cookie = 'jwt='+response['token'];
              // console.log(response);
            //   alert(document.cookie);
              window.location.replace("./dashboard.html");
              
          },
          error : function(response){
              console.log("error in jquery");
              // document.getElementById("loginfail").click();
              console.log(response);
              alert("Wrong UserName or Password!!");
          }
      });
}