import Image from "next/image"

const features = [
  {
    title: "Need fresh ideas for your next post?",
    description:
      "Every ghost post begins with an inspiration journey. Get creative content ideas based on your brand and audience.",
    image: "/feature-1.svg",
  },
  {
    title: "Need advice from an Expert?",
    description: "Brainstorm and get instant insights to shape your winning strategy with real-time guidance!",
    image: "/feature-2.svg",
  },
  {
    title: "Ready to elevate your brand's voice?",
    description: "Take control of your content with a journey that lets you create fully customized copy.",
    image: "/feature-3.svg",
  },
  {
    title: "Ever wonder to turn anything into a standout post?",
    description:
      "Anything to Post, anytime you need. Whether it's text, images, voice, or video—transform your content effortlessly.",
    image: "/feature-4.svg",
  },
  {
    title: "Tired of manual posting?",
    description:
      "Automate the workflow of your entire content creation process, from drafting to scheduling, to save time, and boost productivity.",
    image: "/feature-5.svg",
  },
  {
    title: "Want to breathe new life into top-performing content?",
    description:
      "Let our 1-Click Reanimation tool refresh and revive your content and your competitor's best posts in seconds to keep your audience engaged.",
    image: "/feature-6.svg",
  },
]

export function FeatureCards() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-[#313d4f]">Unlock the Magic of your AI social media Alchemist</h2>
        <p className="text-[#979797]">
          Simple Journeys for Ideation, Transform, Automation, and Revive impactful content effortlessly!
        </p>
      </div>
      <div className="grid grid-cols-6 gap-3">
        {" "}
        {/* Updated grid class */}
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-lg border border-[#e8e8e8] p-6 transition-all hover:border-[#4880ff]"
          >
            <div className="mb-4 h-40 overflow-hidden rounded-lg">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={320}
                height={160}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="mb-2 font-medium text-[#313d4f]">{feature.title}</h3>
            <p className="text-sm text-[#979797]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

