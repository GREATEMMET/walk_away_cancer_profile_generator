const generateBtn = document.querySelector(".generateBtn");

const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const personImg = document.querySelector(".imgUpload");

const imgDisplay = document.querySelector(".profilePic");
const personFullName = document.querySelector(".personFullName");

generateBtn.addEventListener("click", () => {
  const file = personImg.files[0];
  if (!firstname.value || !lastname.value) {
    alert("Please Enter Name fields");
  } else {
    personFullName.innerHTML = `${firstname.value.toUpperCase()} ${lastname.value.toUpperCase()}`;

    if (file) {
      imgDisplay.src = `${URL.createObjectURL(file)}`;
    } else {
      alert("Upload an Image");
    }
  }
});
