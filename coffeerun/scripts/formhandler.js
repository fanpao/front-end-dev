(function (window){
    let App = window.App || {}
    let $ = window.jQuery
    function FormHandler(selector){
        if(!selector){
            throw new Error('No Selector')
        }
        this.$formElement = $(selector)
        if(this.$formElement.length==0){
            throw new Error('Could not find' + selector)
        }
    }
    FormHandler.prototype.addSubmitHandler = function (fn){
        console.log('Setting submit')
        this.$formElement.on('submit', function (event){
            event.preventDefault()
            let data ={}
            $(this).serializeArray().forEach(function (item){
                data[item.name] = item.value
            })
            console.log(data)
            fn(data)
            this.reset()
        })
    }
    App.FormHandler = FormHandler
        window.App = App
    }
)(window)