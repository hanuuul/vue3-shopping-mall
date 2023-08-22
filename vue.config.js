const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //두단어 이상 조합하라고 하는 오류 막기
  lintOnSave:false
})
