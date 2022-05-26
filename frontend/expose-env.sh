#Old file we used before proxying requests to the api, nonetheless interesting to talk the about the differences.
mkdir /config/
echo "${API_URL}" > /config/api-url.txt
#!/usr/bin/env sh
set -eu

envsubst '${API_URL}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/nginx.conf

exec "$@"
