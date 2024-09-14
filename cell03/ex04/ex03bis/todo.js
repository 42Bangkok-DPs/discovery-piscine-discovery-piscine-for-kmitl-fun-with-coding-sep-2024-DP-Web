const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value || "") + expires + "; path=/";
};

const getCookie = (name) => {
    const nameEQ = name + "=";
    const cookies = document.cookie;
    const startIdx = cookies.indexOf(nameEQ);

    if (startIdx === -1) {
        return null;
    }

    let endIdx = cookies.indexOf(';', startIdx);
    if (endIdx === -1) {
        endIdx = cookies.length;
    }

    return decodeURIComponent(cookies.substring(startIdx + nameEQ.length, endIdx));
};
