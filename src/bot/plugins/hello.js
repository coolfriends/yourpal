export default class HelloPlugin {
  constructor() {
    this.command = 'hello';
    this.bot = null;
  }

  run(message) {
    message.reply(`Hello ${message.author.username}`);
  }
}
