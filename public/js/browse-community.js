
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    // Getting references to the name input and author container, as well as the table body
    var cardContainer = $(".allCards");

    // Getting existing list of Authors
    getClientsVolunteers();

    // Add event listeners to reload all if you navigate here from posts browsing
    $(document).on("click", "#viewAll", getClientsVolunteers());
    
    // Function for retrieving authors and getting them ready to be rendered to the page
    function getClientsVolunteers() {
        var rowsToAdd = [];
        $.get("/api/clients", function(data) {
          for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createUserRow(data[i]));
          }
        });
        $.get("/api/volunteers", function(data) {
            for (var i = 0; i < data.length; i++) {
              rowsToAdd.push(createUserRow(data[i]));
            }
          });
          renderCommunityList(rowsToAdd);
          nameInput.val("");
      }

    // Function for creating a new list row for authors
    function createUserRow(data) {
      console.log(data);
      var newDiv = $("<div class='card'>");
      newDiv.data("data", data);
      newDiv.append("<img src='img.jpg' alt='stockphoto' style='width:15%'">
      newDiv.append("<h2>" + data.firstName + " " + data.lastName + "</h2>");
      newDiv.append("<p>" + data.bio + "</p>");
      newDiv.append("<a href='" + data.twitter + "'><i class='fa fa-twitter'></i></a>");
      newDiv.append("<a href='" + data.linkedin + "'><i class='fa fa-linkedin'></i></a>");
      newDiv.append("<a href='" + data.facebook + "'><i class='fa fa-facebook'></i></a>");
      newDiv.append("<a href='mailto:" + data.email + "'" + "><i class='fa fa-envelope'></i></a>");
      //add skills later
      var skillsArray = [data.skillsAccounting, data.skillsEngineering, data.skillsEventPlanning, data.skillsGraphicDesign, data.skillsPhotography, data.skillsProjectManagement, data.skillsWebDevelopment, data.skillsWriting, data.skillsGroceryPickup, data.skillsHomeHealthcare, data.skillsFurnitureMoving, data.skillsLandscaping, data.skillsPlumbing, data.skillsGeneralRepair, data.skillsTransportation];
            //   function createSkillsDiv() {
            //      }
            //  }
      return newDiv;
    }
    cardContainer.append(postsToAdd);

    // A function for rendering the list of authors to the page
    function renderCommunityList(rows) {
      authorList.children().not(":last").remove();
      cardContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        authorList.prepend(rows);
      }
    }
          
  });
  