# 프로젝트 목적

snext, redux를 이용해서 서비스 만들기,서버사이드렌더링 이해를 돕기 위해
mysql,sequilize 사용하기 

# 기술 스펙

- node.js
- next

- nest
- DB: MYSQL

## back

- user : 유저의 정보 불러오기,정보 업데이트 등
- post : 게시글 등록,삭제 등 구현, 팔로우 언팔로우 등 구현
- posts: 게시글 10개씩 불러오기
- hashtag: hashtag된 게시글 불러오기

## front

-'/' : 유저의 프로필과 포스터들

- '/user/:id': 유저가 쓴 글들을 보여줌
- '/hashtag/:tag': 유저의 쓴글에 해시태그된 글만 보여줌

- 포스터는 10개씩 보여줄 수 있게 구현함(무한스크롤)

만들면서 기록
https://sly-silverfish-a0d.notion.site/node_bird-14a1e13ed7954f5296d401fa9611a28b

![](nodebirdfollow.gif)

![](nodebirdhash.gif)

![](nodebirdmain.gif)

![](nodebirdprofile.gif)
