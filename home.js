//add money
const validPin = 1234;
document.getElementById("add-money-btn").addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt (document.getElementById('Amount-to-add').value);
    const password = parseInt(document.getElementById('Password').value);

    if(accountNumber.length < 11 ){
        alert('Please provide a valid account number')
        return;
    }
    if(password !== validPin){
        alert ('Enter a Valid Pin Number')
        return;
    }

    const availableAmount = parseInt (document.getElementById('available-amount').innerText);
    
    const totalAmount =  amount+availableAmount ;

    document.getElementById('available-amount').innerText = totalAmount;
})


//cashout 
document.getElementById('withdraw-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const agnetNumber = document.getElementById('Agent-number').value;
    const amontCashOut = parseInt(document.getElementById('agent-number-Amount').value);
    const pass = parseInt(document.getElementById('Pin').value);

    if(agnetNumber.length < 11 ){
        alert('Please provide a valid account number')
        return;
    }
    if(pass !== validPin){
        alert ('Enter a Valid Pin Number')
        return;
    }

    const availableAmount = parseInt (document.getElementById('available-amount').innerText);

    const totalMoney = availableAmount - amontCashOut;
    document.getElementById('available-amount').innerText = totalMoney;
    
})

//togling feauters

document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cashout').style.display = 'none'

    document.getElementById('add-money').style.display = 'block'
})
document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('add-money').style.display = 'none'

    document.getElementById('cashout').style.display = 'block'
})