import { exec as nodeExec } from 'child_process';
import escape from 'shell-escape';
import util from 'util';

const exec = util.promisify(nodeExec);

class Shell {
  constructor() {
    this.pwd = process.cwd();
  }

  format(cmd, args) {
    // If we're using named replace values
    if (cmd.search(':') != -1) {
      if (cmd.search(/:(\w+)/) != -1) {
        return cmd.replace(/:(\w+)/g, (txt, key) => {
          if (key in args) {
            return this.escape(args[key]);
          }
          return txt;
        });
      }
      return cmd;
    }

    // Otherwise default to array replace
    let res = cmd;
    args.forEach((arg) => {
      res = res.replace('?', () => {
        return this.escape(arg);
      });
    });
    return res;
  }

  escape(str) {
    return escape([str]);
  }

  cd(dir) {
    console.log(`cd ${dir}`);
    this.pwd = dir;
  }

  async exec(cmd, args) {
    if (!args) throw new Error('Shell command arguments should be passed as array.');

    // Execute command
    const isWindows = process.platform === 'win32';

    const escapedCmd = isWindows
      ? this.format(cmd, args).replace(/'/g, '"')
      : this.format(cmd, args);

    console.log(escapedCmd);

    return await exec(escapedCmd, {
      cwd: this.pwd,
      maxBuffer: 10 * 1024 * 1024
    });
  }

  async run(cmd, args) {
    const { stdout } = await this.exec(cmd, args);
    return stdout;
  }

  script(...args) {
    if (args.length % 2 != 0) process.exit();
    for (let k = 0; k < Math.floor(args.length / 2); k++) {
      this.run(args[2 * k], args[2 * k + 1]);
    }
  }
}

export default Shell;
