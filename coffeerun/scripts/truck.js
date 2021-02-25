(function (window){
    let App = window.App || {}
    function Truck(truckId, db){
        this.truckId = truckId
        this.db = db
    }
    Truck.prototype.createOrder = function (order){
        this.db.add(order.emailAddress, order)
    }
    Truck.prototype.deliverOrder = function (customerId){
        this.db.remote(customerId)
    }
    Truck.prototype.printOrders = function (){
        let customerIdArray = Object.keys(this.db.getAll())
        customerIdArray.forEach(function (id){
            console.log(this.db.get(id))
        })
    }
    App.Truck = Truck
    window.App = App
})(window)