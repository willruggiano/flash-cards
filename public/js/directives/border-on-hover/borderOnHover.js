app.directive('borderOnHover', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attr) {
      elem.on('mouseenter', function() {
        elem.css({
          border: '2px solid black'
        })
      })

      elem.on('mouseleave', function() {
        elem.css({
          border: '1px solid black'
        })
      })
    }
  }
})
