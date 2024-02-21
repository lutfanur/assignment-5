const allBtn = document.getElementsByClassName('all-btn');
// console.log(allBtn);
let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const seatCount = getConvertedValue('seat-count');
        document.getElementById('seat-count').innerText = seatCount + 1;

        const totalSeat = getConvertedValue('total-seat');
        document.getElementById('total-seat').innerText = totalSeat - 1;



        const seatName = event.target.innerText;
        const className = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[5].childNodes[3].innerText;
        const price = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[5].childNodes[5].innerText;
        console.log();


        // const totalSeat = document.getElementById('total-seat').innerText;

        // document.getElementById('total-seat').innerText = totalSeat - 1;
        const seatContainer = document.getElementById('seat-container')

        const seatBooking = document.getElementById('seat-booking');


        const div = document.createElement('div');
        div.classList.add('flex');

        div.classList.add('flex-row');
        div.classList.add('gap-24');


        div.classList.add('items-center');


        const p = document.createElement('p');
        p.innerText = seatName;
        const p1 = document.createElement('p');
        p1.innerText = className;
        const p2 = document.createElement('p');
        p2.innerText = price;

        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);

        seatBooking.appendChild(div);

        updateTotalPrice(price);
        updateGrandTotal();


        // const totalPrice = document.getElementById('total-price').innerText;



    })
}

function updateGrandTotal(value) {
    const totalPrice = getConvertedValue('total-price');
    if (value == undefined) {
        document.getElementById('grand-total').innerText = totalPrice;
        // console.log('aci');
    }
    else {
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode == 'new15') {
            const discounted = totalPrice * 0.15;
            document.getElementById('grand-total').innerText = totalPrice - discounted;
        }
        else if (couponCode == 'couple20') {
            const discounted = totalPrice * 0.2;
            document.getElementById('grand-total').innerText = totalPrice - discounted;
        }
        else {
            alert('please enter a valid coupon code');
        }
    }

}






function updateTotalPrice(value) {
    // console.log(value);
    const totalPrice = getConvertedValue('total-price');
    const sum = totalPrice + parseInt(value);
    document.getElementById('total-price').innerText = sum;


}

function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice
}