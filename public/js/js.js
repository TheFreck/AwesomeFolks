$("#signUp").on("click", function (event) {
  event.preventDefault();

  console.log("Entered add account button.")
  var newAccount = {
    name: $("#nameUp").val().trim(),
    email: $("#emailUp").val().trim(),
    account_key: $("#passwordUp").val().trim(),
    account_key2: $("#passwordConfirm").val().trim()
  };
  console.log("newAccount: ", newAccount);
  if (newAccount.account_key.length > 0 && newAccount.email.length > 0 && newAccount.account_key.length > 0 && newAccount.name.length > 0) {
    if(newAccount.account_key === newAccount.account_key2){
      $.post("/signup", newAccount, function(results) {
        console.log("login");
        window.location.href = "/";
      })
      
    } else {
      console.log("**passwords don't match**");
      $("#create-err-msg").empty("").text("**Passwords don't match**");
      console.log("password: ", newAccount.passwordUp)
    };
  } else {
    console.log("**Please fill out entire form**");
    $("#create-err-msg").empty("").text("**Please fill out entire form**");
  }
});

$("#signIn").on("click", function(event) {
  event.preventDefault();
  var user = {
    email: $("#emailIn").val().trim(),
    account_key: $("#passwordIn").val().trim()
  }

  $.post("/login", user, function(results) {
    if(results) {
      $(location).attr('href', '/index')
    }else {
      $("#account-info").modal("close");
      alert("oops something went wrong, please try again!");
    }
  });
});

$("#logout").on("click", function(event) {
  event.preventDefault();
  $.get("/logout", function(results) {
    console.log("results: ", results);
    $(location).attr("href", "/");
  });
});

// *****************************************************************
// CREATE WISH LIST
// *****************************************************************

$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newWishList = {
    item: $("#item").val(),
    url: $("#url").val(),
    category: $("#category").val(),
    price: $("#price").val(),
    comments: $("#comments").val()
  };
  // Send the POST request.
  $.ajax("/api/gifts/", {
    type: "POST",
    data: newWishList
  }).then(function() {
    // Reload the page to get the updated list
    location.reload();
  });
});

// *****************************************************************
// DELETE ITEM FROM WISH LIST
// *****************************************************************

$(".delete").on("click", function() {
  console.log("CLICKED");
  var id = $(this)
    .parent()
    .attr("data-id");

  // Send the DELETE request.
  $.ajax("/api/gifts/" + id, {
    type: "DELETE"
  }).then(function() {
    // Reload the page to get the updated list
    location.reload();
  });
});

// *****************************************************************
// VIEW FRIENDS LIST
// *****************************************************************

$(".viewFriend").on("click", function() {
  console.log("CLICKED VIEW FRIEND");
  location.href = "/api/view";
});

// *****************************************************************
// VIEW MY GIFT LIST
// *****************************************************************

$(".createRegistry").on("click", function() {
  console.log("CLICKED VIEW FRIEND");
  location.href = "/api/gifts";
});

// *****************************************************************
// EDIT ITEM ON WISH LIST
// *****************************************************************


$(".shopping").on("click", function () {
  $.ajax("/api/gifts/", {
    type: "PUT",
    data: gifts
  }).then(function () {
    // Reload the page to get the updated list
    location.reload();
  });
});


