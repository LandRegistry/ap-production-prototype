//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

//if var |length

router.post('/trailing-info_1-1', function (req, res) {

    if (req.session.data['add_transferee_btn'] == 'Add transferee') {//user selects to add another transferee

        res.redirect("trailing-info_1-1-add-transferee")//no error - transferee 2 appears

    } else if (req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-0'] == null || req.session.data['forenames0'] == '' || req.session.data['surname0'] == '') {//if empty/unselected form elements, pass to this pg where full error validation is provided

        res.redirect("trailing-info_1-1-error-radios")

    } else {//no empty/unselected form elements > next (add address for service)

        res.redirect("trailing-info_1-2")

    }
})

router.post('/trailing-info_1-1-add-transferee', function (req, res) {

    if (req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-1'] != 'PRIVATE_INDIVIDUAL' || req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-1'] == 'UK_COMPANY') {//if radios for the 2nd transferee are not unselected

        res.redirect("trailing-info_1-1-add-transferee-error-radios")

    } else {//no empty/unselected form elements > next (add address for service)

        res.redirect("trailing-info_1-2")

    }
})

router.post('/trailing-info_1-2', function (req, res) {

    if (req.session.data['more-transferee-addresses-genericradiogroup'] == null || req.session.data['add-info'] == null) {
        //radios unselected
        res.redirect("trailing-info_1-2-error")

    } else if (req.session.data['add-info'] == 'yes') {

        res.redirect("trailing-info_1-4") 

    } else {
        res.redirect("trailing-info_1-6") //final pg of this flow
    }
})

router.post('/trailing-info_1-2-error', function (req, res) {

    if (req.session.data['more-transferee-addresses-genericradiogroup'] == null || req.session.data['add-info'] == null) {
        //radios unselected
        res.redirect("trailing-info_1-2-error")//redirect to self

    } else if (req.session.data['add-info'] == 'yes') {

        res.redirect("trailing-info_1-4")         
        
    } else {
        res.redirect("trailing-info_1-6") 
    }
})

router.post('/trailing-info_1-1-error-radios', function (req, res) {

    if(req.session.data['add_transferee_btn'] == 'Add transferee'){//add another btn

        if (req.session.data['forenames0'] == '' || req.session.data['surname0'] == '') {//1 or more inputs are empty

            res.redirect("trailing-info_1-1-error-radios")//res.redirect("https://www.gov.uk")

        } else {

            res.redirect("trailing-info_1-1-add-transferee")

        }

    }else{ //main form submit
        
        if (req.session.data['forenames0'] == '' || req.session.data['surname0'] == '') {//1 or more inputs are empty

            res.redirect("trailing-info_1-1-error-radios")//res.redirect("https://www.gov.uk/browse/births-deaths-marriages")

        }

    }
})

router.post('/trailing-info_1-1-add-transferee-error-radios', function (req, res) {//if 'add transferee' selected: this pg has 2 inputs for 2 transferees

    if (req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-0'] == null || req.session.data['CONFIRM-TRANSFEREE-APPLICANTS_transferee-1'] == null) {//select the radios, if user selects type Company (validation only on Private); on transferee 1 or 2

        res.redirect("trailing-info_1-1-add-transferee-error-radios")

    } else if (req.session.data['forenames0'] == '' || req.session.data['surname0'] == '' || req.session.data['forenames1'] == '' || req.session.data['surname1'] == '') {//passed radios checks, now check all inputs for 1 and 2 have values

        res.redirect("trailing-info_1-1-add-transferee-error-radios")    

    } else {//passed validation > next (add address for service)

        res.redirect("trailing-info_1-2")

    }
})

router.post('/trailing-info_1-2', function (req, res) {//address for service page

    if (req.session.data['more-transferee-addresses-genericradiogroup'] == null || req.session.data['add-info'] == null) {
        
        res.redirect("trailing-info_1-2")//submit to self for form error msgs to display

    } else {//passed validation > next 

        res.redirect("trailing-info_1-3")

    }
})

router.post('/trailing-info_1-2-add-address1', function (req, res) {//address for service page

    if (req.session.data['0-address-not-found-component'] == 'True') {//cannot find address is selected
        
        res.redirect("trailing-info_1-3")

    } else if (req.session.data['addressSearch0'] == '') {  
        
            res.redirect("trailing-info_1-2-add-address1-error")//error msg "Enter a UK postcode"

    } 
         
})

router.post('/trailing-info_1-2-add-address1-error', function (req, res) {//address for service error page

    if (req.session.data['addressSearch0'] == '' && req.session.data['0-address-not-found-component'] != 'True') {

        res.redirect("trailing-info_1-2-add-address1-error")// redirect to self

    } else if (req.session.data['addressSearch0'] != '' && req.session.data['0-address-not-found-component'] != 'True') {//postcode has input

        res.redirect("trailing-info_1-2-address-found")// redirect to page with address select list

    } else if (req.session.data['0-address-not-found-component'] == 'True') {//[sic] cannot find address is selected
        
        res.redirect("trailing-info_1-3")

    }         
})

router.post('/trailing-info_1-2-address-found', function (req, res) {

    if (req.session.data['0-address-not-found-component'] == 'True') {//cannot find address is selected
        
        res.redirect("trailing-info_1-3")

    } else if (req.session.data['addressSearch0Select'] == '') {  
        
            res.redirect("trailing-info_1-2-address-found-error")//error msg 'Select an address'

    } else if (req.session.data['transferee-addresses-transferee-selection'] == '' && req.session.data['transferee-addresses-transferee-selection2'] == '') {  
    
        res.redirect("trailing-info_1-2-address-found-error")//error msg 'Select an address'            

    } else {

        res.redirect("trailing-info_1-3")

    }    

})

router.post('/trailing-info_1-2-address-found-error', function (req, res) {

    if (req.session.data['0-address-not-found-component'] == 'True') {//cannot find address is selected
        
        res.redirect("trailing-info_1-3")

    } else if (req.session.data['addressSearch0Select'] == '') {  
        
        res.redirect("trailing-info_1-2-address-found-error")//error msg 'Select an address'

    } else if (req.session.data['transferee-addresses-transferee-selection'] == '' && req.session.data['transferee-addresses-transferee-selection2'] == '') {  
    
        res.redirect("trailing-info_1-2-address-found-error")//error msg 'Select an address'          

    } else {

        res.redirect("trailing-info_1-3")

    }    

})

router.post('/trailing-info_1-3', function (req, res) {
    if (req.session.data['more-transferee-addresses-genericradiogroup'] == null || req.session.data['add-info'] == null) {
        
        res.redirect("trailing-info_1-3-error")

    } else if (req.session.data['add-info'] == 'yes') {

        res.redirect("trailing-info_1-4")         
    
    } else {
        res.redirect("trailing-info_1-6")
    }

})

router.post('/trailing-info_1-3-error', function (req, res) {
    if (req.session.data['more-transferee-addresses-genericradiogroup'] == null || req.session.data['add-info'] == null) {
        
        res.redirect("trailing-info_1-3-error")

    } else if (req.session.data['add-info'] == 'yes') {

        res.redirect("trailing-info_1-4")         
    
    } else {
        res.redirect("trailing-info_1-6")
    }

})

router.post('/trailing-info_1-4', function (req, res) {
    
    if (req.session.data['misc-info'] == '') { //the additional info textarea is empty
        
        res.redirect("trailing-info_1-4-error")

    } else if (req.session.data['transferee-addresses-transferee-selection'] == null && req.session.data['transferee-addresses-transferee-selection2'] == null) {  //no transferees selected
        
        res.redirect("trailing-info_1-4-error")

    } else {
        
        res.redirect("trailing-info_1-5")
        
    } 

})

router.post('/trailing-info_1-4-error', function (req, res) {
    
    if (req.session.data['misc-info'] == '') { //the additional info textarea is empty
        
        res.redirect("trailing-info_1-4-error")

    } else if (req.session.data['transferee-addresses-transferee-selection'] == null && req.session.data['transferee-addresses-transferee-selection2'] == null) {  //no transferees selected
        
        res.redirect("trailing-info_1-4-error")

    } else {
        
        res.redirect("trailing-info_1-5")
        
    } 

})

router.post('/trailing-info_1-5', function (req, res) {

    if (req.session.data['add-info2'] == null) {
        //radios unselected

        res.redirect("trailing-info_1-5-error")
        
    } else if (req.session.data['add-info2'] == 'yes') {

        res.redirect("trailing-info_1-4")         
        
    } else {
        res.redirect("trailing-info_1-6") 
    }

})

router.post('/trailing-info_1-5-error', function (req, res) {
    
    if (req.session.data['add-info2'] == null) {//radios unselected

        res.redirect("trailing-info_1-5-error")
        
    } else if (req.session.data['add-info2'] == 'yes') {

        res.redirect("trailing-info_1-4")         
        
    } else {
        res.redirect("trailing-info_1-6") 
    }

})

router.post('/trailing-info_1-6', function (req, res) {
    /* no error messaging logic added to this page, as it serves simply to return the user back to the pre-existing flow (adding some contex)*/

    /* using the modern gds kit - the 'ends.html' target is simply coded within the the action attr on the form element */

})


module.exports = router
