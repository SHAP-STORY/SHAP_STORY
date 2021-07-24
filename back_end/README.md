## #STORY

### Getting Started
1.  Node.js 다운
    - https://nodejs.org/en/download/stable/
    
2. Package 다운
```
npm install
npm update
```


### Running Server
```
node app.js
```

## DB table 구성

1.  User(id(private key)(30), passwd(16), name, grade)

    *   id -> 사용자 아이디(PRIVATE KEY)
    *   passwd -> 사용자 비밀번호 (hash 단방향 사용)
    *   name -> 이름
    *   grade -> 학년(초등학생 기준)
    *   이메일 선택 기능 넣을수도

3.  POST(head, type, body, user, show boolean, index autoindex(private key))

    *   index -> 게시물 순서(PRIVATE KEY) autoindex
    *   head -> 글 제목
    *   type -> 글 분류 항목
    *   body -> 글 내용
    *   user -> 사용자 아이디
    *   show -> 게시글 공개여부(boolean)

5.  BaseClass(index autoindex(private key))

    *   index -> 수업 인덱스(integer)(PRIVATE KEY) autoindex

7.  HardClass(index autoindex(private key))

    *   index -> 수업 인덱스(integer)(PRIVATE KEY) autoindex

9.  lessonRate(id(private key), complete(), class_num integer, level

    *   id -> 사용자 아이디(PRIVATE KEY)
    *   complete -> 완료 여부(boolean)
    *   class_num -> 수업인덱스 (integer)
    *   level -> base / hard

<strong>타입 표시하지 않은 것은 text이다.</strong>
