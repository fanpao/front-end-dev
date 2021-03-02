(function (window){
    let app = window.App || {}
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
    FormHandler.prototype.addSubmitHandler = function (){
        console.log('Setting submit')
        this.$formElement.on('submit', function (event){
            event.preventDefault()
        })
    }
    App.FormHandler = FormHandler
        window.App = App
    }
)(window)