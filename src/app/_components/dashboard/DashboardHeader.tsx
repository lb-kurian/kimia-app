import type React from "react"

interface WelcomeHeaderProps {
  userName: string
}

export const DashboardHeader: React.FC<WelcomeHeaderProps> = ({ userName }) => {
  const handleThemeToggle = () => {
    // Implement theme toggle logic here
  }

  const handleNotificationClick = () => {
    // Implement notification click logic here
  }

  const handleAvatarClick = () => {
    // Implement avatar click logic here
  }

  return (
    <header className="flex flex-wrap justify-between items-center px-7 py-5 border-b border-zinc-900 border-opacity-10 w-full max-md:px-5">
      <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-[#313D4F]">Welcome back, {userName}!</h1>
          <p className="text-sm text-[#979797]">
            Continue creating content with KIMIA and get surprised by the potential of our Journeys!
          </p>
        </div>
      </div>
      <div className="flex items-center self-stretch my-auto">
        <div className="flex gap-6 items-center self-stretch my-auto">
          <div className="flex gap-5 justify-center items-center self-stretch my-auto">
            <div className="flex gap-2 items-center self-stretch my-auto">
              <button
                onClick={handleThemeToggle}
                className="flex items-center justify-center w-7 h-7 rounded-lg"
                aria-label="Toggle theme"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0a397f42c2e9af1b52c69efb1988f702b9bec4201a92f62adc548b860e9037f?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
                  className="w-5 h-5"
                  alt="Theme toggle"
                />
              </button>
              <button
                onClick={handleNotificationClick}
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                aria-label="Notifications"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9076aaa0a00ff0171f73f7899d19e2459815d6b2d4040e0829233e902615f762?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
                  className="w-full h-full"
                  alt="Notification icon"
                />
              </button>
            </div>
          </div>
          <button
            onClick={handleAvatarClick}
            className="object-contain shrink-0 self-stretch my-auto aspect-[2.42] w-[70px]"
            aria-label="User profile"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d7030f91505b95cb0835fcd23f25ccb208d7bf42032c9e0be96b062ce7bbf26?placeholderIfAbsent=true&apiKey=6224b8a201284256b766e31640369b4c"
              className="w-full h-full"
              alt="User avatar"
            />
          </button>
        </div>
      </div>
    </header>
  )
}

