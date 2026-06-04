import { Command } from "commander"

export const info =  new Command('info')
  .name("info")
  .description("get information about your project")
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .option("--json", "output as JSON.", false)
  .action(() => {
    console.log("This is the info command. You can add your logic here to display project information.");
  });