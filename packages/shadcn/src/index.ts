#!/usr/bin/env node

import { Command } from 'commander';
import { info } from '@/src/commands/info';
import packageJson from '../package.json';
import { init } from '@/src/commands/init';
import { add } from '@/src/commands/add';

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))
// program
//   .name('my-cli')
//   .description('My custom CLI tool')
//   .version('1.0.0');

// program.command('hello')
//   .description('Say hello')
//   .action(() => console.log('Hello from my-cli!'));

// program.parse(process.argv);

async function main() {
  // You can add any additional setup or logic here if needed
  const program = new Command()
  .name('ui-cli')
  .description('My custom CLI tool')
  .version(
      packageJson.version || "1.0.0",
      "-v, --version",
      "display the version number"
    )
  //program.command('hello').description('Say hello').action(() => console.log('Hello from my-cli!'));
  program
    .addCommand(init)
    .addCommand(add)
    .addCommand(info);

  program.parse();
}

main()