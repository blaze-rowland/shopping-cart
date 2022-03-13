import { Observable, defer, from } from 'rxjs';

type HttpUrl = string | undefined;
type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export class HttpService<BodyType> {
  private _url: HttpUrl;

  get url(): HttpUrl {
    return this._url;
  }

  set url(newUrl: HttpUrl) {
    this._url = newUrl;
  }

  constructor(url?: HttpUrl) {
    this._url = url;
  }

  get<T>(url: HttpUrl = this.url): Observable<T> {
    const response = this._fetch<T>(url, 'GET');
    return defer(() => from(response) as Observable<T>);
  }

  post<T>(url: HttpUrl, body: BodyType): Observable<T> {
    const response = this._fetch<T>(url, 'POST', body);
    return defer(() => from(response) as Observable<T>);
  }

  update<T>(url: HttpUrl, id: number, body: BodyType): Observable<T> {
    url = `${url}/${id}`;
    const response = this._fetch<T>(url, 'PATCH', body);
    return defer(() => from(response) as Observable<T>);
  }

  delete<T>(url: HttpUrl, id: number) {
    url = `${url}/${id}`;
    const response = this._fetch<T>(url, 'DELETE');
    return defer(() => from(response) as Observable<T>);
  }

  private _fetch<T>(
    url: HttpUrl,
    method: HttpMethod,
    body?: any
  ): Promise<T | unknown> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url ?? '', {
          method,
          body: body ? JSON.stringify(body) : null,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}
