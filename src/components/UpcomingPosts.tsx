import React from "react";

export default function UpcomingPosts() {
  const posts = [
    {
      date: "16.09.2024",
      time: "09:00",
      title: "Organico Max",
      description: "Boost your energy with bio Coffee.",
      tag: "Product II Intro",
    },
    {
      date: "16.09.2024",
      time: "09:00",
      title: "Organico Max",
      description: "Boost your energy with bio Coffee.",
      tag: "Product II Intro",
    },
  ];

  return (
    <div className="grow shrink min-w-60 w-[525px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center pb-6 w-full rounded-3xl border border-gray-200 border-solid max-md:max-w-full">
        <div className="flex flex-wrap gap-2 self-stretch px-5 py-1.5 w-full bg-white rounded-2xl border border-solid border-zinc-300 border-opacity-60 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5d75cad5a08ddedbaf9668b31be89a8c1f0b736496adfe62a176a5fda3fe06a?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
            className="object-contain shrink-0 self-start mt-3.5 aspect-[1.28] w-[23px]"
          />
          <div className="flex flex-wrap flex-auto gap-10 justify-between items-center max-md:max-w-full">
            <div className="flex gap-1 items-center self-stretch my-auto w-[231px]">
              <div className="self-stretch my-auto text-base font-semibold text-slate-700">
                Upcoming Posts
              </div>
              <div className="gap-1 self-stretch px-1 my-auto text-sm font-medium leading-none text-center text-sky-900 whitespace-nowrap bg-blue-50 rounded-md">
                10
              </div>
            </div>
            <TimeSelector />
          </div>
        </div>
        {posts.map((post, index) => (
          <PostItem key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

function TimeSelector() {
  return (
    <div className="flex flex-col justify-center self-stretch my-auto w-28 text-xs leading-loose text-gray-600 whitespace-nowrap min-h-10">
      <div className="w-full min-h-[31px]">
        <div className="flex flex-1 gap-1 items-center py-2 pr-3 pl-4 bg-white rounded-lg border border-solid border-[color:var(--Border-Light-Primary,#B3B2B3)] size-full">
          <div className="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis">
            Weekly
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cba1badf7bdb0b3cb2abcb8dfa09ab0165d48c00860867ce409965d7a1fcf4f?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

function PostItem({
  date,
  time,
  title,
  description,
  tag,
}: {
  date: string;
  time: string;
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-end mt-3 max-w-full min-h-[34px] w-[525px]">
      <div className="flex gap-6 items-center min-w-60">
        <div className="self-stretch my-auto text-xs w-[46px]">
          <div className="font-medium text-black">{date}</div>
          <div className="font-semibold text-neutral-500">{time}</div>
        </div>
        <div className="flex gap-2 self-stretch my-auto w-[202px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b524f232af4f984fc6409b75591383b5bb6504f0611963d4ca73f763cca3b922?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
            className="object-contain flex-1 shrink aspect-[0.9] basis-0 w-[26px]"
          />
          <div className="flex flex-col justify-center my-auto w-[168px]">
            <div className="text-xs font-medium text-slate-700">{title}</div>
            <div className="text-xs text-neutral-500">{description}</div>
          </div>
        </div>
      </div>
      <div className="flex gap-3.5 items-center text-xs font-medium text-green-600">
        <div className="flex flex-col justify-center self-stretch px-2 py-1.5 my-auto bg-white rounded-lg">
          <div>{tag}</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/49c0c51eab692fed8fcff72272cdda7887f7b4062d9471d209aa825f67510f04?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
          className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
        />
      </div>
    </div>
  );
}
