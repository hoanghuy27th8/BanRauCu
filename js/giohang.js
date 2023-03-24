const btn = document.querySelectorAll('.button_actions button');

btn.forEach(function(button) {
    var sanpham = new Array();
    button.addEventListener('click', function(event){
        
        var img = document.getElementById('chitiet-img');
        var name = document.getElementById('title-product').innerHTML;//lấy tên sản phẩm
        var src_img = img.querySelector('img').src; //lấy ảnh
        var price = document.getElementById('price').innerHTML; // lấy giá
        var mass = document.getElementById('mass');
        var khoiluong = mass.querySelector('input').value; // lấy khối lượng
        var soluong = document.getElementById('qtym').value;//lấy số lượng
        var list_sanpham = {
            ten: name,
            anh: src_img,
            gia: price,
            khoi: khoiluong,
            sl: soluong
        };
        sanpham.push(list_sanpham);
        localStorage.setItem('sanpham', JSON.stringify(sanpham));
    })
})