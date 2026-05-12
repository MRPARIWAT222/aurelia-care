const caregivers = [
  {
    id: 1,
    name: "Karina Blue",
    specialty: "Senior Care Specialist",
    rating: 4.9,
    experience: "8 Years Experience",
    image:
      "1.png",
  },
  {
    id: 2,
    name: "Go Youn Jung",
    specialty: "ICU Trained Nurse",
    rating: 5.0,
    experience: "10 Years Experience",
    image:
      "2.png",
  },
  {
    id: 3,
    name: "Bae Suzy",
    specialty: "Recovery Specialist",
    rating: 4.8,
    experience: "6 Years Experience",
    image:
      "3.png",
  },
    {
    id: 4,
    name: " Hun Sohee",
    specialty: "Trained Nurse",
    rating: 4.8,
    experience: "6 Years Experience",
    image:
      "4.jpg",
  },
    {
    id: 5,
    name: "Kim Ji-Won",
    specialty: "Trained Nurse",
    rating: 4.8,
    experience: "6 Years Experience",
    image:
      "5.png",
  },
    {
    id: 6,
    name: "Kim Yerim",
    specialty: "Recovery Specialist",
    rating: 4.8,
    experience: "6 Years Experience",
    image:
      "6.png",
  },
    {
    id: 7,
    name: "Kim Jieun",
    specialty: "Recovery Specialist",
    rating: 4.8,
    experience: "6 Years Experience",
    image:
      "7.png",
  },
    {
    id: 8,
    name: "Kang Haerin",
    specialty: "Trained Nurse",
    rating: 4.8,
    experience: "6 Years Experience",
    image:
      "8.png",
  },
    {
    id: 9,
    name: "Kim Min-jeong ",
    specialty: "Trained Nurse",
    rating: 4.8,
    experience: "6 Years Experience",
    image:
      "9.png",
  },
  
]

export default function CaregiversPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] px-8 lg:px-14 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#B09058] text-sm mb-5">
            Premium Care Team
          </p>

          <h1 className="text-6xl font-serif text-[#1C2B39] leading-tight">
            Find Your
            <br />
            Perfect Caregiver
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Carefully selected professionals providing compassionate luxury healthcare.
          </p>

        </div>

        {/* Filter */}
        <div className="mt-16 bg-white rounded-[32px] p-6 border border-[#EDE5D7] shadow-sm flex flex-wrap gap-4 justify-between items-center">

          <div className="flex flex-wrap gap-4">

            <button className="px-5 py-3 rounded-full bg-[#1C2B39] text-white">
              All
            </button>

            <button className="px-5 py-3 rounded-full bg-[#F4EFE6] hover:bg-[#EDE3D1] transition">
              Elderly Care
            </button>

            <button className="px-5 py-3 rounded-full bg-[#F4EFE6] hover:bg-[#EDE3D1] transition">
              ICU Nurse
            </button>

            <button className="px-5 py-3 rounded-full bg-[#F4EFE6] hover:bg-[#EDE3D1] transition">
              Recovery Care
            </button>

          </div>

          <input
            type="text"
            placeholder="Search caregiver..."
            className="px-5 py-3 rounded-full border border-[#E6DFD1] outline-none bg-[#FAF7F1]"
          />

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">

          {caregivers.map((caregiver) => (
            <div
              key={caregiver.id}
              className="group bg-white rounded-[40px] overflow-hidden border border-[#ECE4D6] shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              <div className="relative overflow-hidden">

                <img
                  src={caregiver.image}
                  alt={caregiver.name}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm text-[#8B6A2E] font-medium">
                  Verified
                </div>

              </div>

              <div className="p-8">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-3xl font-serif text-[#1C2B39]">
                      {caregiver.name}
                    </h2>

                    <p className="mt-2 text-gray-500">
                      {caregiver.specialty}
                    </p>
                  </div>

                  <div className="bg-[#F6EDDC] px-4 py-2 rounded-full text-[#8B6A2E] font-medium">
                    ★ {caregiver.rating}
                  </div>

                </div>

                <div className="mt-8 flex items-center justify-between text-gray-600">

                  <p>{caregiver.experience}</p>

                  <div className="w-3 h-3 rounded-full bg-green-500"></div>

                </div>

                <div className="flex gap-4 mt-10">

                  <a
                    href={`/caregivers/${caregiver.id}`}
                    className="flex-1 text-center bg-[#1C2B39] text-white py-4 rounded-full hover:scale-[1.02] transition"
                  >
                    View Profile
                  </a>

                  <button className="flex-1 border border-[#DED2BE] py-4 rounded-full hover:bg-[#F5EFE4] transition">
                    Book Now
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  )
}