import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/8387d700e76f7bad8b137.jpg' }, caption: `Total Fitur Bot Saat Ini ${fitur.length} Fitur` }, m  )
}
handler.help = ['totalfitur']
handler.tags = ['info','main']
handler.command = ['totalfitur']
export default handler
