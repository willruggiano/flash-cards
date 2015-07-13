app.directive('flashCard', function(ScoreFactory) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/flashCard/flashCard.html',
    scope: {
      card: '='
    },
    link: function(scope, elem, attr) {
      scope.answered = false
      scope.answeredCorrectly = null

      scope.answerQuestion = function(answer) {
        if (scope.answered) {
          return
        }

        scope.answered = true
        if (answer.correct) {
          ScoreFactory.correct++
          scope.feedback = 'Correct!'
          scope.answeredCorrectly = true
        } else {
          ScoreFactory.incorrect++
          scope.feedback = 'Nice Try...'
        }
      }
    }
  }
})
