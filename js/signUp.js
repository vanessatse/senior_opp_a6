$(document).ready(function() {
  $('#submitBtn').click(function() {
    if (validateForm())
      $('#signUpForm').submit();
  });
  $('#clearBtn').click(function() {
    document.getElementById("signUpForm").reset();
  });
  $('#homeBtn').click(function() {
   location.href = "index.html";
  });

  function validateForm() {
    return true;
  }

  function isValidEmail() {
    var email = $("#email").val();
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  function isValidPass() {
  }
});