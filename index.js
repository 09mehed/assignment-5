function getInputValue(id){
    return parseFloat(document.getElementById(id).value);
}
function getInputValueById(id){
    return (document.getElementById(id));
}
const donateFirstCard = document.getElementById('donate-first-card');
donateFirstCard.addEventListener('click', function(){

    const inputAmount = getInputValue('input-amount');
    const amountReceivedElement = getInputValueById('amount-received');
    const amountReceived = parseFloat(amountReceivedElement.innerText);

    const mainAmountElement = getInputValueById('main-amount');
    const mainAmount = parseFloat(mainAmountElement.innerText);

    if(inputAmount > mainAmount){
        alert ("Please Input a Valid Number"); 
        return;
    }

    if(inputAmount >= 0 || inputAmount === "number"){
        const newAmount = amountReceived + inputAmount;
        amountReceivedElement.innerText = newAmount.toFixed(2); 

        const mainAmountReceived = mainAmount - inputAmount;
        mainAmountElement.innerText = mainAmountReceived.toFixed(2);

        getInputValueById('my_modal_1');
        my_modal_1.showModal();
    }else{
        alert ("Please Input a Valid Number"); 
    }
    if(isNaN(inputAmount)){
        alert ("Please Input a Valid Number"); 
        return;
    }
    const historyItem = document.createElement('div');
    historyItem.style.marginTop = '1rem';
    historyItem.className = "bg-white p-3 rounded-md border border-gray-200"
    historyItem.innerHTML = `
        <p class="text-2xl text-black font-semibold">${inputAmount} Taka is Donate for Flood at Noakhali, Bangladesh</p>
        <p class="text-xl text-black">Date: ${new Date()}</p>
    `
    const historyList = getInputValueById('history-list');
    historyList.insertBefore(historyItem, historyList.firstChild)

})

// card 2

const donateFirstCard2 = getInputValueById('donation-btn');

donateFirstCard2.addEventListener('click', function(){

    const inputAmount = getInputValue('input-amount-2');
    const amountReceivedElement = getInputValueById('amount-donate-2');
    const amountReceived = parseFloat(amountReceivedElement.innerText);

    const mainAmountElement = getInputValueById('main-amount');
    const mainAmount = parseFloat(mainAmountElement.innerText);

    if(inputAmount > mainAmount){
        alert ("Please Input a Valid Number"); 
        return;
    }

    if(inputAmount >= 0 || inputAmount === "number"){
        const newAmount = amountReceived + inputAmount;
        amountReceivedElement.innerText = newAmount.toFixed(2); 

        const mainAmountReceived = mainAmount - inputAmount;
        mainAmountElement.innerText = mainAmountReceived.toFixed(2);

        getInputValueById('my_modal_2');
        my_modal_2.showModal();
    }else{
        alert ("Please Input a Valid Number"); 
    }
    if(isNaN(inputAmount)){
        alert ("Please Input a Valid Number"); 
        return;
    }
    const historyItem = document.createElement('div');
    historyItem.style.marginTop = '1rem';
    historyItem.className = "bg-white p-3 rounded-md border border-gray-200"
    historyItem.innerHTML = `
        <p class="text-2xl text-black font-semibold">${inputAmount} Taka is Donate for Flood Relief in Feni, Bangladesh</p>
        <p class="text-xl text-black">Date: ${new Date()}</p>
    `
    const historyList = getInputValueById('history-list');
    historyList.insertBefore(historyItem, historyList.firstChild)
})

// card 3

const donateFirstCard3 = getInputValueById('donate-card-3');

donateFirstCard3.addEventListener('click', function(){

    const inputAmount = getInputValue('input-donate-card');
    const amountReceivedElement = getInputValueById('amount-donate');
    const amountReceived = parseFloat(amountReceivedElement.innerText);

    const mainAmountElement = getInputValueById('main-amount');
    const mainAmount = parseFloat(mainAmountElement.innerText);

    if(inputAmount > mainAmount){
        alert ("Please Input a Valid Number"); 
        return;
    }

    if(inputAmount >= 0 || inputAmount === "number"){
        const newAmount = amountReceived + inputAmount;
        amountReceivedElement.innerText = newAmount.toFixed(2); 

        const mainAmountReceived = mainAmount - inputAmount;
        mainAmountElement.innerText = mainAmountReceived.toFixed(2);

        getInputValueById('my_modal_3');
        my_modal_3.showModal();
    }else{
        alert ("Please Input a Valid Number"); 
    }
    if(isNaN(inputAmount)){
        alert ("Please Input a Valid Number"); 
        return;
    }
    const historyItem = document.createElement('div');
    historyItem.style.marginTop = '1rem';
    historyItem.className = "bg-white p-3 rounded-md border border-gray-200"
    historyItem.innerHTML = `
        <p class="text-2xl text-black font-semibold">${inputAmount} Taka is Aid for Injured in the Quota Movement</p>
        <p class="text-xl text-black">Date: ${new Date()}</p>
    `
    const historyList = getInputValueById('history-list');
    historyList.insertBefore(historyItem, historyList.firstChild)
})

// tab change

const historyTab = getInputValueById('history-tab');
const donationTab = getInputValueById('donation-tab');

historyTab.addEventListener('click', function(){

    historyTab.classList.add('transition-colors', 'duration-200','text-[#111111]','font-semibold','bg-[#B4F461]','mx-5');

    historyTab.classList.remove('border','border-gray-300', 'transition-colors', 'duration-200','text-gray-600','font-semibold');

    donationTab.classList.add('border','border-gray-300', 'transition-colors', 'duration-200','text-gray-600','font-semibold')

    donationTab.classList.remove('transition-colors', 'duration-200','text-[#111111]','font-semibold','bg-[#B4F461]','mx-5');

    const sectionForm = getInputValueById('section');
    sectionForm.classList.add('hidden');

    const historySection = getInputValueById('history-section');
    historySection.classList.remove('hidden');
})

donationTab.addEventListener('click', function(){
    donationTab.classList.add('transition-colors', 'duration-200','text-[#111111]','font-semibold','bg-[#B4F461]','mx-5')

    historyTab.classList.remove('transition-colors', 'duration-200','text-[#111111]','font-semibold','bg-[#B4F461]','mx-5');

    const sectionForm = getInputValueById('section');
    sectionForm.classList.remove('hidden');

    const historySection = getInputValueById('history-section');
    historySection.classList.add('hidden');
})
  
document.getElementById('donate-first-card').addEventListener('click', function(event) {
    event.preventDefault();
    if (inputValue < 0) {
        alert('Negative value allowed na!');
    } else {
        const modal = getInputValueById('my_modal_1');
        modal.showModal();
    }
});
document.getElementById('donation-btn').addEventListener('click', function(event) {
    event.preventDefault();
    if (inputValue < 0) {
        alert('Negative value allowed na!');
    } else {
        const modal = getInputValueById('my_modal_2');
        modal.showModal();
    }
});
document.getElementById('donate-card-3').addEventListener('click', function(event) {
    event.preventDefault();
    if (inputValue < 0) {
        alert('Negative value allowed na!');
    } else {
        const modal = getInputValueById('my_modal_3');
        modal.showModal();
    }
});

