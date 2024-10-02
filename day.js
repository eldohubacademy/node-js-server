const dayjs = require("dayjs")
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

let comparison = dayjs("10/02/2024 18:30").fromNow()

console.log( comparison   );

