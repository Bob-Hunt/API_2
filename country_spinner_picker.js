// API methods.

// instance.remove();
// instance.getValue();
// instance.setIndex(index);
// instance.updateView();


// Load the main spinner_picker.js script into the document when needed.
let country_spinner_picker = new SpinnerPicker(
    document.getElementById("yucky1"),
    function(index) {
      // Check if the index is in range of the array - Return null if its not the case
      if(index < 0 || index >= coutriesArr.length) {
        return null;
      }
      return countriesArr[index];
    }, { 
      index: 0, 
      selection_color: "orange"
    }
);


// Execute a function when a value is changed
var onchanged = function(index) {
    // do something
};
country_spinner_picker(canvas, valueHandler, options, onchanged);



