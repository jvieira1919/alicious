$(document).ready(() => {
    
    $.ajax("/burgers", {
      type: "GET",
    }).then((data) => {
      const burgers = data.burgers;
      const len = burgers.length;
  
      for (let i = 0; i < len; i++) {
        const type = "Devour";
        const el = $("#devour");
        const btn = "btn-primary";
  
        if (burgers[i].deleted) {
          const type = "Delete";
          const el = $("#deleted");
          const btn = "btn-danger";
        }
  
        const newLi = $("<li>")
          
  
        el.append(newLi);
      }
    });
  
    $(document).on("click", ".devour", (e) => {
      e.preventDefault();
  
      const burgerId = $(this).data("id");
  
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burgerId,
        dataType: "json",
        contentType: "application/json",
      }).then((data) => {
        location.reload();
      });
    });
  
    $(document).on("click", ".delete", (e) => {
      e.preventDefault();
  
      const burgerId = $(this).data("id");
  
      $.ajax({
        method: "DELETE",
        url: "/burgers/" + burgerId,
      }).then((data) => {
        location.reload();
      });
    });
  
    $(document).on("submit", ".add-burger", (e) => {
      e.preventDefault();
  
      const newBurger = {
        burgerName: $("#burger-name").val(),
      };
  
      $.ajax({
        method: "POST",
        data: JSON.stringify(newBurger),
        dataType: "json",
        contentType: "application/json",
      }).then(() => {
        location.reload();
      });
    });
  });
  