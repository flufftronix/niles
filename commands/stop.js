// module imports
const { killUpdateTimer } = require("~/handlers/updaterList.js");

module.exports = {
  name: "stop",
  description: true,
  execute(message, args) {
    args;
    killUpdateTimer(message.channel.guild.id, "stop command");
  }
};
