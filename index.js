var express = require("express");
const request = require("request");
const fs = require("fs");
const readLine = require("readline");
var path = require("path");

const lingustics = require("./lingustics");

var contractions = lingustics.contractions;

var app = express();


// Initializing freqmap object
var freqMap = {};
var freqArray = [];


/* 
    function to readfile line by line.
*/
function readFile(path) {

    // create stream using provided file path
    const readStream = fs.createReadStream(path);

    // use readline interface to read file line by line
    const input = readLine.createInterface({
        input : readStream
    });
    
    // Pass each line to writeToFreqMap fun to generate freq map of words.
    input.on("line", (line) => {
        WriteToFreqMap(line);
    });

    input.on("close", () => {

        //console.log(freqMap);
        // fs.writeFile("freq.txt", JSON.stringify(freqMap), (error) => {
        //     if(error)
        //         console.log('file error ' + error);
        //     else {
        //         console.log('freq file wrote succesfully');
        //         // on succesfully writing to file call readFile
        //     } 
        // }); 
        
        /**
         * Create sorted freqarray from freqmap
         */
        let tmp = [];
        for(let key in freqMap) {
            tmp.push(key) ;
            tmp.push(freqMap[key]);
            freqArray.push(tmp);
            tmp = [];
        }

        //sort freq array in descending order
        freqArray.sort((arr1, arr2) => {
            return arr2[1] - arr1[1];
        });

        /* fs.writeFile("freqarr.txt", freqArray.toString(), (error) => {
            if(error)
                console.log('file error ' + error);
            else {
                console.log('freq file wrote succesfully');
                // on succesfully writing to file call readFile
            } 
        });  
        */       

        //console.log(freqArray);
        
    });
    

}

/* function to check whether a character is an alphabet or not
   returns true in case of alphabet(english) otherwise false.
   case-insensitive */
function isAlphabet(_character) {

    if(_character >= 'a'  &&  _character <= 'z')
        return true;
    
    if(_character >= 'A' && _character <= 'Z')
        return true;
    
    if(_character === "'")   
        return true; 

    return false;   

}

/* Takes a line of string and writes words and their freqencies 
   to freqMap Object */

var WriteToFreqMap = (textString) => {


    // Pointers for substring(word) 
    let start = 0, end = 0;
    // variable to store current word.
    let curWord;

    // Parse the string and read each character
    for(let i = 0; i<textString.length;i++) {

        /* Check whether current character is a alphabet, 
        if it is increment end pointer 
        */
        if(isAlphabet(textString[i]))
            end++;

        // if not alphabet, create substring with last seen alphabets .   
        else {

            // Discarding single letter words.
            if(end > start) {

                // Taking all words to lowercase
                curWord = textString.substring(start, end).toLowerCase();

                // If contractions of words exist then
                if(contractions[curWord]) {
                    
                    // Replace with corresponding contraction
                    curWord = contractions[curWord];
                    // Split the contraction to words, incase of more than one word
                    // Add those contraction words to the frequency map
                    let wordList = curWord.split(" ");
                    for(let w in wordList) {
                        curWord = wordList[w];
                        if(curWord.length > 0) {

                            if(freqMap[curWord])
                                freqMap[curWord] += 1;                        
                            else
                                freqMap[curWord] = 1;
                        }
                    }
                    start = end = i+1;
                    continue;

                }

                //curWord = curWord.toLowerCase();

                // If word is already present in map increment its frequency
                if(freqMap[curWord])
                    freqMap[curWord] += 1;

                // if current word is a new one, create word in freqmap.    
                else
                    freqMap[curWord] = 1;   
            } 
            // start a new substring position
            start = end = i+1;
                
            }
        }
        //console.log(freqMap);
    }


/* Node Server Starts */

// File path to save and URL to fetch file.

const filepath = "ttt.txt";
const URL = "https://terriblytinytales.com/test.txt";


/* Get Request to fetch file , takes URL and a callback fun*/

request(URL, (error, response, body) => {

    // check for connection error
    if(error) {
        console.log(error);
        return;
    }
    // check request is succesfull and response body is defined.
    if(response.statusCode === 200 && body) {
        fs.writeFile(filepath, body, (error) => {
            if(error)
                console.log('file error ' + error);
            else {
                console.log('file wrote succesfully');

                // on succesfully writing to file call readFile
                readFile(filepath);
            } 
        });

        return;

    }
    // In case of error response code or body undefined, log.
    else    
        console.log("something went wrong" + response.statusCode);
    

}); 


app.get('/', function(req, res) {
    res.send("hello! world");
});

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// common get method for fetching static files
app.get('/:filename', function(req, res) {
    res.sendFile(path.join(__dirname + "/"+req.params.filename));
});

/* 
*   Request handler to fetch frequency map
*/ 
app.get('/freq-map/:top', function(req, res) {

    // fetch parameter and slice the freq array and return it
    let top = parseInt(req.params.top);
    let sliceIndex = 0;
    let topFreq = freqArray[0][1];
    let noOfFreq = 1;

    // find index upto required frequencies
    for(let i in freqArray) {
        if(freqArray[i][1] !== topFreq) {
            noOfFreq++;
            topFreq = freqArray[i][1];
        }
        sliceIndex++;
        if(noOfFreq > top) 
            break;   
    }
    //return json response of sliced freq array
    res.json({freqArray : freqArray.slice(0, sliceIndex-1)});
});

//start server
app.listen(3001, function() {
    console.log("server started at port 3000");
});