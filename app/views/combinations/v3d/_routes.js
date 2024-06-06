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
    res.redirect('02-preliminary');
})
router.post('/02-preliminary', function (req, res) {
    res.redirect('03-transfer-page-1');
})

router.post('/03-transfer-page-1', function (req, res) {
    res.redirect('04-transfer-page-2');
})

router.post('/04-transfer-page-2', function (req, res) {
    res.redirect('05-transfer-page-3');
})

router.post('/05-transfer-page-3', function (req, res) {
    res.redirect('06-transfer-page-4-a');
})

router.post('/06-transfer-page-4-a', function (req, res) {
    res.redirect('07-transfer-page-5');
})

router.post('/06-transfer-page-4-b', function (req, res) {
    res.redirect('07-transfer-page-5');
})

router.post('/06-transfer-page-4-c', function (req, res) {
    res.redirect('07-transfer-page-5');
})

router.post('/07-transfer-page-5', function (req, res) {
    res.redirect('08-charge-page-1');
})

router.post('/08-charge-page-1', function (req, res) {
    res.redirect('09-charge-page-2');
})

router.post('/09-charge-page-2', function (req, res) {
	  res.redirect('10-restriction-page-1');
})

router.post('/10-restriction-page-1', function (req, res) {
	res.redirect('12-final-tasks-page-1');
})

router.post('/12-final-tasks-page-1', function (req, res) {
	res.redirect('13-final-tasks-page-2');
})

router.post('/13-final-tasks-page-2', function (req, res) {
	res.redirect('90-summary-page-drafted');
})

router.post('/13-final-tasks-page-3', function (req, res) {

	  if 	(req.session.data['serve-notice-2'] == 'No'
     	|| req.session.data['serve-notice-2'] == 'Objection'
      || req.session.data['serve-notice-2'] == 'Yes'
	  	) {
	    res.redirect('90-summary-page-workflow');
	  } else {
	    res.redirect('90-summary-page-workflow-2');
	  }
})


// Add your routes above the module.exports line
module.exports = router
