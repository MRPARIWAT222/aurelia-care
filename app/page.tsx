"use client"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#1F2937] overflow-hidden">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-[#EDE7DA]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-serif tracking-wide text-[#1C2B39]">
              HCU KMUTT
            </h1>

            <p className="text-xs text-gray-500 mt-1 tracking-[0.25em] uppercase">
              Luxury Family Healt Care Unit
            </p>
          </div>

          <button className="bg-[#1C2B39] text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
            Book Consultation
          </button>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-3 bg-white border border-[#E8E1D3] rounded-full px-5 py-3 shadow-sm mb-8">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm text-gray-600">
              Trusted Premium Care Across Thailand
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl leading-[1.05] font-serif text-[#1C2B39]">
            ดูแลทุกลมหายใจ
            <br />
            ด้วยหัวใจ
            <br />
            ระดับพรีเมียม
          </h1>

          <p className="mt-10 text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Compassionate luxury healthcare services designed for families who
            want the very best care for the people they love most.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href="/caregivers"
              className="bg-[#C6A76A] text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 text-lg inline-block"
            >
              Find Your Caregiver
            </a>

            <button className="bg-white border border-[#DDD2BF] px-8 py-5 rounded-full hover:bg-[#F5F0E7] transition-all duration-300 text-lg shadow-sm">
              Let Us Match for You
            </button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-xl">

            <div>
              <h3 className="text-4xl font-semibold text-[#1C2B39]">
                500+
              </h3>

              <p className="text-gray-500 mt-2">
                Families Supported
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-[#1C2B39]">
                120+
              </h3>

              <p className="text-gray-500 mt-2">
                Verified Caregivers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-[#1C2B39]">
                24/7
              </h3>

              <p className="text-gray-500 mt-2">
                Support Team
              </p>
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="relative">

          <div className="relative overflow-hidden rounded-[42px] shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-white/30">

            <img
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1400&auto=format&fit=crop"
              alt="Caregiver"
              className="w-full h-[780px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 bg-white/85 backdrop-blur-xl rounded-[32px] p-7 border border-white/50 shadow-xl">

              <div className="flex items-center justify-between gap-6">

                <div>
                  <p className="uppercase tracking-[0.25em] text-xs text-[#A58A57] mb-2">
                    Featured Specialist
                  </p>

                  <h3 className="text-2xl font-semibold text-[#1C2B39]">
                    Senior Care Specialist
                  </h3>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    ICU-trained premium caregiver with elderly care expertise.
                  </p>
                </div>

                <div className="bg-[#F5EBD5] px-5 py-3 rounded-full text-[#8B6A2E] font-medium whitespace-nowrap">
                  Verified Nurse
                </div>

              </div>

            </div>
          </div>
        </div>

      </section>
{/* Contact Section */}
<section className="bg-[#1C2B39] text-white py-28 px-8 lg:px-12">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

    {/* Left */}
    <div>

      <p className="uppercase tracking-[0.35em] text-[#C6A76A] text-sm mb-6">
        Contact Us
      </p>

      <h2 className="text-5xl lg:text-6xl font-serif leading-tight">
        Premium Care
        <br />
        Starts Here
      </h2>

      <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl">
        Speak with our care coordination team and discover personalized
        healthcare solutions for your loved ones.
      </p>

      {/* Contact Info */}
      <div className="mt-14 space-y-8">

        <div>
          <p className="text-[#C6A76A] uppercase tracking-[0.25em] text-sm">
            Phone
          </p>

          <h3 className="text-2xl mt-2">
            +66 99-999-9999
          </h3>
        </div>

        <div>
          <p className="text-[#C6A76A] uppercase tracking-[0.25em] text-sm">
            Email
          </p>

          <h3 className="text-2xl mt-2">
            contact@aureliacare.com
          </h3>
        </div>

        <div>
          <p className="text-[#C6A76A] uppercase tracking-[0.25em] text-sm">
            Location
          </p>

          <h3 className="text-2xl mt-2">
            Bangkok, Thailand
          </h3>
        </div>
        <a
  href="https://line.me/"
  target="_blank"
  className="inline-flex items-center gap-4 mt-14 bg-[#06C755] hover:bg-[#05b14b] px-8 py-5 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105"
>

  <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center">

    <span className="text-[#06C755] text-2xl font-bold">
      LINE
    </span>

  </div>

  <div>
    <p className="text-sm text-white/80">
      Contact via LINE
    </p>

    <h3 className="text-2xl font-semibold text-white">
      Add Friend
    </h3>
  </div>

</a>

      </div>

    </div>

    {/* Right */}
    <div className="bg-white rounded-[42px] p-10 text-[#1C2B39] shadow-2xl">

      <h3 className="text-4xl font-serif">
        Request Consultation
      </h3>

      <p className="mt-4 text-gray-500">
        Our team will contact you shortly.
      </p>

      <div className="grid gap-5 mt-10">

        <input
          type="text"
          placeholder="Your Name"
          className="px-6 py-5 rounded-2xl border border-[#E7DFD1] bg-[#FAF7F1] outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="px-6 py-5 rounded-2xl border border-[#E7DFD1] bg-[#FAF7F1] outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="px-6 py-5 rounded-2xl border border-[#E7DFD1] bg-[#FAF7F1] outline-none"
        />

        <textarea
          rows={5}
          placeholder="Tell us about your care needs..."
          className="px-6 py-5 rounded-2xl border border-[#E7DFD1] bg-[#FAF7F1] outline-none resize-none"
        />

      </div>

      <button className="w-full mt-8 bg-[#C6A76A] text-white py-5 rounded-full hover:scale-[1.02] transition duration-300 shadow-xl text-lg">
        Send Request
      </button>

    </div>

  </div>

</section>
    </main>
  )
}