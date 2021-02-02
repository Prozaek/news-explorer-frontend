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
        return fetch(`${this._baseUrl}/v2/everything?q=Apple&from=2021-01-24&to=2021-01-31&sortBy=popularity&apiKey=91df3880031b4dabba1ae1c6a6829e73`, {
            headers: this._headers,
        }).then(this._getResponseData);
    }
  }
  
  const NewsApi = new Api({
    baseUrl: "http://newsapi.org",
    headers: {
        authorization: "apiKey=91df3880031b4dabba1ae1c6a6829e73",
        "Content-Type": "application/json",
    },
  });
  
  export default NewsApi;
  