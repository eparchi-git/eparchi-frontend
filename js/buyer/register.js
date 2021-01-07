const serverurl = 'http://127.0.0.1:3000';

function register(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobileno = document.getElementById('mobileno').value;
    var password = document.getElementById('password').value;
    var passwordConfirm = document.getElementById('passwordConfirm').value;   
    $.ajax({
        url : serverurl + "/api/v1/users/signup/",
        type: "POST",
        data:{
             name: name,
             email: email,
             mobileno: mobileno,
             password: password,
             passwordConfirm: passwordConfirm
            }
        ,
        xhrFields: {
            withCredentials: true
        },
        dataType   : "json",
        success    : function(data){
            console.log("registered");
            // console.log(document.cookie)

            window.location.href = "./dashboard.html";
        },

        error: function (err) {
            console.log("error:"+JSON.stringify(err));
        }
    });


}