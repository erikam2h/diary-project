import DiaryCard from "./DiaryCard";
import LastDiary from "./LastDiary";

export default function DisplayDiaries({ diaries }) {
  const lastDiary = diaries[diaries.length - 1];

  return (
    <>
      {diaries.length > 0 ? (
        <>
          <LastDiary diaries={diaries[0]} />
          <div
            className="my-12 container m-auto px-8 lg:px-0"
            key="{diaries.id}"
          >
            <h2 className="text-3xl text-[#40B2C9] font-bold text-center mb-12">
              Last diary entries
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {diaries
                .map((diary) => <DiaryCard key={diary.id} diary={diary} />)
                .slice(1)}
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] grid place-content-center">
          <p className="font-bold text-center text-4xl">You have no Diaries</p>
          <p className="font-bold text-center text-xl text-slate-400">
            please add content
          </p>
          <img
            src="https://picsum.photos/id/365/660/400"
            alt=""
            className="flex content-center mt-6 rounded-xl"
          />
        </div>
      )}
    </>
  );
}
