$(function () {

    const validateAnswers = function () {
        let completed = true;
        for (let i = 1; i < 11; i++) {
            if (!`$(#q${i}.val())`) {
                completed = false;
            }
        }
        for (let i = 1; i < 3; i++) {
            if (!`$('.form-control${i}')`) {
                completed = false;
            }
        }
        console.log(completed);
        return completed;


    };

    $('#submit').click(function (event) {
        event.preventDefault();
        const userData = {
            name: $('#name').val().trim(),
            photo: $('#img').val().trim(),
            score: [
                $('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val(),
                $('#q8').val(),
                $('#q9').val(),
                $('#q10').val()
            ]
        };
        let valid=true;
        userData.score.forEach(validate => {
            if (!validate)
                valid = false;
        });
        if (!valid) {
            $('#resultName').empty();
            $('#resultName').text("Please complete all answers before submitting.");
        } else {
            $.post('/api/employees', userData, function (res) {
                console.log(res);
                $('#resultName').empty();
                $('#resultImg').empty();
                $('#resultName').text(res.name);
                $('#resultImg').attr('src', res.photo);
                $('#name').val('');
                $('#img').val('');
                for (let i = 1; i <= userData.score.length; i++) {
                    $(`#q${i}`).val('');
                };
            });
        };
    });
});