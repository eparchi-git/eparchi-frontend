const serverurl = 'http://127.0.0.1:3000';

function logout() {
    $.ajax({
        url : serverurl + "/api/v1/users/logout/",
        type: "GET",
        async: false,
        crossDomain: true,
        xhrFields: {
          withCredentials: true  
        },
        contentType: "application/json; charset=utf-8",
        dataType   : "json",
        success    : function(response){
            window.location.href = "./landingpage.html";
        },
        error : function(response){
            console.log("error in jquery");
            console.log(response);
            alert("Record not found!!");
        }
    });
}