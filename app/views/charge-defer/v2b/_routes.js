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
    res.redirect('02-charge-amount');
})

router.post('/02-charge-amount', function (req, res) {
	  res.redirect('03-add-charge-entry');
})

router.post('/03-add-charge-entry', function (req, res) {
	res.redirect('04-discharge');
})


router.post('/04-discharge', function (req, res) {
	res.redirect('05-any-other-entries');
})


router.post('/05-any-other-entries', function (req, res) {
	    res.redirect('workflow');
})


// Add your routes above the module.exports line
module.exports = router
