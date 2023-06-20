//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// ***********************************************
// Add a route look up like this for each new flow
// add the routes for your actual flow to an _routes.js file in your flow's folder
// ***********************************************
router.use(/\/example-flow\/v([0-9]+)/, (req, res, next) => {
  return require(`./views/example-flow/v${req.params[0]}/_routes`)(req, res, next);
})
// ***********************************************


// routing for the address for service prototype

router.use(/\/address-proto\/v([0-9]+)/, (req, res, next) => {
  return require(`./views/address-proto/v${req.params[0]}/_routes`)(req, res, next);
})


// routing for the deferral for dishcarges - transfer-defer

router.use(/\/transfer-defer\/v([0-9]+)/, (req, res, next) => {
  return require(`./views/transfer-defer/v${req.params[0]}/_routes`)(req, res, next);
})
