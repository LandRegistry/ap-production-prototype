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
  res.redirect('02-first-summary-page');
})

router.post('/02-first-summary-page', function (req, res) {
  res.redirect('01-preliminary-1');
})

router.post('/01-preliminary-1', function (req, res) {
  if (
    req.session.data['property-match'] == 'No'
    || req.session.data['transfer-extent'] == 'Yes')
    { res.redirect('workflow-no-drafting');
    
  } else {
  res.redirect('02-preliminary-2');
}
})

router.post('/02-preliminary-2', function (req, res) {
  if (
    req.session.data['single-addressable'] == 'Yes')
    { res.redirect('03-preliminary-all');
  } else if (
    req.session.data['single-addressable'] == 'No range')
    { res.redirect('03-preliminary-range');
  } else if (
    req.session.data['single-addressable'] == 'No unrelated')
    { res.redirect('03-preliminary-unrelated');
  } else if (
    req.session.data['apportionment'] == 'Nominal amount')
    { res.redirect('03-preliminary-unrelated');
  } else if (
    req.session.data['apportionment'] == 'Yes')
    { res.redirect('04-preliminary-4');
  } else {
    res.redirect('03-preliminary-3');
  }
})

router.post('/03-preliminary-3', function (req, res) {
    res.redirect('04-preliminary-4');
})


router.post('/04-preliminary-4', function (req, res) {
	  res.redirect('05-preliminary-5');
})

router.post('/05-preliminary-5', function (req, res) {
	  res.redirect('06-preliminary-6');
})

router.post('/05-preliminary-5-b', function (req, res) {
  res.redirect('06-preliminary-6');
})

router.post('/05-preliminary-5-c', function (req, res) {
  res.redirect('06-preliminary-6');
})

router.post('/06-preliminary-6', function (req, res) {
	res.redirect('07-preliminary-7');
})

router.post('/07-preliminary-7', function (req, res) {
	res.redirect('02-second-summary-page');
})

router.post('/02-second-summary-page', function (req, res) {
    res.redirect('01-2-preliminary-1');
})

router.post('/01-2-preliminary-1', function (req, res) {
    res.redirect('04-2-preliminary-4');
})

router.post('/04-2-preliminary-4', function (req, res) {
  res.redirect('02-third-summary-page');
})

router.post('/02-third-summary-page', function (req, res) {
  res.redirect('01-3-preliminary-1');
})

router.post('/01-3-preliminary-1', function (req, res) {
  res.redirect('04-3-preliminary-4');
})

router.post('/04-3-preliminary-4', function (req, res) {
  res.redirect('05-3-preliminary-5');
})
router.post('/05-3-preliminary-5', function (req, res) {
// THIS IS MARKING ALL THE ANSWERS THAT WILL BE SENT TO WORKFLOW AND NEED/ATTACH A PAS NOTE 
	  if 	(req.session.data['property-match'] == 'No'
      || req.session.data['customer-match'] == 'No'
     	|| req.session.data['id-check'] == 'No'
      || req.session.data['transferee-type'] == 'No'
      || req.session.data['transfer-extent'] == 'Yes'
      || req.session.data['conveyancer-match'] == 'No'
      || req.session.data['execution-discrepancies'] == 'No'
      || req.session.data['apportionment'] == 'Yes'
      || req.session.data['transferee-names-match'] == 'No'
      || req.session.data['amend-existing-entries'] == 'Yes'
      || req.session.data['personal-covenants'] == 'Other personal covenant'
      || req.session.data['searches'] == 'No'
			|| req.session.data['docs-meet-requirements'] == 'No'
			|| req.session.data['additional-transactions'] == 'Yes'
      || req.session.data['property-match2'] == 'No'
      || req.session.data['amend-existing-entries2'] == 'Yes'
      || req.session.data['personal-covenants2'] == 'Other personal covenant'
      || req.session.data['docs-meet-requirements2'] == 'No'
			|| req.session.data['additional-transactions2'] == 'Yes'
      || req.session.data['property-match3'] == 'No'
      || req.session.data['amend-existing-entries3'] == 'Yes'
      || req.session.data['personal-covenants3'] == 'Other personal covenant'
      || req.session.data['docs-meet-requirements3'] == 'No'
			|| req.session.data['additional-transactions3'] == 'Yes'
	  	) {
	    res.redirect('02-last-summary-page-wf');
	  } else {
	    res.redirect('02-last-summary-page');
	  }
})


// Add your routes above the module.exports line
module.exports = router
