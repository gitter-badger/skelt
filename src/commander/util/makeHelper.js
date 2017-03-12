import {wrapKeyword} from "./wrapKeyword";

const LOGO =
`
      ███████╗██╗  ██╗███████╗██╗  ████████╗
      ██╔════╝██║ ██╔╝██╔════╝██║  ╚══██╔══╝
      ███████╗█████╔╝ █████╗  ██║     ██║
      ╚════██║██╔═██╗ ██╔══╝  ██║     ██║
      ███████║██║  ██╗███████╗███████╗██║
      ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝
`;

export const makeHelper = function(prefix, commandName, commands) {
  let res = `
${LOGO}

Usage: ${prefix} ${wrapKeyword(commandName)}
where ${wrapKeyword(commandName)} is one of:
`;
  for (let [key, value] of Object.entries(commands)) {
    res += `    ${key}:\t${value.help}\n`;
    if ("alt" in value) {
      res += `    ${value.alt}: (alternation of '${key}' command)\n`;
    }
  }
  res += `\n${prefix} help or -h`;
  return res;
}
