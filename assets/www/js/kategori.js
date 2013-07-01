$(document).ready(function() {

$('#loading').show();

get_data();

function get_data(){
	var AmbilData;
	$.ajax({
				type : 'GET',
				url : 'http://10.0.2.2/services/DBConnect.php',
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						AmbilData = data.items;
							$('#loading').hide();
							$('#tampilData').show();
							$.each(AmbilData, function(index, loaddata) {
							$('#dataList').append(
								'<li data-role="list-divider" data-theme="a" class="listview-custom"><a onClick="alert(\''+ loaddata.nama_kategori + '\');" data-ajax="false">'+ loaddata.nama_kategori + '</a></li>');
							});
				},
				error: function(jqXHR, exception) {
					$('#loading').hide();
					$('#gagal').show();
				}
		});	
}
	

});









