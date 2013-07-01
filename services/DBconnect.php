<?php
class DBConnect
{
public $host;
public $user;
public $pass;
public $perintah;
public $database;
public $koneksi;

	function __construct()
	{
		$this->host="localhost";
		$this->user="root";
		$this->pass="";
		$this->koneksi=mysql_connect($this->host,$this->user,$this->pass);
		if(!$this->koneksi)
		{
			echo "Koneksi gagal";
			exit();
		}
		
		$this->database="db_services";
		$q=mysql_select_db($this->database,$this->koneksi);
		if(!$q)
		{
			echo "Database tidak ditemukan";
		}
	}

	public function GetKategori()
	{
		$this->perintah = mysql_query("select * from tbl_kategori");
		while($r=mysql_fetch_array($this->perintah))
		{
			$arr[] = $r;
		}

		echo '{"items":'. json_encode($arr).'}'; 
	}
}

header("content-type: application/json");
$db = new DBConnect();
$db->GetKategori();

?>

