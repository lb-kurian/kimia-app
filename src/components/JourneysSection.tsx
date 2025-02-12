import React from "react";

export default function JourneysSection() {
  const journeys = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/159f3ef22e6880a34330a409e8392307b921e9bd767a0bbb6a260a33fc3e84a1?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      title: "Need fresh ideas for your next post?",
      description:
        "Every great post begins with an Inspiration journey. Get creative content ideas based on your brand and audience.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9551518cf467c891a2b2e3bb431d8bad0ac7258fe1f1e99f8a1a1531586d0e41?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      title: "Need advice from an Expert?",
      description:
        "Brainstorm and get instant insights to shape your winning strategy with real-time guidance!",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a3d380838b6e3e1605e75f1bb0413d1d20ebe79d818928c5b0d8f82c8045d39?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      title: "Ready to elevate your brand's voice?",
      description:
        "Take control of your content with a journey that lets you create fully customized copy.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cd48fbe26861749161a3ce40f2c1efd1cc808ae025b3029a0bbcb3d58022f4f?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      title: "Ever wonder to turn anything into a standout post?",
      description:
        "Anything to Post, anytime you need. Whether it's text, images, voice, or video—transform your content effortlessly.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc19905e8633cb7a9dd1110c8c4316dec3e20e96948d54377c2a7dd0b3e73954?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      title: "Tired of manual posting?",
      description:
        "Automate the workflow of your entire content creation process, from drafting to scheduling, to save time, and boost productivity.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcfb28be2f7cb2cd54897da631995f26e3bf305358f1d2405775b657f9c218dc?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c",
      title: "Want to breathe new life into top-performing content?",
      description:
        "Let our 1-Click Reanimation tool refresh and revive your content and your competitor's best posts in seconds to keep your audience engaged.",
    },
  ];

  return (
    <div className="mt-8 w-full tracking-normal max-md:max-w-full">
      <div className="max-w-full w-[609px]">
        <div className="text-base font-semibold text-slate-700 max-md:max-w-full">
          Unlock the Magic of your AI social media Alchemist
        </div>
        <div className="mt-1 text-sm text-neutral-400 max-md:max-w-full">
          Simple Journeys for Ideation, Transform, Automation, and Revive
          impactful content effortlessly!
        </div>
      </div>
      <div className="flex flex-wrap gap-4 items-start mt-6 w-full text-xs text-slate-700 max-md:max-w-full">
        {journeys.map((journey, index) => (
          <JourneyCard key={index} {...journey} />
        ))}
      </div>
    </div>
  );
}

function JourneyCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grow shrink px-4 pt-4 pb-12 bg-white rounded-3xl border border-solid border-zinc-300 min-h-[310px] w-[138px]">
      <div className="flex flex-col w-full">
        <img
          loading="lazy"
          src={icon}
          className="object-contain self-center max-w-full aspect-square w-[100px]"
        />
        <div className="mt-6 w-full">
          <div className="font-semibold">{title}</div>
          <div className="mt-3 leading-4">{description}</div>
        </div>
      </div>
    </div>
  );
}
