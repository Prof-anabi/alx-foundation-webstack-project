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

/*======== scroll reveal ========*/
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.main-banner-content, .single-featured-box .icon, .service-items h3, .download-banner-content h1, .testimonies h1, .newsletter h1', { origin: 'top' });
ScrollReveal().reveal('.single-featured-box p, .service-items, .testimonies p, .newsletter p', { origin: 'bottom' });
ScrollReveal().reveal('.main-banner-content h1, single-featured-box h3, .service-items img, .download-banner-content p ', { origin: 'left' });
ScrollReveal().reveal('.main-banner-content p, .service-items p, .download-banner-content a', { origin: 'right' });