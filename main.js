
document.addEventListener('DOMContentLoaded', function () {
var rangeInput = document.getElementById('rangeInput');
var textInput = document.getElementById('textInput');
textInput.value = rangeInput.value;
rangeInput.addEventListener('input', function () {
textInput.value = rangeInput.value;
});

textInput.addEventListener('input', function () {
var value = parseInt(textInput.value);
if (value < parseInt(rangeInput.min)) {
textInput.value = rangeInput.min;
} else if (value > parseInt(rangeInput.max)) {
textInput.value = rangeInput.max;
}

rangeInput.value = textInput.value;
});
});

