

const historyTab = document.getElementById('history-tab');
historyTab.addEventListener('click', function(){

    
    document.getElementById('history-area').classList.remove('hidden');
    document.getElementById('donation-area').classList.add('hidden');
    document.getElementById('history-tab').classList.remove('bg-white');
    document.getElementById('donation-tab').classList.add('bg-white');
    document.getElementById('history-tab').classList.add('bg-[#B4F461]');
    document.getElementById('history-tab').classList.add('hover:bg-[#B4F461]');
    document.getElementById('history-tab').classList.add('border-[#B4F461]');
    document.getElementById('donation-tab').classList.remove('border-[#B4F461]');
    document.getElementById('donation-tab').classList.add('border-gray-300');
    document.getElementById('history-tab').classList.add('hover:border-[#B4F461]');
    
    

})
const donationTab = document.getElementById('donation-tab');
donationTab.addEventListener('click', function(){
 
    
    document.getElementById('history-area').classList.add('hidden');
    document.getElementById('donation-area').classList.remove('hidden');
    document.getElementById('donation-tab').classList.add('bg-[#B4F461]');
    document.getElementById('history-tab').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-tab').classList.remove('bg-white');
    document.getElementById('donation-tab').classList.add('bg-[#B4F461]');
    document.getElementById('history-tab').classList.remove('border-[#B4F461]');
    document.getElementById('donation-tab').classList.add('hover:bg-[#B4F461]');
    document.getElementById('donation-tab').classList.add('hover:border-[#B4F461]');
    document.getElementById('donation-tab').classList.add('border-[#B4F461]');
    document.getElementById('history-tab').classList.add('bg-white');

   
})
