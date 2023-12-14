//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

//if var |length

router.post('/trailing-info_1-1', function (req, res) {

    if (req.session.data['add_transferee_btn'] == 'Add transferee') {

        res.redirect("trailing-info_1-1-add-transferee")

    } else if (req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-0'] == null || req.session.data['forenames0'] == '' || req.session.data['surname0'] == '') {

        res.redirect("trailing-info_1-1-error-radios")

    } else {

        res.redirect("xxxxxx")

    }
})

router.post('/trailing-info_1-1-error-radios', function (req, res) {

    if (req.session.data['add_transferee_btn'] == 'Add transferee') {

        res.redirect("trailing-info_1-1-add-transferee-error-radios")

    } else if (req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-0'] == null || req.session.data['forenames0'] == '' || req.session.data['surname0'] == '') {

        res.redirect("trailing-info_1-1-error-radios")

    } else {

        res.redirect("xxxxxxzzzzz")

    }
})




/* can delete trailing-infor_1-1-add-transferee ????

router.post('/trailing-info_1-1-add-transferee', function (req, res) {
    
    if(req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_add_transferee'] == 'Add transferee'){   
        res.redirect("trailing-info_1-1-add-transferee")
    } else {
        
        if( (req.session.data['forenames0'] == '') || (req.session.data['surname0'] == '') ){
            res.redirect("trailing-info_1-1-add-transferee-error-radios")
        } else if( (req.session.data['forenames1'] == '') || (req.session.data['surname1'] == '') ){
            res.redirect("trailing-info_1-1-add-transferee-error-radios")
        } else {
            res.redirect("trailing-info_1-2")
        }

    }

//trailing-info_1-1-add-transferee-error-radios.html
*/


    //res.redirect('trailing-info_1-3');

    /*var myTest = req.session.data['forenames0']
    if (myTest == null){
        res.redirect("trailing-info_1-1-error-blank")
    } else {
        res.redirect("index")
    }*/

})

module.exports = router
