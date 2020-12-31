$(function() {
    $("#sideBarContents").load("sidebarcontents.html");
    $("#topBar").load("topbar.html");  
    getAllInvoices();
});

function getAllInvoices(){

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
        writeAllInvoiceData(response);
    },
    error : function(response){
        console.log("error in jquery");
        console.log(response);
        console.log("Record not found!!");
    }
    });

}

function writeAllInvoiceData(data) {
    console.log(data);
    var allInvoice = data['data']['data']
    const allInvoiceDiv = document.getElementById('allInvoiceDiv')
    for (i=0; i<allInvoice.length; i++){
        var invoiceTotal = 0
        for(allproducts=0; allproducts<allInvoice[i]['products'].length; allproducts++){
            invoiceTotal += allInvoice[i]['products'][allproducts]['productMRP']
        }
        console.log(i,invoiceTotal, "Seller : " + allInvoice[i]['seller']['shopName'],  allInvoice[i]['createdAt'].slice(0,10) )



        const div = document.createElement('div');
        div.className = 'card';
        // div.style.backgroundColor = rgb(21, 91, 174, 0.2);

        div.innerHTML = `
        <a onclick="openInvoice(this.id)" id=" ` + i + `" class="text-decoration-none">
            
            <div class="card-body" style="padding: 10px">
            <div class="card-text">
                <div class="container" style="width: 100%;">
                    <div class="row">
                    <div class="col-sm"style="text-align: center;">
                        Date : ` +  allInvoice[i]['createdAt'].slice(0,10) + `
                    </div>
                    <div class="col-sm"style="text-align: center;">
                        ` + allInvoice[i]['seller']['shopName'] + `
                    </div>
                    <div class="col-sm" style="text-align: center;">
                        +918085574199
                    </div>
                    <div class="col-sm" style="text-align: center;">
                        Rs. `+invoiceTotal+`
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </a>
        
        `
        allInvoiceDiv.appendChild(div)
        allInvoiceDiv.appendChild(document.createElement("br"))



    }
}

function openInvoice(id) {
    console.log(id);
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