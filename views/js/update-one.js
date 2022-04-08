function updateElement(el) {

    if (!isTableValid()) {
        return;
    }
    
    let updatePos = el.target.parentNode.parentNode.querySelector('#number').innerHTML;
    
    let changeJSON = getSingleJSONFromElement(updatePos);

    // Posts update to the server
    callSingleUpdate(updatePos, changeJSON);

}