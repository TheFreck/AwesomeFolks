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
console.log("CLICKED")
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
// 
//   $.ajax("/api/gifts/", {
//     type: "PUT",
//     data: gifts
//   }).then(function () {
//     // Reload the page to get the updated list
//     location.reload();
//   });
// });