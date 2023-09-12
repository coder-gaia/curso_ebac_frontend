const form = document.getElementById("form-container")
const input1 = document.getElementById("input-1")
const input2 = document.getElementById("input-2")
const comparative = `ERROR! The second input oughta be bigger than the first one!!!`
const comparative2 = `The formulary is OK!!`

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const biggerThan = document.querySelector(".comparative");

    if (input2.value > input1.value) {
        biggerThan.innerHTML = comparative2;
        biggerThan.style.backgroundColor = ""; // Remove the red background color
    } else if (input2.value < input1.value) {
        biggerThan.innerHTML = comparative;
        biggerThan.style.backgroundColor = "red";
    }

    biggerThan.style.display = "block";

    input1.value = "";
    input2.value = "";
});
