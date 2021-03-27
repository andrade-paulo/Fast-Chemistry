$.getJSON("js/database.json", function(data) {
    var elements = data.elements
    console.log(elements[0].smbl)
})