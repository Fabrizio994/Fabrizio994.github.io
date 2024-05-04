window.onload = function () {
  var contact_service = "service_hm608dy";
  var contact_form = "template_mgle077";
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm(contact_service, contact_form, this).then(
        () => {
          console.log("SUCCESS!");
          alert("MAIL INVIATA CON SUCCESSO! GRAZIE PER AVERMI CONTATTATO");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("OPS.. QUALCOSA E ANDATO STORTO");
        }
      );
    });
};
