$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var email = $("input#email");
  var firstName = $("input#firstName");
  var lastName = $("input#lastName");
  var password = $("input#password");
  var bio = $("input#bio");
  var location = $("option#location");
  var linkedIn = $("input#linkedIn");
  var facebook = $("input#facebook");
  var website = $("input#website");
  var employer = $("input#employer");
  var twitter = $("input#twitter");
  var skillsAccounting = $("input#skillsAccounting");
  var skillsEngineering = $("input#skillsEngineering");
  var skillsEventPlanning = $("input#skillsEventPlanning");
  var skillsGraphicDesign = $("input#skillsGraphicDesign");
  var skillsPhotography = $("input#skillsPhotography");
  var skillsProjectManagement = $("input#skillsProjectManagement");
  var skillsWebDevelopment = $("input#skillsWebDevelopment");
  var skillsWriting = $("input#skillsWriting");
  var skillsGroceryPickup = $("input#skillsGroceryPickup");
  var skillsHomeHealthcare = $("input#skillsHomeHealthcare");
  var skillsFurnitureMoving = $("input#skillsFurnitureMoving");
  var skillsLandscaping = $("input#skillsLandscaping");
  var skillsPlumbing = $("input#skillsPlumbing");
  var skillsGeneralRepair = $("input#skillsGeneralRepair");
  var skillsTransportation = $("input#skillsTransportation");
  var termsofuse = $("input#termsofuse").val().trim();
  var radioVolunteer = $("#radioVolunteer").val();
  var radioMember = $("#radioMember").val();

  function check() {
    if (radioVolunteer.checked = "on"
  }
  console.log(termsofuse);
  console.log(radioVolunteer);
  console.log(radioMember);

//   if skillsAccounting.checked
//   //  function check() {

// // radiobtn.checked = true;

//   radiobtn.checked = true
//   can we just set the val or need function? 
//  function check() {
//   document.getElementById("red");
// }
// function uncheck() {
//   document.getElementById("red").checked = false;
// }
// });

//   $("input[name='radio']").click(function() {
//     $('input#bio').text('Volunteer Bio');
//     $('input#userSkills').text('Skills to Volunteer');

//     if(this.checked){
//      $(this).next().text('Member Bio');
//      $(this).next().text('Skills Required for Projects');

//     }
// });
  //need to add type, and more for enforced things, 
//when empty, pop out message for error, missing categories
//toggle for bio or for projects interest + add volunteer or member to words that say bio 


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: email.val().trim(),
      password: password.val().trim(),
      firstName: firstName.val().trim(),
      lastName: lastName.val().trim(),
      bio: bio.val().trim(),
      location: location.val(),
      linkedIn: linkedIn.val().trim(),
      facebook: facebook.val().trim(),
      website: website.val().trim(),
      employer: employer.val().trim(),
      twitter: twitter.val().trim(),
      skillsAccounting: skillsAccounting.val().trim(),
      skillsEngineering: skillsEngineering.val().trim(),
      skillsEventPlanning: skillsEventPlanning.val().trim(),
      skillsGraphicDesign: skillsGraphicDesign.val().trim(),
      skillsPhotography: skillsPhotography.val().trim(),
      skillsProjectManagement: skillsProjectManagement.val().trim(),
      skillsWebDevelopment: skillsWebDevelopment.val().trim(),
      skillsWriting: skillsWriting.val().trim(),
      skillsGroceryPickup: skillsGroceryPickup.val().trim(),
      skillsHomeHealthcare: skillsHomeHealthcare.val().trim(),
      skillsFurnitureMoving: skillsFurnitureMoving.val().trim(),
      skillsLandscaping: skillsLandscaping.val().trim(),
      skillsPlumbing: skillsPlumbing.val().trim(),
      skillsGeneralRepair: skillsGeneralRepair.val().trim(),
      skillsTransportation: skillsTransportation.val().trim(),
    };

console.log(userData)



    if (!userData.email || !userData.password || !userData.termsofuse || !userData.location) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });


  // Does a post to the signup route. If successful, we are redirected to the members page
  //add if here for type!
  // Otherwise we log any errors


  function signUpUser(email, password) {
    $.post("/api/clientsignup", {
      email: email,
      password: password
    })
      .then(function(data) {

        window.location.replace("/myPosts");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
