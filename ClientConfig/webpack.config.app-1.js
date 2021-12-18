const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const commonEntries = [];
const colors = require("colors");
const clientBundleInputViewsDir = "./ClientApps/";
const moduleName = "app-1";

console.log(colors.magenta(`${moduleName} Module: ${new Date()}`));

module.exports = (env, argv) => {
    return merge(common(env, argv), {
        entry: {
            [moduleName]: commonEntries.concat(
                `${clientBundleInputViewsDir}${moduleName}/App.jsx`
            ),
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    defaultVendor: {
                        name: `${moduleName}-vendors`,
                    },
                },
            },
        },
    });
};