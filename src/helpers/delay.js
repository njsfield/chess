export default function delay(fn, t) {
    // private instance variables
    let queue = [], self, timer;

    let schedule = (fn, t) => {
        timer = setTimeout(function() {
            timer = null;
            fn();
            if (queue.length) {
                let item = queue.shift();
                schedule(item.fn, item.t);
            }
        }, t);
    };
    self = {
        delay: (fn, t) => {
            // if already queuing things or running a timer,
            //   then just add to the queue
        	  if (queue.length || timer) {
                queue.push({fn: fn, t: t});
            } else {
                // no queue or timer yet, so schedule the timer
                schedule(fn, t);
            }
            return self;
        },
        cancel: () => {
            clearTimeout(timer);
            queue = [];
        }
    };
    return self.delay(fn, t);
}
