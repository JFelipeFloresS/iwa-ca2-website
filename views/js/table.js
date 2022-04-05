function draw_table() {
    $('#results').empty(); // Empties any content that might have been there beforehand.

    // Gets the HTML content created from the API on the server and puts it on the web page.
    $.getJSON = function (url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function (albums) {

                console.log(albums);


                let html = "<!-- Table start --><table id='albums-table' class='table table-striped'>";
                html += "<!-- Table headers --><thead><th>Position</th><th>Title</th><th>Year</th><th>Artist</th><th> </th></thead>";
                html += " <!-- Table body --><tbody id='tableBody'>";
                // create table rows for each album in the JSON file
               albums.forEach(album => {
                   html += "<tr class='album-row' id='album-row' draggable='false'>";
                   // information to be displayed
                   html += " <td class='number' id='number'>";
                   html += album.number;
                   html += "</td><td class='title' contentEditable='false'>";
                   html += album.title;
                   html += "</td><td class='year' contentEditable='false'>";
                   html += album.year;
                   html += "</td ><td class='artist' contentEditable='false'>";
                   html += album.artist;
                   html += "</td>"
                   // delete element button
                   html += "<td class='btn-td'><button class='btn btn-danger' id='delete-button' disabled='true'>delete</button></td>";
                   html += "</tr> ";
                });
                html += '</tbody></table><!-- JS Files --><script src="./js/albums.js">a</script><script src="./js/append.js">a</script><script src="./js/delete.js">a</script><script src="./js/drag-drop.js">a</script><script src="./js/year-selection.js">a</script><script src="./js/edit-validator.js">a</script>';
                $('#results').append(html);

            }
        });
    };

    $.getJSON('get/table');
}

/**
 * Draws the table when the page is ready.
 */
$(document).ready(function () {
    draw_table();
});