const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = {
    presets,
    "plugins": [
        "@babel/plugin-transform-classes",
        "@babel/plugin-transform-arrow-functions",
        "@babel/plugin-transform-block-scoped-functions",
        "@babel/plugin-transform-block-scoping",
        "@babel/plugin-transform-computed-properties",
        "@babel/plugin-transform-destructuring",
        "@babel/plugin-transform-duplicate-keys",
        "@babel/plugin-transform-for-of",
        "@babel/plugin-transform-function-name",
        "@babel/plugin-transform-instanceof",
        "@babel/plugin-transform-literals",
        "@babel/plugin-transform-new-target",
        "@babel/plugin-transform-object-super",
        "@babel/plugin-transform-parameters",
        "@babel/plugin-transform-shorthand-properties",
        "@babel/plugin-transform-spread",
        "@babel/plugin-transform-sticky-regex",
        "@babel/plugin-transform-template-literals",
        "@babel/plugin-transform-typeof-symbol",
        "@babel/plugin-transform-unicode-regex",

        "@babel/plugin-transform-exponentiation-operator",

        "@babel/plugin-transform-async-to-generator",

    ]
};