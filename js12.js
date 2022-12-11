"use strict";

/*  JavaScript 7th Edition
    Chapter 12
    Chapter case

    Bonsai Expressions FAQ 
    Author: 
    Date:   

    Filename: js12.js
*/

// Run once the page is loaded and ready 
$(() => {

    // Add click events to each question in the FAQ 
    $("dl#faq dt").click(e => {

        // Alternate between hiding and showing the answer 
        let question = $(e.target);
        let answer = $(question.next());
        $(question).toggleClass("hiddenAnswer");

        if ($(question).hasClass("hiddenAnswer")) {
            $(answer).hide();
        }
        else {
            $(answer).show();
        }
    });
});

