const serverurl = 'http://127.0.0.1:3000';
var profileDetails = {};

$(function() { 

    $.ajaxSetup({async: false});

    $("#sideBarContents").load("sideBarContents.html"); 
    $("#topBar").load("topBar.html"); 

    $.ajax({
        url : serverurl + "/api/v1/seller/getdetails",
        type: "GET",
        async: false,
        crossDomain: true,
        xhrFields: {
          withCredentials: true  
        },
        contentType: "application/json; charset=utf-8",
        dataType   : "json",
        success    : function(response){
            profileDetails = response;
            $('#shopName').text("Naman");
            $('#sellerName').text("Naman");
            document.getElementById("shopName").textContent = response['user']['shopName'];
            document.getElementById("sellerName").innerHTML = response['user']['sellerName'];
        },
        error : function(response){
            console.log("error in jquery");
            console.log(response);
            alert("Record not found!!");
        }
    });

    $.ajaxSetup({async: true});

});

function logout() {
    $.ajax({
        url : url + "/api/v1/seller/logout/",
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
