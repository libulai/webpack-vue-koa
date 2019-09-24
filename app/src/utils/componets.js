import vue from 'vue'
import Toast from '../components/common/Toast.vue'

const toastCom = vue.extend(Toast);

const toastVm = new toastCom().$mount();

const toast = (options) => {
    Object.assign(toastVm, options);
    document.body.appendChild(toastVm.$el);
    console.log(toastVm.$el)
    return toastVm;
}

export default {
    toast
}
