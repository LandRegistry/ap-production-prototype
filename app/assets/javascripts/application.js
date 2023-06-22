//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})

// PC Corres - forced into new window
$('.js-pc-corres-window').click(function (e) {
  e.preventDefault();
  window.open('_pc-corres','winname-corres','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no');
});
