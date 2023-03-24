function hienthi(element, type){
    var color = document.getElementsByClassName('item_boloc_link');
    for(var i = 0; i < color.length; i++){
        color[i].style.background = 'white';
        color[i].style.color='#888888';
    }
    type.style.background = '#0F9D58';
    type.style.color='white';
    switch(element){
        case 'conhang':
            document.getElementById("sp_giamgia").style.display= 'none';
            document.getElementById("sp_conhang").style.display = 'block';
            document.getElementById("sp_rauxanh").style.display = 'none';
            document.getElementById("sp_cuqua").style.display = 'none';
            break;
        case 'giamgia':
            document.getElementById("sp_giamgia").style.display= 'block';
            document.getElementById("sp_conhang").style.display = 'none';
            document.getElementById("sp_rauxanh").style.display = 'none';
            document.getElementById("sp_cuqua").style.display = 'none';
            document.getElementById("chuyentrang_conhang").style.display = 'none';
            document.getElementById("chuyentrang_giamgia").style.display = 'block';
            document.getElementById("chuyentrang_rauxanh").style.display = 'none';
            document.getElementById("chuyentrang_cuqua").style.display = 'none';
            break;
        case 'rauxanh':
            document.getElementById("sp_rauxanh").style.display = 'block';
            document.getElementById("sp_giamgia").style.display = 'none';  
            document.getElementById("sp_conhang").style.display = 'none';
            document.getElementById("sp_cuqua").style.display = 'none';
            document.getElementById("chuyentrang_conhang").style.display = 'none';
            document.getElementById("chuyentrang_giamgia").style.display = 'none';
            document.getElementById("chuyentrang_rauxanh").style.display = 'block';
            document.getElementById("chuyentrang_cuqua").style.display = 'none';
            break;
        case "cuqua":
            document.getElementById("sp_rauxanh").style.display = 'none';
            document.getElementById("sp_giamgia").style.display = 'none';
            document.getElementById("sp_conhang").style.display = 'none';
            document.getElementById("sp_cuqua").style.display = 'block';
            document.getElementById("chuyentrang_conhang").style.display = 'none';
            document.getElementById("chuyentrang_giamgia").style.display = 'none';
            document.getElementById("chuyentrang_rauxanh").style.display = 'none';
            document.getElementById("chuyentrang_cuqua").style.display = 'block';
            break;
    }
}

function chuyen(element2 , type2, parent){
    var color = document.getElementsByClassName('phan_chuyen');
    
    for(var i=0; i < color.length; i++){
        color[i].style.background = 'white';
        color[i].style.color='#888888';
    }
    type2.style.background = '#0F9D58';
    type2.style.color='white';
    switch(parent){
        case 'sp_conhang':
            switch(element2){
                case 'trang1': 
                    document.getElementById('sp1_conhang').style.display = 'block';
                    document.getElementById('sp2_conhang').style.display = 'none';
                    document.getElementById("sp_rauxanh").style.display = 'none';
                    document.getElementById("sp_cuqua").style.display = 'none';
                    break;
                case 'trang2': 
                document.getElementById('sp1_conhang').style.display = 'none';
                document.getElementById('sp2_conhang').style.display = 'block';
                document.getElementById("sp_giamgia").style.display= 'none';
                document.getElementById("sp_rauxanh").style.display = 'none';
                document.getElementById("sp_cuqua").style.display = 'none';
                break;
            }
            break;
        case 'sp_giamgia':
            switch(element2){
                case 'trang1': 
                    document.getElementById('sp1_giamgia').style.display = 'block';
                    document.getElementById('sp2_giamgia').style.display = 'none';
                    break;
                case 'trang2': 
                document.getElementById('sp1_giamgia').style.display = 'none';
                document.getElementById('sp2_giamgia').style.display = 'block';
                break;
            }
            break;
        case 'sp_rauxanh':
            switch(element2){
                case 'trang1': 
                    document.getElementById('sp1_rauxanh').style.display = 'block';
                    document.getElementById('sp2_rauxanh').style.display = 'none';
                    break;
                case 'trang2': 
                document.getElementById('sp1_rauxanh').style.display = 'none';
                document.getElementById('sp2_rauxanh').style.display = 'block';
                break;
            }
            break;
        case 'sp_cuqua':
            switch(element2){
                case 'trang1': 
                    document.getElementById('sp1_cuqua').style.display = 'block';
                    document.getElementById('sp2_cuqua').style.display = 'none';
                    break;
                case 'trang2': 
                document.getElementById('sp1_cuqua').style.display = 'none';
                document.getElementById('sp2_cuqua').style.display = 'block';
                break;
            }
            break;
        
    }
}