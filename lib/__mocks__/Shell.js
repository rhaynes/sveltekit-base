import ActualShell from '../Shell.js';

class Shell {
  constructor() {
    this.sh = new ActualShell();
  }

  format(cmd, args) {
    return this.sh.format(cmd, args);
  }

  escape(str) {
    return this.sh.escape([str]);
  }

  cd(dir) {
    console.log(`cd ${dir}`);
    this.sh.cd(dir);
  }

  async exec(cmd, args) {
    throw new Error(this.format(cmd, args));
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
