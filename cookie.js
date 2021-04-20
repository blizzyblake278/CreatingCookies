"use strict";
var getCookieByName = function(name) {
    let cookies = document.cookie;

    //locates starting index of the name of the cookie
    let start = cookies.indexOf(name + "=");
    if(start === -1){return "";} // no cookie with that name so it continues to process the cookie string
    else{
        start = start + (name.length + 1); //makes sure to not include the = sign in the results
        let end = cookies.indexOf(";", start); //gets index of semicolon at end of cv
        if(end === -1){end = cookies.length;}  // returns length of string in last cookie
        let cookieValue = cookies.substring(start,end); //uses start & end indexes to get cookie value
        return decodeURIComponent(cookieValue) //decodes cookie value
    }
};

var setCookie = function( name, value, days ) {
    //name + value
    let cookie = name + "=" + encodeURIComponent(value);
    if(days !== undefined){
        cookie += "; max-age=" + days * 24 * 60 * 60;
    }
    cookie += "; path=/";
    document.cookie = cookie;
};

var deleteCookie = function( name ) {
    document.cookie = name + "=; max-age=0; path=/"

};