//入口文件

//把vue 类库导入
import Vue from "vue"
import App from "./app.vue"

const root = document.createElement('div')
document.body.appendChild(root)


new Vue({
        //就是一个方法，接收 h 参数，h参数 是 createApp参数，把App挂载到html里面 App 来自 import App from "./app.vue";
        render: (h) => h(App)
    }
).$mount(root)
