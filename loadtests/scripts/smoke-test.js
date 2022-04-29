/*export const options = {
  duration: '1m',
  vus: 1,
  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};*/

import http from 'k6/http';
import { check } from "k6";
export let options = {
  stages: [
      // Ramp-up from 1 to 5 VUs in 5s
      { duration: "5s", target: 5 },
      // Stay at rest on 5 VUs for 10s
      { duration: "10s", target: 5 },
      // Ramp-down from 5 to 0 VUs for 5s
      { duration: "5s", target: 0 }
  ]
};
export default function () {
  const response = http.get("http://185.196.21.189:3091/");
  check(response, { "status is 200": (r) => r.status === 200 });
};

//@todo https://k6.io/docs/test-types/smoke-testing/