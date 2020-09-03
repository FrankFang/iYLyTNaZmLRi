// import markdown from 'rollup-plugin-markdown';

export default {
  vueCustomBlockTransforms: {
    md: (x) => {
      console.log(x);
      // return transformed code
      return `
      export default Comp => {
        console.log(Comp);
        Object.assign(Comp.props, {md: {type:String, default:"hi"}})
        Comp.i18n = ${JSON.stringify('hi' || {})}
      }`.trim()
    },
  },
};
