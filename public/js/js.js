// *****************************************************************
// sign IN or sign UP
// *****************************************************************

$("#loginBtn").on("click", function() {
  console.log("logSwitch", logSwitch);
  logSwitch = false;
  var loginSwitch = {
    tf: true
  };
  console.log("login loginSwitch: ", loginSwitch);
  console.log("button hit", logSwitch);

  $.ajax("/api/login/", {
    method: "POST",
    data: loginSwitch
  }).then(function(data) {
    console.log("fired here", data);
    location.href = "/api/login";
  });
});

$("#signupBtn").on("click", function() {
  logSwitch = true;
  var loginSwitch = {
    tf: false
  };
  $.ajax("/api/signup", {
    method: "POST",
    data: loginSwitch
  }).then(function(data) {
    console.log("fired signup", data);
    location.href = "/api/signup";
  });
  console.log("signup loginSwitch: ", logSwitch);
});

$("#signUp").on("click", function(event) {
  event.preventDefault();
  var name = $("#nameUp").val();
  var email = $("#emailUp").val();
  var password = $("#passwordUp").val();
  var confirmPassword = $("#passwordConfirm").val();
  console.log("name: ", name);
  console.log("email: ", email);
  console.log("password: ", password);
  console.log("confirm password: ", confirmPassword);

  $.ajax("/api/signup/" + name, {
    method: "PUT",
    data: {
      name: name,
      email: email,
      password: password
    }
  });
});

$("#signIn").on("click", function(event) {
  event.preventDefault();
  var email = $("#emailIn").val();
  var password = $("#passwordIn").val();
  console.log("email: ", email);
  console.log("password: ", password);
  $.ajax("/api/login" + name, {
    method: "POST",
    data: {
      email: email,
      password: password
    }
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


