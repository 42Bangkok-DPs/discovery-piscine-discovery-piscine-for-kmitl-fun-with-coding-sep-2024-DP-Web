const getCookies = () => {
    const cookies = {};
    const rawCookies = document.cookie; // Get the raw cookie string
    let startIdx = 0;

    while (startIdx < rawCookies.length) {
        let endIdx = rawCookies.indexOf(';', startIdx);
        if (endIdx === -1) {
            endIdx = rawCookies.length;
        }

        const cookie = rawCookies.substring(startIdx, endIdx).trim();
        const [name, value] = cookie.split('=');
        cookies[name] = value;

        startIdx = endIdx + 1;
    }

    return cookies;
};

// Usage example
const cookies = getCookies();
console.log(cookies);
