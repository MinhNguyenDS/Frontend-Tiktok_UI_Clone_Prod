const { override, useBabelRc, addWebpackPlugin } = require("customize-cra");

const webpack = require('webpack');

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    addWebpackPlugin(
        new webpack.DefinePlugin(
            {
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }
        )
        
    )
);
