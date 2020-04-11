$(document).ready(function() {
    // Getting references to the name input and author container, as well as the table body
    var postContainer = $(".allPost-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("click", ".delete-post", handleDeleteButtonPress);
    $(document).on("click", ".delete-post", handleDeleteButtonPress);

      // onload Get all posts for a user
      
      getPosts();
      createPostDiv

  function getPosts() {
    $.get("/api/posts", function(data) {
      }
      renderAuthorList(data);
    });
  }

    // Adding an event listener for when the form is submitted
    $(document).on("click", "button.delete", handlePostDelete);
    // This function figures out which post we want to delete and then calls deletePost
        function handlePostDelete() {
          var currentPost = $(this)
            .parent()
            .parent()
            .data("post");
          deletePost(currentPost.id);
        }  

    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function (req, res) {
      db.Post.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (dbPost) {
        res.json(dbPost);
      });
    });
      // Function for creating a new list row for authors
  function createPostDiv(postData) {
    console.log(postData);
    var newPost = $("<div class=""post"">");
    newPost.data("post", postData);
    newPost.append("<div class=""col-sm-2 col-md-6"">");
    newPost.append("<p>Title: " + postData.title + "</p>");
    newPost.append("<p>Content: " + postData.content +"</p>");
    newPost.append("<p>Created On: " + postData.createdOn + "</p>");
    newPost.append("</div>");
    newPost.append("<div class=""col-sm-2 col-md-offset-2"">");
    newPost.append("<a href=""#""" "class=""btn btn-info col-md-offset-11 delete-post" "id"=""trash"">");
    newPost.append("<span class=""glyphicon glyphicon-trash""></span>")</a></div></div>");
    return newPost;
  }
 

  
    // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
    function getPostData(id, type) {
          ]
      $.get(queryUrl, function(data) {
        if (data) {
          console.log(data.AuthorId || data.id);
          // If this post exists, prefill our cms forms with its data
          titleInput.val(data.title);
          bodyInput.val(data.body);
          authorId = data.AuthorId || data.id;

        }
      });
    }

  });
  