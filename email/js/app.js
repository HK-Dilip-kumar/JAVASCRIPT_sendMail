const sendBtn=document.getElementById('sendBtn'), 
      email=document.getElementById('email'),
      subject=document.getElementById('subject'),
      message=document.getElementById('message');
      resetBtn=document.querySelector('resetBtn');
      sendEmailForm=document.getElementById('email-form')
eventListener();
function eventListener()
{
    document.addEventListener('DOMContentLoaded',appInit);

    //validating the field
    email.addEventListener('blur',validateField);
    subject.addEventListener('blur',validateField);
    message.addEventListener('blur',validateField);

    sendEmailForm.addEventListener('submit',sendEmail);
    resetBtn.addEventListener('click',resetForm);
}

function appInit()
{


}

function sendEmail(e)
{
e.preventDefault();

//showing the spinner
     // show the spinner
     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'block';

     // Show the image
     const sendEmailImg = document.createElement('img');
     sendEmailImg.src = 'img/mail.gif';
     sendEmailImg.style.display = 'block';

//hideout the spinner after 5 seconds
setTimeout(function() {
    // Hide the spinner
    spinner.style.display = 'none';

    // Show the image
    document.querySelector('#loaders').appendChild( sendEmailImg );

    // After 5 seconds, hide the image and reset the form
    setTimeout(function() {
         sendEmailForm.reset();
         sendEmailImg.remove();
    }, 5000);
}, 3000 );
}
function validateField()
{
    let errors;
    //validate the length of field
    validateLength(this)
    if(this.type==='email'){
        validateEmail(this)
    }
}
function validateLength(field)
{   
    if(field.value.length > 0)
        {
            field.style.borderBottomColor='green';
            field.classList.remove('error');
        }else{
            field.style.borderBottomColor='red';
            field.classList.add('error');
        }
}
function validateEmail(field)
{
    let emailText=field.value;
        if(emailText.indexOf('@')!==-1)
        {   
                field.style.borderBottomColor='green';
                field.classList.remove('error');
        }
        else
        {
                field.style.borderBottomColor='red';
                field.classList.add('error');
        }
}
function resetForm(e) {
    e.preventDefault();

   sendEmailForm.reset();
    // disable the send button on load
    sendBtn.disabled = true;

}