class Api {
    constructor({ headers, baseUrl }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
        this._to = new Date()
        let dateWeekBefore = new Date().setDate(this._to.getDate()-7);
        this._from = new Date(dateWeekBefore)
        // console.log(this._to.toISOString().slice(0,10))
    }
  
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
  
    getArticles(keyword) {
        return fetch(`${this._baseUrl}/v2/everything?q=${keyword}&from=${this._from.toISOString().slice(0,10)}&to=${this._to.toISOString().slice(0,10)}&pageSize=100&sortBy=popularity&apiKey=91df3880031b4dabba1ae1c6a6829e73`, {
            headers: this._headers,
        }).then(this._getResponseData);
    }
  }
 
  const NewsApi = new Api({
    baseUrl: "https://nomoreparties.co/news",
    headers: {
        authorization: "apiKey=91df3880031b4dabba1ae1c6a6829e73",
        "Content-Type": "application/json",
    },
  });
  
  export default NewsApi;
  