var checkList = $("fieldset:nth-of-type(2) input[type='checkbox']");
//全选
$("#all").change(function () {
  $("#reverse").prop("checked", false);
  $("#notall").prop("checked", false);
  if (this.checked) {
    checkList.prop("checked", true);
  } else {
    checkList.prop("checked", false);
  }
});
//全不选
$("#notall").change(function () {
  checkList.prop("checked", false);
  $("#all").prop("checked", false);
  $("#reverse").prop("checked", false);
})
//反选
$("#reverse").change(function () {
  $("#all").prop("checked", false);
  $("#notall").prop("checked", false);
  checkList.each(function () {
    $(this).prop("checked", !$(this).prop("checked"));
  });
});