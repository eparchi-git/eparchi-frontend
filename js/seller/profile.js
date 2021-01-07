$(function() {
    setAllData();
});

function setAllData() {

    console.log(profileDetails);

    document.getElementById('input-username').setAttribute('value', profileDetails['user']['mobileno']);
    // document.getElementById('input-username').innerHTML = '8085574199';
    document.getElementById('input-email').setAttribute('value', profileDetails['user']['email']);
    document.getElementById('input-name').setAttribute('value', profileDetails['user']['sellerName']);
    // document.getElementById('input-last-name').setAttribute('value', 'Malya');
    document.getElementById('input-address').setAttribute('value', profileDetails['user']['landmark']);
    document.getElementById('input-city').setAttribute('value', profileDetails['user']['city']);
    document.getElementById('input-state').setAttribute('value', 'Madhya Pradesh');
    document.getElementById('input-country').setAttribute('value', 'India');
    document.getElementById('input-postal-code').setAttribute('value', '00000');

    document.getElementById('gstin').innerHTML = '78965484651618151';
    document.getElementById('brand-name').innerHTML = profileDetails['user']['shopName'];

}