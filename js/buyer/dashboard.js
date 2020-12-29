function getAllData() {
    
    var invoiceData;

    $.ajax({
        url : "http://127.0.0.1:3000/api/v1/invoice/buyer/",
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



    // document.getElementById("expensethismonth").innerHTML = 1000;
    // var d = new Date();
    // console.log(d);
    // var d1 = new Date(Date.parse('2020-12-24T15:03:33.808Z'));
    // var d2 = new Date(Date.parse('2020-12-24T15:03:33.808Z'));
    // d2.setDate(d1.getDate()-30);
    // if(d1.getTime() > d2.getTime()) {
    //     console.log("working");
    // }
    // console.log(d1);
    // console.log(d2);
    

    
    // console.log(invoiceData);
    // console.log(totalBillAmount(invoiceData['data']['data'][0]['products']));
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
        url : "http://127.0.0.1:3000/api/v1/users/logout/",
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