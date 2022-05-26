import http from 'k6/http';
import {check} from 'k6';

export let options = {
    stages: [
        {duration: '5s', target: 1},
        // {duration:'5s', target:50},
        // {duration:'5s', target:1000},//spike the request to 1000 at 4 mins
        // {duration:'5s', target:1000},// stay at 1000 request for 8 mins
        // {duration:'5s', target:200},
        // {duration:'5s', target:0},
    ]
}

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
    //
    const cookie = resPost.cookies["connect.sid"][0].value;
    // console.log("cookie: ")
    // console.log(cookie)


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
