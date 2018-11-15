// *****************************************************************
// sign IN or sign UP
// *****************************************************************

var logSwitch;
// var button = $("#loginBtn").attr("data-status");
// console.log("button", button);

$("#loginBtn").on("click", function(event) {
  console.log("logSwitch", logSwitch);
  // logSwitch = localStorage.getItem("logSwitch");
  logSwitch = false;
  //window.location.assign("../api/login");
  // $("#loginBtn").html("SIGN UP");
  // $("#isMember").removeClass("hide");
  // $("#isMember").addClass("show");
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
    location.href = "/api/login"
  });
  // $("#isMember").removeClass("show");
  // $("#isMember").addClass("hide");
})

$("#signupBtn").on("click", function(event) {
  logSwitch = true;
  // window.location.assign("../api/signup");
  // $("#isMember").removeClass("show");
  // $("#isMember").addClass("hide");
  var loginSwitch = {
    tf: false
  };
  $.ajax("/api/signup", {
    method: "POST",
    data: loginSwitch
  }).then(function(data) {
    console.log("fired signup", data);
    location.href = "/api/signup"
  });
  console.log("signup loginSwitch: ", logSwitch);
  // $("#isMember").removeClass("hide");
  // $("#isMember").addClass("show");
});

// $("#signUp").on("click", function(event) {
//   event.preventDefault();
//   var name = $("#nameUp").val();
//   var email = $("#emailUp").val();
//   var password = $("#passwordUp").val();
//   console.log("name: ", name);
//   console.log("email: ", email);
//   console.log("password: ", password);
//   $.ajax("/api/signup" + name, {
//     method: "PUT",
//     data: {
//       name: name,
//       email: email,
//       password: password
//     }
//   }).then(function() {
//     // location.reload();
//     // send them to their wishlist
//   });
// });

// $("#signIn").on("click", function(event) {
//   event.preventDefault();
//   var email = $("#emailIn").val();
//   var password = $("#passwordIn").val();
//   console.log("email: ", email);
//   console.log("password: ", password);
//   $.ajax("/api/login" + name, {
//     method: "POST",
//     data: {
//       email: email,
//       password: password
//     }
//   }).then(function() {
//     // location.reload();
//   });
// });

// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// $(".create-form").on("submit", function(event) {
//   // Make sure to preventDefault on a submit event.
//   event.preventDefault();

//   var newWishList = {
//     item: $("#item").val(),
//     url: $("#url").val(),
//     category: $("#category").val(),
//     price: $("#price").val(),
//     comments: $("#comments").val()
//   };
  
//   // Send the POST request.
//   $.ajax("/api/gifts/", {
//     type: "POST",
//     data: newWishList
//   }).then(function() {
//     // Reload the page to get the updated list
//     location.reload();
//   });
// });

// $(".delete").on("click", function() {
//   var id = $(this)
//     .parent()
//     .attr("data-id");
//     // var id = $(this).data("id");
//     // console.log("this has been clicked")
    
//   // Send the DELETE request.
//   $.ajax("/api/gifts/" + id, {
//     type: "DELETE"
//   }).then(function() {
//     // Reload the page to get the updated list
//     location.reload();
//   });
// });

// $(".edit").on("click", function() {
//   $("#divemail").hide();
//   $("#divemailinput").hide();
//   $("#divno").hide();
//   $("#divnoinput").hide();
//   $.ajax("/api/gifts/", {
//     type: "PUT",
//     data: gifts
//   }).then(function() {
//     // Reload the page to get the updated list
//     location.reload();
//   });
// });

// function handlePostEdit() {
//   var currentWish = $(this)
//     .parent()
//     .parent()
//     .data("/api/gifts");
//   window.location.href = "/api/gifts?gifts_id=" + currentWish.id;
// }

// The API object contains methods for each kind of request we'll make
// var API = {
  //   saveExample: function(example) {
    //     return $.ajax({
      //       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/gifts/",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
  //     return $.ajax({
//       url: "/api/gifts",
//       type: "GET"
//     });
//   },
//   delete: function(id) {
  //     return $.ajax({
//       url: "api/gifts/" + id,
//       type: "DELETE"
//     });
//   }
// };

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
