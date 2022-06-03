$(function () {
  $(".task_submit").on("click", (e) => {
    const text = $(".task_value").val();
    if (text) {
      const $item = $(
        '<li><label><input class="task_checkbox" type="checkbox"> ' +
          text +
          "</label></li>"
      );
      $("#table").append($item);
      $(".task_value").val("");
    }
  });

  $("#table").on("change", ".task_checkbox", (e) => {
    let progress = 0;
    const check_count = $(".task_checkbox:checked").length;
    if (check_count) {
      progress = check_count * 10;
      if (progress > 100) progress = 100;
    }

    $(".progress-bar")
      .attr({
        style: "width:" + progress + "%;",
        class: "progress-bar"
      })
      .html(progress + "%");

    if (progress >= 100) {
      $(".status").html('状態：<span style="color:red">進化</span>');
      $("#image").attr("src", "716442549jpg");
    }
  });

  $(".progress-bar")
    .attr({
      style: "width:0%;",
      class: "progress-bar"
    })
    .html("0%");
});
