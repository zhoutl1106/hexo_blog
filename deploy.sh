#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
sudo vuepress build .

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

作者：codeteenager
链接：https://juejin.im/post/5b1bc4cde51d4506b113ec52
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。