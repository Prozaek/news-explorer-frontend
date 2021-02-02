class Api {
    constructor({ headers, baseUrl }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getArticles(keyword) {
        return fetch(`${this._baseUrl}/v2/everything?q=${keyword}&from=2021-01-24&to=2021-01-31&sortBy=popularity&apiKey=6358c183900748139723e76fc8aada6a`, {
            headers: this._headers,
        }).then(this._getResponseData);
    }
}

const MainApi = new Api({
    baseUrl: "https://nomoreparties.co/news",

    headers: {
        authorization: "apiKey=6358c183900748139723e76fc8aada6a",
        "Content-Type": "application/json",
    },
});

export default MainApi;
