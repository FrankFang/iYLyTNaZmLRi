import path from 'path'
import fs from 'fs'
const configureServer = [
  async ({ app }) => {
    app.use(async (ctx, next) => {
      if (ctx.path.endsWith('.demo.vue')) {
        ctx.type = 'js'
        const filePath = path.join(process.cwd(), ctx.path)
        ctx.body = fs.readFileSync(filePath)?.toString()
      } else {
      }
      await next()
    })
  },
]
export function source() {
  return {
    configureServer
  }
}