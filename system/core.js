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
		
		Wtic.inizialized = true;
		Wtic.console();
	},
	console:		function () {
		Wtic.write(Wtic.ps1);
		Wtic.writeln('<input type="text" id="user_input" onkeydown="if(event.keyCode==13) Wtic.getUserInput()">');
	},
	
	write:			function(text) {
		Wtic.container.innerHTML = Wtic.container.innerHTML + text;
	},
	
	writeln:			function(text) {
		Wtic.container.innerHTML = Wtic.container.innerHTML + text + '</br>';
	},
	
	getUserInput: function() {
		Wtic.lastInput = user_input.value;
		Wtic.useUserInput();
	},
	
	useUserInput: function () {
		if ( Wtic.lastInput == "help" )
		{
			Wtic.help();
		}
		
		user_input.id = "old"+Wtic.counter;
		eval("old"+Wtic.counter).disabled = true;
		Wtic.counter += 1;
		Wtic.console();
	},
	
	help: function () {
		Wtic.writeln('<font color="red">HELP</font> - Print this output');
		Wtic.writeln('<font color="red">CD</font> - Move into directory');
		Wtic.writeln('<font color="red">LS</font> - List all directory and files');
	}
}
		