class Api {
  static headers() {
    return {
      'Content-Type': 'application/json',
      'access-token': localStorage.getItem('access-token'),
    };
  }

  static mutlipartHeaders() {
    return {
      'Content-Type': 'multipart/form-data charset=utf-8; boundary="another cool boundary"',
    };
  }

  static setStorage(headers) {
    if (headers.get('access-token') !== null) {
      localStorage.setItem('access-token', headers.get('access-token'));
      localStorage.setItem('token-type', headers.get('token-type'));
      localStorage.setItem('expiry', headers.get('expiry'));
      localStorage.setItem('client', headers.get('client'));
      localStorage.setItem('uid', headers.get('uid'));

      localStorage.setItem('isAuthenticated', headers.get('uid') ? true : false);
    }
  }

  static clearStorage() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('token-type');
    localStorage.removeItem('expiry');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAuthenticated');
    // window.location.href="/login";
  }

  static setAuth(resp) {
    localStorage.setItem('currentUser', JSON.stringify(resp.data));
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('auth_key', JSON.stringify(resp.data.auth_key));
  }

  //Simple Request

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static patch(route, params) {
    return this.xhr(route, params, 'PATCH');
  }

  static delete(route) {
    return this.xhr(route, null, 'DELETE');
  }

  //Multipart Request
  static mutlipartGet(route) {
    return this.xhrMultiForm(route, null, 'GET');
  }

  static mutlipartPut(route, params) {
    return this.xhrMultiForm(route, params, 'PUT');
  }

  static mutlipartPatch(route, params) {
    return this.xhrMultiForm(route, params, 'PATCH');
  }

  static mutlipartPost(route, params) {
    return this.xhrMultiForm(route, params, 'POST');
  }

  static mutlipartDelete(route) {
    return this.xhrMultiForm(route, null, 'DELETE');
  }

  static fetchUrl(route) {
    if (process.env.NODE_ENV === 'development') {
      return `${process.env.REACT_APP_DEVELOPMENT_URL}/${route}`;
      // return `${process.env.REACT_APP_DEVELOPMENT_URL}/${route}`;
    }
    if (process.env.NODE_ENV === 'production') {
      return `${process.env.REACT_APP_PRODUCTION_URL}/${route}`;
      // return `${process.env.REACT_APP_DEVELOPMENT_URL}/${route}`;
    }
    return `${process.env.REACT_APP_DEVELOPMENT_URL}/${route}`;
  }

  static xhrMultiForm(route, params, verb) {
    const url = this.fetchUrl(route);
    const options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
    options.headers = this.mutlipartHeaders();
    return fetch(url, options)
      .then((resp) => {
        const json = resp.json();
        if (resp.ok) {
          if (route === 'auth' && route === 'auth') {
            localStorage.setItem('currentUser', JSON.stringify(resp.data));
          } else {
            if (resp.headers) {
              this.setStorage(resp.headers);
            }
          }
          return json;
        }
        if (route === '/auth/sign_out' || route === '/admin/sign_up' || resp.status === 401) {
          this.clearStorage();
        }
        return json.then((err) => {
          throw err;
        });
      })
      .then((json) => {
        if (route === '/user/login') {
          this.setAuth(json);
        }
        return json;
      });
  }

  static xhr(route, params, verb) {
    const url = this.fetchUrl(route);
    const options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
    options.headers = this.headers();
    return fetch(url, options)
      .then((resp) => {
        const json = resp.json();
        if (resp.ok) {
          if (route === 'auth' && route === 'auth') {
            localStorage.setItem('currentUser', JSON.stringify(resp.data));
          } else {
            if (resp.headers) {
              this.setStorage(resp.headers);
            }
          }
          return json;
        }
        if (route === '/auth/sign_out' || route === '/admin/sign_up' || resp.status === 401) {
          this.clearStorage();
        }
        return json.then((err) => {
          throw err;
        });
      })
      .then((json) => {
        if (route === 'user/login') {
          this.setAuth(json);
        }
        return json;
      });
  }
}

export default Api;
