@echo off
echo ���´���
set /p info="������µ���Ϣ(����:update %date:~0,10% %time:~0,5%):"
git fetch origin main
git pull origin main
git add .
git commit -m "%info%"
git push -u origin main
set /p qr=�Ƿ��git��ҳ���?(Y or N):
if /I %qr%==Y start https://github.com/GJKen/gjken.github.io