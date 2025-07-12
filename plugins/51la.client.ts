export default defineNuxtPlugin(() => {
  if (process.client) {
    // 动态加载51.la脚本
    const script = document.createElement('script')
    script.src = 'https://sdk.51.la/js-sdk-pro.min.js'
    script.id = 'LA_COLLECT'
    script.charset = 'UTF-8'
    
    script.onload = () => {
      // 脚本加载完成后初始化
      if (typeof window.LA !== 'undefined') {
        window.LA.init({id:"3MiCO8W1cSbap9If",ck:"3MiCO8W1cSbap9If"})
        console.log('51.la 统计代码初始化成功')
      }
    }
    
    script.onerror = () => {
      console.error('51.la 脚本加载失败')
    }
    
    document.head.appendChild(script)
  }
}) 