@echo off
echo 更新代码
set /p info="输入更新的信息(例如:update %date:~0,10% %time:~0,5%):"
git fetch origin main
git pull origin main
git add .
git commit -m "%info%"
git push -u origin main
set /p qr=是否打开git主页检查?(Y or N):
if /I %qr%==Y start https://github.com/GJKen/gjken.github.io