// Dependencies
// ===========================================================

// "data"  is the saved information on the server.
const data = require('../data/employees.js');

// Routes
// ==========================================================

module.exports = function(app) {

    app.get('/api/employees', function (req, res) {
        res.send(data);
    });

    // "async" is a promise that does not provide the response until the "await" funciton is completed.
    app.post('/api/employees', async function (req, res) {
        
        const match = await findMatch(req.body);
        // Posts the new scores to employees.js 
        data.push(req.body);
        console.log(match);
        res.send(match);
    });

    // Function finds best match based on "survey" (which is "req.body" in this case.)
    function findMatch(survey) {
               let pair, result = null;
                data.forEach(user => {
                       user.score.forEach((score, index) => {
                let difference = score - survey.score[index];
                total += Math.abs(difference);
            });
            if (pair===null || total < pair){
                total = pair;
                result = user;
            }
        });
    return result;
    }

};