(function (window){
    const FORM_SELECTOR = '[data-coffee-order="form"]'
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]'
    let App = window.App
    let Truck = App.Truck
    let DataStore = App.DataStore
    let FormHandler = App.FormHandler
    let CheckList = App.CheckList
    let myTruck = new Truck('order1', new DataStore())
    let formhandler = new FormHandler(FORM_SELECTOR)
    let checkList = new CheckList(CHECKLIST_SELECTOR)
    formhandler.addSubmitHandler(function (data){
        myTruck.createOrder.call(myTruck, data)
        checkList.addRow.call(checkList, data)
    })
})(window)