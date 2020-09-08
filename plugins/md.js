import path from 'path'
import fs from 'fs'
import marked from 'marked'
const mdToJs = str => {
  const content = marked(str).replace(/\\/g, '\\\\').replace(/\`/g, '\\`')
  // const content = JSON.stringify(marked(str))
  return `export default \`${content}\``
}
const configureServer = [
  async ({ app }) => {
    app.use(async (ctx, next) => {
      if (ctx.path.endsWith('.md')) {
        ctx.type = 'js'
        const filePath = path.join(process.cwd(), ctx.path)
        ctx.body = mdToJs(fs.readFileSync(filePath)?.toString())
      } else {
        await next()
      }
    })
  },
]
const transform = ({ code }) => {
  return mdToJs(code)
}
export function md() {
  return {
    configureServer, transforms: [{
      test(ctx) {
        return ctx.path.endsWith('.md')
      },
      transform
    }]
  }
}