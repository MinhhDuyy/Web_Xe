$(document).ready(function() {
	$("#models").click(function() {
		$("#hangxe").slideToggle("");
	});
});
$(document).ready(function() {
	$("#store").click(function() {
		$("#cuahangxe").slideToggle("");
	});
});
$(document).ready(function() {
	$("#customercare").click(function() {
		$("#chamsockh").slideToggle("");
	});
});
//menu dau trang
// nut next
$(document).ready(function() {
	$('#btn-next').click(function(event) {

		var image_sau = $('.active').next();
		var vi_tri_hien_tai = $('.active_nut').index()+1;
		if(image_sau.length!=0){
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			image_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
			//xu li nut
			$('.nut ul li').removeClass('active_nut');
			$('.nut ul li:nth-child('+(vi_tri_hien_tai+1)+')').addClass('active_nut');
		}else{
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			$('.image1:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
			//xu li nut
			$('.nut ul li').removeClass('active_nut');
			$('.nut ul li:nth-child(1)').addClass('active_nut');
		}
	});
	// nut back
	$('#btn-back').click(function(event) {
        var vi_tri_hien_tai = $('.active_nut').index()+1;
		var slide_truoc = $('.active').prev();
		if(slide_truoc.length!=0){
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
			// xu li nut
			$('.nut ul li').removeClass('active_nut');
			$('.nut ul li:nth-child('+(vi_tri_hien_tai-1)+')').addClass('active_nut');
		}else{
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			$('.image1:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
			//xu li nut
			$('.nut ul li').removeClass('active_nut');
			$('.nut ul li:last-child').addClass('active_nut');
		}
	});
	$('.nut ul li').click(function(event) {
		var vi_tri_hien_tai = $('.active_nut').index()+1;
		var vi_tri_click = $(this).index()+1;
        $('.nut ul li').removeClass('active_nut');
        $(this).addClass('active_nut');
$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			$('.image1:nth-child('+vi_tri_click+')').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
	});
});
$(document).ready(function(){
  $(".btn_thongtin").click(function(){
  	$(".form").animate({left: '43em'});
    $(".form").toggle();  
  });
});

jQuery(document).ready(function($) {
	$('.city').change(function() {

		var bbbb = $(this).val();

		if(bbbb == 'vietnam'){
			$('.state option').each(function() {
				var aaa = $(this).attr('data-state');

				//selectCity.attr('disabled') ;
				// 
				if (aaa !='vn') {
					 $(this).attr('disabled','disabled');
					 //alert(aaa);
				}
				 
			});	
		}
		if(bbbb == 'nuocngoai'){
			$('.state option').each(function() {
				var aaa = $(this).attr('data-state');
				//selectCity.attr('disabled') ;
				// 
				if (aaa !='out') {
					 $(this).attr('disable');
				}
				 
			});	
		}
		//var selectCity = $("[data-state='vn']");
			
	});	
});
 
// jQuery(document).ready(function() {
// 	$('select .city').change(function() {
// 		var selectCity = $("[data-state='vn']");
// 		var selectCitynuocngoai = $("[data-state='out']");
// 		$(".city").find(":selected").val();
// 		if(val()=='vietnam'){
// 			selectCity.prop('disbaled',false) && selectCitynuocngoai.prop('disbaled',true);
// 		}
// 	}); 	
//  });






 //nhapthongtin

 jQuery(document).ready(function($) {
 	  var email ="";
 	  var ktEmail = false;
$('#email').blur(function(){

     email = $('#email').val();

    if(email.includes("@")){

         document.getElementById("email").value = "";

         $("#email").attr("placeholder", "?????nh d???ng email kh??ng h???p l??? ");

         ktEmail = false;

             $("#iemail").attr("class", "zmdi zmdi-email");

    }else{

         $("#iemail").attr("class", "zmdi zmdi-badge-check");

         ktEmail = true;

    }

});
    $( "#nut").click(function() {

if(ktEmail==false){

    alert("????ng k?? th???t b???i v?? m???t s??? tr?????ng ch??a ho??n th??nh vi???c ??i???n d??? li???u");

}else{

    

     alert("????ng k?? th??nh c??ng");

}


});
 	 });



 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});


  




// jQuery(document).ready(function($) {
// 	 var ktTen =false;   
// 	 var ktMatKhau = false;
// $('#hoten').blur(function(){

//     var hoTen = $('#hoten').val();

//     if(hoTen.length < 6 ){

//          document.getElementById("hoten").value = "";

//          $("#hoten").attr("placeholder", "H??? v?? t??n ph???i >= 6 k?? t???");
//          $("#ihoten").attr("class", "tendangnhap");

//          return ktTen = false;

//     }else{

//          $("#ihoten").attr("class", "zmdi zmdi");

//          ktTen = true;

//     }

// });


// $('#rmatkhau').blur(function(){    
//     var matkhau = $('#matkhau').val();

//     var rmatkhau = $('#rmatkhau').val();

//     if(matkhau!=rmatkhau){

//          document.getElementById("matkhau").value = "";

//          document.getElementById("rmatkhau").value = "";

//          $("#rmatkhau").attr("placeholder", "m???t kh???u v?? nh???p l???i kh??ng kh???p ");

//              $("#matkhau").attr("placeholder", "m???t kh???u v?? nh???p l???i kh??ng kh???p ");

//              return ktMatKhau = false;

//                  $("#irmatkhau").attr("class", "repassword");

//          $("#imatkhau").attr("class", "password");

//     }else{

//          $("#irmatkhau").attr("class", "repassword");

//          $("#imatkhau").attr("class", "repassword");

//              ktMatKhau = true;

//     }

// });
// $( "#nut").click(function() {

// if(ktTen==false || ktMatKhau==false){

//     alert("????ng k?? th???t b???i v?? m???t s??? tr?????ng ch??a ho??n th??nh vi???c ??i???n d??? li???u");

// }else{
//     alert("????ng k?? th??nh c??ng");

// }

// });
// });