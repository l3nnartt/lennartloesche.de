const fetch = require('node-fetch');
const DOMParser = require('dom-parser');
const fs = require('fs');

function getStats(statName, onData) {
    const url = 'https://www.timolia.de/stats/L3nnart_';

    const data = new Array();

    fetch(url).then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {

        // Convert the HTML string into a document object
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');

        var ul = doc.getElementsByClassName('col-lg-10');
        var lis = ul[0].getElementsByTagName('li');

        lis.forEach(li => {
            var name = li.getElementsByClassName('stat-header')[0].innerHTML;
            if (name === statName) {
                var rows = li.getElementsByClassName('stats-table-field');

                rows.forEach(row => {
                    var td = row.getElementsByTagName('td');
                    data.push({
                        name: td[0].innerHTML,
                        value: td[1].innerHTML
                    });
                });
            }
        });

        onData(data);

    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

getStats('1vs1', (data) => {
    console.log('-------------------------------------');
    console.log(data);
});