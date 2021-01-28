/*  CCC140404 Created to contain field level help for the Forms Admin tool (editFormDetails.jsp)
    Code there matches the field IDs to the names below.  Hovering over the field displays the help text.
    Can be extended to any UI with the addition of more help groups.

    Originally we planned to look for the ID of the control (less "db-" or "X-" in the help document.
    That failed because of the common words used in the IDs (useful elsewhere, but deadly here).
    So we've added 2 specializations.
    "&search='word'"
    "#page=n"
    Each of these has a downside.  The &search function will not match a phrase.  Enter two words, you get 2 searches.
    The #page will always show the correct page, but not necessarily the part the user wants to see.
    A separate option is an explicit window.open().  Necessary for references outside the default help document.

    The format for fields is:
        "someFieldName" : "Sample hover text",
        "someFieldNameQ" : "&search='hover'",
                - or -
        "someFieldNameQ" : "#page=5",

        The function at the bottom is to isolate the code that creates the help search text.
    Eric intends to add cross-referencing code later, so the function needs to be unique.
 */

const helpStrings = {
    "version" : "1.0",
    "encoding" : "UTF-8",
    "editFormDetails" : {
        "revised" : "created 140404, last updated CCC140505",
        "helpDoc": "https://docs.google.com/document/d/1ln8iJiZo0NPKvMVbA_3rbFanIqfkRP-m1YZ_aEXBrQ8/preview",
        "replacePdf": "Upload a PDF file.",
        "replacePdfQ": "https://docs.google.com/document/d/1_Z6L2w0Tt4rhYgPT-YwvDHRQWFWvTXnJXuq9epQD29o/preview", //IR20201023
        "btnExportMobileTemplate" : "Create a package to use this and other forms on a mobile device",
        "btnExportTemplate" : "Package this form in a PDF file to import into another organization",
        "btnGoMobile" : "View this form as it will appear in HTML on a mobile device",
        "btnUpdateMobile" : "Prepare and view this form as it will appear in HTML on a mobile device",
        "btnUploadLogo" : "Upload a JPG, PNG, or GIF file containing an image of the logo",
        "btnUploadSignature" : "Upload a JPG, PNG, or GIF file containing an image of the signature",
        "buttonIdPrepop" : "Populate the fields on the document from this ID.",
        "buttonIdPrepopSendTo" : "Send the document here (user can change this before sending).",
        "buttonURL" : "Create a button containing this text to send this document.",
        "buttonURLQ" : "window.open('{!sfServer}/p/setup/link/ActionButtonLinkList?pageName=Case&type=Case','sfhelp','resizable=1,menubar=1')",
        "db-BATES" : "Unique identifier for buttons and workflows",
        "db-BATESQ" : "&search='Form Label ?'",
        "db-BATESV" : "^[A-z0-9_]+_Form", //ERS170624 //ERS190325 #52351 missing the ^
        "db-comments" : "Why does this form exist?",
        "db-label" : "Appears in lists of form names",
        "db-labelQ" : "&search='FormName'",
        "db-readers" : "These zPaper users can use this form",
        "db-readersV" : "^:[\-\.:0123456789]+:$", //ERS170624 //ERS190325 #52351 get into formsMain.jsp
        "db-users" : "These zPaper users can edit this form",
        "db-usersQ" : "&search='FormUser'",
        "db-usersV" : "^:[\-\.:0123456789]+:$", //ERS170624
        "kbFunctionSelect" : "These functions can be used to control display of field data",
        "mapName" : "Field name appearing in the PDF",
        "mappedPath" : "Content placed in the form to interpret this field",
        "modal-instructions-integrated" : "",
        "modal-instructions-interactive" : "",
        "modal-instructions-none" : "",
        "refreshSFSession" : "Click after add/removing fields in Salesforce",
        "sObjects_0" : "Field or relationship in the Salesforce object",
        "source" : "Repository for the field data appearing on this form",
        "sourceQ" : "&search='Pre-PopontotheForm'",
        "turboMergeTest" : "Create a sample form with this data",
        "X_activities" : "Additional records to create delivery Activities on. (e.g. $Account.Id$)",
        "X_afterSave" : "URL with SFID replaced or blank to edit again or 'view' to just display",
        "X_afterSaveDisplay" : "",
        "X_afterSavePrint" : "If you want a printed copy every time (not compatible with 'disable printing' below)",
        "X_noPrinting" : "If you want to disable printing of the form",
        "X_barcode" : "The field and location of the barcode (e.g. $sfID$@r585,10)",
        "X_captureURL" : "",
        "X_cID" : "Use the following formula to send a Salesforce email template: [Contact ID]-[email template ID]. To use an org wide email address, append -[org wide email id]. (e.g. {!Case.ContactId}-00XJ00000017zpH or {!Case.ContactId}-00XJ00000017zpH-0D2j00000008O) Add a fake field on the template under the Pre-Pop tab prior to using this functionality.", //IR200603 #64657 IR201016
        "X_cID0" : "ID for use in Communications Templates (e.g. $Case.ContactId$-00X3600000199I3)", //ERS160801 #27828
        "X_cIDQ" : "https://docs.google.com/document/d/1mx5DMkUANUvq_AzBQxSYEERi1DsKITsW6dMH-dtiSUU/preview",
        "X_customizingField" : "Field to search for in the static XML below",
        "X_dataSource" : "Prepop first time only (KBin) or every time (SFDC)",
        "X_dataURL" : "/myfileforce/getData.jsp",
        "X_folderID_org" : "Files in the Organization's inbox are available to the whole organization",
        "X_folderID_personal" : "Your personal inbox is private unless you are the primary user",
        "X_footer" : "Text to appear at the bottom of the cover sheet",
        "X_footerH" : "Footer height measured in picas",
        "X_footerW" : "Footer width measured in picas",
        "X_footerWQ" : "&search='Footer'",
        "X_footerX" : "Footer horizontal position measured in picas from the left margin",
        "X_footerXQ" : "&search='Footer'",
        "X_footerY" : "Footer vertical position measured in picas from the bottom margin",
        "X_formType" : "Fax,Coversheet,Preview=Send.  Form,HTML=Data capture",
        "X_formTypeQ" : "&search='FormType'",
        "X_formUser" : "This zPaper user ID created this form (can be $userID$)",
        "X_formUserQ" : "&search='Form User ?'",
        "X_header" : "Text to appear at the top of the cover sheet",
        "X_lockWith" : "A field to use as a PIN to encrypt this document, (e.g. $Account.PIN$ or IGNORE)", //ERS160802
        "X_lockWithQ" : "&search='Advanced'",
        "X_logoScale" : "Enlarge or reduce the size of the logo by this percentage",
        "X_logoURL" : "JPG, PNG, or GIF file containing the logo image",
        "X_logoURLQ" : "&search='Logo'",
        "X_logoX" : "Logo horizontal position measured in picas from the left margin",
        "X_logoY" : "Logo vertical position measured in picas from the bottom margin",
        "X_logoPage" : "On which page of this document does the logo appear?",
        "X_mobileHeight" : "Only US Letter (8.5x11) and Legal (8.5x14) currently supported",
        "X_mobileHeightQ" : "&search='Mobile'",
        "X_newSentStatus" : "Saving a capture form sets this value for workflow triggers",
        "X_pdfAction" : "Perform this action on the form sent to PDF URL",
        "X_pdfURL" : "URL to use for remotely generated PDFs where $crmId$ is replaced by the active ID and $sfServer$ by the active Force.com server (e.g. na53)", //ERS170415 #36189
        "X_prePopType" : "Salesforce object supplying data to this form",
        "X_prePopTypeQ" : "window.open('resources/images/DataTemplateManagement.pdf#page=3','sfhelp','resizable=1,menubar=1')",
        "X_preProcJS": "This section contains optional Javascript code and SOQL queries, for enriching the data to be merged into the form template.",
        "X_preProcJSQ": "https://docs.google.com/document/d/1kJ3qSFFtvyzVzCpNBic7TmB4bl3RUfqsnimGUPMPD3o/preview",
        "X_Readers" : "These zPaper users can use this form after it has been filled out. Leave this blank to make filled-out forms private.",
        "X_saveOrg" : "This Salesforce organization may use this form (can be $sfOrg$)",
        "X_saveOrgQ" : "&search='Advanced'",
        "X_saveURL" : "",
        "X_sendTo" : "Destination fax number or email (e.g. $Account.Fax$ or $Contact.Email$)",
        "X_sendToQ" : "",
        "X_setSentStatus" : "Whether or not to set the status for capture forms",
        "X_signPage" : "On which page of this document does the signature appear?",
        "X_signScale" : "Enlarge or reduce the size of the signature by this percentage",
        "X_signURL" : "JPG, PNG, or GIF file containing the signature image",
        "X_signURLQ" : "&search='Signature'",
        "X_signX" : "Signature horizontal position measured in picas from the left margin",
        "X_signXQ" : "&search='Signature'",
        "X_signY" : "Signature vertical position measured in picas from the bottom margin",
        "X_staticXML" : "Predefined XML",
        "X_staticXMLQ" : "#page=3",
        "X_statusType" : "Document type for workflow and barcode purposes",
        "X_statusTypeQ" : "&search='Advanced'",
        "X_Users" : "These zPaper users can edit this form after it has been filled out. Leave this blank to make filled-out forms private",
        "X_readOnly" : "List of field names.",
        "X_readOnlyV": "^,.*,$", //ERS170930
        "zz_endOfList" : "this keeps the commas happy" //ERS140430
    },
    "markup": {
        "help-button": "Click here for more information.",
        "help-buttonQ": "https://docs.google.com/document/d/12g7RmfY17FAl5VfzbfcMSZi5DuCEFToi9OlDhc6En9k/preview",
        "zz_endOfList" : "this keeps the commas happy" //ERS140430
    },
    "massFaxBin" : {
        "revised" : "this section created 20141008, last updated MSH 20141015",
         // the path here is relative to the directory of massFaxBin; massFaxBin is in the jsp directory
        "helpDoc" : "../zp/resources/images/Broadcasts.pdf",
        "additionalToText" : "Enter additional emails or fax numbers separated by comma. Use the lookup button to search for Accounts, Contacts, or Leads in Salesforce.",
        "additionalToTextQ" : "&search='additional'",
        "attachFile" : "Upload the file into the Notes & Attachments section of the Salesforce record.",
        "attachFileQ" : "&search='attachments'",
        "attachSource" : "Select file source. Select Salesforce to choose a document from the Documents object, or Attachments to choose a file attached to this Salesforce record.",
        "attachSourceQ" : "&search='attach'",
        "contactName_0" : "This label will appear in the Attention: section of the fax cover page.",
        "coverID" : "Select a barcode and coversheet option.",
        "coverIDQ" : "&search='coversheet'",
        "jobTitle" : "This title will be saved in the Salesforce activity history.",
        "jobTitleQ" : "&search='history'",
        "protectEmailAttachment" : "Enter a password to encrypt the document. Note that this will not supersede any existing PDF-level encryption.",
        "signNow" : "Apply a digital signature to the document. Enter the page number on which the signature should appear. In order to use this feature, you must have a digital signature established. Contact support@zpaper.com for further information.",
        "signNowQ" : "&search='signature'",
        "startPageFile0" : "Select a range of pages to send. To send the entire document, enter 1-999.",
        "startPageFile0Q" : "&search='range'",
        "startPageWeb0" : "Select a range of pages to send. To send the entire document, enter 1-999.",
        "startPageWeb0Q" : "&search='range'",
        "UserEmail" : "Enter notification emails separated by commas.",
        "UserEmailQ" : "&search='notify'",
        "X_faxTSI" : "Use this field to include additional text on every page of the document.",
        "X_faxTSIQ" : "&search='header'",
        "X_notifyBy" : "Select a method by which to receive delivery notification.",
        "X_notifyByQ" : "&search='notification'",
        "X_notifySubject" : "This is the subject of the completed Task that will be saved in Salesforce after the fax or email is delivered.",
        "X_notifySubjectQ" : "&search='notification'",
        "X_sendAt" : "Send this document at a future date.",
        "X_sendAtQ" : "#page=5",
        "emailText" : "Single email address", //ERS170927 added validation here
        "emailTextV" : "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}",
        "faxText" : "Domestic phone (e.g. 14045551212)", //ERS170927 added validation here
        "faxTextV" : "^1[0-9]{10}", //ERS170927 added validation here
        "zz_endOfList" : "this keeps the commas happy" //ERS140430
    },
    "sendADoc" : {
        "revised" : "created 20141029",
        "helpDoc" : "https://docs.google.com/document/d/1ZWI4ZbDaP5XiFbIGK5eE0Xl3i509-5cYBf3e6kSqxzw/preview",
        "additionalToText" : "Enter additional emails or fax numbers separated by comma. Use the lookup button to search for Accounts, Contacts, or Leads in Salesforce.",
        "additionalToTextQ" : "&search='additional'",
        "attachFile" : "Upload the file into the Notes & Attachments section of the Salesforce record.",
        "attachFileQ" : "",
        "attachSource" : "Select file source. Select Salesforce to choose a document from the Documents object, or Attachments to choose a file attached to this Salesforce record.",
        "attachSourceQ" : "&search='attach'",
        "contactName_0" : "This label will appear in the Attention: section of the fax cover page.",
        "coverID" : "Select a barcode and coversheet option.",
        "coverIDQ" : "&search='coversheet'",
        //MSH170626  regex = /\/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}\/i/
        "emailText" : "Single email address", //ERS170927 added validation here
        "emailTextV" : "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}",
        "faxText" : "Domestic phone (e.g. 14045551212)", //ERS170927 added validation here
        "faxTextV" : "^1[0-9]{10}", //ERS170927 added validation here
        "jobTitle" : "This title will be saved in the Salesforce activity history.",
        "jobTitleQ" : "&search='history'",
        "protectEmailAttachment" : "Enter a password to encrypt the document.",
        "signNow" : "Apply a digital signature to the document. Enter the page number on which the signature should appear. In order to use this feature, you must have a digital signature established. Contact support@zpaper.com for further information.",
        "signNowQ" : "&search='signature'",
        "startPageFile0" : "Select a range of pages to send. To send the entire document, enter 1-999.",
        "startPageFile0Q" : "&search='range'",
        "startPageWeb0" : "Select a range of pages to send. To send the entire document, enter 1-999.",
        "startPageWeb0Q" : "&search='range'",
        "UserEmail" : "Enter notification emails separated by commas.",
        "UserEmailQ" : "&search='notify'",
        "noMarkupFile" : "Check this box to remove any markup from the document before forwarding.",
        "X_faxTSI" : "Use this field to include additional text on every page of the document.",
        "X_faxTSIQ" : "&search='header'",
        "X_notifyBy" : "Select a method by which to receive delivery notification.",
        "X_notifyByQ" : "&search='notification'",
        "X_notifySubject" : "This is the subject of the completed Task that will be saved in Salesforce after the fax or email is delivered.",
        "X_notifySubjectQ" : "&search='notification'",
        "X_sendAt" : "Send this document at a future date.",
        "X_sendAtQ" : "window.open('../zp/resources/images/Broadcasts.pdf#page=5', 'zHelp', 'width=800,height=800,resizable=1')",
        "zz_endOfList" : "this keeps the commas happy" //ERS140430
    },
    "zproInstall" : {
        "revised" : "created 20150625",
         // the path here is relative to the directory of massFaxBin; massFaxBin is in the jsp directory
        "helpDoc" : "resources/images/zProInstallation.pdf",
        "primary" : "Link this Salesforce org to zPaper",
        "primaryQ" : "&search='primary'",
        "additional" : "Give additional users zPaper permission",
        "additionalQ" : "&search='additional'",
        "zPaperHome" : "Add the zPaperHome component to your home page layout",
        "zPaperHomeQ" : "&search='zPaperHome'",
        "interface" : "Set the zPaperHome component to show on all pages",
        "interfaceQ" : "&search='interface'",
        "upload" : "Ensure proper handling for file types",
        "uploadQ" : "&search='upload'",
        "zz_endOfList" : "this keeps the commas happy" //ERS140430
    },
    "zpInstall" : { //ERS190316 #57258 git2org
        "revised" : "created 20190316",
         // the path here is relative to the directory of massFaxBin; massFaxBin is in the jsp directory
        "helpDoc" : "resources/images/zpInstallation.pdf",
        "primary" : "Link this Salesforce org to zPaper",
        "primaryQ" : "&search='primary'",
        "additional" : "Give additional users zPaper permission",
        "additionalQ" : "&search='additional'",
        "zPaperHome" : "Add the zPaperHome component to your home page layout",
        "zPaperHomeQ" : "&search='zPaperHome'",
        "interface" : "Set the zPaperHome component to show on all pages",
        "interfaceQ" : "&search='interface'",
        "upload" : "Ensure proper handling for file types",
        "uploadQ" : "&search='upload'",
        "accelerate" : "Import solution components",
        "accelerateQ" : "javascript:alert('Coming soon!')", //ERS190316 TODO solution case cards
        "zz_endOfList" : "this keeps the commas happy" //ERS140430
    },
    "configWiz": {
        "helpDoc": "zPaper Configuration Wizard.pdf",
        "loginToSandbox": "Select this option if you are installing into a non-Production (and non-Development) Org",
        "accVerifyOrg": "This Salesforce Organization will be initialized -- if this is not the correct Org, please Logout and select another...",
        "accVerifyOrgQ": "#nameddest=Verify your Organization",
        "accConnectedApp": "Ensures that the zPaper Connected Apps are installed and configured correctly, before proceeding",
        "accConnectedAppQ": "#nameddest=Connected App Setup",
        "accSiteSecurity": "Defines a list of zPaper servers that will have access to this Salesforce Organization",
        "accSiteSecurityQ": "#nameddest=Site Security Settings",
        "accFileSecurity": "Determines how PDF and HTML file downloads will be securely handled",
        "accFileSecurityQ": "#nameddest=File Security Settings",
        "accCustomSettings": "Various custom settings used to initialize the zPaper Connected App",
        "accCustomSettingsQ": "#nameddest=zPaper Custom Settings",
        "accMasterGroup": "Connection information used to initialize the zPaper Integration User and Master Group",
        "accMasterGroupQ": "#nameddest=zPaper Integration User",
        "accBaseAccelerator": "Installs the zPaper Base Channel definitions, Action rules, and Page layouts",
        "accBaseAcceleratorQ": "#nameddest=zPaper Base Accelerator",
        "accNextSteps": "If your Org has already been configured, you can skip directly to installing additional Accelerators here...",
        "zz_endOfList": "this keeps the commas happy" //ERS140430
    },
    "installWiz": {
        "helpDoc": "zPaper Installation Wizard.pdf",
        "accVerifyOrg": "Step 1 - Install",
        "accVerifyOrgQ": "https://static.zpaper.com/docs/zPaper+Configuration+Wizard.pdf#nameddest=Verify+your+Organization",
        "accInstaller": "Step 2 - ???",
        "accConfigure": "Step 3 - Profit!",
        "zz_endOfList": "this keeps the commas happy" //ERS140430
    }
};

//SHR201019 Moved the document.ready() function here
/**
 * This function activates the help.js behavior for the current page. It is intended to be called
 * from each UI page, passing in the name of the section of help to be used (e.g. 'editFormDetails').
 * This way, the same behavior can be enabled for our LWC OSS app UI pages, as well as the zPaper application.
 * Optional argument 2 - a web component, whose shadowRoot will be updated with its help strings.
 **/
function activateHelp(section, component) {
    let helpType = component ? 'component' : 'page';
    if (!section) {
        console.warn(`Help Section name is required! Help will not be activated for this ${helpType}`);
        return;
    }
    let detailHelp = helpStrings[section];
    if (!detailHelp) {
        console.warn(`Help Section '${section}' not found! Help is not activated for this ${helpType}`);
        return;
    }

    let root = component && component.shadowRoot || document;
    // Find all the keys (other than 'helpDoc') that don't end with 'Q' or 'V'
    let helpIds = Object.keys(detailHelp).filter(key => key !== 'helpDoc' && !/[QV]$/.test(key));
    for (let helpId of helpIds) {
        // set the help string on the title on the input element
        let titleString = detailHelp[helpId];
        let $ele = $(root.getElementById(helpId));
        $ele.attr('title', titleString);

        // set a validation function on the input field, if specified
        let regexString = detailHelp[`${helpId}V`];
        if (regexString) {
            $ele.attr("onchange", `verify(this, '${regexString}')`);
        }

        // also set the title on the corresponding '?' icon, if found
        let $eleQ = $(root.getElementById(helpId + 'Q'));
        $eleQ.attr("title", titleString);

        // finally, apply any query string to the '?' icon's click handler
        let queryString = detailHelp[`${helpId}Q`] || "";
        if (queryString) {
            $eleQ.addClass('helpDoc');
        }

        if (queryString.startsWith("&search=")) {
            // pass the keyword search string with surrounding single-quotes
            $eleQ.attr("onclick", `showHelpDoc('${section}', ${queryString.substring(8)})`);
        }
        else if (queryString.startsWith('alert(')) {
            // pass the alert message as is
            $eleQ.attr("onclick", queryString);
        }
        else if (queryString.startsWith('window.open(')) {
            // cannot lookup sf server from here... so try the window's hostname?
            $eleQ.attr("onclick", queryString.replace("{!sfServer}", window.location.hostname));
        }
        else {
            // lookup the help section by element id
            $eleQ.attr("onclick", `showHelpDoc('${section}', this.id)`);
        }
    }
}

//ERS170624 BATESV must be *[A-z0-9_]_Form #39233 check out https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//testing at http://www.regular-expressions.info/javascriptexample.html
//MSH170626 function verify(ele,expression) { //ERS170624 #39233
function verify(ele, expression) { //ERS170624 #39233
    let eleValue = ele.value; //ERS170825 TODO handle selects
    let re = new RegExp(expression); //ERS170624 TODO MSH to add some others in massFaxBin.jsp, etc and try more regex enforcement
    //MSH170626 if (!ele.value.match(re)) {
    //alert("element = " + ele);
    //alert("element value = " + eleValue);
    //alert("re.test = " + re.test(eleValue));
    //if (!ele.value.test(re)) {
    if (!re.test(eleValue)) { //ERS170825 he said...she said...he said
        // eslint-disable-next-line no-alert
        alert(eleValue + " not valid. (" + expression + ")");
        return false;
    }
    return true;
}

// The search text for the help PDF is the ID of the field, stripped of leading "db-" or "X_" or trailing "Q".
function getKeyForHelpSearch(helpID) {
    let result = helpID;
    if (result.startsWith("db-"))
        result = result.substring(3);
    if (result.startsWith("X_"))
        result = result.substring(2);
    if (result.endsWith("Q"))
        result = result.substring(0, result.length - 1);
    return result;
}

// eslint-disable-next-line no-unused-vars
function showHelpDoc(helpName, helpId) {
    let helpDetails = helpStrings[helpName];
    if (helpDetails) {
        if (helpDetails.helpDoc) {
            let winUrl = helpDetails.helpDoc.replace(/ /g, '+');
            if (!winUrl.startsWith("http")) {
                winUrl = `https://static.zpaper.com/docs/${winUrl}`;
            }

            let searchParam = helpDetails[helpId];
            if (searchParam.startsWith("#")) {
                winUrl += searchParam.replace(/ /g, '+');
            }
            else if (searchParam.startsWith('http')) {
                winUrl = searchParam;
            }
            else {
                searchParam = getKeyForHelpSearch(helpId);
                winUrl += `#page=1&search="${searchParam}"`;
            }
            console.info('Opening helpDoc =>', winUrl);

            let win = window.open(winUrl, 'zHelp', 'width=800,height=800,resizable=1');
            if (win) {
                win.focus();
            }
            else {
                // eslint-disable-next-line no-alert
                alert("Popup window blocked...");
            }
        }
        else {
            // eslint-disable-next-line no-alert
            alert("No help file found for " + helpName);
        }
    }
    else {
        // eslint-disable-next-line no-alert
        alert(helpName + " not found in help documentation.");
    }
    window.event.stopPropagation(); //SHR210125 stop event propagation
}

//*********************************************************************************************************************
//* editFlow.jsp help with functions
//* CRN170621 - Case #39024 Moving code from editFlow so that users can update the help content more easily
//*********************************************************************************************************************
//SHR201117 ZP-444 Help text for all functions and document properties
const functionHelpList = {
    addJSONReturn: "addJSONReturn(doc, arrayOfPairs);",
    addPostExecutionScript: "addPostExecutionScript(doc, script);",
    addToIndex: "addToIndex(doc, indexPath, dirPath, createNew, lastUpdated);",
    addToStackFolder: "addToStackFolder(doc);",
    alert: "alert(msg, forceDebug);",
    attach: "attach(doc, label, sfID, notAutoAttach);",
    attachQ:
        "Attach the doc to a Salesforce Record\n" +
        "Function: attach(doc, label, sfID, notAutoAttach)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "label: optional label that is displayed in Notes and Attachments related list\n" +
        "sfID: optional ID of Salesforce record to attach to\n" +
        "notAutoAttach: optional boolean value that indicates whether the attachment is considered automatic\n\n" +
        "If optional parameters are not supplied, they will be pulled from current doc values, except for notAutoAttach which defaults to false",
    cleanupDirectory: "cleanupDirectory(doc, rootDirKey, directory);",
    clearEvent: "clearEvent(doc, eventName);",
    create: "create(doc, UrlOrFormID, arrayOfPairs, existingID);",
    createAndAttach: "createAndAttach(doc, sfType, attachLabel, arrayOfPairs);",
    createAndAttachQ:
        "Create a new Salesforce record and attach the current doc to the new record\n" +
        "Function: createAndAttach(doc, sfType, attachLabel, parmsArray)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "sfType: Salesforce record type (Contact,Account,etc)\n" +
        "attachLabel: label to be displayed in Notes and Attachments related list\n" +
        "parmsArray: optional array of name/value pairs of fields to update on the created record",
    createDirectory: "createDirectory(doc, destKey, destDir);",
    createFolder: "createFolder(doc, parentFolder, newFolder, newFolderLabel);",
    createSFRecord: "createSFRecord(doc, sfType, name, arrayOfPairs);",
    createSFRecordQ:
        "Create a new Salesforce record\n" +
        "Function: createSFRecord(doc, sfType, name, arrayOfPairs)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "sfType: Salesforce record type (Contact,Account,etc)\n" +
        "name: text to set Name field of Salesforce record to\n" +
        "arrayOfPairs: name/value pairs of field values to set in new Salesforce record\n\n" +
        "All parameters are required.",
    documentContainsTerm: "documentContainsTerm(doc, dbId, term);",
    execSOQLQuery: "execSOQLQuery(doc, sfq, replValues);",
    formatDate: "formatDate(s, f, noDefault);",
    formatPhone: "formatPhone(phone);",
    getAlternateBarcodeOne: "getAlternateBarcodeOne(doc);",
    getAttachmentsForSFRecord: "getAttachmentsForSFRecord(doc, sfObjectId);",
    getBarcodeOne: "getBarcodeOne(doc);",
    getCurDate: "getCurDate(doc, notFormatted);",
    getCurDateQ:
        "Retrieve the current date.\n" +
        "getCurDate(doc, notFormatted)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "notFormatted: optional boolean flag to indicate whether the return value should be formatted or not; defaults to false\n\n" +
        "If notFormatted parameter is false, the format of the returned date string is: YYYY-MM-DD, else the format is YYYYMMDD",
    getCurDateAndTime: "getCurDateAndTime(doc, notFormatted, notInGMT, useSalesforcePreferredTZ);",
    getCurDateAndTimeQ:
        "Retrieve the current date and time (GMT). \n" +
        "getCurDateAndTime(doc, notFormatted, notInGMT, useSalesforcePreferredTZ)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "notFormatted: optional boolean flag to indicate whether the return value should be formatted or not; defaults to false\n" +
        "notInGMT: use Eastern Time (unless overridden by useSalesforcePreferredTZ paramete below if true, else use GMT; defaults to false\n" +
        "useSalesforcePreferredTZ: use the users Salesforce preferred timezone if true, else use GMT; defaults to false\n\n" +
        "If notFormatted parameter is false, the format of the returned date/time string is: YYYY-MM-DDTHH:mm:ss.SSS z, else the format is YYYYMMDDHHmmssSSS",
    getCustomSettings: "getCustomSettings(doc);",
    getFullDocText: "getFullDocText(doc);",
    getSFField: "getSFField(doc, sfType, field, sfq, sfId);",
    getSFFieldQ:
        "Retrieve a single field from a Salesforce record\n" +
        "Function: getSFField(doc, sfType, field, sfq, sfId)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "type: Salesforce record type (Contact,Account,etc)\n" +
        "field: name of field value to retrieve\n" +
        "where: optional where clause for SOQL query\n" +
        "sfId: optional Salesforce Id of record to pull from\n\n" +
        "If optional parameters are not supplied, they will be pulled from current doc values. The 'sfq' and 'sfId' parameters are mutually exclusive. Use 'sfq' to query for the record to pull field values from or use 'sfId' to pull from a specific record.",
    getSFFields: "getSFFields(doc, sfType, fields, sfq, sfId);",
    getSFFieldsQ:
        "Retrieve field values from a Salesforce record\n" +
        "Function: getSFFields(doc, type, fields, sfq, sfId)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "type: Salesforce record type (Contact,Account,etc)\n" +
        "fields: array of names of fields to retrieve\n" +
        "sfq: optional where clause for SOQL query\n" +
        "sfId: optional Salesforce Id of specific record to pull from\n\n" +
        "If optional parameters are not supplied, they will be pulled from current doc values. The 'sfq' and 'sfId' parameters are mutually exclusive. Use 'sfq' to query for the record to pull field values from or use 'sfId' to pull from a specific record.",
    getSFKeyPrefix: "getSFKeyPrefix(doc, sfObjectName);",
    getSFPreferredCurDateAndTime: "getSFPreferredCurDateAndTime(doc, notFormatted);",
    getSFRecordID: "getSFRecordID(doc, sfType, searchFieldsJSON);",
    getSFRecordIDQ:
        "Look up a Salesforce record's Id via SOQL query\n" +
        "Function: getSFRecordID(doc, sfType, searchFields)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "sfType: Salesforce record type (Contact,Account,etc)\n" +
        "searchFields: JSON object that specifies name/value search pairs that will be used to build the SOQL query\n\n" +
        "All parameters are required.",
    getSFType: "getSFType(doc, sfId);",
    getStepCompleted: "getStepCompleted(doc);",
    gmtFormatted: "gmtFormatted(doc, fld);",
    hideDocument: "hideDocument(doc);",
    hideDocumentQ:
        "Hide the document.\n" +
        "getCurDate(doc, notFormatted)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n\n" +
        "This command will hide the currently-visible document (blank-out the document window) upon return from the rules engine invocation.",
    isDocumentLocked: "isDocumentLocked(doc);",
    lockDocument: "lockDocument(doc);",
    moveDocument: "moveDocument(doc, fromFolder, toFolder);",
    moveDocumentByType: "moveDocumentByType(doc, fromFolder, toFolder, type);",
    moveFolder: "moveFolder(doc, fromFolder, toFolder, folder);",
    moveHomeFolder: "moveHomeFolder(doc, fromFolder, toFolder);",
    parseUTC: "parseUTC(dateAsString, hours);",
    pdf2tiff: "pdf2tiff(doc, pdfFile);",
    pdfAppend: "pdfAppend(doc, appendToID, appendToURL, wddata);",
    pdfToText: "pdfToText(doc, fileName, tempFile);",
    push: "push(doc, tokenOrSFid, msg, link);",
    pushQ:
        "Send an Apple push message\n" +
        "Function: push(doc, tokenOrSFid, alert, link)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "tokenOrSFid: Apple push token (or Id of Salesforce record to pull token from)\n" +
        "alert: text of message to send\n" +
        "line: url link to send in message",
    readFile: "readFile(doc, srcKey, srcFile);",
    reloadByBATES: "reloadByBATES(doc, bates);",
    reloadById: "reloadById(doc, dbID);",
    removeDocumentByStatus: "removeDocumentByStatus(doc, fromFolder, status);",
    removeFolder: "removeFolder(doc, folder);",
    removeWhiteSpace: "removeWhiteSpace(doc, str);",
    renameFile: "renameFile(doc, destKey, oldFileName, newFileName);",
    saveDEPanelValues: "saveDEPanelValues(doc);",
    saveToDB: "saveToDB(doc);",
    saveToDBQ:
        "Persist the current state of the document to the zPaper database\n" +
        "Function: saveToDB(doc)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit",
    searchIndex: "searchIndex(doc, index, term);",
    send: "send(doc, sfID, outboundTemplateId);",
    sendEmail: "sendEmail(doc, from, to, subject, body);",
    sendSMS: "sendSMS(doc, from, to, body);",
    setDocumentContext: "setDocumentContext(doc, newDbID);",
    splitDocument: "splitDocument(doc, pageRange, arrayOfPairs, preserveDocState);",
    splitDocumentQ:
        "Split the current document into multiple documents\n" +
        "Function: splitDocument(doc, pageRange, arrayOfPairs, preserveDocState)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "pageRane: string containing comma-separated page numbers to split out\n" +
        "arrayOfPairs: optional array of zPaper database fields to set in the split document(s)\n" +
        "preserveDocState: optional flag that whether the document context should be preserved, defaults to true. See NOTE below\n\n" +
        "NOTE: after the current document is split, the code that operates after the splitDocument() call can be operating in either the new split document's context (if preserveDocState parameter is false) or in the original parent document's context (if preserveDocState parameter is true). That means that all global variables (kbData, dbID, etc) refer to either the split-off child document or the original parent document.",
    splitDocumentAndCreateAndAttach: "splitDocumentAndCreateAndAttach(doc, pageRange, sfType, attachLabel, parmsArray);",
    splitDocumentAndCreateAndAttachQ:
        "Split the current document into multiple documents and attach the split documents to new Salesforce records\n" +
        "Function: splitDocumentAndCreateAndAttach(doc, pages, sfType, attachLabel, parmsArray)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "pages: string containing comma-separated page numbers to split out\n" +
        "attachLabel: label to apply to Salesforce attachment\n" +
        "arrayOfPairs: optional array of zPaper database fields to set in the split document(s)\n\n" +
        "NOTE: after the current document is split, the code that operates after the splitDocumentAndCreateAndAttach() call will be operating in the original parent document's context. That means that all global variables (kbData, dbID, etc) refer to the original parent document.",
    splitDocumentForIndex: "splitDocumentForIndex(doc, op, pageRange, arrayOfPairs);",
    splitPDF: "splitPDF(doc, pageRange, destinationKey, destinationFolder, destinationFileName);",
    track: "track(doc, action, comment, numPages);",
    trackQ:
        "Add a tracking entry to the database\n" +
        "Function: track(doc, action, comment, numpages)\n" +
        "Parameters ============================== \n" +
        "doc: required - do not edit\n" +
        "action: the action that is being tracked\n" +
        "comment: extra information\n" +
        "numpages: number of pages that were affected (may be 0)\n\n" +
        "This command creates an entry in the zPaper tracking engine that documents an action that was taken.",
    unlockDocument: "unlockDocument(doc);",
    unlockFolder: "unlockFolder(doc, folder);",
    updateDB: "updateDB(doc, arrayOfPairs);",
    updateModified: "updateModified(doc);",
    updateSFRecord: "updateSFRecord(doc, sfType, sfID, arrayOfPairs);",
    updateStackProgress: "updateStackProgress(doc, isComplete);",
    wget: "wget(doc, Url, arrayOfPairs, arrayOfHdrs);",
    wgetQ:
        "Enable calling of zPaper web service\n" +
        "Function: wget(doc, Url, arrayOfPairs)\n" +
        "Parameters ==============================\n" +
        "doc: required - do not edit\n" +
        "Url: url of web service to call\n" +
        "arrayOfPairs: name/value pairs of parameters to send in webservice call",
    wordToText: "wordToText(doc, origFileName, tempFile);",
    wpost: "wpost(doc, url, parmsArrayOfPairs, headersArrayOfPairs, body);",
    writeFile: "writeFile(doc, destKey, destFile, contents);",
    writeWddataToXML: "writeWddataToXML(doc, templateXmlFileName, wddataFields, destKey, destFile);",
    writeXML: "writeXML(doc, templateXml, pairs, destinationKey, destinationFile, appendToFile);",
    X: "X(doc, n, xml);",
    XCustomSetting: "XCustomSetting(doc, n);",
    XDeploymentInfo: "XDeploymentInfo(doc, n);",
    XOrg: "XOrg(doc, str);",
    "zData.addStage": "zData.addStage(doc, arrOfPairs, stage);",
    "zData.clientStack": "zData.clientStack(doc, arrOfPairs);",
    "zData.clientFile": "zData.clientFile(doc, stage);",
    "zData.clientFields": "zData.clientFields(doc, arrOfPairs, jd, zd);",
    "zData.clientCase": "zData.clientCase(doc, arrOfPairs, label, zd);",
    "zData.clientPatient": "zData.clientPatient(doc, arrOfPairs, label, zd);",
    "zData.clientAccount": "zData.clientAccount(doc, arrOfPairs, label, zd);",
    "zData.clientRecord": "zData.clientRecord(doc, sfType, arrOfPairs, label, zd);",
    "zData.clientComplete": "zData.clientComplete(doc, arrOfPairs, zd);",
    "zData.clientDelivery": "zData.clientDelivery(doc, arrOfPairs);",
    "zData.clientChildStack": "zData.clientChildStack(doc, arrOfPairs, parentId);",
    "zData.clientStackComplete": "zData.clientStackComplete(doc, arrOfPairs, zd);",
    "zData.getStackId": "zData.getStackId(doc, ids, stackTypeName);",
    "zData.nameFile": "zData.nameFile(doc);",
    "zData.setBrandProgram": "zData.setBrandProgram(doc);",
    zipDirectory: "zipDirectory(doc, zipFolderKey, folderToZip, destinationKey, destinationFolder, zipName);"
};

const documentHelpList = {
    "BATES": "doc.BATES",
    "dbID": "doc.dbID",
    "deliveredFrom": "doc.deliveredFrom",
    "deliveredTo": "doc.deliveredTo",
    "fromFile": "doc.fromFile",
    "kbData.groupID": "doc.kbData.groupID",
    "kbData.userID": "doc.kbData.userID",
    "kbData.remoteUser": "doc.kbData.remoteUser",
    "kbData.sfSessionID": "doc.kbData.sfSessionID",
    "kbData.sfServer": "doc.kbData.sfServer",
    "kbData.sfOrganizationID": "doc.kbData.sfOrganizationID",
    "kbData.xAPIKey": "doc.kbData.xAPIKey",
    "label": "doc.label",
    "numPages": "doc.numPages",
    "readers": "doc.readers",
    "sfID": "doc.sfID",
    "sfUserID": "doc.sfUserID",
    "sfUserName": "doc.sfUserName",
    "stackNbr": "doc.stackNbr",
    "status": "doc.status",
    "url": "doc.url",
    "URL": "doc.URL",
    "users": "doc.users",
};

// eslint-disable-next-line no-unused-vars
function showFunctionHelp(ele) {
    let $dlgParent = $(ele).closest("#define-modal");
    let funcName = $(ele).find(":selected").text();
    let funcCall = functionHelpList[funcName] || "";
    let funcHelp = funcCall && functionHelpList[`${funcName}Q`] || "No function help text available";
    $dlgParent.find('#functionHelp').val(funcHelp);
    $dlgParent.find('#functionHelpDIV').show();
}
// eslint-disable-next-line no-unused-vars
function hideFunctionHelp(ele) {
    let $dlgParent = $(ele).closest("#define-modal");
    $dlgParent.find('#functionHelp').val("");
    $dlgParent.find('#functionHelpDIV').hide();
}

// eslint-disable-next-line no-unused-vars
function showDocumentHelp(ele) {
    let $dlgParent = $(ele).closest("#define-modal");
    let propName = $(ele).find(":selected").text();
    let propPath = documentHelpList[propName] || "";
    let propHelp = propPath && documentHelpList[`${propName}Q`] || "No document help text available";
    $dlgParent.find('#functionHelp').val(propHelp);
    $dlgParent.find('#functionHelpDIV').show();
}
// eslint-disable-next-line no-unused-vars
function hideDocumentHelp(ele) {
    hideFunctionHelp(ele);
}

window.console.log("help.js loaded");
