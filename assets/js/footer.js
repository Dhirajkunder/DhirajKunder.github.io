$(document).ready(function () {
  // Set up the click event for the "Information" heading
  $("#informationToggle").click(function () {
    // Toggle the visibility of the content with ID "menu-about"
    $("#menu-about").collapse("toggle");
  });

  // Set up the click event for the "My Account" heading
  $("#myAccountToggle").click(function () {
    // Toggle the visibility of the content with ID "menu-my-account"
    $("#menu-my-account").collapse("toggle");
  });

  // Set up the click event for the "Contact info." heading
  $("#contactInfoToggle").click(function () {
    // Toggle the visibility of the content with ID "angro_contact_information-1"
    $("#angro_contact_information-1").collapse("toggle");
  });
});
