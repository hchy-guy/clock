<!DOCTYPE HTML>
<html>

<head>
	<title>
		How to format current date in
		MM/DD/YYYY HH:MM:SS format ?
	</title>
</head>

<body style = "text-align:center;" id = "body">
	
	<h1 id = "h1" style = "color:green;" >
		GeeksForGeeks
	</h1>
	
	<p id = "GFG_UP" style =
		"font-size: 15px; font-weight: bold;">
	</p>
	
	<button onclick = "gfg_Run()">
		Click Here
	</button>
	
	<p id = "GFG_DOWN" style = "color:green;
		font-size: 20px; font-weight: bold;">
	</p>
	
	<script>
		var el_up = document.getElementById("GFG_UP");
		var el_down = document.getElementById("GFG_DOWN");
		var date = new Date();
		el_up.innerHTML = "Click on the button to format"
			+ " the date accordingly.<br>Date = " + date;
		
		function gfg_Run() {
			var Str =
				("00" + (date.getMonth() + 1)).slice(-2)
				+ "/" + ("00" + date.getDate()).slice(-2)
				+ "/" + date.getFullYear() + " "
				+ ("00" + date.getHours()).slice(-2) + ":"
				+ ("00" + date.getMinutes()).slice(-2)
				+ ":" + ("00" + date.getSeconds()).slice(-2);
				
			el_down.innerHTML = Str;
		}
	</script>
</body>

</html>
