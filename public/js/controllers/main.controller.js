app.controller('MainCtrl', function ($scope, FlashCardFactory) {
	FlashCardFactory.getFlashCards()
                  .then(function(cards) {
										$scope.show = true
                    $scope.flashCards = cards
                  })
                  .catch(function(e) {
										console.log('error:', e);
									})

	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
	];

	$scope.active = null

	$scope.show = false

	$scope.getCardCategory = function(category) {
		$scope.active = category
		$scope.show = false
		FlashCardFactory.getFlashCards(category)
										.then(function(cards) {
											$scope.show = true
											$scope.flashCards = cards
										})
	}
});
