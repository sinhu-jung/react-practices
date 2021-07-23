const babel = require('@babel/core');

const result = babel.transform("const app = () => 1;", {});
console.log(result);