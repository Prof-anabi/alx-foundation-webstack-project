function sendMail(){
    var params = {
        name: document.getElementById('name').value ,
        email: document.getElementById('email').value ,
        number: document.getElementById('number').value ,
        subject: document.getElementById('subject').value ,
        message: document.getElementById('message').value ,
    };
    
    const serviceID = "service_7d8z87j";
    const templateID = "template_qkjex8j"

    emailjs.send(serviceID,templateID, params)
    .then(
        res =>{
            name: document.getElementById('name').value = "";
            email: document.getElementById('email').value = "";
            number: document.getElementById('number').value ="";
            subject: document.getElementById('subject').value ="";
            message: document.getElementById('message').value ="";
            console.log(res);
            alert("Your message was sent successfuly.");
        }
    )
    .catch((err) => console.log(err));
}

function sendNewsletter(){
    var emailAddress = {
        email: document.getElementById('news-box').value ,
    };
    
    const serviceIDns = "service_k82dotg";
    const templateIDns = "template_4wkrikn"

    emailjs.send(serviceIDns,templateIDns, emailAddress)
    .then(
        res =>{
            name: document.getElementById('news-box').value = "";
            
            console.log(res);
            alert("Thank your for subscribing to our newsletter.");
        }
    )
    .catch((err) => console.log(err));
}

