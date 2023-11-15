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
  res.redirect('00-summary-page');
})

router.post('/00-summary-page', function (req, res) {
  res.redirect('01-preliminary');
})

router.post('/01-preliminary', function (req, res) {
    res.redirect('02-charge-page-1');
})

router.post('/02-charge-page-1', function (req, res) {
    res.redirect('03-charge-page-2');
})

router.post('/03-charge-page-2', function (req, res) {
	  res.redirect('04-charge-page-3');
})

router.post('/04-charge-page-3', function (req, res) {
	res.redirect('05-charge-page-4');
})

router.post('/05-charge-page-4', function (req, res) {
	res.redirect('06-restriction-page-1');
})

router.post('06-restriction-page-1', function (req, res) {
	res.redirect('07-restriction-page-2');
})



router.post('/05-any-other-entries', function (req, res) {

	  if 	(req.session.data['property-match'] == 'No'
     	|| req.session.data['id-check'] == 'No'
      || req.session.data['customer-match'] == 'No'
      || req.session.data['conveyancer-match'] == 'No'
      || req.session.data['correct-fee'] == 'No'
			|| req.session.data['undisclosed'] == 'No-MDRef'
      || req.session.data['register-restrictions'] == 'No'
      || req.session.data['register-restrictions'] == 'Needs a referral'
			|| req.session.data['docs-meet-requirements'] == 'No'
			|| req.session.data['additional-transactions'] == 'Yes'
	  	) {
	    res.redirect('workflow');
	  } else {
	    res.redirect('deferred');
	  }
})


// Add your routes above the module.exports line
module.exports = router
