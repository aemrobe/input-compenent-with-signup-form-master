const form = document.querySelector("form");
const inputContainers = document.querySelectorAll(".input-container");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");

//regex for validating the email
const emailPattern =
  /^([a-z\d-.]){8,20}@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

form.addEventListener("submit", function (e) {
  // e.preventDefault();

  //empty value test
  inputs.forEach((input) => {
    if (input.value === "") {
      e.preventDefault();
      input.parentElement.nextElementSibling.classList.remove("hidden");

      input.nextElementSibling.classList.remove("hidden");

      input.parentElement.nextElementSibling.textContent = `${input.name} cannot be empty`;

      input.parentElement.style.outlineColor = "hsl(0, 100%, 74%)";

      input.parentElement.style.outlineWidth = "2px";

      //if the inputs values are empty , it will make their value of the placeholder equal to emptystring
      input.value === "" && (input.placeholder = "");
    } else if (input.value !== "") {
      input.parentElement.nextElementSibling.classList.add("hidden");

      input.nextElementSibling.classList.add("hidden");

      input.parentElement.style.outlineWidth = "1px";

      input.parentElement.style.outlineColor = "hsl(249, 10%, 26%)";
    }
  });

  //email test
  if (!emailPattern.test(form.email.value)) {
    e.preventDefault();
    form.email.parentElement.style.outlineWidth = "2px";

    form.email.parentElement.style.outlineColor = "hsl(0, 100%, 74%)";

    form.email.parentElement.nextElementSibling.classList.remove("hidden");

    form.email.nextElementSibling.classList.remove("hidden");

    form.email.parentElement.nextElementSibling.textContent = `Look like this is not an email`;
  } else if (emailPattern.test(form.email.value)) {
    form.email.parentElement.nextElementSibling.classList.add("hidden");

    form.email.nextElementSibling.classList.add("hidden");

    form.email.parentElement.style.outlineWidth = "1px";

    form.email.parentElement.style.outlineColor = "hsl(249, 10%, 26%)";
  }
});

inputContainers.forEach((inputContainer) => {
  inputContainer.addEventListener("click", function () {
    if (inputContainer.style.outlineWidth === "") {
      inputContainer.style.outlineColor = "hsl(249, 10%, 26%)";
    }
  });
});
