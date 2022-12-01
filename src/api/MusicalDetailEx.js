import axios from "axios";
import { useState, useEffect } from "react";
import XMLParser from "react-xml-parser";

const URL = "http://www.kopis.or.kr/openApi/restful/pblprfr/PF202217?service=5a64fe18bbc04f6aaedbedbe0e9dfa13";

// function MusicalDetailEx(dataSet) {
//   const dataArr = new XMLParser().parseFromString(dataSet).children;
//   console.log(dataArr);

  async function getAPI() {
    await axios({
      method: "get",
      url: URL,
    }).then(function (response) {
      const dataSet = response.data;
      console.log(dataSet);
    });
  }

//   return getAPI;
// }


// export default MusicalDetailEx;