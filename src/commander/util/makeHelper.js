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

Usage: ${prefix} <${commandName}>
where <${commandName}> is one of:
`;
  const keys = Object.keys(commands);
  for (let [key, value] of Object.entries(commands)) {
    res += `    ${key}:\t${value.help}\n`;
    if ("alt" in value) {
      res += `    ${value.alt}: (alternation of '${key}' command)\n`;
    }
  }
  res += `\n\nhelp:\t or -h`;
  return res;
}
