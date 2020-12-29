module.exports= {
    lintOnSave: 'warning',
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        proxy: {
            '/we': { // 只对请求路由以/api开头的请求进行代理转发
                target: 'http://101.201.67.14:8080', // 转发的目标url
                //target: 'https://m.you.163.com', // 转发的目标url
                changeOrigin: true, // 支持跨域
                pathRewrite: { // 如果后台接口没有/api就需要写
                    '^/we': ''
                }
            }
        }
    }
}