const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin'); // 청크 플러그인
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // 난독화

let config = {
    //엔트리 설정
    entry: {
        'app' : ['./entry/app.js'],
        'lodash' : ['lodash'],
        'jquery' : ['jquery','./modules/jquery/global.js'],
        'moment' : ['moment'],
        'adminA' : ['./modules/adminA.js'],
        'adminB' : ['./modules/adminB.js']
    },
    //아웃풋 설정
    output: {
        filename: './bundle/[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{//트랜스파일 설정
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [['es2015', {modules: false}]],
                    plugins: ['syntax-dynamic-import']  // 모듈 비동기 로딩 설정
                }
            }]
        }]
    },
    plugins:[
        //webpack 내에서 require 없이 사용 가능
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _:'lodash'
        }),
        //HMR 플러그인
        new webpack.HotModuleReplacementPlugin({
            //options
        }),
        /*
        new UglifyJSPlugin({
         compress: {
            warnings: false
         },//최적화 사용 여부, true, false 외에 여러가지 옵션 존재
         mangle:true,// 문자 압축 여부
         beautify:false // 직렬화 여부(true 가 안 하는 것)
         }),
         */
        //chunk
        new CommonsChunkPlugin({
            //chunks의 공통부분을 묶어 파일 생성
            name:'admin_common',
            filename: "./bundle/common/[name].js",
            chunks:['adminA','adminB'],
        })
    ],
    //개발서버 설정
    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: './',
        publicPath: '/',
        port: 3000
    }
};

module.exports = config;


/*
 //추가설정
 let fridayConfig = Object.assign({},config,{
 name: "friday",
 output: {
 path: 'D:\\01.source\\friday\\assets\\js\\dist',
 filename: '[name].bundle.js'
 }
 });


 //번들링할 설정 배열
 module.exports = [
 config,fridayConfig
 ];
 */
