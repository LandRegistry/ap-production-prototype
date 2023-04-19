const express = require('express')
const router = new express.Router()

// Set variables
router.get('*', function(req, res, next){
  res.locals['titleNumber'] = 'BGL109003'
  res.locals['appType'] = 'Transfer'
  res.locals['docView'] = '_document-viewer'

  next()
})

router.post('/worklist', function (req, res) {
  res.redirect('preliminary');

})

router.post('/preliminary', function (req, res) {
  if (req.session.data['property-match'] == 'Yes' || req.session.data['customer-match'] == 'No') {
    res.redirect('complete--return-to-workflow');
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
