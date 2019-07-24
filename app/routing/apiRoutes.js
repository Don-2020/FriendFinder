var friendInfo = require('../data/friend.js');

function apiRoute(app) {
    app.get('/api/friend', function (req, res) {
        res.jso(friendInfo)
    });

    app.post('/api/friend', function (req, res) {

        //Parse new friend input
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            score: []
        };
        var scoreArray = [];
        for (var i = 0; i < req.body.scores.length; i++) {
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        newFriend.score = scoreArray;

        //compare new friend entry
        var scoreComparisionArray = [];

        for (var i = 0; i < friendInfo.length; i++) {

            // Check each friend's scores and sum difference in points
            var currentComparison = 0;
            for (var j = 0; j < newFriend.score.length; j++) {
                currentComparison += Math.abs(newFriend.score[j] - friendInfo[i].score[j]);
            }

            // Push each comparison between friends to array
            scoreComparisionArray.push(currentComparison);
        }

        // Determine the best match using the postion of best match in the friendsData array
        var bestMatchPosition = 0; // assume its the first person to start
        for (var i = 1; i < scoreComparisionArray.length; i++) {

            // Lower number in comparison difference means better match
            if (scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]) {
                bestMatchPosition = i;
            }

        }

        friendInfo.push(newFriend);


    });
};

module.exports = apiRoutes;
