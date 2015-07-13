app.controller('NewCardCtrl', function($scope, FlashCardFactory) {
  $scope.newCard = {
    question: null,
    category: null,
    answers: [
      {text: null, correct: false},
      {text: null, correct: false},
      {text: null, correct: false}
    ]
  }

  $scope.submit = function() {
    FlashCardFactory.createNewCard($scope.newCard)
                    .then(function() {
                      $scope.newCard = {
                        question: null,
                        category: null,
                        answers: [
                          {text: null, correct: false},
                          {text: null, correct: false},
                          {text: null, correct: false}
                        ]
                      }
                    })
  }
})
