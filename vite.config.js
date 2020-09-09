import { md } from "./plugins/md";
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

export default {
  plugins: [md()],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const main = file.split(parsed.loc.source).join('')
      return `export default function (Component) {
        Component.__demo = ${
        JSON.stringify(main)
        }
      }`
    }
  }
};
