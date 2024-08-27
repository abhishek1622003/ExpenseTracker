const exptab=document.getElementById('expenseTable');
const form=document.getElementById('form1');
const explist=document.getElementById('expenseList');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const desc=document.getElementById('input1').value;
    const cat=document.getElementById('category').value;
    const amount=document.getElementById('amount').value;

    if(desc && cat && !isNaN(amount)){
        const newR=document.createElement('tr');
        newR.innerHTML=`<td class="border border-black pl-3 py-1">${desc}</td>
                    <td class="border border-black pl-3 py-1">${cat}</td>
                    <td class="border border-black pl-3 py-1">${amount}</td>`;
        explist.appendChild(newR);
    }



})