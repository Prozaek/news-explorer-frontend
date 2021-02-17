class Api {
  constructor({ headers, baseUrl }) {
      this._headers = headers;
      this._baseUrl = baseUrl;
  }

  // получает сохраненные статьи
  getArticles() {
      return fetch(`${this._baseUrl}/articles`, {
          headers: this._headers,
      }).then(this._getResponseData);
  }

  // удаляет статью
  deleteArticles(articleId) {
      return fetch(`${this._baseUrl}/articles/${articleId}`, {
          method: "DELETE",
          headers: this._headers,
      }).then(this._getResponseData);
  }

  // публикует статью
  postArticles(keyword, article) {
      return fetch(`${this._baseUrl}/articles`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify({
              keyword: keyword,
              title: article.title,
              text: article.description,
              date: article.publishedAt,
              source: article.source.name,
              link: article.url,
              image: article.urlToImage,
          }),
      }).then(this._getResponseData);
  }

  updateToken() {
      this._headers.authorization = `Bearer ${localStorage.getItem("jwt")}`;
  }

  // получает данные юзера
  getUser() {
      return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers,
      }).then(this._getResponseData);
  }

  _getResponseData(res) {
      if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
  }
}

const MainApi = new Api({
  baseUrl: "http://api.new-sprint.students.nomoreparties.space/",

  headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
  },
});

export default MainApi;
