import Link from "next/link"

export function Footer() {
  return (
    <div className="flex items-center justify-between border-t border-[#E8E8E8] p-6">
      <Link href="#" className="text-[#4880FF] underline">
        Skip
      </Link>
      <div className="flex gap-4">
        <button className="rounded-full border border-[#038baf] px-8 py-2.5 text-[#038baf] hover:bg-[#038baf]/5">
          Back
        </button>
        <button className="rounded-full border border-[#038baf] bg-[#038baf] px-8 py-2.5 text-white hover:bg-[#038baf]/90">
          Next
        </button>
      </div>
    </div>
  )
}

