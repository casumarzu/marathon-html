require 'capistrano/ext/multistage'

set :stages, %w(testing production)
set :default_stage, 'testing'

set :application, "run.skbx.ru"

set :deploy_to, "/srv/www/#{application}/frontend"
set :use_sudo, false
set :deploy_via, :copy
set :scm, :none

# Deploy hooks
after 'deploy:update', 'deploy:cleanup'
