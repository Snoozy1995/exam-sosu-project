import http from 'k6/http';
import {sleep, check} from 'k6';

export let options = {
    stages: [
        { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
        { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
        { duration: '5m', target: 0 }, // ramp-down to 0 users
    ]
}
sleep(10);
export default function () {



    var url = "http://health-journal-api-container:3000";
    // var url = "http://localhost:3000";
    var payload = JSON.stringify({
        username: 'test',
        password: 'test'
    });

    var params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const resPost = http.post(url + '/auth', payload, params);
    check(resPost, {
        'status is 201': (r) => r.status === 201,
    });

    const cookie = resPost.cookies["connect.sid"][0].value;

    const resGet = http.get(url + '/fs3', {
        cookies: {
            "connect.sid": cookie
        }
    });
    console.log("resGet: ")
    console.log(resGet)
    check(resGet, {
        'status is 200': (r) => r.status === 200,
    });
}
