mkdir /config/
echo "${API_URL}" > /config/api-url.txt
#!/usr/bin/env sh
set -eu

envsubst '${API_HOST} ${API_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/nginx.conf

exec "$@"