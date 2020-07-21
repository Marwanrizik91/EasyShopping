function getCode(json) {
    return (json.code || (json.header && json.header.code) || 9000);
  }
  
  function getMessage(json) {
    return (json.message || (json.header && json.header.message) || 'Unknown error');
  }
  
  function fail(message, cb) {
  
      if (cb) {
          cb(message, null);
      }
      return Promise.resolve({ error: message });
  }
  
  function success(json, cb) {
      if (cb) {
          cb(null, json);
      }
      return Promise.resolve(json);
  }

export function APIcall(website, method, headers, cb) {


    return fetch(website, {
        method: method,
        credentials: 'include',
        headers: headers,
    }).then(response => response.json()).then((json) => {
        let code = getCode(json);
        let message = getMessage(json);
        if((code !== 200) && (code !== 201)) {
            return fail(message, cb);
        }
        return success(json, cb);
    }, (error) => {
        return fail(error, cb)
    })
}