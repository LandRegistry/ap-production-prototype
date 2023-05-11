const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Set variables
router.get('*', function(req, res, next){
  res.locals['titleNumber'] = 'YL005916'
  res.locals['abrNumber'] = 'A312YYX'
  res.locals['appnType'] = 'Charge'

  next()
})

router.post('/00-worklist', function (req, res) {
  res.redirect('01-preliminary');
})

router.post('/01-preliminary', function (req, res) {
  if 	(req.session.data['property-match'] == 'No' 
  	|| req.session.data['customer-match'] == 'No'
  	) { 	
    res.redirect('workflow-no-drafting');
  } else {
  	// record PAS note for id-check = No
  	if (req.session.data['id-check'] == 'No')
  	{
  		// record PAS note:
  		// The identity panels have not been filled out correctly
  	}
  	if (req.session.data['conveyancer-match'] == 'No')
  	{
  		// record PAS note:
  		// The application is not lodged by a conveyancer. Consider serving a notice.
  	}
  	// set up date from 'automation' for page 2
  	// note - these could be set up in the session-data-defaults.js file.  But then they will be in every single flow - whiche we dont want.  doesnt matter about the document storage data in that file, we want that everywhere
  	req.session.data['charge-date-day'] = '04';
  	req.session.data['charge-date-month'] = '11';
  	req.session.data['charge-date-year'] = '2019';
  	// go to page 2
    res.redirect('02-charge-amount');
  }
})

router.post('/02-charge-amount', function (req, res) {
	res.redirect('03-add-charge-entry');
})

router.post('/03-add-charge-entry', function (req, res) {
	// no MD Ref checkbox is selected
  if (req.session.data['undisclosed'] == 'No-MDRef') { 	
    res.redirect('workflow-no-drafting');
  } else {
		res.redirect('04-discharge');
	}
})

router.post('/03-add-charge-entry-2', function (req, res) {
	// * !!!!!!!!!!!!! *
	// this route doesnt fire as theres something broken in page 03-add-charge-entry-2
	// * !!!!!!!!!!!!! *
	res.redirect('04-discharge');
})

router.post('/04-discharge', function (req, res) {
	res.redirect('05-any-other-entries');
})

router.post('/05-any-other-entries', function (req, res) {
	res.redirect('06-daylist');
})

router.post('/06-daylist', function (req, res) {
	res.redirect('07-document-storage');
})

// last page in flow - route to workflow or success confirmation page
router.post('/07-document-storage', function (req, res) {

	// check all the questions that mean it should get sent to workflow (get PAS notes)
  if 	(req.session.data['correct-fee'] == 'No'
  	|| req.session.data['id-check'] == 'No'
  	|| req.session.data['conveyancer-match'] == 'No'
		|| req.session.data['name-discrepancy'] == 'No'
		|| req.session.data['transferor-discrepancies'] == 'No'
		|| req.session.data['note-proceed'] == 'No'
		|| req.session.data['joint-proprietor'] == 'No'
		|| req.session.data['register-restrictions'] == 'No'
		|| req.session.data['existing-entries'] == 'Yes'
		|| req.session.data['docs-meet-requirements'] == 'No'
		|| req.session.data['additional-transactions'] == 'Yes'
		|| req.session.data['search-protection'] == 'No'
		|| req.session.data['stops-action'] == 'Yes'
  	) {
    res.redirect('workflow');
  } else {
    res.redirect('success');
  }

  // idea for UI improvement
  // we could check each item that creates a PAS note, and total up the number of PAS notes
  // then display the number of APS notes on the fill screen.

  // better idea...
  // if we had the content of the PAS notes here - in the proto
  // we could:
  // a) know what they are - Mo could edit them, and we have one source of documentation
  // b) have a page in the proto that shoes them - for the Dev team
  // c) as part of user researching changes show them in some way and see if they make sense
  // d) as part of UR - the journey om to workflow - we coul dmimic them seeing the PAS notes before they complete in legacy - ie test the full journey
})



// Add your routes above the module.exports line
module.exports = router
