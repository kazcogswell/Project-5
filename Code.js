"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let numDownloads, genre;
let downloads = [];
/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    setDownloads();
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    while (continueResponse === 1) {
        populateDownloads();
        setContinueResponse();
    }
    printReceipt();
    bubbleSort();
}

main();
function setDownloads() {
    downloads[1] = 0;
    downloads[2] = 0;
    downloads[3] = 0;
    downloads[4] = 0;
    downloads[5] = 0;
    downloads[6] = 0;
}
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @desc students MD array mutator
 * @returns {null}
 */
function populateDownloads() {
    genre = 0;
    while (!genre || !/^[1-6 -]{1,2}$/.test(genre)) {
        genre = Number(PROMPT.question(`What genre of music did you buy from? 1.) Classic 2.)Easy Listening 3.)Jazz 4.)Pop 5.)Rock 6.)Other: `));
        numDownloads = Number(PROMPT.question('How many songs did you download from this genre?; '));
        if (genre === 1) {
            downloads[1] += numDownloads;
        } else if (genre === 2) {
            downloads[2] += numDownloads;
        } else if (genre === 3) {
            downloads[3] += numDownloads;
        } else if (genre === 4) {
            downloads[4] += numDownloads;
        } else if (genre === 5) {
            downloads[5] += numDownloads;
        } else if (genre === 6) {
            downloads[6] += numDownloads;
        } else {
            console.log('That is an invalid answer.')
        }
    } console.log ('pp '+downloads[3]+ ' boi')
}

function printReceipt() {
    console.log('Classical genre music was downloaded ' + downloads[1] + ' times.');
    console.log('Easy Listening genre music was downloaded ' + downloads[2] + ' times.');
    console.log('Jazz genre music was downloaded ' + downloads[3] + ' times.');
    console.log('Pop genre music was downloaded ' + downloads[4] + ' times.');
    console.log('Rock genre music was downloaded ' + downloads[5] + ' times.');
    console.log('Other genre music was downloaded ' + downloads[6] + ' times.');
    console.log('Your total is $',downloads[1] + downloads[2] + downloads[3] + downloads[4] + downloads[5] + downloads[6],'.00.' );
}
    function bubbleSort() {
        console.log(`Bubble Sorting`);
        let didSwap = 1;
        let temp;
        while (didSwap) {
            didSwap = 0;
            for (let i = 0; i < downloads.length; i++) {
                if (downloads[i - 1] > downloads[i]) {
                    temp = downloads[i];
                    downloads[i] = downloads[i - 1];
                    downloads[i - 1] = temp;
                    didSwap = 1;
                }
            }
        }
    console.log('In order from least to greatest: '+ downloads[1] +', '+ downloads[2] +', '+ downloads[3] +', '+ downloads[4] +', '+ downloads[5] +', '+ downloads[6] +'.');
}
//Ask Howard:
//Bubble sort, specific parts in multidimensional array