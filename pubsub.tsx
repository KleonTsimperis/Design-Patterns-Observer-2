export function publish(name, args) {
  const customEvent = new CustomEvent(name, { detail: args });
  document.dispatchEvent(customEvent);
}

export function subscribe(name, cb) {
  function fn(event) {
    console.log(event.type);
    cb(event.detail);
  }

  document.addEventListener(name, fn);

  return function () {
    document.removeEventListener(name, fn);
  };
}
