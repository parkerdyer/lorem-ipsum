const gdi_lines = [
    "Don't be shy.",
    "Develop it!",
    "Shut the front door!",
    "There are no stupid questions.",
    "Diversity.",
    "Inclusivity.",
    "Empowerment.",
    "Girl, develop it!",
    "Women in tech.",
    "I write code.",
    "Web development.",
    "Software development.",
    "Achieve technology goals.",
    "Build confidence.",
    "Community.",
    "We are here for you.",
    "If you want to go fast, go alone. If you want to go far, go together.",
    "Well-behaved women seldom make history.",
    "Stay positive.",
    "Don't be afraid to fail. Be afraid not to try.",
	"Success isn't about being the best. It's about always getting better.",
	"An investment in knowledge pays the best interest."

    //insert more quotes into the array
];

$(document).ready(function() {
    var randomize = function() {
        return 0.5 - Math.random();
    };

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

$('form').on('submit', function(e) {
        e.preventDefault();
        $('.generated-text').empty().show();
        var graphs = parseInt($('.paragraph-number').val());
        var minlength = parseInt($('.paragraph-number').val() * 3);
        var maxlength = parseInt($('.paragraph-number').val() * 5);

        if (isNaN(graphs)) {
          graphs = 3;
        }

        if (isNaN(minlength)) {
            minlength = 2;
        }

        if (isNaN(maxlength)) {
            maxlength = 6;
        }

        if (maxlength < minlength) {
            alert('Maximum length must be more than the minimum length.');
            return false;
        }

        for (var i = 0; i < graphs; i++) {
            $('.generated-text').append('<p class="generated"></p>');
        }

        $('.generated').each(function() {
            gdi_lines.sort(randomize);
            var sentenceCount = randomNumber(minlength, maxlength);
            for (var x = 0; x < sentenceCount; x++) {
                $(this).append(gdi_lines[x] + ' ');
            }

        });

    });

});
