// login btn function
document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber = 12345678910;
    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumber = 1234;
    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumbevalueconverted = parseInt (pinNumberValue)

    console.log(mobileNumberValueConverted , pinNumbevalueconverted);
    if(mobileNumberValueConverted === mobileNumber || pinNumbevalueconverted === pinNumber){
        window.location.href="./Home.html"
    }
    else{
        alert('pin: 1234')
    }
    
})