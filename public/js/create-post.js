$(document).ready(function() {
    // Getting references to our form and input
    var createPostForm = $("form.createPost");
    var title = $("input#title");
    var content = $("textarea#content");
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
    var id;
    
  
  createPostForm.on("submit", function(event) {
    event.preventDefault();
    var postData = {
      title: title.val().trim(),
      content: content.val().trim(),
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
      id: id
    };

    if (!postData.title || !postData.content) {
      alert("Please fill out the title and content fields.");
      //try to reload here or refresh the page. Maybe reset the obj also?
      return;
    }
    // If we have an email and password, run the signUpUser function
    console.log(postData);
    createPost(postData);
    resetObj();  
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
      //figure out how to validate id once logged in - Luke seemed confident in knowing how to check
  
  function createPost(postData) {
    console.log(postData);
    $.post("/api/posts", postData)
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
    title.val("");
    content.val("");
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
  