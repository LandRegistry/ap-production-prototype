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
  res.redirect('06-discharge');
})




router.post('/06-discharge', function (req, res) {	
	// store PAS notes into server variable PASNotes

	
	if (req.session.data['discharge-removal'] == 'Yes')
	{  		
		PASNotes.DischargeEvidenceLodgedCharge = "???"
	}
	if (req.session.data['discharge-removal'] == 'No')
	{  		
		PASNotes.DischargeEvidenceLodgedCharge = "NEW PAS note - evidence lodged in reponse to requsition not ok????"
	}


	if (req.session.data['electronic-discharge'] == 'No')
	{  		
		PASNotes.AmendExistingEntries = "NEW PAS??? routing to legacy"
	}
	else
	{
		delete PASNotes.AmendExistingEntries;
	}


	//removed-entries teask needs PAS note?
	// covenants-adding task needs PAS note?

	// set session data item PASNotes to whats in the server variable PASNotes - so that session data PAS notes is available to be used in the pages
  req.session.data['PASNotes'] = PASNotes;

	res.redirect('09-document-storage');
})


// last page in flow - route to workflow or success confirmation page
router.post('/09-document-storage', function (req, res) {

	// check all the questions that mean it should get sent to workflow (get PAS notes)
  if 	(req.session.data['discharge-removal'] == 'No'
  	|| req.session.data['electronic-discharge'] == 'No'
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
