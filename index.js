'use strict';

const express = require(`express`);
const chalk = require(`chalk`);
const fs = require(`fs`).promises;

const DEFAULT_PORT = 5000;
const DATA_DIR = `./data/`;

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
  next();
});

const getCommands = async (files) => {
  try {
    for (const file of files) {
      const fileName = file.split(`.`)[0];
      if (fileName === `input`) {
        const data = await readContent();
        return data.split(`\n`);
      } else {
        console.error(chalk.red(`There is no input.txt file. First create it in data folder.`));
      }
    }
    return process.exit();
  } catch (error) {
    console.error(chalk.red(error));
    return process.exit();
  }
};

const readContent = async () => {
  try {
    const content = await fs.readFile(`./data/input.txt`, `utf8`);
    return content;
  } catch (err) {
    console.error(chalk.red(err));
    return process.exit();
  }
};

const run = async () => {
  const files = await fs.readdir(DATA_DIR);
  const commands = await getCommands(files);
  try {
    await fs.writeFile(`./data/output.txt`, commands);
    console.log(chalk.green(`Operation success. File created.`));
    return commands;
  } catch (err) {
    console.error(chalk.red(`Can't write data to file...`));
    return process.exit();
  }
};

app.get(`/`, async (req, res) => {
  const commands = await run();
  res.send(commands);
});
app.listen(DEFAULT_PORT,
    () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));
