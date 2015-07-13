app.factory('FlashCardFactory', function($http) {
  return {
    getFlashCards: function(category) {
      var config = {}
      if (category) config.params = {category: category}
      return $http.get('/cards', config)
                  .then(function(res) {
                    return res.data
                  })
    },

    createNewCard: function(newCard) {
      return $http.post('/cards', newCard)
                  .then(function() {
                    console.log('Success!');
                  })
    }
  }
})
