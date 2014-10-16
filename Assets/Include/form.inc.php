<?php

#contact form function

function contactForm () {

	$_POST[FirstName]=stripslashes($_POST[FirstName]);
	$_POST[LastName]=stripslashes($_POST[LastName]);
	$_POST[Comments]=stripslashes($_POST[Comments]);

print "<form id='ContactUs' name='ContactUs' method='post' action='./index.php?action=check'>
                  <table width='599' align='center' cellpadding='0' cellspacing='0' id='tbform'>
                    <!--DWLayoutTable-->
                    <tr>
                      <td colspan='5' id='tdcontactinform'><div align='center'>Contact Information</div></td>
                    </tr>
                    <tr>
                      <td colspan='5'><!--DWLayoutEmptyCell-->&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan='5'><div align='center'>*Required</div></td>
                    </tr>
                    <tr>
                      <td colspan='5'>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan='2' valign='top'><label for='FirstName'>*First Name:</label>
                        <input name='FirstName' type='text' id='FirstName' size='24' value='".htmlentities($_POST[FirstName], ENT_QUOTES)."' /></td>
                    <td colspan='2' valign='top'><label for='LastName'>*Last Name:</label>
                      <input name='LastName' type='text' id='LastName' size='24' value='".htmlentities($_POST[LastName], ENT_QUOTES)."' /></td>
                    <td width='1' rowspan='2'>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan='2' valign='top'><!--DWLayoutEmptyCell-->&nbsp;</td>
                      <td colspan='2' valign='top'><!--DWLayoutEmptyCell-->&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan='5'>Address:</td>
                    </tr>
                    <tr>
                      <td colspan='5'><label for='Address'></label>
                      <input name='Address' type='text' id='Address' size='60'  value='$_POST[Address]'/></td>
                    </tr>
                    <tr>
                      <td colspan='5'><label for='Address2'></label>
                      <input name='Address2' type='text' id='Address2' size='60'  value='$_POST[Address2]'/></td>
                    </tr>
                    <tr>
                      <td colspan='5'><!--DWLayoutEmptyCell-->&nbsp;</td>
                    </tr>
                    <tr>
                      <td width='203'><label for='City'>City:</label>
                      <input name='City' type='text' id='City' size='20' value='$_POST[City]' /></td>
                      <td colspan='2'><label for='State'>State:</label>
                        <select name='State' id='State' >
			                          <option selected='selected'>Select a State</option>
			                          <option value='Alabama' ";if($_POST[State] == 'Alabama') {print "selected";} print ">Alabama</option>
			                          <option value='Alaska' ";if($_POST[State] == 'Alaska') {print "selected";} print ">Alaska</option>
			                          <option value='Arizona' ";if($_POST[State] == 'Arizona') {print "selected";} print ">Arizona</option>
			                          <option value='Arkansas' ";if($_POST[State] == 'Arkansas') {print "selected";} print ">Arkansas</option>
			                          <option value='California' ";if($_POST[State] == 'California') {print "selected";} print ">California</option>
			                          <option value='Colorado' ";if($_POST[State] == 'Colorado') {print "selected";} print ">Colorado</option>
			                          <option value='Delaware' ";if($_POST[State] == 'Delaware') {print "selected";} print ">Delaware</option>
			                          <option value='District Of Columbia' ";if($_POST[State] == 'District Of Columbia') {print "selected";} print ">District Of Columbia</option>
			                          <option value='Florida' ";if($_POST[State] == 'Florida') {print "selected";} print ">Florida</option>
			                          <option value='Georgia' ";if($_POST[State] == 'Georgia') {print "selected";} print ">Georgia</option>
			                          <option value='Hawaii' ";if($_POST[State] == 'Hawaii') {print "selected";} print ">Hawaii</option>
			                          <option value='Idaho' ";if($_POST[State] == 'Idaho') {print "selected";} print ">Idaho</option>
			                          <option value='Illinois' ";if($_POST[State] == 'Illinois') {print "selected";} print ">Illinois</option>
			                          <option value='Indiana' ";if($_POST[State] == 'Indiana') {print "selected";} print ">Indiana</option>
			                          <option value='Iowa' ";if($_POST[State] == 'Iowa') {print "selected";} print ">Iowa</option>
			                          <option value='Kansas' ";if($_POST[State] == 'Kansas') {print "selected";} print ">Kansas</option>
			                          <option value='Kentucky' ";if($_POST[State] == 'Kentucky') {print "selected";} print ">Kentucky</option>
			                          <option value='Louisiana' ";if($_POST[State] == 'Louisiana') {print "selected";} print ">Louisiana</option>
			                          <option value='Maine' ";if($_POST[State] == 'Maine') {print "selected";} print ">Maine</option>
			                          <option value='Maryland' ";if($_POST[State] == 'Maryland') {print "selected";} print ">Maryland</option>
			                          <option value='Massachusetts' ";if($_POST[State] == 'Massachusetts') {print "selected";} print ">Massachusetts</option>
			                          <option value='Michigan' ";if($_POST[State] == 'Michigan') {print "selected";} print ">Michigan</option>
			                          <option value='Minnesota' ";if($_POST[State] == 'Minnesota') {print "selected";} print ">Minnesota</option>
			                          <option value='Mississippi' ";if($_POST[State] == 'Mississippi') {print "selected";} print ">Mississippi</option>
			                          <option value='Missouri' ";if($_POST[State] == 'Missouri') {print "selected";} print ">Missouri</option>
			                          <option value='Montana' ";if($_POST[State] == 'Montana') {print "selected";} print ">Montana</option>
			                          <option value='Nebraska' ";if($_POST[State] == 'Nebraska') {print "selected";} print ">Nebraska</option>
			                          <option value='Nevada' ";if($_POST[State] == 'Nevada') {print "selected";} print ">Nevada</option>
			                          <option value='New Hampshire' ";if($_POST[State] == 'New Hampshire') {print "selected";} print ">New Hampshire</option>
			                          <option value='New Jersey' ";if($_POST[State] == 'New Jersey') {print "selected";} print ">New Jersey</option>
			                          <option value='New Mexico' ";if($_POST[State] == 'New Mexico') {print "selected";} print ">New Mexico</option>
			                          <option value='New York' ";if($_POST[State] == 'New York') {print "selected";} print ">New York</option>
			                          <option value='North Carolina'";if($_POST[State] == 'North Carolina') {print "selected";} print " >North Carolina</option>
			                          <option value='North Dakota' ";if($_POST[State] == 'North Dakota') {print "selected";} print ">North Dakota</option>
			                          <option value='Ohio' ";if($_POST[State] == 'Ohio') {print "selected";} print ">Ohio</option>
			                          <option value='Oklahoma' ";if($_POST[State] == 'Oklahoma') {print "selected";} print ">Oklahoma</option>
			                          <option value='Oregon' ";if($_POST[State] == 'Oregon') {print "selected";} print ">Oregon</option>
			                          <option value='Pennsylvania' ";if($_POST[State] == 'Pennsylvania') {print "selected";} print ">Pennsylvania</option>
			                          <option value='Rhode Island' ";if($_POST[State] == 'Rhode Island') {print "selected";} print ">Rhode Island</option>
			                          <option value='South Carolina' ";if($_POST[State] == 'South Carolina') {print "selected";} print ">South Carolina</option>
			                          <option value='South Dakota' ";if($_POST[State] == 'South Dakota') {print "selected";} print ">South Dakota</option>
			                          <option value='Tennessee' ";if($_POST[State] == 'Tennessee') {print "selected";} print ">Tennessee</option>
			                          <option value='Texas' ";if($_POST[State] == 'Texas') {print "selected";} print ">Texas</option>
			                          <option value='Utah' ";if($_POST[State] == 'Utah') {print "selected";} print ">Utah</option>
			                          <option value='Vermont' ";if($_POST[State] == 'Vermont') {print "selected";} print ">Vermont</option>
			                          <option value='Virginia' ";if($_POST[State] == 'Virginia') {print "selected";} print ">Virginia</option>
			                          <option value='Washington' ";if($_POST[State] == 'Washington') {print "selected";} print ">Washington</option>
			                          <option value='West Virginia' ";if($_POST[State] == 'West Virginia') {print "selected";} print ">West Virginia</option>
			                          <option value='Wisconsin' ";if($_POST[State] == 'Wisconsin') {print "selected";} print ">Wisconsin</option>
			                          <option value='Wyoming' ";if($_POST[State] == 'Wyoming') {print "selected";} print ">Wyoming</option>
            </select></td>
                      <td width='160'><label for='ZipCode'>Zip Code:</label>
                      <input name='ZipCode' type='text' id='ZipCode' size='5' maxlength='5' value='$_POST[ZipCode]' /></td>
                    <td>&nbsp;</td></tr>
                    <tr>
                      <td colspan='5'>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan='5'><label for='Phone'>*Daytime Phone:</label>
                      <input name='Phone' type='text' id='Phone' maxlength='14' value='$_POST[Phone]' /></td>
                    </tr>
                    <tr>
                      <td colspan='5'>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan='5'><label for='Email'>*Email:</label>
                      <input name='Email' type='text' id='Email' size='35' value='$_POST[Email]' /></td>
                    </tr>
                    <tr>
                      <td colspan='5'>&nbsp;</td>
                    </tr>
                    <tr>
                      <td colspan='5' id='tdsubmit'><label for='Reset'></label>
                        <div align='center'>
                          <input type='reset' name='Reset' id='Reset' value='Reset' /> 
                          <input type='submit' name='Submit' id='Submit' value='Submit' />
                      </div></td>
                    </tr><tr><td height='3'></td><td width='89'></td>
                    <td width='124'></td>
                    <td></td><td></td></tr>
                  </table>
                                </form>";
}

#form Validation function

function formValidation () {

$_POST[FirstName]=stripslashes($_POST[FirstName]);
$_POST[LastName]=stripslashes($_POST[LastName]);
$_POST[Comments]=stripslashes($_POST[Comments]);
                
                	//Place setting for form script
                	switch($_GET[action]) {
	case "check";
		if(strlen($_POST[FirstName]) > 0 && strlen($_POST[LastName]) > 0 && strlen($_POST[Email]) > 0 && strlen($_POST[Phone])) {
			//setup mail function and mail it.
			$body="A new E-Security Alarms Inquiries has been submitted:\n\n";
			$body.="First Name: $_POST[FirstName]\n";
			$body.="Last Name: $_POST[LastName]\n";
			$body.="Address: $_POST[Address]\n";
			$body.="Suite, Apt, Unit: $_POST[Address2]\n";
			$body.="City: $_POST[City]\n";
			$body.="State: $_POST[State]\n";
			$body.="Zipcode: $_POST[ZipCode]\n";
			$body.="Email Address: $_POST[Email]\n";
			$body.="Phone Number: $_POST[Phone]\n";
			mail("hero2g@gmail.com", "E-security Alarms Inquiries", $body);
			print "<center><p class='style1'>Thank you for your request.  We will get back to you as soon as possible.</p></center>";
			} else {
  			//set and display error and continue to default.
  			print "<center><font color='red'><b> You did not fill out all of the required fields.  Please try again. </b></font></center><br>";
  			contactForm ();			
}
break;
	
	default:
		contactForm ();
	break;

}

}

?>