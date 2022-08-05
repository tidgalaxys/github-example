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

ถ้ามีการแก้ไข file test.js 
git status --> จะมีการแสดง M (Modified)
ถ้าต้องการเก็บ Local Repository ต้องทำตาม คำสั่ง ด้านล่าง
git add .
git commit -m "step2"

git log --oneline
จะแสดง version commit id ตั้งแต่ล่าสด จนถึง เริ่มต้น

เปรียบเทียบ Version (diff)
git diff <commit_id>   เปรียบเทียบ version id กับ version id ล่าสุด
git diff <commit_id> <commit_id> เปรียบเทียบสอง Version โดยระบุ version id 2 ตัว

usage:
git diff b73bc87 

ยกเลิกการแก้ไขไฟล์ (Check-Out)
git checkout <file-name>

usage:
git checkout test2.js  เกิดมือลั่น แล้วต้องการกู้ไฟล์คืน แต่ยังไม่ได้ git add . and git commit -m 'xxx'


git reset (1.สำหรับย้อนคืน จาก Tracked stage area --> Untracked)
git reset <file-name>
usage:
touch a.js
touch b.js 
git add .  เอา a.js and b.js in tracked stage area
ถ้าไม่ต้องการเอา  b.js ออกจาก tracked stage area ให้ใช้คำสั่ง Reset
git reset b.js เอาไฟล์ b.js ออกจาก Tracked มาอยู่ สถานะ Untracked 

git show HEAD แสดง pointer commit id ล่าสุด และแสดงว่าใครเป็นคน Update ล่าสุด

git reset (2.สำหรับย้อนคืน Version)
usage:
--hard  ไฟล์ version ใหม่ ๆ จะถูกลบ จะเหลือ Version ที่คุณเลือก และ ตัวที่เก่ากว่า จะเหลืออยู่
git reset --hard ee988a3



*/
