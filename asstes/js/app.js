let partners = document.getElementById('partners')
let imgs = document.querySelectorAll('.logos img')




/* Send Message  */
let submit = document.getElementById('submit')
let  namee = document.getElementById('name').value
let phone = document.getElementById('phone').value
let email = document.getElementById('email').value
let message = document.getElementById('message').value

function sendMessage(data) {
    fetch('http://weqwasdasfasdasd.000.pe/api/SendMessage', {
        method: 'POST',   
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data), 
    })
    .then(response => response.json()) 
    .then(result => {
        console.log('Success:', result); 
    })
    .catch(error => {
        console.error('Error:', error); 
    });
}

const data = {
    name: namee + phone,
    message: message,
    email: email
};

submit.onclick = function() { 
    event.preventDefault();
    sendMessage(data);

}    
