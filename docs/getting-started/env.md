---
slug: /env
---

# Environment Variables

## Installation

- `INSTALL_PORT`: specifies the port to boot when installation, default is `80`.
- `AUTO_INSTALL`: if set to `true`, the installation will be completed automatically by environment variable.

### For auto install

- `DB_TYPE`: database type, support [`sqlite3`  `mysql`  `postgres`]
- `DB_USERNAME`: database username
- `DB_PASSWORD`: database password
- `DB_HOST`: database host, like `127.0.0.1:3306`
- `DB_NAME`: database name
- `DB_FILE`: database file path, only for sqlite3
- `LANGUAGE`: language, like `en-US`
- `SITE_NAME`: site name `Apache Answer`
- `SITE_URL`: site url, `https://answer.apache.org`
- `CONTACT_EMAIL`:  contact email
- `ADMIN_NAME`:  admin name
- `ADMIN_PASSWORD`: admin password
- `ADMIN_EMAIL`: admin email
- `EXTERNAL_CONTENT_DISPLAY`: content includes images, videos, and media embedded from external websites. support [`always_display` `ask_before_display`]

### For overriding the config file

- `SWAGGER_HOST` - address for the swagger to display, like `192.168.12.12` or `answer.apache.org`
- `SWAGGER_ADDRESS_PORT` - port for the swagger to display, like `:3000`
- `SITE_ADDR` - address that the site should run, like `0.0.0.0:3000`

## Log

- `LOG_LEVEL`: log level support [`DEBUG`  `INFO`  `WARN`  `ERROR`]
- `LOG_PATH`: log storage location


