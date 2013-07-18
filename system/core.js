Wtic = {
	version:		'0.1a',
	
	counter:		0,
	
	inizialize:		function (config) {
		if(Wtic.inizialized) {
			alert('error, Wtic already inizialized...');
			window.location.href = 'index.html';
		}
		
		Wtic.inizialized = false;
		
		Wtic.ps1 = config['PS1'];
		Wtic.container = eval(config['container']);
		Wtic.user = config['user'];
		
		Wtic.setTitle();
		Wtic.inizialized = true;
		Wtic.console();
	},
	
	setTitle:		function () {
		document.title = "shell>"+Wtic.user;
	}
	,
	
	setUser:		function (name) {
		Wtic.user = name;
		Wtic.setTitle();
	}
	,
	console:		function () {
		Wtic.write(Wtic.ps1.replace('{USER}',Wtic.user));
		Wtic.writeln('<input type="text" id="user_input" onkeydown="if(event.keyCode==13) Wtic.getUserInput()">');
	},
	
	write:			function(text) {
		Wtic.container.innerHTML = Wtic.container.innerHTML + text;
	},
	
	writeln:		function(text) {
		Wtic.container.innerHTML = Wtic.container.innerHTML + text + '</br>';
	},
	
	getUserInput:	function() {
		Wtic.lastInput = user_input.value.split(" ");
		Wtic.useUserInput();
	},
	
	useUserInput:	function () {
		user_input.id = "old"+Wtic.counter;
		eval("old"+Wtic.counter).disabled = true;
		var valid = false;
		Wtic.lastInput[0] = Wtic.lastInput[0].toLowerCase();
		if ( Wtic.lastInput[0] == "help" )
		{
			valid = true;
			Wtic.help();
		}
		
		if ( Wtic.lastInput[0] == "exit" )
		{
			valid = true;
			window.location.href = "http://www.google.com";
		}
		
		if ( Wtic.lastInput[0] == "su" )
		{
			if ( Wtic.lastInput[1] != "" )
			{
				valid = true;
				Wtic.setUser(Wtic.lastInput[1]);
			}
		}
		
		if ( Wtic.lastInput[0] == "clear" )
		{
			valid = true;
			Wtic.container.innerHTML = "";
		}
		if ( !valid )
		{
			Wtic.notValidInput();
		}
		Wtic.counter += 1;
		Wtic.console();
	},
	
	help:			function () {
		Wtic.writeln('<font color="red">HELP</font> - Print this output');
		Wtic.writeln('<font color="red">CLEAR</font> - Move into directory');
		Wtic.writeln('<font color="red">SU user</font> - List all directory and files');
		Wtic.writeln('<font color="red">EXIT</font> - exit :O');
		
	},
	
	notValidInput:	function () {
		Wtic.writeln("'" + Wtic.lastInput + "' not valid..");
	}
}
		