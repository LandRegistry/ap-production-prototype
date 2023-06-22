
// Doc viewer forced into new window
$('.js-documents-window').click(function (e) {
  e.preventDefault();
  window.open('_document-viewer','winname','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no');
});


// Show warning section for dropout questions
$('.js-no-return-to-workflow input:radio').change(function () {
  if ($(this).val() == 'No') {
    $('.govuk-fieldset').not($(this).parents('.govuk-fieldset')).prop('disabled', true)
    $('#warning').show().focus()
    $('.govuk-button').text('Send to Workflow')
  } else {
    $('.govuk-fieldset').prop('disabled', false)
    $('#warning').hide()
    $('.govuk-button').text('Next')
  }
});

$('.js-yes-return-to-workflow input:radio').change(function () {
  if ($(this).val() == 'Yes') {
    $('.govuk-fieldset').not($(this).parents('.govuk-fieldset')).prop('disabled', true)
    $('#warning').show().focus()
    $('.govuk-button').text('Send to Workflow')
  } else {
    $('.govuk-fieldset').prop('disabled', false)
    $('#warning').hide()
    $('.govuk-button').text('Next')
  }
});

$('.js-no-return-to-workflow input:checkbox').change(function () {
  if ($(this).val() == 'No') {
    $('.govuk-fieldset').not($(this).parents('.govuk-fieldset')).prop('disabled', true)
    $('#warning').show().focus()
    $('.govuk-button').text('Send to Workflow')
  } else if ($(this).val() == '') {
    $('.govuk-fieldset').prop('disabled', false)
    $('#warning').hide()
    $('.govuk-button').text('Next')
  }
});


// Show pas notes info for questions that add them
$('.js-no-pas-notes input:radio').change(function () {
  if ($(this).val() == 'No' && $('#pas-notes').length == 0) {
    $('.task-lists-submit').prepend('<div id="pas-notes" class="govuk-inset-text"><p>PAS notes have been created based on some of your answers above</p></div>')
  }
});

$('.js-yes-pas-notes input:radio').change(function () {
  if ($(this).val() == 'Yes' && $('#pas-notes').length == 0) {
    $('.task-lists-submit').prepend('<div id="pas-notes" class="govuk-inset-text"><p>PAS notes have been created based on some of your answers above</p></div>')
  }
});


// Show pas notes info for checkboxes that add them
$('.js-no-pas-notes input:checkbox').change(function () {
  if ($(this).val().substring(0, 2) == 'No' && $('#pas-notes').length == 0) {
    $('.task-lists-submit').prepend('<div id="pas-notes" class="govuk-inset-text"><p>PAS notes have been created based on some of your answers above</p></div>')
  }
});


// Toggle items in the register to be removed
$('.js-register-remove input').change(function() {
  var register = $(this).attr('data-register');
  var item = $(this).attr('data-item');

  $('.register-list:nth-of-type('+register+') > li:nth-of-type('+item+')').toggleClass('remove');
});



// Toggle items in the register to be removed
$('.js-register-radio-remove input').change(function() {
  var register = $(this).attr('data-register');
  var item = $(this).attr('data-item');
  var toRemove = $(this).attr('data-remove');

  if (toRemove == 'y') {
  	$('.register-list:nth-of-type('+register+') > li:nth-of-type('+item+')').addClass('remove');
  } else {
  	$('.register-list:nth-of-type('+register+') > li:nth-of-type('+item+')').removeClass('remove');
  }

});

// Toggle 2 items in the register to be removed
$('.js-register-radio-remove-2 input').change(function() {
  var register = $(this).attr('data-register');
  var item1 = $(this).attr('data-item-1');
  var item2 = $(this).attr('data-item-2');
  var toRemove = $(this).attr('data-remove');

  if (toRemove == 'y') {
  	$('.register-list:nth-of-type('+register+') > li:nth-of-type('+item1+')').addClass('remove');
    $('.register-list:nth-of-type('+register+') > li:nth-of-type('+item2+')').addClass('remove');
  } else {
  	$('.register-list:nth-of-type('+register+') > li:nth-of-type('+item1+')').removeClass('remove');
    $('.register-list:nth-of-type('+register+') > li:nth-of-type('+item2+')').removeClass('remove');
  }

});



// Toggle items in the register to be replaced
$('.js-register-radio-replace-on-no input').change(function() {
  var register = $(this).attr('data-register');
  var item = $(this).attr('data-item');
  var toReplace = $(this).attr('data-replace');

  if (toReplace == 'y') {
  	$('.register-list:nth-of-type('+register+') > li:nth-of-type('+item+')').addClass('replacing');
  } else {
  	$('.register-list:nth-of-type('+register+') > li:nth-of-type('+item+')').removeClass('replacing');
  }

});

//toggle items in register - new design
$('input[type="checkbox"]').click(function(){
  var inputValue = $(this).attr("value");
  $("." + inputValue).toggle();
  var inputValue = $(this).attr("id");
  $("." + inputValue).toggleClass('removing-inset-text');
});


// Show warning section for dropout questions
$('.js-no-return-to-workflow-2 input:radio').change(function () {
  if ($(this).val() == 'No') {
  $('.govuk-fieldset').not($(this).parents('.govuk-fieldset')).prop('disabled', true)
  $('#warning').show().focus()
  $('#charges-button').text('Submit')
  } else {
  $('.govuk-fieldset').prop('disabled', false)
  $('#warning').hide()
  $('#charges-button').text('Next')
  }
});