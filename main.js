document.getElementById('contact-form').addEventListener('submit', function(event) {
    
    event.preventDefault();
    
 
    if (validateForm()) {
        this.submit();
    }
});


function validateForm() {
    
    var firstName = document.getElementById('first-name').value.trim();
    var lastName = document.getElementById('last-name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var inquiry = document.getElementById('inquiry').value.trim();

   
    if (firstName === '') {
        showError('Please enter your first name', 'first-name');
        return false;
    } else {
        clearError('first-name');
    }


    if (lastName === '') {
        showError('Please enter your last name', 'last-name');
        return false;
    } else {
        clearError('last-name');
    }

  
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address', 'email');
        return false;
    } else {
        clearError('email');
    }

 
    if (!isValidPhone(phone)) {
        showError('Please enter a valid phone number', 'phone');
        return false;
    } else {
        clearError('phone');
    }

   
    if (inquiry === '') {
        showError('Please select the nature of your inquiry', 'inquiry');
        return false;
    } else {
        clearError('inquiry');
    }

  
    return true;
}


function isValidEmail(email) {
    var atIndex = email.indexOf('@');
    var dotIndex = email.lastIndexOf('.');
    
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
        return false;
    }
    
    return true;
}

function isValidPhone(phone) {
    if (phone.length < 10 || isNaN(phone)) {
        return false;
    }
    
    return true;
}

function showError(message, inputId) {
    var formGroup = document.getElementById(inputId).closest('.form-group');
    var errorSpan = formGroup.querySelector('.error-message');
    if (!errorSpan) {
        errorSpan = document.createElement('div');
        errorSpan.className = 'error-message';
        errorSpan.innerText = message;
        formGroup.appendChild(errorSpan);
    } else {
        errorSpan.innerText = message;
    }
}

function clearError(inputId) {
    var formGroup = document.getElementById(inputId).closest('.form-group');
    var errorSpan = formGroup.querySelector('.error-message');
    if (errorSpan) {
        formGroup.removeChild(errorSpan);
    }
}
