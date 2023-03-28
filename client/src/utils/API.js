function TopRated() {
    return fetch('/api/toprated', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

function NewReleases() {
    return fetch('./api/newreleases', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};