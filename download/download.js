function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (/Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}


document.body.onload = function () {
    os = getOS();
    const el = document.querySelector("#download-0-1-1")
    if(os === "Linux") {
        el.href = "https://github.com/sowaengine/sowa/releases/download/v0.1.1/sowaengine-0.1.1-Linux.tar.gz"
    } else if (os === "Windows" || os == undefined) {
        el.href = "https://github.com/sowaengine/sowa/releases/download/v0.1.1/sowaengine-0.1.1-win64.zip"
    } else {
        alert(`Sowa Engine is only supported on Windows and Linux systems`)
    }
}