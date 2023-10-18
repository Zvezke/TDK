import pb from "./config";

const getResultList = async () => {
  pb.autoCancellation(false);
  const resultList = await pb.collection("events").getList(1, 5, {
    sort: "-date",
  });
  console.log("resultList", resultList);
  const mappedResultList = resultList.items?.map((result) => {
    return {
      id: result.id,
      title: result.title,
      date: result.date,
      body: result.body,
    };
  });
  return { mappedResultList };
};

const getResultFullList = async () => {
  pb.autoCancellation(false);
  const records = await pb.collection("events").getFullList({
    sort: "-date",
  });
  const mappedRecords = records.map((record) => {
    return {
      id: record.id,
      title: record.title,
      date: record.date,
      body: record.body,
    };
  });
  return { mappedRecords };
};

export { getResultList, getResultFullList };
