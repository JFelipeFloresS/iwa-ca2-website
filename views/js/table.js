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
                html += "<!-- Table headers --><thead><th>Position</th><th>Title</th><th>Year</th><th>Artist</th><th></th></thead>";
                html += " <!-- Table body --><tbody id='tableBody'>";
               albums.forEach(album => {
                   html += " <!-- New table row for each album in the JSON file --><tr class='album-row' id='album-row' draggable='false'>";
                   html += " <!-- Information to be displayed --><td class='number' id='number'>";
                   html += album.number;
                   html += "</td><td class='title' contentEditable='false'>";
                   html += album.title;
                   html += "</td><td class='year' contentEditable='false'>";
                   html += album.year;
                   html += "</td ><td class='artist' contentEditable='false'>";
                   html += album.artist;
                   html += "</td><!--Delete element button-- ><td class='btn-td'><button class='btn btn-danger' id='delete-button' disabled='true'>delete</button></td></tr > ";
                });
                html += "</tbody></table>";
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