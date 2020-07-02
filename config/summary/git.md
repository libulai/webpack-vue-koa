# 打tag
git tag 查看
git tag v3.5.0 创建
git push origin v3.5.0 推送

# 拉分支 / 合并
git branch 查看
git checkout -b v3.5.2 创建
git merge v3.5.2
git branch --set-upstream-to=origin/v3.5.2 v3.5.2
git push origin v3.5.2

<!-- 切到master -->
git checkout master
git merge dev1.0
git push origin master


# 回滚
<!-- 撤销commit -->
git reset --soft HEAD^  撤销上次所有提交
