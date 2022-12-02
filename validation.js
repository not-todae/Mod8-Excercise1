function validate(){
    if(document.myForm.id.value==""){
        document.getElementById("idError").innerHTML = "Please enter your ID";
        return false;
    }

    if(document.myForm.firstName.value==""){
        document.getElementById("fnameError").innerHTML = "Please enter your First name";
        return false;
    }

    if(document.myForm.lastName.value==""){
        document.getElementById("lnameError").innerHTML = "Please enter your Last name";
        return false;
    }

    if(document.myForm.address.value==""){
        document.getElementById("addressError").innerHTML = "Please enter your Address";
        return false;
    }

    if(document.myForm.department.value==""){
        document.getElementById("departmentError").innerHTML = "Please enter your Depertment";
        return false;
    }

    if(document.myForm.position.value==""){
        document.getElementById("positionError").innerHTML = "Please enter your Position";
        return false;
    }

    if(document.myForm.contact.value==""){
        document.getElementById("contactError").innerHTML = "Please enter your Contact";
        return false;
    }

    if(document.myForm.salary.value==""){
        document.getElementById("salaryError").innerHTML = "Please enter your Salary";
        return false;
    }

    if(document.myForm.username.value==""){
        document.getElementById("usernameError").innerHTML = "Please enter your Username";
        return false;
    }


    if(document.myForm.email.value==""){
        document.getElementById("emailError").innerHTML = "Please enter your email";
        return false;
        }else{
            var regex = /^\S+@\S+\.\S+$/;
            if(regex.test(document.myForm.email.value)==false){
                alert("Please enter a valid email address");
                return false;
            }
    }
}

