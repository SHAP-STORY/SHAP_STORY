# SHAP_STORY

### ๐ 2021.07.10

- XD ๊ธฐ๋ณธ ํ์ด์ง ๊ธฐํ
  <p align="center"><img src="src/๊ธฐํ image.JPG/"></p>
  <br><br>
- <b><i>front-end ๊ธฐ๋ณธ ํ๊ฒฝ setting - nvm์ผ๋ก node, yarn ์ค์น</i></b>
  ```shell
  # nvm ์ค์น ํ
  
  # node ์์ ์ ์ธ ๋ฒ์  ์ค์น
  $ nvm install 12.18.4
  
  # ์์ ์ ์ธ ๋ฒ์ ์ผ๋ก ๋ฐ๊พธ๊ธฐ
  $ nvm use 12.18.4
  
  # -g : ์ปดํจํฐ ์ ์ฒด์ ์ค์น
  $ npm install -g yarn
  
  $ yarn create react-app front_end
  ```
<br><br>

- <b><i>back-end ๊ธฐ๋ณธ ํ๊ฒฝ setting</i></b><br>
  
  - Getting Start
  
    1.  Node.js ๋ค์ด
        - https://nodejs.org/en/download/stable/
    2. 
        `npm install express-session --save`
<br><br>
  - Running Server

    ```
    node app.js
    ```
    <br>
    
  - DB table ๊ตฌ์ฑ

    1.  User(id(private key)(30), passwd(16), name, grade)
    
        *   id -> ์ฌ์ฉ์ ์์ด๋(PRIVATE KEY)
        *   passwd -> ์ฌ์ฉ์ ๋น๋ฐ๋ฒํธ (hash ๋จ๋ฐฉํฅ ์ฌ์ฉ)
        *   name -> ์ด๋ฆ
        *   grade -> ํ๋(์ด๋ฑํ์ ๊ธฐ์ค)
        *   ์ด๋ฉ์ผ ์ ํ ๊ธฐ๋ฅ ๋ฃ์์๋
    
    3.  POST(head, type, body, user, show boolean, index autoindex(private key))
    
        *   index -> ๊ฒ์๋ฌผ ์์(PRIVATE KEY) autoindex
        *   head -> ๊ธ ์ ๋ชฉ
        *   type -> ๊ธ ๋ถ๋ฅ ํญ๋ชฉ
        *   body -> ๊ธ ๋ด์ฉ
        *   user -> ์ฌ์ฉ์ ์์ด๋
        *   show -> ๊ฒ์๊ธ ๊ณต๊ฐ์ฌ๋ถ(boolean)
    
    5.  BaseClass(index autoindex(private key))
    
        *   index -> ์์ ์ธ๋ฑ์ค(integer)(PRIVATE KEY) autoindex
    
    7.  HardClass(index autoindex(private key))
    
        *   index -> ์์ ์ธ๋ฑ์ค(integer)(PRIVATE KEY) autoindex
    
    9.  lessonRate(id(private key), complete(), class_num integer, level
    
        *   id -> ์ฌ์ฉ์ ์์ด๋(PRIVATE KEY)
        *   complete -> ์๋ฃ ์ฌ๋ถ(boolean)
        *   class_num -> ์์์ธ๋ฑ์ค (integer)
        *   level -> base / hard
    
    <strong>ํ์ ํ์ํ์ง ์์ ๊ฒ์ text์ด๋ค.</strong>


### ๐ 2021.07.17

- front-end

  ์น ํ์ด์ง ๋์์ธ์ ํ์ ํ๊ณ  ํ๋กํ ํ์์ ์ ์ํ์๋ค. ์น ํ์ด์ง๋ ๋ฉ์ธ, ๋ก๊ทธ์ธ, ํ์๊ฐ์, ํ์ต ํญ, ์ง๋ฌธ ํญ, ๋ง์ดํ์ด์ง๋ก ๊ตฌ์ฑ๋๋ค.
  ํ๋กํ ํ์์ ์๋์ ๊ฐ๋ค.
  <br>
  <p align="center"><img src="src/์ ์ฒด%20ํ์ด์ง%20ํ๋กํ ํ์.JPG"></p>
  <br>
  
  ๋ํ React event Lister์ ๋ํ์ฌ ํ์ตํ๊ณ , ์ถ๊ฐํ  ๊ธฐ๋ฅ ๋ฑ์ ๋ผ์ํ์๋ค. <br><br>
  <br>
  <i><b>Event Listener ๊ตฌ๋ ์์<br></b></i><br>
      a. Ref ์ก๊ธฐ(DOM์ ์ ๊ทผํ๊ธฐ ์ํ์ฌ)<br>
      b. Event ์ ํ๊ธฐ<br>
      c. ํจ์ ๋ง๋ค๊ธฐ(ex. mouseover ์ด๋ฒคํธ๊ฐ ์ผ์ด๋ฌ์ ๋ ์ด๋ค ํ๋์ ํด์ฃผ๊ฒ ๋ค๋ฅผ ํจ์๋ก ํํ)<br>
      d. componentDidMount()์ ๋ฑ๋ก<br>
      e. ์ปดํฌ๋ํธ๊ฐ ์ฌ๋ผ์ก์ ๋ ๊ตฌ๋ ํด์ ํ๊ธฐ ์ํ์ฌ componentWillUnmount()์์ ์ฒ๋ฆฌ
   
      ```javascript
      // c. ํจ์ ๋ง๋ค๊ธฐ - hoverEvent ํจ์ ์์ฑ
      hoverEvent = (e) => {
              console.log(e);
              console.log(e.target);
      
              e.target.style.background = "#eee";
          }
      
      // d. componentDidMount()์ ๋ฑ๋ก
      componentDidMount() {
           this.div.current.addEventListener("mouseover", this.hoverEvent);
      }
      
      // e. componentWillUnmount()์์ ๊ตฌ๋ ํด์ 
      componentWillUnmount() {
           this.div.current.removeEventListener("mouseover", this.hoverEvent);
      }
      ```