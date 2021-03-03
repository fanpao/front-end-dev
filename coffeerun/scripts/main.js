(function (window){
    const FORM_SELECTOR = '[data-coffee-order="form"]'
    let App = window.App
    let Truck = App.Truck
    let DataStore = App.DataStore
    let FormHandler = App.FormHandler
    let myTruck = new Truck('order1', new DataStore())
    let formhandler = new FormHandler(FORM_SELECTOR)
    formhandler.addSubmitHandler(myTruck.createOrder.bind(myTruck))
})(window)