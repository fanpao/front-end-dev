(function (window){
    let App = window.App ||{}
    let $ = window.jQuery

    function CheckList(selector) {
        if (!selector) {
            throw new Error('No Selector')
        }
        this.$element = $(selector)
        if (this.$element.length === 0) {
            throw new Error('Could not find ' + selector)
        }
    }


        CheckList.prototype.addRow = function (coffeeOrder){
            let rowEelment = new Row(coffeeOrder)
            this.$element.append(rowEelment.$element)
        }

        function Row(coffeeOrder){
            let $div = $('<div></div>>', {
                'data-coffee-order':'checkbox',
                'class':'checkbox'
            })

            let $label = $('<label></label>>')

            let $checkbox = $('<input>',{
                'type':'checkbox',
                'value':coffeeOrder.emailAddress
            })

            let description = coffeeOrder.size  + ' '
            if (coffeeOrder.flavor){
                description += coffeeOrder.flavor + '   '
            }

            description += coffeeOrder.coffee +','
            description += '(' + coffeeOrder.emailAddress + ')'
            description += '[' + coffeeOrder.strength + ']'
            $label.append($checkbox)
            $label.append(description)
            $div.append($label)

            this.$element = $div
        }
        App.CheckList = CheckList
        window.App = App

})(window)