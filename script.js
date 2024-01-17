var studDetails = {}

function submit() {
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var mailPhone = document.getElementById('mailPhone').value
    var Password = document.getElementById('Password').value

    if(firstName=='' || lastName=='' || mailPhone=='' || Password==''){
        alert("Fields Cannot Be Empty, Please Fill In Spaces")
    } else {
        console.log();
    }

    document.getElementById('firstName').value=""
    document.getElementById('lastName').value=""
    document.getElementById('mailPhone').value=""
    document.getElementById('Password').value=""
}