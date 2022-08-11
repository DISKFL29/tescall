import { MessageActionRow as ModalActionRow, Modal, TextInputComponent } from 'discord.js';
import { SlashCommandBuilder, SlashCommandStringOption, SlashCommandUserOption } from '@discordjs/builders';

export const messages = {
	hello: 'Здравствуйте, %NAME%!',
	helloDescription:
		'Вас рада приветствовать служба поддержки Vare!\nВ скором времени Вам будет назначен агент поддержки, который постарается решить ваш вопрос!',
	goodbye: 'Тикет был завершён агентом поддержки!',
	goodbyeError: 'Тикет закрыт из-за ошибки!',
	goodbyeDescription:
		'Спасибо за обращение!\nДля повторного обращения, необходимо будет написать сообщение с темой нового тикета в этот чат!',
	waiting: '⚠ Пожалуйста, дождитесь, пока ваш тикет будет принят агентом поддержки!',
	stuffJoined: 'К вам присоединился агент поддержки!',
	chatEnabled: 'С этого момента вы находитесь в чате!',
};

export const ticketsErrors = {
	invalidBotId: 'Указан не верный айди',
	muted: 'Вы временно не можете создавать новых обращений',
};

export const replies = [
	{
		label: 'Ожидайте перепроверки',
		value: 'botReCheck',
		description: 'Здравствуйте и спасибо за предоставленную информацию, ожидайте перепроверки!',
		emoji: '🛠',
	},
	{
		label: '#шпаргалка',
		value: 'botShpora',
		description: 'Убедитесь, пожалуйста, что ваш бот соответствует всему, что есть в канале #шпаргалка!',
		emoji: '🗑',
	},
	{
		label: 'Права ботов',
		value: 'botPerms',
		description: 'На тестовом сервере установлены эти права для ботов...',
		emoji: '🛡',
	},
	{
		label: 'Проблема с /up',
		value: 'upIssue',
		description: 'На всех серверах бот добавил свои слеш команды...',
		emoji: '🆙',
	},
	{
		label: 'В ЧС Ники',
		value: 'warnsIssue',
		description: 'Это означает что вы в черном списке системы Nika...',
		emoji: '⚠',
	},
];

export const repliesMessages = {
	botReCheck: 'Здравствуйте и спасибо за предоставленную информацию, ожидайте перепроверки!',
	botShpora: 'Убедитесь, пожалуйста, что ваш бот соответствует всему, что есть в канале #шпаргалка!',
	botPerms:
		'На тестовом сервере установлены эти права для ботов: https://cdn.discordapp.com/attachments/669972218868138025/880823412614897724/testRole.png',
	upIssue:
		'На всех серверах бот добавил свои слеш команды, однако, если этого не произошло, то перепригласите бота с правом «Создание слеш-команд»!\nПриглашение бота: https://discord.com/oauth2/authorize?client_id=464272403766444044&scope=bot+applications.commands&permissions=3533825',
	warnsIssue:
		'Здравствуйте. Это означает, что вы в черном списке системы Nika. Она предназначена для борьбы со спам рассылками приглашений.\nЕсли вы считаете, что произошла какая-то ошибка, то можете заполнить форму https://sdc.su/form\nОднако учтите, если последнее предупреждение в системе было выдано раньше полугода назад, то предупреждения сняты не будут.',
};

export const colors = {
	grey: '#666666',
	green: '#378D53',
	blue: '#7083CF',
	red: '#D82D42',
	yellow: '#FFAC33',
};
