$(function() {
    document.getElementById('addmore').click();
});

function sConsole(event) {
    console.log("submit click");
event.preventDefault();
var k = "";
var inputName = document.getElementsByName("itemName[]");
var inputprice = document.getElementsByName("itemPrice[]");
var inputQuantity = document.getElementsByName("itemQuantity[]");

var buyerMobilenumber = document.getElementById("buyermobilenumber").value;

var sendingJSONdata = {"products": [], "mobileno":buyerMobilenumber, "paymentstatus":"paid"};
for (var i = 0; i < inputName.length; i++) { 
                var name = inputName[i]; 
                var price = inputprice[i];
                var quantity = inputQuantity[i];
                k = k + "name : " + name.value + " price : " + price.value + " quantity : "+ quantity.value + "\n"; 
                var data = {};
                data['productName'] = name.value;
                data['productMRP'] = price.value;
                data['quantity'] = quantity.value;
                // var data = "{'productName':'"+name.value+"', 'productMRP':'"+price.value+"', 'quantity':'"+quantity.value+"'}";
                console.log(data);
                sendingJSONdata["products"].push(data);
} 
sendingJSONdata = JSON.stringify(sendingJSONdata);
console.log(sendingJSONdata);
console.log(k);


$.ajax({
      url : serverurl + "/api/v1/invoice/seller",
      type: "POST",
      async: false,
      crossDomain: true,
      xhrFields: {
             withCredentials: true  
        },
      data: sendingJSONdata,
      contentType: "application/json; charset=utf-8",
      dataType   : "json",
      success    : function(response){
          console.log("Pure jQuery Pure JS object");
          console.log(response);
          alert("Invoice generated and sent!!");
          window.location = "./dashboardseller.html";
      },
      error : function(response){
          console.log("error in jquery");
          // document.getElementById("loginfail").click();
          console.log(response);
          alert("INVOICE not created");
      }
  });

}

var room = 1;
function education_fields() {
 
    room++;
    var objTo = document.getElementById('education_fields')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass"+room);
	var rdiv = 'removeclass'+room;
    divtest.innerHTML = `
    <div class="row item">
        <div class="col-sm-3 nopadding">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Item</span>
              </div>
                <input type="text" class="form-control itemName" id="itemName" name="itemName[]" value="" placeholder="Item Name" style="text-align: center;" required> </div>
        </div>
        <div class="col-sm-3 nopadding">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">₹</span>
              </div>
              <input type="number" class="itemPrice form-control" id="itemPrice" name="itemPrice[]" value="" min="0" placeholder="Item Price" style="text-align: center;" required >
            </div>
        </div>
        <div class="col-sm-3 nopadding">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Qty.</span>
              </div>
                <input type="number" class="itemQuantity form-control" id="itemQuantity" name="itemQuantity[]" min="0" value="" placeholder="Item Quantity" style="text-align: center;" required> </div>
        </div>
        <div class="col-sm-3 ">
            <div class="row">
                <div class=" col-sm-6  input-group-btn" style="text-align: center;" name="totalItemPrice[]" style="padding:20px;">Total Price : ₹
                    <lable class="totalItemPrice" name="totalItemPrice[]">0</lable>
                </div>
                <div class=" col-sm-6  input-group-btn" style="text-align: center;">
                    ` + '<button class="btn btn-sm btn-outline-danger" type="button" onclick="remove_education_fields('+ room +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"><i class="fas fa-trash"></i></span> </button>' + `
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div style="    width:100%; ">
            <hr>
        </div>
    </div>`;
    
    objTo.appendChild(divtest)
}
   
function remove_education_fields(rid) {
	   $('.removeclass'+rid).remove();
   }