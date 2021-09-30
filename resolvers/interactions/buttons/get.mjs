import { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } from "discord.js";
import {colors, replies} from "../../../config.js";

export default async function(client, inter, userId) {
	if (client.userLib.tickets.has(userId)) {

		const user = await client.users.fetch(userId);

		let embed = inter.message.embeds[0];
		embed.color = colors.green;

		inter.update({
			embeds: [embed],
			components: [
				new MessageActionRow()
					.addComponents(
						new MessageButton()
							.setCustomId("CLOSE:" + userId)
							.setLabel('Закрыть тикет')
							.setStyle('SUCCESS')
					)
				,
				new MessageActionRow()
					.addComponents(
						new MessageSelectMenu()
							.setCustomId("AUTOMESSAGE:" + userId)
							.addOptions(replies)
							.setPlaceholder("Быстрый ответ")
					)]
		});

		let thread = await inter.message.startThread({name: user.tag});
		client.userLib.threads.set(thread.id, userId);
		client.userLib.tickets.set(userId, {resolver: inter.user.id, thread: thread.id, messageLinks: {}});

		console.log(client.userLib.getTime() + `Тикет был открыт! @${userId}`);

		client.users.fetch(userId).then((user) => {
			return user.send({
				embeds: [
					new MessageEmbed()
						.setTitle(client.userLib.config.stuffJoined)
						.setDescription(client.userLib.config.chatEnabled)
						.setColor(colors.green)
				]
			}).catch(console.error);
		});
	} else {
		inter.reply({
			content: `Тикет #${userId} уже закрыт!`,
			ephemeral: true
		})
	}
}