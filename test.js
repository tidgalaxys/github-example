console.log("test");

/*
แสดงการตั้งค่า
git config --list

ต่อมาตั้งค่า Email of user
git config --global user.email "tidgalaxys@gmail.com"
git config --global user.name "tidgalaxys"

workflow of git:
เริ่มสร้าง Local Git Repository
git init 
Folder(Untracked)  --> (Tracked) -->

git add
(Tracked) --> (Staging Area)
usage: 
git add <filename>
git add *.html
git add .  เอาทุกไฟล์เข้าLocal Repository

git commit
(Staging Area) --> (Local Repository)

git push
Local Repository --> Remote Repository

ตรวจสอบสถานะของ Folder ที่เราสนใจ เข้า git bash here
git status

คำสั่งเคลียหน้าจอ
clear

git add test2.js

ถ้าลบไฟล์ที่ไม่ต้องการ tracked --> Untracked
git rm --cached test2.js

git status

การใช้คำสั่ง
git commit  & git log

git commit -m "Log Message"
จะเก็บ Commit ID , Message ,  ชื่อผู้เขียน , email , time to commit

git log
git log --oneline  --> แสดงแต่่ละ log บรรทัดเดียว
git log --graph  --> แสดงเป็น Branch


git commit -m "Step add file to project"



*/
