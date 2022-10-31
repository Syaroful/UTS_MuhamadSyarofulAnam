function validateform() {
  var fname = document.forms["BookForm"]["fname"].value;
  var lname = document.forms["BookForm"]["lname"].value;
  var email = document.forms["BookForm"]["email"].value;
  var phone = document.forms["BookForm"]["phone"].value;
  var date = document.forms["BookForm"]["date"].value;

  if (fname === "" || fname == null) {
    alert("Nama Depan harus diisi!");
    return false;
  }else if(lname === "" || lname == null) {
    alert("Nama Belakang harus diisi!");
    return false;
  }else if(email === "" || email == null) {
    alert("Email harus diisi!");
    return false;
  }else if(phone === "" || phone == null) {
    alert("Nomor Telepon harus diisi!");
    return false;
  }else if(date === "" || phone == null) {
    alert("Tanggal Tidak boleh Kosong");
    return false;
  }else{
    window.open("bookFormConfirmation.html");
  }  
}
