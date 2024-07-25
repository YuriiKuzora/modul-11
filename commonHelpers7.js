import"./assets/modulepreload-polyfill-3cfb730f.js";function c(o){return fetch(`https://pixabay.com/api?key=45112912-6770c0bfd04bfeab336421b9c&q=${o}`).then(t=>{if(console.log(t),!t.ok)throw new Error(t.status);return t.json()})}c("blue+car").then(o=>console.log(o)).catch(o=>console.error(o));
//# sourceMappingURL=commonHelpers7.js.map
