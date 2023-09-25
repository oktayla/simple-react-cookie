export function setCookie(name, value, options = {}) {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (options.expires) {
        const expires = new Date();
        expires.setDate(expires.getDate() + options.expires);
        cookieString += `; expires=${expires.toUTCString()}`;
    }

    if (options.path) {
        cookieString += `; path=${options.path}`;
    }

    if (options.domain) {
        cookieString += `; domain=${options.domain}`;
    }

    if (options.secure) {
        cookieString += `; secure`;
    }

    document.cookie = cookieString;
}

export function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (decodeURIComponent(cookieName) === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

export function removeCookie(name) {
    setCookie(name, '', { expires: -1 });
}
