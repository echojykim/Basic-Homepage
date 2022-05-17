--===========================================
-- 관리자 계정
--===========================================
-- homepage / homepage 계정생성 
alter session set "_oracle_script" = true;

create user homepage
identified by homepage --비밀번호 대소문자 구분 
default tablespace users;

grant connect, resource to homepage;


alter user homepage quota unlimited on users;


--===========================================
-- homepage 계정
--===========================================

-- 테이블 생성해 엑스야 
