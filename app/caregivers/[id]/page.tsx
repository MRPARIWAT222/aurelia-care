const caregivers = {
  1: {
    name: "Karina Blue",
    specialty: "Senior Care Specialist",
    rating: "4.9",
    experience: "8 Years Experience",
    image: "/1.png",
    bio: "ผู้เชี่ยวชาญด้านการดูแลผู้สูงอายุ มีประสบการณ์ในการดูแลผู้ป่วยระยะยาว และให้การดูแลแบบอบอุ่นเสมือนคนในครอบครัว",
  },

  2: {
    name: "Go Youn Jung",
    specialty: "ICU Trained Nurse",
    rating: "5.0",
    experience: "10 Years Experience",
    image: "/2.png",
    bio: "พยาบาลวิชาชีพที่ผ่านการดูแลผู้ป่วย ICU เชี่ยวชาญด้านการดูแลผู้ป่วยหนักและการเฝ้าระวังอาการอย่างใกล้ชิด",
  },

  3: {
    name: "Bae Suzy",
    specialty: "Recovery Specialist",
    rating: "4.8",
    experience: "6 Years Experience",
    image: "/3.png",
    bio: "เชี่ยวชาญด้านการดูแลผู้ป่วยพักฟื้นหลังผ่าตัด พร้อมช่วยฟื้นฟูทั้งร่างกายและจิตใจ",
  },

  4: {
    name: "Han Sohee",
    specialty: "Trained Nurse",
    rating: "4.7",
    experience: "6 Years Experience",
    image: "/4.jpg",
    bio: "พยาบาลที่มีความใส่ใจในการดูแลผู้ป่วยทุกช่วงวัย พร้อมให้บริการแบบพรีเมียมและเป็นกันเอง",
  },

  5: {
    name: "Kim Ji-Won",
    specialty: "Trained Nurse",
    rating: "4.9",
    experience: "7 Years Experience",
    image: "/5.png",
    bio: "มีประสบการณ์ด้านการดูแลผู้ป่วยที่บ้าน และการดูแลสุขภาพเชิงป้องกันสำหรับครอบครัว",
  },

  6: {
    name: "Kim Yerim",
    specialty: "Recovery Specialist",
    rating: "4.8",
    experience: "6 Years Experience",
    image: "/6.png",
    bio: "เชี่ยวชาญการดูแลผู้ป่วยพักฟื้น พร้อมติดตามอาการและให้คำแนะนำด้านสุขภาพอย่างละเอียด",
  },

  7: {
    name: "Kim Jieun",
    specialty: "Recovery Specialist",
    rating: "4.9",
    experience: "6 Years Experience",
    image: "/7.png",
    bio: "มีความชำนาญในการดูแลผู้ป่วยหลังผ่าตัดและผู้ป่วยที่ต้องการการดูแลต่อเนื่องระยะยาว",
  },

  8: {
    name: "Kang Haerin",
    specialty: "Trained Nurse",
    rating: "4.8",
    experience: "5 Years Experience",
    image: "/8.png",
    bio: "พยาบาลรุ่นใหม่ที่มีความละเอียดอ่อนในการดูแล พร้อมให้บริการแบบ warm family care",
  },

  9: {
    name: "Kim Min-jeong (Winter Aespa)",
    specialty: "Trained Nurse",
    rating: "4.9",
    experience: "6 Years Experience",
    image: "/9.png",
    bio: "ให้บริการดูแลสุขภาพแบบใกล้ชิด พร้อมสร้างความสบายใจให้กับผู้ป่วยและครอบครัว",
  },
}

export default async function CaregiverProfilePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  const caregiver =
    caregivers[Number(id) as keyof typeof caregivers]

  return (
    <main className="min-h-screen bg-[#F8F5EF] px-8 lg:px-14 py-16">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* Image */}
        <div className="relative">

          <img
            src={caregiver.image}
            alt={caregiver.name}
            className="w-full h-[850px] object-cover rounded-[42px] shadow-2xl"
          />

          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-full text-[#8B6A2E] font-medium shadow-lg">
            Verified Nurse
          </div>

        </div>

        {/* Content */}
        <div>

          <div className="inline-flex items-center gap-3 bg-white border border-[#E8E1D3] rounded-full px-5 py-3 shadow-sm mb-8">

            <div className="w-3 h-3 rounded-full bg-green-500" />

            Available for Booking

          </div>

          <h1 className="text-6xl font-serif text-[#1C2B39] leading-tight">
            {caregiver.name}
          </h1>

          <p className="mt-5 text-2xl text-[#A08045]">
            {caregiver.specialty}
          </p>

          {/* Rating */}
          <div className="flex gap-4 mt-8 flex-wrap">

            <div className="bg-[#F5EBD5] px-5 py-3 rounded-full text-[#8B6A2E] font-medium">
              ⭐ {caregiver.rating} / 5.0
            </div>

            <div className="bg-[#F5EBD5] px-5 py-3 rounded-full text-[#8B6A2E] font-medium">
              {caregiver.experience}
            </div>

          </div>

          {/* Bio */}
          <div className="mt-12 bg-white rounded-[32px] p-8 shadow-lg border border-[#ECE4D6]">

            <h2 className="text-3xl font-serif text-[#1C2B39]">
              About Caregiver
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {caregiver.bio}
            </p>

          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-4 mt-10">

            {[
              caregiver.specialty,
              "Luxury Care",
              "Home Service",
              "Warm Family Care",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white border border-[#E8DED0] px-5 py-3 rounded-full shadow-sm"
              >
                {skill}
              </div>
            ))}

          </div>

          {/* Booking */}
          <div className="mt-14 bg-white rounded-[36px] p-8 border border-[#ECE4D6] shadow-2xl">

            <h2 className="text-3xl font-serif text-[#1C2B39]">
              Book Consultation
            </h2>

            <p className="mt-3 text-gray-500">
              กรุณากรอกข้อมูลเพื่อให้ทีมงานติดต่อกลับ
            </p>

            <div className="grid gap-5 mt-8">

              <input
                type="text"
                placeholder="Your Name"
                className="px-5 py-4 rounded-2xl border border-[#E7DFD1] bg-[#FAF7F1] outline-none"
              />

              <input
                type="text"
                placeholder="Patient Condition"
                className="px-5 py-4 rounded-2xl border border-[#E7DFD1] bg-[#FAF7F1] outline-none"
              />

              <input
                type="date"
                className="px-5 py-4 rounded-2xl border border-[#E7DFD1] bg-[#FAF7F1] outline-none"
              />

            </div>

            <button className="w-full mt-8 bg-[#1C2B39] text-white py-5 rounded-full hover:scale-[1.02] transition duration-300 shadow-xl text-lg">
              Confirm Booking
            </button>

          </div>

        </div>

      </div>

    </main>
  )
}