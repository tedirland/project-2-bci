$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and author select
    var bodyInput = $("#body");
    var titleInput = $("#title");
   
        // This function figures out which post we want to delete and then calls deletePost
        function handlePostDelete() {
          var currentPost = $(this)
            .parent()
            .parent()
            .data("post");
          deletePost(currentPost.id);
        }

    $(document).on("click", "button.delete", handlePostDelete);
        // This function does an API call to delete posts
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    })
      .then(function() {
        getPosts(postCategorySelect.val());
      });
  }
     
  <div class="post">		
          <div class="col-sm-2 col-md-6">
            <p>Title:</p>
            <p>Content:</p>
            <p>Created On:</p>
            <p>Member:<a> </a></p>   
          </div>
          <div class="col-sm-2 col-md-offset-4">
            <br>
            <button type="submit">Complete!</button>
            <br>
            <br>
            <a href="#" class="btn btn-info col-md-offset-3" id="trash">
              <span class="glyphicon glyphicon-trash"></span> 
            </a>
          </div>
      </div>
      

  });
  