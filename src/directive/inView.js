
const handleScroll = (el,callback)=>{
    const rect = el.getBoundingClientRect();
    // const vWidth = window.innerWidth || document.documentElement.clientWidth;
    const vHeight = window.innerHeight || document.documentElement.clientHeight;
    // const outView = rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight;
    const outView = rect.bottom < 0 ||  rect.top > (vHeight-(window.innerWidth>775?300:10));
    if (!outView) {
        callback({status: 200, message: '进入页面'})
    }
}

export default {
    mounted: (el, bidding) => {
        const {callback} = bidding.value
        // const ob = new IntersectionObserver((entries) => {
        //     console.log(el,entries)
        //     entries.forEach((entry) => {
        //         if (entry.isIntersecting) {
        //             console.log(456456)
        //             callback({status: 200, message: '进入页面'})
        //         }
        //     })
        // },{
        //     threshold:1
        // })
        // el && ob.observe(el)
        handleScroll(el, callback);
        window.addEventListener('scroll', ()=>handleScroll(el,callback));
    },
    unmounted: () => {
        window.removeEventListener('scroll', ()=>handleScroll);
    }
}
