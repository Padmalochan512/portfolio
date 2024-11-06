const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) 
{event.preventDefault();

btn.value = 'Sending...';

const serviceID = 'default_service';
const templateID = 'template_jfokbva';

  emailjs.sendForm(service_zhbnthb, template_jfokbva, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    },  (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});