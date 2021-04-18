function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  const lat = document.getElementById("latitude").value;
  const long = document.getElementById("longitude").value
    if(!(lat >= -90 && lat <= 90))
    {
      document.getElementById("lat").innerText = "*must be a valid Latitude (-90 to 90)";
      event.preventDefault();
      return false;
    }
    else{
      document.getElementById("lat").innerText = "*";
      if(!(long >= -180 && long <= 180))
      {
       document.getElementById("long").innerText = "*must be a valid Longitude (-180 to 180)";
        event.preventDefault();
        return false;
      }
      else
      {
        document.getElementById("long").innerText = "*";
      }
  }

  console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
