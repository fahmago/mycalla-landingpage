'use client';

export default function Marquee() {
    const text = "CREATIVE DIGITAL AGENCY • BRAND IDENTITY • WEB DESIGN • UI/UX • ";

    return (
        <div className="relative overflow-hidden bg-[#42224A] py-4">
            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-animate {
          animation: marquee 20s linear infinite;
        }
      `}</style>

            <div className="flex whitespace-nowrap">
                <div className="marquee-animate flex">
                    <span className="text-white text-2xl font-bold tracking-wider mx-4">
                        {text.repeat(3)}
                    </span>
                </div>
                <div className="marquee-animate flex" aria-hidden="true">
                    <span className="text-white text-2xl font-bold tracking-wider mx-4">
                        {text.repeat(3)}
                    </span>
                </div>
            </div>
        </div>
    );
}
