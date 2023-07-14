const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

var PASNotes = {}

// Set variables
router.get('*', function(req, res, next){
  res.locals['titleNumber'] = 'EX365565'
  res.locals['abrNumber'] = 'A312YYX'
  res.locals['appnType'] = 'Transfer'

  next()
})

router.post('/00-worklist', function (req, res) {
  res.redirect('01-preliminary');
})

router.post('/01-preliminary', function (req, res) {

  if 	(req.session.data['property-match'] == 'No'
  	|| req.session.data['customer-match'] == 'No'
  	|| req.session.data['transferee-type'] == 'No'
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
    || req.session.data['discharge-removal'] == 'No'
    ) {
    res.redirect('deferred');
  } else {
    res.redirect('success');
  }

})

router.post('/08-letters', function (req, res) {

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
			|| req.session.data['discharge-removal'] == 'No'
	  	) {
	    res.redirect('deferred');
	  } else {
	    res.redirect('success');
	  }

})

// last page in flow - route to workflow or success confirmation page
router.post('/09-document-storage', function (req, res) {

	// check all the questions that mean it should get sent to workflow (get PAS notes)
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
