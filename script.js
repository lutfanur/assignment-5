const allBtn = document.getElementsByClassName('all-btn');
console.log(allBtn.classlist);
let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        setInnerText('seat-count', count)


        const seatBooking = document.getElementById('seat-booking');

        const className = e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[5].childNodes[3].innerText;

        const price = e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[5].childNodes[5].innerText;

        const li = document.createElement('li')

        
        // setInnerText('seat-booking)

        const p = document.createElement('p');
        p.innerText = btn ;
        const p1 = document.createElement('p');
        p1.innerText = className;
        const p2 = document.createElement('p');
        p2.innerText = price;

        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);


        seatBooking.appendChild(li);

        // seatContainer.appendChild(seatBooking);

        const totalPrice = document.getElementById('total-price').innerText;



    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}