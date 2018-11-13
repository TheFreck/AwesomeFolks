// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

// *****************************************************************
// sign IN or sign UP
// *****************************************************************

var logSwitch = false;

$("#loginBtn").on("click", function() {
  if (logSwitch) {
    logSwitch = false;
    $("#loginBtn").html("SIGN UP");
    $("#isMember").removeClass("hide");
    $("#isMember").addClass("show");
    console.log("on");
    $("#signUpPage").removeClass("show");
    $("#signUpPage").addClass("hide");
    $("#loginPage").removeClass("hide");
    $("#loginPage").addClass("show");
  } else {
    logSwitch = true;
    $("#loginBtn").html("SIGN IN");
    $("#isMember").removeClass("show");
    $("#isMember").addClass("hide");
    console.log("off");
    $("#signUpPage").removeClass("hide");
    $("#signUpPage").addClass("show");
    $("#loginPage").removeClass("show");
    $("#loginPage").addClass("hide");
  }
});

$("#signUp").on("click", function(event) {
  event.preventDefault();
  var name = $("#nameUp").val();
  var email = $("#emailUp").val();
  var password = $("#passwordUp").val();
  console.log("name: ", name);
  console.log("email: ", email);
  console.log("password: ", password);
  $.ajax("/api/sign-up", {
    method: "PUT",
    data: {
      name: name,
      email: email,
      password: password
    }
  }).then(function() {
    location.reload();
    // send them to their wishlist
  });
});

$("#signIn").on("click", function(event) {
  event.preventDefault();
  var email = $("#emailIn").val();
  var password = $("#passwordIn").val();
  console.log("email: ", email);
  console.log("password: ", password);
});
