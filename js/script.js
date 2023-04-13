// List 1
$("#items-1").sortable({
  group: "list",
  animation: 200,
  ghostClass: "ghost",
  onSort: reportActivity,
});

// List 2
$("#items-2").sortable({
  group: "list",
  animation: 200,
  ghostClass: "ghost",
  onSort: reportActivity,
});

// Arrays of "data-id"
$("#get-order").click(function () {
  var sort1 = $("#items-1").sortable("toArray");
  console.log(sort1);
  var sort2 = $("#items-2").sortable("toArray");
  console.log(sort2);
});

// Report when the sort order has changed
function reportActivity() {
  console.log("The sort order has changed");
}
