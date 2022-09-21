
var bctc_chay;
var tcl=$('input[name="tct"]').val();
var quan_quan_hien_tai = $('input[name="quan_quan_hien_tai"]').val();
$("#bt_doi_diem").click(function(){
if(tcl>quan_quan_hien_tai)
{
	if(confirm("Ghi tên Bảng Vàng bạn sẽ mất toàn bộ số điểm ! chỉ giữ lại 10000 điểm ban đầu! Bạn có chắc chắn ???"))
	{
		$('input[name="ten"]').val(prompt("Xin cho biết tên của bạn ?","Vô Danh"));
		document.getElementById("fm2").submit();
	}
}
else
{
	alert("Điểm số của bạn thấp hơn Quán Quân hiện tại ! chưa thể ghi tên Bảng Vàng");
}
});
function xoay()
{
	xuc_xac(Math.round(Math.random()*6),Math.round(Math.random()*6),Math.round(Math.random()*6));
}

$('input[type="text"]').click(function(){
	if(parseInt($(this).val())>0)
	{
		var tmp_tien = $(this).val();
		$(this).val(0);
		$("#d"+$(this).attr("name")).text("0");
		tmp_tien =parseInt(tmp_tien)+parseInt($("#tcl").text());
		$("#tcl").text(tmp_tien);
	}
});

function check_tien()
{
	var ok = false;
	for(var i=0;i<=5;i++)
	{
		if(parseInt($("#var_"+i).val())>0)
		{
			ok =true;
		}
	}
	if(tcl <= 0)
	{
		ok = false;
	}
	return ok;
}

$(".chon").click(function(){
	var MOC_HIEN_TAI =2000;
	if(parseInt($("#var_"+$(this).attr("title")).val())>=2000)
	{
		MOC_HIEN_TAI =parseInt($("#var_"+$(this).attr("title")).val());
	}
	var gtht=parseInt($("#var_"+$(this).attr("title")).val());
	var tong_gtht = 0;
	for(var i=0;i<=5;i++)
	{
		tong_gtht+=parseInt($("#var_"+i).val());
	}
	
	if(parseInt(MOC_HIEN_TAI+tong_gtht)>tcl)
	{
		MOC_HIEN_TAI = tcl - tong_gtht;
	}
	if(MOC_HIEN_TAI!=0)
	{
		gtht+=MOC_HIEN_TAI;
		tong_gtht += MOC_HIEN_TAI;
		$("#var_"+$(this).attr("title")).val(gtht);
		$("#dvar_"+$(this).attr("title")).text((gtht/1000)+"k");
		$("#tcl").text(eval(tcl-tong_gtht));
	}
	else
	{
		$("#bctc_top_t").html('<b style="color:red;">Bạn không còn đủ tiền để cược! Vào ỨNG DỤNG CAO CẤP ĐỂ nhận mã miễn phí</b>');
	}
});
function xuc_xac(mat1,mat2,mat3)
{
	$("#m1").css('background-position',eval(mat1*145*(-1))+'px 0px');
	$("#m2").css('background-position',eval(mat2*145*(-1))+'px 0px');
	$("#m3").css('background-position',eval(mat3*145*(-1))+'px 0px');
}

$("#bt_rung").click(function(){
	if(check_tien())
	{
		$("#ban_dat").fadeOut(30);
		$.ajax({
							type: "POST",
							url: "./bau_cua_tom_ca.ajax",
							data: $("#fm").serialize(),
							success: end_game
		});
		$("#tt_kq").html("");
		bctc_chay = setInterval(xoay,100);
		$("#ban_xoay").fadeIn(100);
		$("#bctc_top_t").html('<b style="color:red;">ĐANG RUNG.....</b>');
	}
	else
	{
		$("#bctc_top_t").html('<b style="color:red;">Bạn phải đặt ít nhất một cửa , và tiền còn lại của bạn phải lớn hơn 0</b>');
	}

});

function end_game(data,status)
{
	arr_data = data.split("|");
	tcl= parseInt(arr_data[4]);
	if(arr_data[0]=="1")
	{
		setTimeout(function(){
			clearInterval(bctc_chay);
			xuc_xac(arr_data[1],arr_data[2],arr_data[3]);
			$("#toptt_tr th").css("background-color","#000");
			$("#toptt_tr th").attr("ok",0);
			for(var i=1;i<=3;i++)
			{
				$("#dvar_"+arr_data[i]).css("background-color","yellow");
				$("#dvar_"+arr_data[i]).attr("ok",1);
			}
			for(var j=0;j<=5;j++)
			{
				if($("#dvar_"+j).attr("ok") == 1 && $("#dvar_"+j).text()!="0")
				{
					$("#dvar_"+j).css("background-color","green");
				}
				if($("#dvar_"+j).text()!="0" && $("#dvar_"+j).attr("ok") == 0)
				{
					$("#dvar_"+j).css("background-color","red");
				}
			}
			$("#ban_xoay").fadeIn(100);
			$("#tt_kq").html(arr_data[5]);
			$("#bt_choitiep").fadeIn(100);
			$("#bctc_top_t").html('<b style="color:yellow;">KẾT QUẢ :</b>');
			},Math.round(Math.random()*500)+3000);
	}
	else
	{
		alert("Bạn bị phát hiện đang gian lận!!");
		clearInterval(bctc_chay);
		$("#bt_choitiep").fadeIn(100);
	}
	$("#tt_kq").fadeIn(100);
	$("#tcl").text(tcl);
}
$("#bt_choitiep").click(function(){
	choi_tiep();
	});
function choi_tiep()
{
	$("#bctc_top_t").html("CHÚC MAY MẮN");
	$("#ban_xoay").fadeOut(30);
	$("#tt_kq").fadeOut(30);
	$("#bt_choitiep").fadeOut(30);
	$("#toptt_tr th").text("0");
	$("#toptt_tr th").css("background-color","black");
	for(var i=0;i<=5;i++)
	{
			$("#var_"+i).val(0);
	}
	setTimeout(function(){
		    $("#ban_dat").fadeIn(30);
		},100);
}
