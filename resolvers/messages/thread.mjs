export default function(client, msg, action) {
	let opt = {};

	if (msg.content.length) opt.content = `**${msg.author.username}**: ${msg.content}`;
	if (msg.attachments.size) opt.files = [msg.attachments.first().url];

	client.users.fetch(client.userLib.threads.get(msg.channel.id)).then((user) => {
		if (action === 'send') {
			if (msg.author.bot) return;
			user.send(opt)
				.then((sendedMsg) => {
					console.log(client.userLib.getTime() + `Сообщение было получено и переслано! @${msg.author.id}`);
					client.userLib.tickets.get(user.id).messageLinks[msg.id] = sendedMsg.id;
				})
				.catch(console.error)
		} else {
			client.users.fetch(client.userLib.threads.get(msg.channel.id)).then((user) => {
				if (!client.userLib.tickets.get(user.id).messageLinks[msg.id]) return;
				user.dmChannel.messages.fetch(client.userLib.tickets.get(user.id).messageLinks[msg.id]).then(fetchedMessage => {
					if (action === 'edited') {
						opt.files = undefined;
						fetchedMessage.edit(opt)
							.then(() => {
								console.log(client.userLib.getTime() + `Сообщение было отредактировано и переслано! @${msg.author.id}`);
							})
							.catch(console.error)
					} else if (action === 'deleted') {
						fetchedMessage.delete()
							.then(() => {
								console.log(client.userLib.getTime() + `Сообщение было удалено и переслано! @${msg.author.id}`);
							})
							.catch(console.error)
					}
				})
			});
		}
	});
}