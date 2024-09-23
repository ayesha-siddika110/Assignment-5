

const historyTab = document.getElementById('history-tab');
historyTab.addEventListener('click', function(){

    
    document.getElementById('history-area').classList.remove('hidden');
    document.getElementById('donation-area').classList.add('hidden');
})
const donationTab = document.getElementById('donation-tab');
donationTab.addEventListener('click', function(){
 
    
    document.getElementById('history-area').classList.add('hidden');
    document.getElementById('donation-area').classList.remove('hidden');
})
