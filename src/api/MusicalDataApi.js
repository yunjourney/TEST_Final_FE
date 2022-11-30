import axios from "axios";

export const getDatas = async (params) => {
  try {
    const response = await axios.get("http://www.kopis.or.kr/openApi/restful/pblprfr?service=5a64fe18bbc04f6aaedbedbe0e9dfa13&",
    params
    );
    return response.data.response.body.items.item;
  } catch (e) {
    console.log("실패", e);
  }
};