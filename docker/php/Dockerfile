FROM php:8.4-fpm

RUN apt-get update && apt-get install -y \
    git curl zip unzip libzip-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copy project
COPY . .

RUN composer install

RUN chown -R www-data:www-data /var/www

CMD ["php-fpm"]