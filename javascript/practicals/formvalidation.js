function form_validation() {

    // firstname
    let fname = document.form1.fname.value;
    if (fname == "") {
        document.getElementById("fname_1").innerHTML = "enter first name"
        return false;
    } else if (!isNaN(fname)) {
        document.getElementById("fname_1").innerHTML = "enter alphabets"
        return false;
    }

    // middlename
    let mname = document.form1.mname.value;
    if (mname == "") {
        document.getElementById("mname_1").innerHTML = "enter middle name"
        return false;
    } else if (!isNaN(mname)) {
        document.getElementById("mname_1").innerHTML = "enter alphabets"
        return false;
    }

    // lastname
    let lname = document.form1.lname.value;
    if (lname == "") {
        document.getElementById("lname_1").innerHTML = "enter last name"
        return false;
    } else if (!isNaN(lname)) {
        document.getElementById("lname_1").innerHTML = "enter alphabets";
        return false;
    }

    // address
    let adrs = document.form1.add.value;
    if (adrs == "") {
        document.getElementById("add_1").innerHTML = "enter address";
        return false;
    }

    // Date
    let date = document.form1.date.value;
    if (date == "") {
        document.getElementById("date_1").innerHTML = "select date"
        return false;
    }


    // gender
    let male = document.form1.gen[0].checked;
    let female = document.form1.gen[1].checked;
    if (male == false && female == false) {
        document.getElementById("gen_1").innerHTML = "select gender"
        return false;
    }


    // Experience
    let ex = document.form1.drop.value;
    if (ex == -1) {
        document.getElementById("dropbox_1").innerHTML = "select experience"
        return false;
    }


    // mobile
    let mobile = document.form1.mobile.value;
    if (mobile == "") {
        document.getElementById("mobile_1").innerHTML = "enter mobile number"
        return false;
    } else if (isNaN(mobile)) {
        document.getElementById("mobile_1").innerHTML = "enter digits only"
        return false;
    } else if (mobile.length < 10) {
        document.getElementById("mobile_1").innerHTML = "mobile number is less than 10 digits"
        return false;
    }


    //  email
    let mail = document.form1.mail.value;
    if (mail == "") {
        document.getElementById("mail_1").innerHTML = "enter email"
        return false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
        document.getElementById("mail_1").innerHTML = "enter email properly"
        return false;
    }

}
function hide_show() {
    let pass = document.form1.pass;
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
