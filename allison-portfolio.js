/*copy email to clip board*/
async function copyContent(text) {
    /*error handling*/
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err); /*display details of the error*/
    }
  }
  /*Copy text with email id*/
  /* added DOMContentLoaded event to ensure HTML DOM is loaded first*/
  document.addEventListener("DOMContentLoaded", function () {
    /* added click event to the element with id "email"*/
    document.getElementById('email').addEventListener('click', function () {
      var copyText = document.getElementById('email').textContent;
      copyContent(copyText); /*initiate copying text when email element is clicked*/
    });
  });
  

/*open pop-up on click*/
/* added DOMContentLoaded event to ensure HTML DOM is loaded first*/
/*without this, events wont work */


document.addEventListener("DOMContentLoaded", function () {
    const worksPage = document.querySelector(".works"), 
          expandBox = document.querySelectorAll(".expand-box"),
          old = document.querySelector(".box-overlay"),
          overlay = document.querySelector(".pop-up");

    /*clicking any of the expandBox elements opens a popup*/
    expandBox.forEach(function(expandBox) {
        expandBox.addEventListener("click", () => {
            overlay.classList.add("active");
        });
    });
});

