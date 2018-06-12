import Discord from "discord.js";


export default class Bot {
  constructor(config) {
    this.token = config.token;
    this.client = new Discord.Client();
    this.prefix = "!";
    this.plugins = {};
  }

  add_plugin(plugin) {
    this.plugins[plugin.command] = plugin;
    plugin.bot = this;
  }

  start() {
    this.client.on('ready', () => {
      console.log(`Logged in as ${this.client.user.tag}!`);
    });
    this.client.on('message', message => {
      if (message.author.bot) return;
      if(message.content.indexOf(this.prefix) !== 0) return;

      const args = message.content.slice(this.prefix.length).trim().split(" ");
      const command = args.shift().toLowerCase();

      if (this.plugins[command] !== undefined) {
        this.plugins[command].run(message);
      }
    });
    this.client.login(this.token);
  }
}
