module.exports={
    devServer:{
        open:true,
        port:3333
    },
    configureWebpack:{
        resolve:{
            alias:{
                "com":"@/components",
                "util":"@/util"
            }
        }
    },

    lintOnSave: false//取消eslint代码校验
}