import { MessageEmbed } from "discord.js";
import {colors} from "../../../config.js";

export default async function(client, inter, userId) {
	client.users.fetch(userId).then((user) => {
		user.send({
			embeds: [
				new MessageEmbed()
					.setTitle(client.userLib.config.goodbye)
					.setDescription(client.userLib.config.goodbyeDescription)
					.setColor(colors.green)
			]
		}).catch(console.error);
	});

	let embed = inter.message.embeds[0];
	embed.title = client.userLib.config.goodbye;
	embed.color = colors.grey;

	inter.update({embeds: [embed], components: []});

	const thread = await client.userLib.channel.threads.fetch(client.userLib.tickets.get(userId).thread);
	await thread.setArchived(true, client.userLib.config.goodbye);

	client.userLib.tickets.delete(userId);
	client.userLib.threads.delete(inter.message.id);

	console.log(client.userLib.getTime() + `Тикет закрыт! @${userId}`);
}