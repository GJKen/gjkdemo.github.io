@echo off
echo 更新代码
git fetch origin main
git pull origin main
git add .
git commit -m "update %date:~0,10% %time:~0,5%"
git push -u origin main
echo 已完成,3秒后关闭
timeout /t 3 /nobreak >nul
exit