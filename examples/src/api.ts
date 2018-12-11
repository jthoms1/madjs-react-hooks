let intervals: WeakMap<Callback, NodeJS.Timeout> = new WeakMap();

type Callback = (time: number) => any;

export const subscribe = (startTime: number, callback: Callback) => {
  let time = (startTime == null) ? startTime : 0;

  let interval = setInterval(() => {
    time = time + 1;
    callback(time);
  }, 1000);

  intervals.set(callback, interval);
};

export const unsubscribe = (callback: Callback) => {
  let interval = intervals.get(callback);

  if (interval) {
    clearInterval(interval);
  }
};
