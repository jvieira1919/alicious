$(document).ready(() => {
  $.ajax("/burgers", {
    type: "GET",
  }).then((data) => {
    console.log(data);
    const burgers = data.burgers;
    const len = burgers.length;

    for (let i = 0; i < len; i++) {
      let idBtn = burgers[i].id;
      let text = "Devour";
      let btnn = "btn-primary";
      let cls = "devour";
      let pEl = $("#devour");

      if (burgers[i].devoured) {
        text = "Delete";
        btnn = "btn-danger";
        cls = "delete";
        pEl = $("#deleted");
      }

      //const newEl = <li>burgers[i].burger_name + burgers[i].devoured<button type='submit' class='btn + "btnn"' data-id='"+burgers[i].id+"'> "+text+"</button></li>
      const newEl = $("<li>");
      newEl.text(burgers[i].burger_name);

      const btnEl = $("<button>");
      btnEl.addClass("btn " + btnn + " " + cls);
      btnEl.data("id", idBtn);
      btnEl.text(text);

      newEl.append(btnEl);
      pEl.append(newEl);
    }
  });

  $(document).on("click", ".devour", function (e) {
    e.preventDefault();
    //console.log("hello world");

    const burgerId = $(this).data("id");

    $.ajax({
      method: "PUT",
      url: "/burgers/" + burgerId,
      data: {
        devoured: 1,
      },
    }).then((data) => {
      location.reload();
    });
  });

  $(document).on("click", ".delete", function (e) {
    e.preventDefault();

    const burgerId = $(this).data("id");
console.log(burgerId);
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
      burger_name: $("#burger-name").val(),
      devoured: 0,
    };
    console.log(newBurger);
    $.ajax({
      method: "POST",
      url: "/burgers",
      data: JSON.stringify(newBurger),
      dataType: "json",
      contentType: "application/json",
    }).then(() => {
      location.reload();
    });
  });
});
