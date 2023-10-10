const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

var PASNotes = {}

// Set variables
router.get('*', function(req, res, next){
  res.locals['titleNumber'] = 'DN1029KU'
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
  	// store PAS notes into server variable PASNotes
  	if (req.session.data['id-check'] == 'No')
  	{
  		PASNotes.ConfirmIdPanels = "The identity panels have not been filled out correctly"
  	}
  	else {
  		delete PASNotes.ConfirmIdPanels;
  	}

  	// set session data item PASNotes to whats in the server variable PASNotes - so that session data PAS notes is available to be used in the pages
  	req.session.data['PASNotes'] = PASNotes;


  	// go to page 2
    res.redirect('02-transfer');
  }
})

router.post('/02-transfer', function (req, res) {
	// store PAS notes into server variable PASNotes

	if (req.session.data['conveyancer-match'] == 'No')
  	{
  		PASNotes.ValidateConveyancer = "The application is not lodged by a conveyancer. Consider serving a notice."
  	}
  	else {
  		delete PASNotes.ValidateConveyancer;
  	}

	if (req.session.data['correct-fee'] == 'No')
	{
		PASNotes.ConfirmFeePaid = "Fee paid is incorrect."
	}
	else {
		delete PASNotes.ConfirmFeePaid;
	}

	// set session data item PASNotes to whats in the server variable PASNotes - so that session data PAS notes is available to be used in the pages
  req.session.data['PASNotes'] = PASNotes;

	res.redirect('03-transfer-names');
})

router.post('/03-transfer-names', function (req, res) {

	if (req.session.data['transfer-names-match'] == 'No')
		{
		// PAS note to add
	}
	else {
		delete PASNotes.ConfirmBorrower;
	}
	if (req.session.data['name-discrepancy'] == 'No')
		{
		PASNotes.ConfirmBorrower = "The borrower names do not match the registered proprietor. Check for related evidence and complete any action needed"
	}
	else {
		delete PASNotes.ConfirmBorrower;
	}
	if (req.session.data['execution-discrepancies'] == 'No')
		{
		PASNotes.DoDocsMeetRequirements = "The documents do not meet all requirements"
	}
	else {
		delete PASNotes.DoDocsMeetRequirements;
	}


	// set session data item PASNotes to whats in the server variable PASNotes - so that session data PAS notes is available to be used in the pages
	req.session.data['PASNotes'] = PASNotes;

	res.redirect('04-transferees');

})

router.post('/04-transferees', function (req, res) {

	res.redirect('05-address-for-service');
})

router.post('/05-address-for-service', function (req, res) {

	res.redirect('06-discharge');
})


router.post('/06-discharge', function (req, res) {
	// store PAS notes into server variable PASNotes


	if (req.session.data['discharge-removal'] == 'Yes')
	{
		PASNotes.DischargeEvidenceLodgedCharge = "Evidence of discharge for the registered charge(s) requires action"
	}
	if (req.session.data['discharge-removal'] == 'No')
	{
		PASNotes.DischargeEvidenceLodgedCharge = "NEW PAS note - reqisition"
	}
	if (req.session.data['discharge-removal'] == 'Keep') {
		delete PASNotes.DischargeEvidenceLodgedCharge;
	}

	if (req.session.data['existing-entries'] == 'Yes')
	{
		PASNotes.AmendExistingEntries = "One or more register entries needs amending"
	}
	else
	{
		delete PASNotes.AmendExistingEntries;
	}

// got here

	if (req.session.data['register-restrictions'] == 'No')
	{
		PASNotes.ProcessWithRestrictions = "The restriction(s) in the register need considering"
	}
	else
	{
		delete PASNotes.ProcessWithRestrictions;
	}

	//removed-entries teask needs PAS note?
	// covenants-adding task needs PAS note?

	// set session data item PASNotes to whats in the server variable PASNotes - so that session data PAS notes is available to be used in the pages
  req.session.data['PASNotes'] = PASNotes;

	res.redirect('07-wrap-up');
})


router.post('/07-wrap-up', function (req, res) {
	if (req.session.data['search-protection'] == 'No')
	{
		PASNotes.ProtectingSearch = "There is an Official Search of Whole with priority on the title that may be blocking this application."
	}
	else
	{
		delete PASNotes.ProtectingSearch;
	}

	if (req.session.data['stops-action'] == 'Yes' )
	{
		PASNotes.ReviewStops = "There is a stop(s) that requires some action."
	}
	else
	{
		delete PASNotes.ReviewStops;
	}

	if (req.session.data['docs-meet-requirements'] == 'No')
	{
		PASNotes.DoDocsMeetRequirements = "The documents do not meet all requirements"
	}
	else
	{
		delete PASNotes.DoDocsMeetRequirements;
	}

	if (req.session.data['additional-transactions'] == 'Yes')
	{
		PASNotes.AdditionalTransactions = "There is another transaction(s) with this application."
	}
	else
	{
		delete PASNotes.AdditionalTransactions;
	}

	// set session data item PASNotes to whats in the server variable PASNotes - so that session data PAS notes is available to be used in the pages
  req.session.data['PASNotes'] = PASNotes;

  if 	(req.session.data['correct-fee'] == 'No'
    || req.session.data['id-check'] == 'No'
    || req.session.data['conveyancer-match'] == 'No'
    || req.session.data['correct-fee'] == 'No'
    || req.session.data['name-discrepancy'] == 'No'
    || req.session.data['transferor-discrepancies'] == 'No'
    || req.session.data['undisclosed'] == 'No-MDRef'
    || req.session.data['note-proceed'] == 'No'
    || req.session.data['early-completion'] == 'Yes'
    || req.session.data['early-completion'] == 'No'
    || req.session.data['joint-proprietor'] == 'No'
    || req.session.data['register-restrictions'] == 'No'
    || req.session.data['existing-entries'] == 'Yes'
    || req.session.data['docs-meet-requirements'] == 'No'
    || req.session.data['additional-transactions'] == 'Yes'
    || req.session.data['search-protection'] == 'No'
    || req.session.data['stops-action'] == 'Yes'
    || req.session.data['discharge-removal'] == 'Not required'
    ) {
    res.redirect('workflow');
  } else {
    res.redirect('deferred');
  }

})


router.post('/05-any-other-entries', function (req, res) {

	  if 	(req.session.data['property-match'] == 'Yes'
     	|| req.session.data['id-check'] == 'Yes'
      || req.session.data['customer-match'] == 'Yes'
      || req.session.data['conveyancer-match'] == 'Yes'
      || req.session.data['correct-fee'] == 'Yes'
			|| req.session.data['undisclosed'] == 'No-MDRef'
      || req.session.data['discharge-removal'] == 'No'
      || req.session.data['register-restrictions'] == 'Yes'
			|| req.session.data['docs-meet-requirements'] == 'Yes'
			|| req.session.data['additional-transactions'] == 'No'
	  	) {
	    res.redirect('deferred');
	  } else {
	    res.redirect('success');
	  }
})


// Add your routes above the module.exports line
module.exports = router
