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
  if (req.session.data['property-match'] == 'No' || req.session.data['customer-match'] == 'No') {
    res.redirect('workflow-no-drafting');
  } else {
    res.redirect('questions');
  }
})

router.post('/questions', function (req, res) {
  if (req.session.data['question'] == 'Yes') {
    res.redirect('complete--sent-to-markoff');
  } else {
    res.redirect('complete--sent-to-workflow');
  }
})





// Add your routes above the module.exports line
module.exports = router
