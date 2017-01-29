var fs = require('fs');
var path = require('path');

module.exports = function(group, individual, quantity, type) {
	if(arguments.length < 2) {
		console.error("Usage: fantasy-names GROUP INDIVIDUAL [QUANTITY=1] [TYPE=0]");
	} else {
		if(typeof quantity === 'undefined') quantity = 1;
		if(typeof type === 'undefined') type = 0;
		
		try {
			eval(fs.readFileSync(path.join(__dirname, 'generators/'+group+'/'+individual+'.min.js'),'utf8'));
			var generator = eval('generator$'+group+'$'+individual);
			
			var output = "";
			for(var q = 0; q < quantity; q++) {
				output += generator(type);
				if(q < quantity - 1) output += '\n';
			}
			return output;
		} catch(e) {
			console.error("Couldn't load: generator$"+group+"$"+individual);
			return "";
		}
	}
}