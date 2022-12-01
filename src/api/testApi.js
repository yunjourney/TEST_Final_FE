const express = require("express");
const router = express.Router();
const request = require("request");
const converter = require("xml-js");

const url = "http://www.kopis.or.kr/openApi/restful/pblprfr/PF202217?service=5a64fe18bbc04f6aaedbedbe0e9dfa13";

router.get("/", (req, res) => {
  request(
    {
      url: url,
      method: "GET",
    },
    (error, response, body) => {
      const xmlToJson = converter.xml2json(body);
      res.send(xmlToJson);
    }
  );
});

module.exports = router;