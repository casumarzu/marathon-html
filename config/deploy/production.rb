# production.rb
set :deploy_to, '/srv/www/run.skbx.ru/frontend'
set :rails_env, :production

# Настраиваем ssh до сервера
server "web-devel", :app, :web, :db, :primary => true

# Авторизационные данные
set :user, "user"
set :group, "user"
set :keep_releases, 5
set :repository, 'dist'
