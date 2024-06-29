import { useState, useEffect } from "react";
import DiaryCard from "./DiaryCard";
import LastDiary from "./LastDiary";

export default function DisplayDiaries({ diaries }) {
  const [showDiaries, setShowDiaries] = useState(0);
  const lastDiary = diaries[diaries.length - 1];
  // console.log(lastDiary);
  // console.log("All Diaries", showDiaries);

  useEffect(() => {
    setShowDiaries(diaries);
  }, []);

  return (
    <>
      <LastDiary diaries={lastDiary} />
      <div className="my-12 container m-auto px-8 lg:px-0" key="{diaries.id}">
        <h2 className="text-3xl text-[#40B2C9] font-bold text-center mb-12">
          Last diary entries
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {diaries
            .map((diary) => <DiaryCard key={diary.id} diary={diary} />)
            .slice(0, -1)}
        </div>
      </div>
    </>
  );
}
