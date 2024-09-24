
function callInputValue(id) {
    const getInputField = parseFloat(document.getElementById(id).value);
    return getInputField;

}
function callDonateValue(id) {
    const getDonateValue = (document.getElementById(id))
    return getDonateValue;
}

// section 1

let donateAmount = 0;
const donateBtn = document.getElementById('donate-btn');
donateBtn.addEventListener('click',function () {
    // event.preventDefault();
    // console.log('connecting');
    
    const getInputField = callInputValue('input-field')
    const getDonateValue = callDonateValue('donate-amount')


    // available balance




    const getAvailableBalance = parseFloat(document.getElementById('available-balance').innerText);

    if (getInputField <= getAvailableBalance && getInputField > 0) {
        donateAmount = donateAmount + getInputField;

        getDonateValue.innerText = donateAmount;


        const newBalance = getAvailableBalance - getInputField;
        document.getElementById('available-balance').innerText = newBalance;

        // const btn = document.getElementById('my_modal_1');
        // btn.classList.remove('hidden');
        alert("Succecfully Donate money")


    }
    else if (getInputField <= 0) {
        // const btn = document.getElementById('my_modal_1');
        // btn.classList.add('hidden');
        alert("please enter a valid amount");
        
    }
    else {
        alert("please enter a valid amount");
    }

    const history = document.getElementById('history-tab');
    history.addEventListener('click', function donatNowS2() {
        const getHistoryArea = document.getElementById('history-area');      

        getHistoryArea.innerHTML += `
        <div class="mt-6 text-base py-4 w-[70%] m-auto p-5 border-2 rounded-lg">
                        <div class="font-semibold text-lg text-black">${getInputField} taka donate for Flood at Noakhali, Bangladesh</div>
                        <div class=" font-normal text-sm text-gray-400">Date: ${Date()}</div>

                    </div>   
    `
    
        
        
    })



})

// section 2

let donateAmounts2 = 0;
const donateBtnS2 = document.getElementById('donate-btn-s2')
donateBtnS2.addEventListener('click',function () {
    const getInputField = callInputValue('input-field-s2')
    const getDonateValue = callDonateValue('donate-amount-s2')



    const getAvailableBalance = parseFloat(document.getElementById('available-balance').innerText);

    
    if (getInputField <= getAvailableBalance && getInputField > 0) {
        donateAmounts2 = donateAmounts2 + getInputField;

        getDonateValue.innerText = donateAmounts2;


        const newBalance = getAvailableBalance - getInputField;
        document.getElementById('available-balance').innerText = newBalance;
        alert("Succecfully Donate Money")

        // const btn = document.getElementById('my_modal_5');


        // btn.classList.remove('hidden');
       
      
        


    }
    else if (getInputField <= 0) {
        alert("please enter a valid amountdff");
        
    }
    else {
        alert("please enter a valid amount");
    }
    const history = document.getElementById('history-tab');
    history.addEventListener('click', function () {
        const getHistoryArea = document.getElementById('history-area');      

        getHistoryArea.innerHTML += `
        <div class="mt-6 text-base py-4 w-[70%] m-auto p-5 border-2 rounded-lg">
                        <div class="font-semibold text-lg text-black">${getInputField} taka Donate for Flood Relief in Feni,Bangladesh</div>
                        <div class=" font-normal text-sm text-gray-400">Date: ${Date()}</div>

                    </div>   
    `
    
        
        
    })
    
    
}) 

// // section 3 
let donateAmountS3 = 0;
const donateBtnS3 = document.getElementById('donate-btn-s3')
donateBtnS3.addEventListener('click',function donatNowS2() {
    const getInputField = callInputValue('input-field-s3')
    const getDonateValue = callDonateValue('donate-amount-s3')
    


    const getAvailableBalance = parseFloat(document.getElementById('available-balance').innerText);

    if (getInputField <= getAvailableBalance && getInputField > 0) {

        donateAmountS3 = donateAmountS3 + getInputField;

        getDonateValue.innerText = donateAmountS3;

        
        const newBalance = getAvailableBalance - getInputField;
        document.getElementById('available-balance').innerText = newBalance;
        alert("Succesfully Donate Money")

    }
    else if (getInputField <= 0) {
        alert("Please enter a valid amount")
    }
    else{
        alert("Please enter a valid amount")
    }
    
    const history = document.getElementById('history-tab');
    history.addEventListener('click', function () {
        
        const getHistoryArea = document.getElementById('history-area');      
    
        getHistoryArea.innerHTML += `
        <div class="mt-6 text-base py-4 w-[70%] m-auto p-5 border-2 rounded-lg">
                        <div class="font-semibold text-lg text-black">${getInputField} taka Aid for Injured in the quota movement</div>
                        <div class=" font-normal text-sm text-gray-400">Date: ${Date()}</div>
    
                    </div>   
    `
    
        
        
    })


})



