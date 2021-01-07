$(function() {

    var invoiceData = getAllInvoices();
    var billIndex = parseInt(getBillIndex());
    var bill = invoiceData['data']['data'][billIndex];
    showInvoice(bill, billIndex+1);
});

function getAllInvoices(){

    var invoiceData;

    $.ajax({
      url : serverurl + "/api/v1/invoice/seller/",
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

      return invoiceData;
  
}

function getBillIndex() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const bill = urlParams.get('bill')
    console.log(bill);
    return bill;
}

function showInvoice(data, billIndex){
    console.log(data);

    data1 = {"_id":"5fe4adc5387ee7608823596b","products":[{"_id":"5fe4adc5387ee7608823596c","productId":"P1","productName":"Wireless mouse","productDescription":"Logitech M31","productMRP":540,"producteDiscount":100,"quantity":2}],"paymentStatus":"paid","seller":"5fe4ab33387ee7608823596a","buyer":"5fe4a9f7387ee76088235968","createdAt":"2020-12-24T15:03:33.808Z","__v":0,"id":"5fe4adc5387ee7608823596b"}
    var invoiceId = document.getElementById('invoiceId')
    // invoiceId.innerHTML = data["_id"];
    invoiceId.innerHTML = billIndex;


    var table = document.getElementById('tableBody')

    
    document.getElementById('timeAndDate').innerHTML = " "+data['createdAt'].split('T')[0];
    document.getElementById("dataTable").deleteRow(1);

    var total = 0
    for(i=0; i<data['products'].length; i++){
        var product = document.createElement("tr")
        product.innerHTML = 
        `                                       <td>` + data['products'][i]['productName'] +`</td>
                                                <td>` + data['products'][i]['productMRP'] +`</td>
                                                <td>` + data['products'][i]['quantity'] +`</td>
                                                <td>` + data['products'][i]['quantity']*data['products'][i]['productMRP'] +`</td>	
        `;
        table.appendChild(product);
        total += data['products'][i]['quantity']*data['products'][i]['productMRP']
        console.log("hi" , data['products'][i]['productMRP'])
    }
    document.getElementById('grandTotal').innerHTML = total

}