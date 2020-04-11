$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var email = $("input#email");
  var firstName = $("input#firstName");
  var lastName = $("input#lastName");
  var password = $("input#password");
  var bio = $("input#bio");
  var location = $("select#location");
  var linkedIn = $("input#linkedIn");
  var facebook = $("input#facebook");
  var website = $("input#website");
  var employer = $("input#employer");
  var twitter = $("input#twitter");
  var skillsAccounting = $("input#skillsAccounting")[0];
  var skillsEngineering = $("input#skillsEngineering")[0];
  var skillsEventPlanning = $("input#skillsEventPlanning")[0];
  var skillsGraphicDesign = $("input#skillsGraphicDesign")[0];
  var skillsPhotography = $("input#skillsPhotography")[0];
  var skillsProjectManagement = $("input#skillsProjectManagement")[0];
  var skillsWebDevelopment = $("input#skillsWebDevelopment")[0];
  var skillsWriting = $("input#skillsWriting")[0];
  var skillsGroceryPickup = $("input#skillsGroceryPickup")[0];
  var skillsHomeHealthcare = $("input#skillsHomeHealthcare")[0];
  var skillsFurnitureMoving = $("input#skillsFurnitureMoving")[0];
  var skillsLandscaping = $("input#skillsLandscaping")[0];
  var skillsPlumbing = $("input#skillsPlumbing")[0];
  var skillsGeneralRepair = $("input#skillsGeneralRepair")[0];
  var skillsTransportation = $("input#skillsTransportation")[0];
  var termsofuse = $("input#termsofuse")[0];
  var volunteer = $("input#radioVolunteer")[0];
  var member = $("input#radioMember")[0];

  //change form based on member or volunteer signing up
  $('input[type=radio]').on("change", function() {
    if ($(this).val() == "volunteer") {
      $('#skills-list').show();
    } else {
      $('#skills-list').hide();
      //reset the values of checked boxes (so that members don't have skills)
    }
});

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
    skillsAccounting: skillsAccounting.checked,
    skillsEngineering: skillsEngineering.checked,
    skillsEventPlanning: skillsEventPlanning.checked,
    skillsGraphicDesign: skillsGraphicDesign.checked,
    skillsPhotography: skillsPhotography.checked,
    skillsProjectManagement: skillsProjectManagement.checked,
    skillsWebDevelopment: skillsWebDevelopment.checked,
    skillsWriting: skillsWriting.checked,
    skillsGroceryPickup: skillsGroceryPickup.checked,
    skillsHomeHealthcare: skillsHomeHealthcare.checked,
    skillsFurnitureMoving: skillsFurnitureMoving.checked,
    skillsLandscaping: skillsLandscaping.checked,
    skillsPlumbing: skillsPlumbing.checked,
    skillsGeneralRepair: skillsGeneralRepair.checked,
    skillsTransportation: skillsTransportation.checked,
  };

  if (!userData.firstName || !userData.lastName || !userData.email || !userData.password || !userData.location ||!userData.bio || (!volunteer.checked && !member.checked) || !termsofuse.checked) {
    alert("Please fill out all starred fields.");
    //try to reload here or refresh the page. Maybe reset the obj also?
    return;
  } 
  // If we have the above fields not empty, run the needed User function for a client or volunteer
        if (volunteer.checked) {
          console.log(userData);
          signUpVolunteerUser(userData);
        } else {
          signUpClientUser(userData);
        }
        // resetObj();
});

function signUpVolunteerUser(userData) {
  console.log(userData);
  $.post("/api/volunteers", userData)
    .then(function(data) {
      window.location.replace("/myProjects");
      // If there's an error, handle it by throwing up a bootstrap alert
    })
    .catch(handleLoginErr);
}

function signUpClientUser(userData) {
  $.post("/api/clients", userData)
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

function resetObj(){
  email.val("");
  password.val("");
  firstName.val("");
  lastName.val("");
  bio.val("");
  location.val("");
  linkedIn.val("");
  facebook.val("");
  website.val("");
  employer.val("");
  twitter.val("");
  skillsAccounting.checked = false;
  skillsEngineering.checked = false;
  skillsEventPlanning.checked = false;
  skillsGraphicDesign.checked = false;
  skillsPhotography.checked = false;
  skillsProjectManagement.checked = false;
  skillsWebDevelopment.checked = false;
  skillsWriting.checked = false;
  skillsGroceryPickup.checked = false;
  skillsHomeHealthcare.checked = false;
  skillsFurnitureMoving.checked = false;
  skillsLandscaping.checked = false;
  skillsPlumbing.checked = false;
  skillsGeneralRepair.checked = false;
  skillsTransportation.checked = false;
}
});
