// *****************************************************************
// sign IN or sign UP
// *****************************************************************

var logSwitch = true;

$("#loginBtn").on("click", function() {
  console.log("button hit");
  if (logSwitch) {
    window.location = "./api/login";
    loginSwitch = {
      tf: true
    };
    console.log("login loginSwitch: ", loginSwitch);
    $.ajax("/api/login/", {
        method: "POST",
        data: loginSwitch
      }).then(function() {
        console.log("fired here");
    });
    logSwitch = false;
  } else {
    window.location = "./api/signup";
    loginSwitch = {
      tf: false
    };
    console.log("signup loginSwitch: ", loginSwitch);
    $.ajax("/api/signup/", {
        method: "POST",
        data: loginSwitch
      }).then(function() {
        console.log("fired signup");
    });
    logSwitch = true;
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
  $.ajax("/api/signup" + name, {
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
  $.ajax("/api/login" + name, {
    method: "POST",
    data: {
      email: email,
      password: password
    }
  }).then(function() {
    location.reload();
  });
});
