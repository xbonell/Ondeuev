require 'nanoc3/tasks'

task :compile do
  sh "nanoc3 co"
end

task :copy_assets do
  sh "rsync -gprt --partial --exclude='.svn' assets/ output"
end

task :tidy do
  Dir["output/**/*.html"].each do |file|
    %x(tidy -i -asxhtml -utf8 -raw -modify -wrap 10000 #{file})
  end
end

task :build => [ :compile, :tidy, :copy_assets ]

task :default => :build