"use client";

import { Suspense, useEffect, useState } from "react";

// Pocketbase
import pb from "@/pocketbase/config";
import { set } from "date-fns";
import Loading from "./loading";

interface IRecord {
  title: string;
  body: string;
  date: string;
}

const fetchData = async () => {
  const records = await pb.collection("events").getFullList({
    sort: "date",
  });
  console.log("records", records);
  const mappedRecords = records.map((record) => {
    return {
      title: record.title,
      body: record.body,
      date: record.date,
    };
  });
  return mappedRecords;
};

const Events = () => {
  const [snapshot, setSnapshot] = useState<IRecord | null>(null);
  const [records, setRecords] = useState<IRecord[]>([]);

  useEffect(() => {
    return () => {
      console.log("Unsubscribing");
      pb.collection("events").unsubscribe("*");
    };
  }, []);

  useEffect(() => {
    const fetchRecords = async () => {
      const mappedRecords = await fetchData();
      setRecords(mappedRecords);
      console.log("mappedRecords", mappedRecords);
    };
    fetchRecords();
  }, []);

  pb.collection("events").subscribe("*", function (e) {
    console.log("Subscribing", e.record);
    if ("title" in e.record && "body" in e.record && "date" in e.record) {
      setSnapshot(e.record as unknown as IRecord);
    }
    setRecords((prevRecords) => {
      const index = prevRecords.findIndex(
        (record) => record.title === e.record.title
      );
      if (index === -1) {
        return [...prevRecords, e.record as unknown as IRecord];
      } else {
        const newRecords = [...prevRecords];
        newRecords[index] = e.record as unknown as IRecord;
        return newRecords;
      }
    });
    console.log("Subscription, snapshot", snapshot);
  });

  return (
    <div>
      <Suspense fallback={<Loading />}>
        {records.map((record: IRecord) => {
          return (
            <div>
              <h2>{record.title}</h2>
              <p>{record.body}</p>
              <p>{record.date}</p>
              <br />
            </div>
          );
        })}
      </Suspense>
    </div>
  );
};

export default Events;
