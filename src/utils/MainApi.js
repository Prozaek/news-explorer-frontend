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
  
    // получает карточки
    getInitialArticles() {
        return fetch(`${this._baseUrl}`, {
            headers: this._headers,
        }).then(this._getResponseData);
    }
  }
  
  const MainApi = new Api({
    baseUrl: "https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=91df3880031b4dabba1ae1c6a6829e73",
  
    headers: {
        authorization: "apiKey=91df3880031b4dabba1ae1c6a6829e73",
        "Content-Type": "application/json",
    },
  });
  
  export default MainApi;