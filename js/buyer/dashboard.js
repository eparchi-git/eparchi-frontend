const serverurl = 'http://127.0.0.1:3000';

$(function() {
    $("#sideBarContents").load("sideBarContents.html"); 
    $("#topBar").load("topBar.html"); 
    getAllData();
});

function getAllData() {
    
    var invoiceData;

    $.ajax({
        url : serverurl + "/api/v1/invoice/buyer/",
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
            console.log("Record not found!!");
        }
    });

    var expensethismonth = 0;
    var expenselast5days = 0;

    var currentdate = new Date();
    var days5back = new Date();
    days5back.setDate(currentdate.getDate() - 5);

    var allBills = invoiceData['data']['data'];

    for(var billindex = 0; billindex < allBills.length; billindex++) {
        var billDate = new Date(Date.parse(allBills[billindex]['createdAt']));
        if(billDate.getMonth() == currentdate.getMonth() && billDate.getFullYear() == currentdate.getFullYear()) {
            console.log()
            expensethismonth += totalBillAmount(allBills[billindex]['products']);
        }

        if(billDate.getTime() > days5back.getTime()) {
            expenselast5days += totalBillAmount(allBills[billindex]['products']);
        }
    }

    document.getElementById("expensethismonth").innerHTML = expensethismonth;
    document.getElementById("expenseinlast5days").innerHTML = expenselast5days;

}

function totalBillAmount(products) {
    var amount = 0;
    for(var index = 0; index < products.length; index++) {
        amount += products[index]['quantity']*(products[index]['productMRP']);
    }
    return amount;
}
