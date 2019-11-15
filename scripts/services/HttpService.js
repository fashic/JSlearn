export const HttpService = {
  sendRequest(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", url);

      xhr.send();

      xhr.onload = () => {
        if (xhr.status != 200) {
          reject(new Error("Oops"));
          return;
        } else {
          let responseData = JSON.parse(xhr.responseText);
          resolve(responseData);
        }
      };

      xhr.onerror = () => {
        reject(new Error("Oops"));
      };
    });
  },
  sendMultipleRequests(urls) {
    let requests =urls.map(url => HttpService.sendRequest(url));
    return Promise.all(requests);
  }
};