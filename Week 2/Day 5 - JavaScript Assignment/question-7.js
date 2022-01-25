// JavaScript function which is called on onSubmit
// This function calls all other functions used for validation.
function formValidation()
{
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
    {
        if(passid_validation(passid,7,12))
        {
            if(allLetter(uname))
            {
                if(alphanumeric(uadd))
                { 
                    if(countryselect(ucountry))
                    {
                        if(allnumeric(uzip))
                        {
                            if(ValidateEmail(uemail))
                            {
                                if(validsex(umsex,ufsex))
                                {
                                }
                            } 
                        }
                    } 
                }
            }
        }
    }
    return false;
}

//JavaScript function for validating userid
function userid_validation(uid,mx,my)
{
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx)
    {
        alert("User Id should not be empty / length be between "+mx+" to "+my);
        uid.focus();
        return false;
    }
    return true;
}
//The code above checks whether userid input field is provided with a string of length 5 to 12 characters. If not, it displays an alert.

//JavaScript function for validating password
function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    return true;
}
//The above code used to validate password (it should be of length 7 to 12 characters). If not, it displays an alert.

//JavaScript code for validating user name
function allLetter(uname)
{ 
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}
//The code above checks whether user name input field is provided with alphabates characters. If not, it displays an alert.

// JavaScript code for validating user address
function alphanumeric(uadd)
{ 
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
//The code above checks whether user address input field is provided with alphanumeric characters. If not, it displays an alert.

//JavaScript code for validating country
function countryselect(ucountry)
{
    if(ucountry.value == "Default")
    {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    else
    {
        return true;
    }
}
//The code above checks whether a country is selected from the given list. If not, then it displays an alert.

//JavaScript code for validating ZIP code
function allnumeric(uzip)
{ 
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}
//The code above checks whether a ZIP code of numeric value. If not, it displays an alert.

//JavaScript code for validating email format
    function ValidateEmail(uemail)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(uemail.value.match(mailformat))
        {
            return true;
        }
        else
        {
            alert("You have entered an invalid email address!");
            uemail.focus();
            return false;
        }
    }
//The code above checks whether a valid email format is supplied. If not,it displays an alert.

//JavaScript code for validating gender
function validsex(umsex,ufsex)
{
    x=0;

    if(umsex.checked) 
    {
        x++;
    } if(ufsex.checked)
        {
            x++; 
        }
    if(x==0)
    {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else
    {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;
    }
}

