//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

//if var |length

router.post('/trailing-info_1-1', function (req, res) {

    if (req.session.data['add_transferee_btn'] == 'Add transferee') {//user selects to add another transferee

        res.redirect("trailing-info_1-1-add-transferee-error-radios")

    } else if (req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-0'] == null || req.session.data['forenames0'] == '' || req.session.data['surname0'] == '') {//if empty/unselected form elements, pass to this pg where full error validation is provided

        res.redirect("trailing-info_1-1-error-radios")

    } else {//no empty/unselected form elements > next (add address for service)

        res.redirect("trailing-info_1-2")

    }
})

router.post('/trailing-info_1-1-error-radios', function (req, res) {

    if (req.session.data['add_transferee_btn'] == 'Add transferee') {//go to pg with 2nd transferee

        res.redirect("trailing-info_1-1-add-transferee-error-radios")

    } else if (req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-0'] == null) {//select the radio

        res.redirect("trailing-info_1-1-error-radios")

    } else if (req.session.data['forenames0'] == '' || req.session.data['surname0'] == '') {//passed radio, but either inputs are empty

        res.redirect("trailing-info_1-1-error-radios")        

    } else {//passed validation > next (add address for service)

        res.redirect("trailing-info_1-2")

    }
})

router.post('/trailing-info_1-1-add-transferee-error-radios', function (req, res) {//if 'add transferee' selected: this pg has 2 inputs for 2 transferees

    if (req.session.data['add_transferee_btn'] == 'Add transferee') {//return to self (prototype can only add 2 transferees)

        res.redirect("trailing-info_1-1-add-transferee-error-radios")

    } else if (req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-0'] == null || req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-1'] == null) {//select the radios, if user selects type Company (validation only on Private); on transferee 1 or 2

        res.redirect("trailing-info_1-1-add-transferee-error-radios")

    } else if (req.session.data['forenames0'] == '' || req.session.data['surname0'] == '' || req.session.data['forenames1'] == '' || req.session.data['surname1'] == '') {//passed radios checks, now check all inputs for 1 and 2 have values

        res.redirect("trailing-info_1-1-add-transferee-error-radios")    

    } else {//passed validation > next (add address for service)

        res.redirect("trailing-info_1-2")

    }
})

router.post('/trailing-info_1-2', function (req, res) {//address for service page

    //user can click the 'Add address' hyperlink to go to 'trailing-info_1-2-add-address1'

    //if (req.session.data['TRANSFEREE-ADDRESSES-add-address'] == '') {//there must be at least 1 address???

        //res.redirect("trailing-info_1-2")//submit to self (for form validation to be written into the HTML output)    

    //} else 

    if (req.session.data['more-transferee-addresses-genericradiogroup'] == null || req.session.data['add-info'] == null) {
        
        res.redirect("trailing-info_1-2")//submit to self for form error msgs to display

    } else {//passed validation > next 

        res.redirect("trailing-info_1-3")

    }
})


/* next ...

do page: trailing-info_1-2-add-address1
on the 'Save address' btn - validate: If you has not checked 'Can't find address' then 'Enter a UK postcode' (which is hint text and a label together) OR 'Select and address' 

The list of transferees must be dynamically generated; max of two

If the user has selected an address they must select at least one transferee (Error: Select more or more transferees for this address)







*/




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
    }

})*/

module.exports = router
