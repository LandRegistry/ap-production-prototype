/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

	// ********************************
	// ** document storage page data **
	// ********************************
  "doc1-name": "AP1",
  "doc1-date-day": "1",
  "doc1-date-month": "9",
  "doc1-date-year": "2020",
  "doc2-name": "TP1",
  "doc2-date-day": "1",
  "doc2-date-month": "9",
  "doc2-date-year": "2020",
  "doc3-name": "Death certificate",
  "doc3-date-day": "1",
  "doc3-date-month": "9",
  "doc3-date-year": "2020",
  "doc4-name": "Marriage certificate",
  "doc4-date-day": "1",
  "doc4-date-month": "9",
  "doc4-date-year": "2020",


  "doc-types": [
    "Abstract",
    "Agreement",
    "Application Form",
    "Assent",
    "Assignment",
    "Charge",
    "Commonhold",
    "Commonhold Community Statement",
    "Complaint Record ",
    "Conveyance",
    "Correspondence",
    "Court Order ",
    "Customer Correspondence",
    "Death Certificate",
    "Deed",
    "Discharge",
    "Document List",
    "E383",
    "Evidence",
    "EX1",
    "EX1A",
    "EX3",
    "Fee Adjustment",
    "Identity",
    "Indemnity",
    "Indenture",
    "Investigation of Crime",
    "Land Registry Correspondence",
    "Land Transaction Tax",
    "Lease",
    "Licence",
    "Master Title Record",
    "Memorandum and Articles of Association",
    "Miscellaneous",
    "Order of the Registrar",
    "Plan",
    "Power of Attorney",
    "Register",
    "Restraint Order",
    "RQ",
    "Stamp Duty Land Tax",
    "Statement of Truth",
    "Statutory Declaration",
    "Sub-Charge",
    "Surrender of Development Rights",
    "Termination Document",
    "Transfer",
    "Witness Statement (3rd Party)",
    "Witness Statement (LR Staff)"
  ]
  // ** end block **

}
