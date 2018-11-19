const mysql = require('mysql');
const config = require('../../../config');
const conn = mysql.createConnection(config);

exports.getRecommendation = (sex, age, types) =>{
  return new Promise((resolve, reject) => {
    let cure = 0;
    let lazer = 0;
    let clear = 0;
    let allTypes = "";
    types.forEach(type => {
      allTypes += `${type}/`;
      if (type >= 1 && type <= 4) {
        // 큐어
        cure += 1;
        // console.log(cure);
      } else if (type >= 5 && type <= 11) {
        // 레이저
        lazer += 1;
        // console.log(lazer);
      } else {
        // 클리어
        clear += 1;
        // console.log(clear);
      }
    });
    let solutionArray = ["레이저썬","클리어썬","큐어썬"];
    let result = new Array(parseInt(lazer), parseInt(clear), parseInt(cure));
    console.log(result);
    let maxIndex = result.indexOf(Math.max(...result));
    console.log(solutionArray[maxIndex]);
    console.log(allTypes);
    conn.query(
      `INSERT INTO logs(age, sex, all_types, lazer, clear, cure, solution) VALUES(${age}, ${sex}, '${allTypes}', ${lazer}, ${clear}, ${cure}, '${solutionArray[maxIndex]}')`,
      (err, result) => {
        if (err) reject(err);
        resolve(solutionArray[maxIndex]);
      }
    )

  });
}