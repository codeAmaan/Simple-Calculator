let output = document.getElementById("output");

function delChar() {
  let newChar = output.textContent.slice(0, -1);
  output.textContent = newChar;
}
