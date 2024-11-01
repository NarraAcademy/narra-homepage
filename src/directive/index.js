import inView from './inView.js'
import swipe from './swipe.js'

export default (app)=>{
    app.directive('inView',inView)
    app.directive('swipe',swipe)
}
