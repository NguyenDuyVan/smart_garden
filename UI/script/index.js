$(document).ready(function () {
  changeMode();
});

function changeMode() {
  let isChange = false;
  $("#mode-btn").click(function () {
    me = this;
    isChange = !isChange;
    if (isChange) {
      $(me).html("Thủ Công");
      $(".device-btn").each(function () {
        $(this).html("Tự động");
      });
    } else {
      $(this).html("Tự Động");
      $(".device-btn").each(function () {
        $(this).html("Bật");
      });
    }
  });
}
