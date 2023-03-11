//* Developed by ShiroDev
//* My website: https://shirodev.dev/
//* Modified by : 
//* Please leave credits.

//* Importing modules
import dotenv from "dotenv";
import Shiro from "./Shiro/shiro";
import Suzu from "./Suzu/suzu";
import database from "./database-handler";

//* Confing dotenv
dotenv.config();

//? Get the tokens and create the bots.
if (!process.env.SHIROTOKEN || !process.env.SUZUTOKEN) throw new Error();

const SHIRO = new Shiro(process.env.SHIROTOKEN, ["GuildMessages", "GuildMessageTyping", "GuildMembers", "Guilds", "MessageContent", "GuildPresences"]);
const SUZU = new Suzu(process.env.SUZUTOKEN, ["GuildMessages", "GuildMessageTyping", "GuildMembers", "Guilds", "MessageContent"]);
const user_database = new database(`${process.cwd().replaceAll("\\", "/")}/database`);

export default user_database;
export { SHIRO };