#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
sudo vuepress build .

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

sudo git add -A
sudo git commit -m 'deploy'
sudo git push
ssh -t root@tzhou.net '/root/updateBlog.sh'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
