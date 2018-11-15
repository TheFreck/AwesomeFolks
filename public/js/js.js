// *****************************************************************
// sign IN or sign UP
// *****************************************************************

var logSwitch;

$("#loginBtn").on("click", function(event) {
  console.log("logSwitch", logSwitch);
  logSwitch = false;
  var loginSwitch = {
    tf: true
  };
  console.log("login loginSwitch: ", loginSwitch);
  console.log("button hit", logSwitch);

  $.ajax("/api/login", {
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
  console.log("name: ", name);
  console.log("email: ", email);
  console.log("password: ", password);
  $.ajax("/api/signup" + name, {
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

// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

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

$(".delete").on("click", function() {
  console.log("CLICKED");
  var id = $(this)
    .parent()
    .attr("data-id");
  // var id = $(this).data("id");
  // console.log("this has been clicked")

  // Send the DELETE request.
  $.ajax("/api/gifts/" + id, {
    type: "DELETE"
  }).then(function() {
    // Reload the page to get the updated list
    location.reload();
  });
});

// //SEARCH
// $(".search").on("click", function() {
//   // var item = $(this)
//   //   .parent()
//   //   .attr("data-item");
//   console.log("clicked");
//   $.ajax({
//     url: "https://www.google.com/search",
//     // url: "https://www.google.com/=" + $("#item").val(),
//     type: "GET"
//   }).then(function() {
//     // Reload the page to get the updated list
//     location.reload();
//   });
// });

// $(".edit").on("click", function () {
//   $.ajax("/api/gifts/", {
//     type: "PUT",
//     data: gifts
//   }).then(function () {
//     // Reload the page to get the updated list
//     location.reload();
//   });
// });
