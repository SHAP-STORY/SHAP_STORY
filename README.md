# SHAP_STORY

### 📚 2021.07.10

- XD 기본 페이지 기획
  <p align="center"><img src="src/기획 image.JPG/"></p>
  <br><br>
- <b><i>front-end 기본 환경 setting - nvm으로 node, yarn 설치</i></b>
  ```shell
  # nvm 설치 후
  
  # node 안정적인 버전 설치
  $ nvm install 12.18.4
  
  # 안정적인 버전으로 바꾸기
  $ nvm use 12.18.4
  
  # -g : 컴퓨터 전체에 설치
  $ npm install -g yarn
  
  $ yarn create react-app front_end
  ```
<br><br>

- <b><i>back-end 기본 환경 setting</i></b><br>
  
  - Getting Start
  
    1.  Node.js 다운
        - https://nodejs.org/en/download/stable/
    2. 
        `npm install express-session --save`
<br><br>
  - Running Server

    ```
    node app.js
    ```
    <br>
    
  - DB table 구성

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


### 📚 2021.07.17

- front-end

  웹 페이지 디자인을 확정하고 프로토타입을 제작하였다. 웹 페이지는 메인, 로그인, 회원가입, 학습 탭, 질문 탭, 마이페이지로 구성된다.
  프로토타입은 아래와 같다.
  <br>
  <p align="center"><img src="src/전체%20페이지%20프로토타입.JPG"></p>
  <br>
  
  또한 React event Lister에 대하여 학습하고, 추가할 기능 등을 논의하였다. <br><br>
  <br>
  <i><b>Event Listener 구독 순서<br></b></i><br>
      a. Ref 잡기(DOM에 접근하기 위하여)<br>
      b. Event 정하기<br>
      c. 함수 만들기(ex. mouseover 이벤트가 일어났을 때 어떤 행동을 해주겠다를 함수로 표현)<br>
      d. componentDidMount()에 등록<br>
      e. 컴포넌트가 사라졌을 때 구독 해제하기 위하여 componentWillUnmount()에서 처리
   
      ```javascript
      // c. 함수 만들기 - hoverEvent 함수 생성
      hoverEvent = (e) => {
              console.log(e);
              console.log(e.target);
      
              e.target.style.background = "#eee";
          }
      
      // d. componentDidMount()에 등록
      componentDidMount() {
           this.div.current.addEventListener("mouseover", this.hoverEvent);
      }
      
      // e. componentWillUnmount()에서 구독 해제
      componentWillUnmount() {
           this.div.current.removeEventListener("mouseover", this.hoverEvent);
      }
      ```