import Image from "next/image";

interface PageHeaderProps {
  title: string
  subtitle: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6">
      <div>
        <p className="text-[#979797]">{title}</p>
        <h1 className="text-2xl font-semibold text-[#202224]">{subtitle}</h1>
      </div>
      <div className="relative w-32 h-32">
      <Image
          src="/images/onboarding/meter.svg"
          alt="KIMIA Logo"
          width={173}
          height={100}
          className="mb-8"
        />
        {/* <svg viewBox="0 0 120 120" className="absolute top-0 right-0">
          <circle cx="60" cy="60" r="54" fill="none" stroke="#E8E8E8" strokeWidth="12" />
          <path d="M60 6 A54 54 0 0 1 114 60" fill="none" stroke="#F57618" strokeWidth="12" />
          <circle cx="114" cy="60" r="6" fill="#F57618" />
        </svg> */}
      </div>
    </div>
  )
}

