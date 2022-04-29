import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  duration: '1m',
  vus: 50,
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95 percent of response times must be below 500ms
  },
};

export default function () {
  http.get('http://185.196.21.189:3091/');
  sleep(3);
}

// This will export to HTML as filename "result.html" AND also stdout using the text summary
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export function handleSummary(data) {
  return {
    'result.html': htmlReport(data),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}
