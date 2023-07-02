export const getData = async () => {
  const response = await fetch(
    "https://641df6700596099ce1586964.mockapi.io/task_tracker/1"
    // {
    //   cache: "no-store",
    // }
  );
  // console.log("getData1");
  return response.json();
};

export const getData2 = async () => {
  const response = await fetch(
    "https://641df6700596099ce1586964.mockapi.io/task_tracker/2"
  );
  return response.json();
};

export const getData3 = async () => {
  const response = await fetch(
    "https://641df6700596099ce1586964.mockapi.io/task_tracker/3"
  );
  return response.json();
};
