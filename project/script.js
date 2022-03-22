document.addEventListener("DOMContentLoaded", function(event) {
    function getCookie(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : 'null';
    }
    
    let appsflyerid = setStorageValue("appsflyer_id", getUTM("appsflyer_id"));

    // get the cookie
    var conversionData = JSON.parse(getCookie('conversion_data'));
    document.getElementById('conversiondataholder').innerHTML = getCookie('conversion_data');
    document.getElementById('cookies').innerHTML = document.cookie;
    document.getElementById('appsflyerId').innerHTML = appsflyerid;
  });



  const getUTM = (utm) => {
    let params = new URLSearchParams(document.location.search);
    let utmQuery = params.get(`${utm}`);

    return utmQuery;
}

const setStorageValue = (key, value) => {
    if(!window.localStorage.getItem(`${key}`)) {
        window.localStorage.setItem(`${key}`, JSON.stringify(value));
        return value;
    } 
    
    else if(window.localStorage.getItem(`${key}`)) {
        return JSON.parse(window.localStorage.getItem(`${key}`));
    }
}