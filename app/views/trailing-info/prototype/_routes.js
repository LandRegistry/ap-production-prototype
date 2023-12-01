//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.post('/trailing-info_1-1', function (req, res) {
    var theRadios1 = req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-0']

    if (req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_add_transferee'] == 'Add transferee') {

        res.redirect("trailing-info_1-1-add-transferee")

    } else if (theRadios1 == null){

        res.redirect("trailing-info_1-1-error-radios")

    } else if (theRadios1 == 'PRIVATE_INDIVIDUAL') {
        
        if( (req.session.data['forenames0'] == '') && (req.session.data['surname0'] == '') ){
            res.redirect("trailing-info_1-1-error-forenames0-and-lastname0")

        } else if(req.session.data['forenames0'] == ''){
            res.redirect("trailing-info_1-1-error-forenames0")

        } else if (req.session.data['surname0'] == ''){
            res.redirect("trailing-info_1-1-error-lastname0")
        }

    } else if (theRadios1 == 'UK_COMPANY') {
        res.redirect("trailing-info_1-1-two")
    } 
    
    /* error messaging not added to the second Transferee 2 form (yet?) */
})

router.post('/trailing-info_1-1-add-transferee', function (req, res) {
    //res.redirect('/index');

    //res.redirect('trailing-info_1-3');

    /*var myTest = req.session.data['forenames0']
    if (myTest == null){
        res.redirect("trailing-info_1-1-error-blank")
    } else {
        res.redirect("index")
    }*/

})

module.exports = router
