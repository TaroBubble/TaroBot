module.exports = {
  name: 'meow',
  description: 'Testing fetch api',
  usage: '!meow random cat photo',
  args: false,
  execute: async(message, args) => {
    const fetch = require('node-fetch');
    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    message.channel.send(file);
  }
}