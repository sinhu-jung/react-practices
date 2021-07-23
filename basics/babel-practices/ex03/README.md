## babel plugin 
1. 설치
    ```bash
    $ npm i -D @babel/core @babel/cli
    ```
2. 소스 파일 작성

## 적용해보기
1. 블록 스코프 변수 변환 (@babel/plugin-transform-block-scoping)
    ```bash
    $ npm i -D @babel/plugin-transform-block-scoping
    $ npx babel src/ex01.js -o dist/ex01.01.js --plugins @babel/plugin-transform-block-scoping
    ```

2. 객체 분해 파라미터 변환(@babel/plugin-transform-parameters) 
```bash
$ npm i -D @babel/plugin-transform-parameters
$ npx babel src/ex01.js -o dist/ex01.02.js --plugins @babel/plugin-transform-parameters
```

3. 템플릿 문자열 변환(@babel/plugin-transform-template-literals) 
```bash
$ npm i -D @babel/plugin-transform-template-literals
$ npx babel src/ex01.js -o dist/ex01.03.js --plugins @babel/plugin-transform-template-literals
```

4. for..of 변환(@babel/plugin-transform-for-of) 
```bash
$ npm i -D @babel/plugin-transform-for-of
$ npx babel src/ex01.js -o dist/ex01.04.js --plugins @babel/plugin-transform-for-of
```

4. 모든 변환 적용하기
```bash
$ npm i -D @babel/plugin-transform-for-of
$ npx babel src/ex01.js -o dist/ex01.all.js --plugins @babel/plugin-transform-for-of --plugins @babel/plugin-transform-template-literals --plugins @babel/plugin-transform-parameters --plugins @babel/plugin-transform-block-scoping
```