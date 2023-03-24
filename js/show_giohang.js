function show(){
    var data = localStorage.getItem('sanpham');
    
    obj = JSON.parse(data);
    if(obj!= null){
        for (var i = 0; i < obj.length; i++){
            var addtr = document.createElement('tr');
            addtr.innerHTML ='<tr class="sanpham"><td><img src="'+obj[i].anh+'" alt=""></td><td><p>'+obj[i].ten+'</p></td><td><p>'+obj[i].khoi+'</p></td><td><p>'+obj[i].sl+'</p></td><td><p>'+obj[i].gia+'<sup>đ</sup></p></td><td><span class="cart-delete">X</span></td></tr>';
            var cartTable = document.querySelector('tbody');
            cartTable.append(addtr);
        }        
    }
    sum();
    xoa();
   
}

function sum(){
    var tong=0,tong_gia=1;
    if(obj == null) {
        tong = 0;
        var addtr2 = document.createElement('td');
        addtr2.innerHTML='<td>'+tong+'</td>';
        var index_addr2 = document.querySelector('.tong_sp');
        index_addr2.append(addtr2);

        // thêm tổng giá
        var addtr3 = document.createElement('td');
        addtr3.innerHTML='<td>0<sup>đ</sup></td>';
        var index_addr3 = document.querySelector('.tong_gia');
        index_addr3.append(addtr3);

        // thêm vào tạm tính
        var addtr3 = document.createElement('td');
        addtr3.innerHTML='<td><p style="color:black; font-weight: bold;">0<sup>đ</sup></p></td>';
        var index_addr3 = document.querySelector('.tam_tinh');
        index_addr3.append(addtr3);

        
        //thêm vào chỗ mua thêm
        var them = 200000-tong_gia;
        var addtr4 = document.createElement('span');
        addtr4.innerHTML='<p class="mua_them" style="color: red; font-weight: bold;">Mua thêm <span style="font-size: 26px">200.000</span><sup>đ</sup> để được miễn phí ship </p>';
        var index_addr4 = document.querySelector('.cart-content-right-text');
        index_addr4.append(addtr4);
    }
    else{
        for(var i=0; i<obj.length; i++){
            var soluong = obj[i].sl;
            var gia = obj[i].gia;
            tong+=parseInt(soluong);
            tong_gia = gia*tong*1000;
        }
        // thêm tổng số lượng
        var addtr2 = document.createElement('td');
        addtr2.innerHTML='<td>'+tong+'</td>';
        var index_addr2 = document.querySelector('.tong_sp');
        index_addr2.append(addtr2);

        // thêm tổng giá
        var addtr3 = document.createElement('td');
        addtr3.innerHTML='<td>'+tong_gia.toLocaleString('de-DE')+'<sup>đ</sup></td>';
        var index_addr3 = document.querySelector('.tong_gia');
        index_addr3.append(addtr3);

        // thêm vào tạm tính
        var addtr3 = document.createElement('td');
        addtr3.innerHTML='<td><p style="color:black; font-weight: bold;">'+tong_gia.toLocaleString('de-DE')+'<sup>đ</sup></p></td>';
        var index_addr3 = document.querySelector('.tam_tinh');
        index_addr3.append(addtr3);

        //thêm vào chỗ mua thêm
        var them = 200000-tong_gia;
        var addtr4 = document.createElement('span');
        addtr4.innerHTML='<p class="mua_them" style="color: red; font-weight: bold;">Mua thêm <span style="font-size: 26px">'+them.toLocaleString('de-DE')+'</span><sup>đ</sup> để được miễn phí ship </p>';
        var index_addr4 = document.querySelector('.cart-content-right-text');
        index_addr4.append(addtr4);
    }
    
}
function xoa(){
    var cartItem = document.querySelectorAll('.cart-content-left tbody tr');
    for(var i=0; i<cartItem.length; i++){
        var product = document.querySelectorAll('.cart-delete');
        product[i].addEventListener('click', function(event){
            var cartdelete = event.target;
            var sanpham2 = cartdelete.parentElement.parentElement;
            sanpham2.remove();
        })        
    }
}
// Khúc cập nhật lại giá em ko bt làm
show();