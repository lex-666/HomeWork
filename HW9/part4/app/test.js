// На HTML - сторінці є 6 чекбоксів.Напишіть скріпт, який після того, як користувач позначив будь - які 3 чекбокси,
//     всі чекбокси робить неактивними.

$(document).ready(function() {
  let checkboxes = $(".my__check");
  checkboxes.change(function() {
    let numChecked = checkboxes.filter(":checked").length;
    if (numChecked >= 3) {
      checkboxes.not(":checked").attr("disabled", true);
    } else {
      checkboxes.not(":checked").attr("disabled", false);
    }
  });
});
