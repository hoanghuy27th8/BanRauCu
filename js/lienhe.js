function frmValidate(){
    var from = document.forms['regfr'];

    //kt họ tên không rỗng
    var hoten = from.hoten;
    if(hoten.value.length == 0){
        alert("Hãy điền họ tên!");
        hoten.focus();
        return false;
    }
    var diachi = from.diachi;
        //kt dia chi không rỗng
        if(diachi.value.length == 0){
        alert("Hãy điền địa chỉ!");
        diachi.focus();
        return false;
    }    
    var sdt = from.sdt;
    if(sdt.value.length == 0){
        alert("Hãy điền địa chỉ!");
        sdt.focus();
        return false;
    }
    var email = from.email;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //mail đúng
    //Email chỉ chấp nhận
    /*ký tự HOA
    ký tự thường
    chữ số
    ký tự đặc biệt =_.
    một ký tự @, theo sau là các ký tự
    kết thúc bằng dấu . và tối thiểu 2 ký tự, tối đa 4 ký tự
    */
    if(!filter.test(email.value)){
        alert("Hãy nhập đúng định dạng Mail!");
        email.focus();
        return false;
    }
    var content = from.content;
}