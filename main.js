import './style.css'
window.readURL = (input) => {
  console.log("readURL %o", input);
  if (input.files && input.files[0]) {
    console.log(input.files[0]);
    const reader = new FileReader();

    reader.onload = function (e) {
      console.log(e.target.result);
      localStorage.setItem("imgData", e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}
