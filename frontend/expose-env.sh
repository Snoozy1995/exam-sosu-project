mkdir /config/
echo "${API_URL}" > /config/api-url.txt
#!/usr/bin/env sh
set -eu

envsubst '${API_PORT}' < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf

exec "$@"