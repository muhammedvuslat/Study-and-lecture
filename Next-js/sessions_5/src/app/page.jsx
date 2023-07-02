import React from "react";
import { getData } from "./getData";
import { getData2 } from "./getData";
import { getData3 } from "./getData";
import Body from "@/app/components/body";

async function Home() {
  // const data = await getData();
  // const data2 = await getData2();
  // console.log(data, data2);
  //! 1 den fazla fetch işlemin de await satırı yazılacak ise ayrı ayrı await  tanımlamak yerine alt satırdaki yöntem kullanılmalıdır bunun sebebi ise her bir satır await nedeniyle birbirin beklemekte ve veri çekme işleminde hız kaybına neden olmaktadır.

  const data = getData();
  const data2 = getData2();
  const data3 = getData3();

  const [dataResult, dataResult2, dataResult3] = await Promise.all([
    data,
    data2,
    data3,
  ]);
  console.log(dataResult, dataResult2, dataResult3);

  return (
    <>
      <div>
        <p>Data fetching</p>
        <hr />
        <p> User id : {data.userId}</p>
        <p> Id : {data.id}</p>
        <p>Title : {data.title}</p>
        <Body />
        <hr />
        <p> User id : {data2.userId}</p>
        <p> Id : {data2.id}</p>
        <p>Title : {data2.title}</p>
        <hr />
      </div>
    </>
  );
}

export default Home;
