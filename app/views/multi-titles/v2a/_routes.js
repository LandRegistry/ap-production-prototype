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
  res.redirect('02-preliminary-2');
})
router.post('/02-preliminary-2', function (req, res) {
    res.redirect('03-charge-page-1');
})

router.post('/03-charge-page-1', function (req, res) {
    res.redirect('04-charge-page-2');
})

router.post('/04-charge-page-2', function (req, res) {
	  res.redirect('05-charge-page-3');
})

router.post('/05-charge-page-3', function (req, res) {
	  res.redirect('05-final-tasks-page-1');
})

router.post('/05-final-tasks-page-1', function (req, res) {
	res.redirect('02-mid-summary-page-combo-3');
})

router.post('/01-2-preliminary', function (req, res) {
    res.redirect('03-2-charge-page-1');
})

router.post('/02-2-preliminary-2', function (req, res) {
    res.redirect('03-2-charge-page-1');
})

router.post('/03-2-charge-page-1', function (req, res) {
    res.redirect('04-2-charge-page-2');
})

router.post('/04-2-charge-page-2', function (req, res) {
	  res.redirect('05-2-final-tasks-page-1');
})


router.post('/05-2-final-tasks-page-1', function (req, res) {
	res.redirect('02-mid-summary-page-combo-2');
})


router.post('/01-3-preliminary', function (req, res) {
    res.redirect('03-3-charge-page-1');
})


router.post('/03-3-charge-page-1', function (req, res) {
    res.redirect('04-3-charge-page-2');
})

router.post('/04-3-charge-page-2', function (req, res) {
	  res.redirect('05-3-final-tasks-page-1');
})

router.post('/05-3-final-tasks-page-1', function (req, res) {
	res.redirect('06-4-final-tasks-page-2');
})

router.post('/06-4-final-tasks-page-2', function (req, res) {
	res.redirect('02-end-summary-page-combo-2');
})

router.post('/02-end-summary-page-combo-2', function (req, res) {

	  if 	(req.session.data['property-match'] == 'No'
      || req.session.data['property-match-2'] == 'No'
      || req.session.data['property-match-3'] == 'No'
      || req.session.data['customer-match'] == 'No'
      || req.session.data['customer-match-2'] == 'No'
      || req.session.data['customer-match-3'] == 'No'
      || req.session.data['conveyancer-match'] == 'No'
      || req.session.data['conveyancer-match-2'] == 'No'
      || req.session.data['conveyancer-match-3'] == 'No'
      || req.session.data['id-check'] == 'No'
      || req.session.data['id-check-2'] == 'No'
      || req.session.data['id-check-3'] == 'No'
      || req.session.data['correct-fee'] == 'No'
      || req.session.data['execution-discrepancies'] == 'No'
      || req.session.data['execution-discrepancies-2'] == 'No'
      || req.session.data['execution-discrepancies-3'] == 'No'
			|| req.session.data['undisclosed'] == 'No-MDRef'
      || req.session.data['register-restrictions'] == 'No'
      || req.session.data['register-restrictions'] == 'Needs a referral'
      || req.session.data['register-restrictions-2'] == 'No'
      || req.session.data['register-restrictions-2'] == 'Needs a referral'
      || req.session.data['register-restrictions-3'] == 'No'
      || req.session.data['register-restrictions-3'] == 'Needs a referral'
      || req.session.data['amend-existing-entries'] == 'Yes'
      || req.session.data['amend-existing-entries-2'] == 'Yes'
      || req.session.data['amend-existing-entries-3'] == 'Yes'
			|| req.session.data['docs-meet-requirements'] == 'No'
      || req.session.data['docs-meet-requirements-2'] == 'No'
      || req.session.data['docs-meet-requirements-3'] == 'No'
			|| req.session.data['additional-transactions'] == 'Yes'
      || req.session.data['additional-transactions-2'] == 'Yes'
      || req.session.data['additional-transactions-3'] == 'Yes'
	  	) {
	    res.redirect('workflow');
	  } else {
	    res.redirect('success');
	  }
})


// Add your routes above the module.exports line
module.exports = router
