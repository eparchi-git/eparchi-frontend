import { testing } from "./login.js";

function generatebillpage() {
    window.location = './generateInvoice.html';
}


function getAllData() {

    testing();
    
    var invoiceData;

    $.ajax({
        url : "http://127.0.0.1:3000/api/v1/invoice/seller/",
        type: "GET",
        async: false,
        crossDomain: true,
        xhrFields: {
          withCredentials: true  
        },
        contentType: "application/json; charset=utf-8",
        dataType   : "json",
        success    : function(response){
            invoiceData = response;
        },
        error : function(response){
            console.log("error in jquery");
            console.log(response);
            alert("Record not found!!");
        }
    });

    var earningthismonth = 0;
    var earninglast5days = 0;

    var currentdate = new Date();
    var days5back = new Date();
    days5back.setDate(currentdate.getDate() - 5);

    var allBills = invoiceData['data']['data'];


    for(var billindex = 0; billindex < allBills.length; billindex++) {
        var billDate = new Date(Date.parse(allBills[billindex]['createdAt']));
        if(billDate.getMonth() == currentdate.getMonth() && billDate.getFullYear() == currentdate.getFullYear()) {
            earningthismonth += totalBillAmount(allBills[billindex]['products']);
        }

        if(billDate.getTime() > days5back.getTime()) {
            earninglast5days += totalBillAmount(allBills[billindex]['products']);
        }
    }

    document.getElementById("earningthismonth").innerHTML = earningthismonth;
    document.getElementById("earninginlast5days").innerHTML = earninglast5days;
    console.log(earningthismonth);
    console.log(earninglast5days);

}

function totalBillAmount(products) {
    var amount = 0;
    for(var index = 0; index < products.length; index++) {
        amount += products[index]['quantity']*(products[index]['productMRP']);
    }
    return amount;
}

function logout() {
    $.ajax({
        url : "http://127.0.0.1:3000/api/v1/seller/logout/",
        type: "GET",
        async: false,
        crossDomain: true,
        xhrFields: {
          withCredentials: true  
        },
        contentType: "application/json; charset=utf-8",
        dataType   : "json",
        success    : function(response){
            window.location.href = "../landingpage.html";
        },
        error : function(response){
            console.log("error in jquery");
            console.log(response);
            alert("Record not found!!");
        }
    });
}