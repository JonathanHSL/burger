$(document).ready(function() {
    
  $(".devour-form").submit(function(event) {
    event.preventDefault();

    var burger_id = $(this).children("[name=burger_id]").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
        console.log(data)
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});
