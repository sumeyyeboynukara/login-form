$('.login-form input').focusout(function() {
    if($(this).val() !== "") {
        $(this).parent().find('span').css({
            "top": "-1.25rem",
        })
    }
    else {
        $(this).parent().find('span').css({
            "top": "0",
        })
    }
});

$('.login-form input').focus(function() {
    if($(this).val() !== "") {
        $(this).parent().find('span').css({
            "top": "-1.25rem",
        })
    }
    else {
        $(this).parent().find('span').css({
            "top": "-1.25rem",
        })
    }
});

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.form1.text.focus();
  
      return true;
  
    } else {
  
      alert("Lütfen Mail Adresinizi Kontrol Edin");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }

// PASSWORD FORM

$('.password-form input').focusout(function() {
    if($(this).val() !== "") {
        $(this).parent().find('span').css({
            "top": "-1.25rem",
        })
    }
    else {
        $(this).parent().find('span').css({
            "top": "0",
        })
    }
});

$('.password-form input').focus(function() {
    if($(this).val() !== "") {
        $(this).parent().find('span').css({
            "top": "-1.25rem",
        })
    }
    else {
        $(this).parent().find('span').css({
            "top": "-1.25rem",
        })
    }
});