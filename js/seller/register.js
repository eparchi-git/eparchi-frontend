function register(){
    var data = {};

    var name = document.getElementById('sellerName').value;
    var shopName = document.getElementById('shopName').value;
    var email = document.getElementById('email').value;
    var mobileno = document.getElementById('mobileno').value;
    var typeOfItemsSold = document.getElementById('typeOfItemsSold').value;
    var typeOfShop = document.getElementById('typeOfShop').value; 
    var street = document.getElementById('street').value; 
    var city = document.getElementById('city').value;   
    var customFile = document.getElementById('customFile').value; 
    var password = document.getElementById('password').value; 
    var passwordConfirm = document.getElementById('passwordConfirm').value; 

    var gstin = document.getElementById('gstin').value;
    var landmark = document.getElementById('landmark').value;
    var brandName = document.getElementById('brandName').value;

    data = {
        'name' : name,
        'shopName' : shopName,
        'email' : email,
        'mobileno' : mobileno,
        'typeOfItemsSold' : typeOfItemsSold,
        'typeOfShop' : typeOfShop,
        'street' : street,
        'city' : city,
        'customFile' : customFile,
        'password' : password,
        'passwordConfirm' : passwordConfirm,
    }

    if(gstin != "") {
        data['gstin'] = gstin;
    }
    if(landmark != "") {
        data['landmark'] = gslandmarktin;
    }
    if(brandName != "") {
        data['brandName'] = brandName;
    }

    $.ajax({
        url : serverurl + "/api/v1/seller/signup/",
        type: "POST",
        data: JSON.stringify(data)
        ,
        xhrFields: {
            withCredentials: true
        },
        dataType   : "json",
        success    : function(data){
            console.log("registered");

            window.location.href = "./dashboard.html";
        },

        error: function (err) {
            console.log("error:"+JSON.stringify(err));
        }
    });


}