$("#sendMail").on("click", function(e){
    emailjs.init("vlbXc46zzbc0Db5N0");
// alert("test!");

const btn = document.getElementById('sendMail');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Sending...';

const serviceID = 'default_service';
const templateID = 'template_qnwy99r';

emailjs.sendForm(serviceID, templateID, this)
.then(() => {
 btn.value = 'Send Email';
 alert('Sent!');
}, (err) => {
 btn.value = 'Send Email';
 alert(JSON.stringify(err));
});
});

});