import axios from "axios";
import {useAppState} from "@/store/modules/app.js";
//是否是触摸设备
export const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0

//禁止滚动
export const scrollStop = () => {
    let box = function () {
        passive: false;
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener("touchmove", box, false);
}
//开启滚动
export const scrollMove = () => {
    var box = function () {
        passive: false
    };
    document.body.style.overflow = ''; //出现滚动条
    document.removeEventListener("touchmove", box, false);
}

//下载
export const downloadHandle = async (imgurl) => {
    try {
        const response = await axios({
            url: imgurl,
            method: 'GET',
            responseType: 'blob', // important
        });

        // Create a new Blob object
        const blob = new Blob([response.data], {type: response.data.type});

        // Create a link element, hide it, direct it towards the blob, and then 'click' it programatically
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = imgurl.split('/').reverse()[0];

        // Append the link to the body
        document.body.appendChild(link);

        // Dispatch a click event on the link
        link.click();

        // Remove the link from the body
        document.body.removeChild(link);
    } catch (error) {
        console.error('Download error', error);
    }
}
//图片资源加载
export const preloadImages = (imgUrlList) => {
    imgUrlList.forEach(i => {
        var img = new Image();
        img.src = i;
        img.onload = function () {
            console.log(i + '加载完成')
        }
    })
}
export const modal = {
    open(data) {
        const appState = useAppState()
        appState.openModal(data)
    },
    close() {
        const appState = useAppState()
        appState.closeModal()
    }
}
export function copyToClipboard(text) {
    // 创建一个隐藏的 textarea 元素
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
        // 尝试使用 Clipboard API
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                console.log('Text copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy text with Clipboard API:', err);
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    } catch (err) {
        console.error('Error copying text:', err);
        fallbackCopy(text);
    } finally {
        document.body.removeChild(textArea);
    }
}

function fallbackCopy(text) {
    // 使用 document.execCommand 作为后备方案
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
        console.log('Text copied to clipboard using execCommand');
    } catch (err) {
        console.error('Failed to copy text with execCommand:', err);
    } finally {
        document.body.removeChild(textArea);
    }
}
export const message = {
    open:(content,time)=>{
        const appState = useAppState()
        appState.openMessage(content,time)
    }
}
