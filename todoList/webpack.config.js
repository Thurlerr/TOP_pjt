const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js", // Arquivo principal do JavaScript
    output: {
        filename: "bundle.js", // Nome do arquivo empacotado
        path: path.resolve(__dirname, "dist"), // Pasta de saída
        clean: true, // Limpa a pasta dist antes de cada build
    },
    devtool: "eval-source-map", //facilita o debug

    module: {
        rules: [
            {
                test: /\.css$/, // Identifica arquivos .css
                use: ["style-loader", "css-loader"], // Aplica os loaders
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // Usa o HTML base da pasta src
        }),
    ],
    mode: "development", // Define o modo (pode ser "production" para otimizações)
    devServer: {
        watchFiles: ["src/**/*"], // Observa mudanças em todos os arquivos dentro de src/
        liveReload: true, // Recarrega a página automaticamente quando há mudanças
        open: true, // Abre automaticamente o navegador
      },
};
