$(document).ready(function() {
  // Getting references to our form and inputs
  var email = $("input#email");
  var password = $("input#password");
  var email2 = $("input#email2");
  var password2 = $("input#password2");
  var volunteer = $("input#radioVolunteer")[0];
  var member = $("input#radioMember")[0];
  var loginMemberForm = $("form#memberForm");
  var loginVolunteerForm = $("form#volunteerForm");

  $('input[type=radio]').on("change", function() {
    if ($(this).val() == "member") {
      $('#showMember').show();
      $('#showVolunteer').hide();

    } else {
      $('#showVolunteer').show();
      $('#showMember').hide();
    }
});

  // When the form is submitted, we validate there's an email and password entered
  loginMemberForm.on("submit", function(event) {
    console.log("hit here")
    event.preventDefault();
    var loginData = {
      email: email2.val().trim(),
      password: password2.val().trim(),
    };

    if (!loginData.email || !loginData.password || (!volunteer.checked && !member.checked)) {
      alert("Please fill out all fields.");
      return;
    }
    loginClientUser(loginData.email, loginData.password);
          
});

// When the form is submitted, we validate there's an email and password entered
loginVolunteerForm.on("submit", function(event) {
  console.log("hit here again")
  event.preventDefault();
  var loginData = {
    email: email.val().trim(),
    password: password.val().trim(),
  };

  if (!loginData.email || !loginData.password || (!volunteer.checked && !member.checked)) {
    alert("Please fill out all fields.");
    return;
  }

          loginVolunteerUser(loginData.email, loginData.password);
});

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginVolunteerUser(email, password) {
    $.post("/api/volunteerlogin",  {
      email: email,
      password: password
    })
    .then(function() {
        window.location.replace("/myProjects");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });      
      };

      function loginClientUser(email, password) {
        $.post("/api/clientlogin",  {
          email: email,
          password: password
        })
        .then(function() {
            window.location.replace("/myPosts");
            // If there's an error, log the error
          })
          .catch(function(err) {
            console.log(err);
          });

  }
});
