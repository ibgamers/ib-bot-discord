const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});

client.on("message", (message) => {

	const args = message.content.trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  
	switch(command){

	  	case "automix":
	  		message.channel.send('* IP [MIX]: 190.0.163.155:27018');
	  		break;
	  	case "publico":
	  		message.channel.send('* IP [PUB]: 190.0.163.155:27019');
	  		break;
	  	case "mix":
	  		message.channel.send('* IP [MIX]: 190.0.163.155:27018');
	  		break;
	  	case "pub":
	  		message.channel.send('* IP [PUB]: 190.0.163.155:27019');
	  		break;
	} 
});

client.login(process.env.BOT_TOKEN);
