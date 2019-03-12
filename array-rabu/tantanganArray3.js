function dataHandling2(input){
//splice
    input.splice(1,4,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung","21/05/1989","Pria","SMA Internasional Metro");
    console.log(input);
//split
    var tampungTanggal = input[3];
    var tanggal = tampungTanggal.split("/");
    var bulan= tanggal[1];

    switch(bulan){
        case '01':
            bulan='Januari';break;
        case '02':
            bulan='Februari';break;
        case '03':
            bulan='Maret';break;
        case '04':
            bulan='April';break;
        case '05':
            bulan='Mei';break;
        case '06':
            bulan='Juni';break;
        case '07':
            bulan='Juli';break;
        case '08':
            bulan='Agustus';break;
        case '09':
            bulan='September';break;
        case '10':
            bulan='Oktober';break;
        case '11':
            bulan='November';break;
        case '12':
            bulan='Desember';break;
        default:
            bulan='undefined';
    }
    console.log(bulan);

//join
    var joinTanggal= tanggal.join("-");
    
//sort
    tanggal.sort(function(a,b){
        return b-a;
     })

    console.log(tanggal);
    console.log(joinTanggal);
    
//slice
    var tampungKarakter = input[1];
    var karakter = tampungKarakter.slice(0,15);
    console.log(karakter);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
