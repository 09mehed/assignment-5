const donateFirstCard = document.getElementById('donate-first-card');

donateFirstCard.addEventListener('click', function(){
    
    const inputAmount = parseFloat(document.getElementById('input-amount').value);
    const inputAmountHandler = Number(inputAmount);
    const amountReceivedElement = document.getElementById('amount-received');
    const amountReceived = parseFloat(amountReceivedElement.innerText);

    const mainAmountElement = document.getElementById('main-amount');
    const mainAmount = parseFloat(mainAmountElement.innerText);

    if(inputAmountHandler >= 0 || inputAmountHandler === "number"){
        const newAmount = amountReceived + inputAmountHandler;
        amountReceivedElement.innerText = newAmount.toFixed(2); 

        const mainAmountReceived = mainAmount - inputAmountHandler;
        mainAmountElement.innerText = mainAmountReceived.toFixed(2);
    }else{
        alert ("Please Input a Valid Number"); 
    }

    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md border border-gray-200"
    historyItem.innerHTML = `
        <p class="text-xl text-black">${inputAmountHandler} Taka is Donate for Flood at Noakhali, Bangladesh</p>
        <p class="text-xl text-black">Date: ${new Date()}</p>
    `
    const historyList = document.getElementById('history-list');
    historyList.insertBefore(historyItem, historyList.firstChild)

    if(inputAmount > mainAmount){
        alert ("Please Input a Valid Number"); 
    }
})


// card 2

const donateFirstCard2 = document.getElementById('donation-btn');

donateFirstCard2.addEventListener('click', function(){
    
    const inputAmount = parseFloat(document.getElementById('input-amount-2').value);
    const inputAmountHandler = Number(inputAmount);
    const amountReceivedElement = document.getElementById('amount-donate-2');
    const amountReceived = parseFloat(amountReceivedElement.innerText);

    const mainAmountElement = document.getElementById('main-amount');
    const mainAmount = parseFloat(mainAmountElement.innerText);

    if(inputAmountHandler >= 0 || inputAmountHandler === "number"){
        const newAmount = amountReceived + inputAmountHandler;
        amountReceivedElement.innerText = newAmount.toFixed(2); 

        const mainAmountReceived = mainAmount - inputAmountHandler;
        mainAmountElement.innerText = mainAmountReceived.toFixed(2);
    }else{
        alert ("Please Input a Valid Number"); 
    }
    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md border border-gray-200"
    historyItem.innerHTML = `
        <p class="text-xl text-black">${inputAmountHandler} Taka is Donate for Flood Relief in Feni, Bangladesh</p>
        <p class="text-xl text-black">Date: ${new Date()}</p>
    `
    const historyList = document.getElementById('history-list');
    historyList.insertBefore(historyItem, historyList.firstChild)

    if(inputAmountHandler <= 0 || isNaN(inputAmountHandler)){
        alert ("Please Input a Valid Number"); 
    }
})

// card 3

const donateFirstCard3 = document.getElementById('donate-card-3');

donateFirstCard3.addEventListener('click', function(){

    const inputAmount = parseFloat(document.getElementById('input-donate-card').value);
    const inputAmountHandler = Number(inputAmount);
    const amountReceivedElement = document.getElementById('amount-donate');
    const amountReceived = parseFloat(amountReceivedElement.innerText);

    const mainAmountElement = document.getElementById('main-amount');
    const mainAmount = parseFloat(mainAmountElement.innerText);

    if(inputAmountHandler >= 0 || inputAmountHandler === "number"){
        const newAmount = amountReceived + inputAmountHandler;
        amountReceivedElement.innerText = newAmount.toFixed(2); 

        const mainAmountReceived = mainAmount - inputAmountHandler;
        mainAmountElement.innerText = mainAmountReceived.toFixed(2);
    }else{
        alert ("Please Input a Valid Number"); 
    }
    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md border border-gray-200"
    historyItem.innerHTML = `
        <p class="text-xl text-black">${inputAmountHandler} Taka is Aid for Injured in the Quota Movement</p>
        <p class="text-xl text-black">Date: ${new Date()}</p>
    `
    const historyList = document.getElementById('history-list');
    historyList.value = "";
    historyList.insertBefore(historyItem, historyList.firstChild)

    if(inputAmountHandler <= 0 || isNaN(inputAmountHandler)){
        alert ("Please Input a Valid Number");
    }

    // if(newAmount > incomeInput){
    //     document.getElementById('logic-error').classList.remove('hidden');
    //     return;
    // }
    if(mainAmount < newAmount){
        document.getElementById('logic-error').classList.remove('hidden');
            return;
    }
})

document.getElementById('btn-continue').addEventListener('click', function() {
    const modal = document.getElementById('my_modal_1');
    modal.close();
});
document.getElementById('btn-continue').addEventListener('click', function() {
    const modal = document.getElementById('my_modal_2');
    modal.close();
});
document.getElementById('btn-continue').addEventListener('click', function() {
    const modal = document.getElementById('my_modal_3');
    modal.close();
});


// tab change

const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

historyTab.addEventListener('click', function(){

    historyTab.classList.add('transition-colors', 'duration-200','text-[#111111]','font-semibold','bg-[#B4F461]','mx-5');

    historyTab.classList.remove('border','border-gray-300', 'transition-colors', 'duration-200','text-gray-600','font-semibold');

    donationTab.classList.add('border','border-gray-300', 'transition-colors', 'duration-200','text-gray-600','font-semibold')

    donationTab.classList.remove('transition-colors', 'duration-200','text-[#111111]','font-semibold','bg-[#B4F461]','mx-5');

    const sectionForm = document.getElementById('section');
    sectionForm.classList.add('hidden');

    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden');
})

donationTab.addEventListener('click', function(){
    donationTab.classList.add('transition-colors', 'duration-200','text-[#111111]','font-semibold','bg-[#B4F461]','mx-5')

    historyTab.classList.remove('transition-colors', 'duration-200','text-[#111111]','font-semibold','bg-[#B4F461]','mx-5');

    const sectionForm = document.getElementById('section');
    sectionForm.classList.remove('hidden');

    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden');
})
  
document.getElementById('donate-first-card').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('my_modal_1').checked = true;
    document.getElementById('my_modal_1').showModal();
    document.getElementById('my_modal_1').close();
})
document.getElementById('donation-btn').addEventListener('click', function(event){
    event.preventDefault();
        document.getElementById('my_modal_2');
        
})
document.getElementById('donate-card-3').addEventListener('click', function(event){
    event.preventDefault();
        document.getElementById('my_modal_3');
        my_modal_3.showModal();
})

