# Path to the directory where the ConfigMap is mounted
CONFIG_PATH=/app/config

# Path to the output JavaScript file
OUTPUT_PATH=/usr/local/openresty/nginx/html/config.js

# Generate the JavaScript file
echo "window.env = {" > $OUTPUT_PATH
for file in $(ls $CONFIG_PATH); do
  value=$(cat $CONFIG_PATH/$file)
  echo "  $file: \"$value\"," >> $OUTPUT_PATH
done
echo "};" >> $OUTPUT_PATH

# Start OpenResty
exec /usr/bin/openresty -g "daemon off;"