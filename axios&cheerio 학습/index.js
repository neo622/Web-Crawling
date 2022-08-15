const axios = require("axios");
const cheerio = require("cheerio");



axios.get("http://example.com").then((response) => {
    const htmlString = response.data;
    const $ = cheerio.load(htmlString); // $ = response.data html 문자열을 읽기 쉽게 파싱한 상태
    const h1 = $('h1').text(); // response.data의 h1 태그로 부터 값 획득
    const p = $('p').text(); // response.data의 p 태그로 부터 값 획득
    const href = $('a').attr('href') // response.data의 a 태그의 href 속성 값 획득
    console.log("h1 tag:",h1) 
    console.log("p tag:",p) 
    console.log("href:", href)
    
})