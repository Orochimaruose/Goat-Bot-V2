module.exports = {
 config: {
	 name: "fuck",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "18+",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "fuck") {
 return message.reply({
 body: "Fuck you too🖕",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/HFMVP9z/image.gif")
 });
 }
 }
}
