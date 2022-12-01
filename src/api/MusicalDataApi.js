import { useState, useEffect } from "react";
import axios from "axios";

const URL = "/PF202217"

function MusicalDataApi () {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          // mt20id: "PF202217",
          service: "5a64fe18bbc04f6aaedbedbe0e9dfa13"
      }
    });
      setData(response.data);
    } catch (e) {
      console.log("실패", e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error...</div>;
  if(!data)   return null;

  return (
    <div>
      <p>뮤지컬 이름 : { data.dbs.db.prfnm }</p>
      <p>뮤지컬 아이디 : { data.dbs.db.mt20id }</p>
      <p>공연시작일 : { data.dbs.db.prfpdfrom }</p>
      <p>공연종료일 : { data.dbs.db.prfpdto }</p>
      <p>극장 이름 : { data.dbs.db.fcltynm }</p>
      <p>출연진 :  { data.dbs.db.prfcast } </p>
      <p>티켓가격 :  { data.dbs.db.pcseguidance } </p>
      <p>포스터 :  { data.dbs.db.poster } </p>
      <p>소개이미지 :  { data.dbs.db.styurls.styurl } </p>
      <p>공연시간 :  { data.dbs.db.dtguidance } </p>
    </div>
  );
}

export default MusicalDataApi;