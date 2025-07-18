#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import ora from 'ora';
import figlet from 'figlet';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 🎨 CLI Banner
console.log(
  chalk.magentaBright(
    figlet.textSync("Hem CLI", {
      horizontalLayout: 'default',
      verticalLayout: 'default',
    })
  )
);

console.log(chalk.cyanBright.bold("🚀 Welcome to create-hem-app!\n"));

// 🧠 Prompt user
const answers = await inquirer.prompt([
  {
    name: "framework",
    type: "list",
    message: "Choose your framework:",
    choices: ["React", "Vue"],
  },
  {
    name: "tailwind",
    type: "confirm",
    message: "Include Tailwind CSS?",
    default: false,
  },
]);

const selected = answers.framework.toLowerCase();
const variation = answers.tailwind ? "tailwind" : "base";
const templateDir = path.join(__dirname, "templates", selected, variation);
const targetDir = path.join(process.cwd(), `my-${selected}-app`);

// 🔄 Spinner for project generation
const spinner = ora("📦 Scaffolding your project...").start();

try {
  await fs.copy(templateDir, targetDir);
  spinner.succeed(chalk.greenBright(`✅ Project created at ${targetDir}`));

  // 📘 Auto-generate README.md
  const readmeContent = generateReadme(`my-${selected}-app`, selected, answers.tailwind);
  await fs.writeFile(path.join(targetDir, "README.md"), readmeContent);
  console.log(chalk.yellowBright("📘 README.md created!"));
} catch (err) {
  spinner.fail(chalk.red("❌ Error copying files:"));
  console.error(err);
}

// 📝 Function to create README.md content
function generateReadme(projectName, framework, tailwind) {
  const capitalized = framework.charAt(0).toUpperCase() + framework.slice(1);
  return `# ${projectName}

This project was generated using \`create-hem-app\`.

## 🧰 Framework: ${capitalized}
${tailwind ? "✅ Tailwind CSS included" : "❌ Tailwind CSS not included"}

## 📂 Project Setup

Just open the folder:

\`\`\`bash
cd ${projectName}
\`\`\`

Then start building your app!

---
Made with 💖 by Hem.
`;
}
