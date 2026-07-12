import Image from "next/image";
import OrderForm from "./components/OrderForm";

import {
  FaWhatsapp,
  FaSnapchatGhost,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
export default function Home() {
  return (
    <main className="bg-[#F8F3EF] min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[6px] text-[#1D2E8C] text-sm">
              Freshly Baked Daily
            </p>

            <h1 className="text-7xl md:text-8xl font-black text-[#1D2E8C] leading-none mt-4">
              Mimi
              <br />
              Rolls
            </h1>

            <p className="mt-8 text-gray-600 text-lg leading-8 max-w-md">
              يسعدنا أن نقدم لكم سينابون طازج يُحضّر بكل حب، بعجينة طرية،
              وصوصات غنية، ونكهات مميزة تجعل كل لقمة تستحق التجربة ✨
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="#order"
                className="bg-[#1D2E8C] text-white px-7 py-3 rounded-full hover:opacity-90 transition"
              >
                Order Now
              </a>

              <a
                href="#menu"
                className="border-2 border-[#1D2E8C] text-[#1D2E8C] px-7 py-3 rounded-full hover:bg-[#1D2E8C] hover:text-white transition"
              >
                View Menu
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="w-[340px] h-[340px] rounded-full border-[8px] border-[#1D2E8C] bg-white p-5 shadow-2xl flex items-center justify-center">
              <Image
                src="/hero.png"
                alt="Mimi Rolls"
                width={300}
                height={300}
                priority
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opening Offer */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#1D2E8C] rounded-[40px] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <p className="uppercase tracking-[6px] text-blue-200 text-sm">
                Limited Time
              </p>

              <h2 className="text-5xl font-bold text-white mt-4">
                🎉 عرض الافتتاح
              </h2>

              <p className="text-blue-100 mt-6 leading-8 text-lg">
                لفترة محدودة استمتع بعروض ميمي رولز الخاصة بالافتتاح.
              </p>
            </div>

            <div className="bg-[#F8F3EF] p-10 flex flex-col gap-6 justify-center">
              <div className="bg-white rounded-3xl p-6 shadow">
                <h3 className="text-2xl font-bold text-[#1D2E8C]">
                  كلاسيك
                </h3>

                <div className="flex items-center gap-4 mt-4">
                  <span className="line-through text-gray-400 text-xl">
                    14 ر.س
                  </span>

                  <span className="text-4xl font-bold text-[#1D2E8C]">
                    12 ر.س
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow">
                <h3 className="text-2xl font-bold text-[#1D2E8C]">
                  بوكس 4
                </h3>

                <div className="flex items-center gap-4 mt-4">
                  <span className="line-through text-gray-400 text-xl">
                    54 ر.س
                  </span>

                  <span className="text-4xl font-bold text-[#1D2E8C]">
                    50 ر.س
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* Menu */}
<section id="menu" className="max-w-7xl mx-auto px-6 py-20">

  <div className="text-center mb-14">

    <p className="uppercase tracking-[6px] text-[#1D2E8C] text-sm">
      Our Menu
    </p>

    <h2 className="text-5xl font-bold text-[#1D2E8C] mt-3">
      Signature Rolls
    </h2>

    <p className="text-gray-600 mt-4">
      اختر النكهة اللي تناسب ذوقك 🍥
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* Classic */}

    <div className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

      <Image
        src="/classic.jpg"
        alt="Classic"
        width={600}
        height={500}
        className="w-full h-[320px] object-cover"
      />

      <div className="p-8">

        <h3 className="text-3xl font-bold text-[#1D2E8C]">
          Classic
        </h3>

        <p className="text-gray-600 mt-3 leading-7">
          سينابون كلاسيكي طازج مع الصوص الأصلي.
        </p>

        <div className="flex justify-between items-center mt-8">

          <span className="text-4xl font-bold text-[#1D2E8C]">
            14 ر.س
          </span>

          <a
            href="#order"
            className="bg-[#1D2E8C] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            اطلب الآن
          </a>

        </div>

      </div>

    </div>

    {/* Lotus */}

    <div className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

      <Image
        src="/lotus.jpg"
        alt="Lotus"
        width={600}
        height={500}
        className="w-full h-[320px] object-cover"
      />

      <div className="p-8">

        <h3 className="text-3xl font-bold text-[#1D2E8C]">
          Lotus
        </h3>

        <p className="text-gray-600 mt-3 leading-7">
          سينابون لوتس مع صوص لوتس الغني.
        </p>

        <div className="flex justify-between items-center mt-8">

          <span className="text-4xl font-bold text-[#1D2E8C]">
            18 ر.س
          </span>

          <a
            href="#order"
            className="bg-[#1D2E8C] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            اطلب الآن
          </a>

        </div>

      </div>

    </div>

  </div>

</section>{/* Happiness Box */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="bg-white rounded-[40px] shadow-xl overflow-hidden">

    <div className="grid lg:grid-cols-2 items-center">

      {/* Image */}

      <div>
        <Image
          src="/happiness-box.jpg"
          alt="Happiness Box"
          width={700}
          height={700}
          className="w-full h-full object-cover"
        />
      </div>
    

      {/* Content */}

      <div className="p-12">

        <p className="uppercase tracking-[6px] text-[#1D2E8C] text-sm">
          Mimi Special
        </p>

        <h2 className="text-5xl font-bold text-[#1D2E8C] mt-4">
          🤎 بوكس السعادة
        </h2>

        <p className="mt-6 text-gray-600 leading-8 text-lg">
          لحظات بسيطة...
          <br />
          تصنع يومًا أجمل ✨
        </p>

        <div className="mt-10 space-y-6">

          {/* شخص واحد */}

          <div className="bg-[#F8F3EF] rounded-3xl p-6">

            <h3 className="text-2xl font-bold text-[#1D2E8C]">
              لشخص واحد
            </h3>

            <ul className="mt-4 space-y-2 text-gray-700">

              <li>🍥 حبة سينابون كبيرة (من اختيارك)</li>

              <li>☕ كوب قهوة اليوم (باردة)</li>

              <li>💌 رسالة اليوم</li>

            </ul>

            <p className="text-3xl font-bold text-[#1D2E8C] mt-6">
              35 ر.س
            </p>

          </div>

          {/* شخصين */}

          <div className="bg-[#F8F3EF] rounded-3xl p-6">

            <h3 className="text-2xl font-bold text-[#1D2E8C]">
              لشخصين
            </h3>

            <ul className="mt-4 space-y-2 text-gray-700">

              <li>🍥 حبتان سينابون (من اختياركم)</li>

              <li>☕☕ كوبان قهوة اليوم (باردة)</li>

              <li>💌 رسالة اليوم</li>

            </ul>

            <p className="text-3xl font-bold text-[#1D2E8C] mt-6">
              45 ر.س
            </p>

          </div>

        </div>

        <p className="mt-8 text-sm text-gray-500">
          ✨ رسالة اليوم تتغير باستمرار، ويمكنك أيضاً كتابة رسالة خاصة لمن تحب عند الطلب.
        </p>

      </div>

    </div>

  </div>

</section>{/* Order Form */}

<section
  id="order"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <OrderForm />
</section>{/* Reviews */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-14">

    <p className="uppercase tracking-[6px] text-[#1D2E8C] text-sm">
      Reviews
    </p>

    <h2 className="text-5xl font-bold text-[#1D2E8C] mt-3">
      آراء عملائنا 🤎
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <div className="text-yellow-400 text-2xl">★★★★★</div>

      <p className="mt-4 text-gray-600 leading-8">
        ألذ سينابون جربته 😍
        العجينة طرية والطعم خرافي.
      </p>

      <h4 className="mt-6 font-bold text-[#1D2E8C]">
        — نورة
      </h4>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <div className="text-yellow-400 text-2xl">★★★★★</div>

      <p className="mt-4 text-gray-600 leading-8">
        بوكس السعادة فكرة جميلة جدًا،
        والرسالة كانت لمسة لطيفة.
      </p>

      <h4 className="mt-6 font-bold text-[#1D2E8C]">
        — ريم
      </h4>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <div className="text-yellow-400 text-2xl">★★★★★</div>

      <p className="mt-4 text-gray-600 leading-8">
        التغليف مرتب والطعم يستحق التجربة،
        إن شاء الله مو آخر طلب.
      </p>

      <h4 className="mt-6 font-bold text-[#1D2E8C]">
        — خالد
      </h4>
    </div>

  </div>

</section>{/* Delivery */}

<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="bg-[#1D2E8C] rounded-[35px] p-10 text-center">

    <h2 className="text-4xl font-bold text-white">
      🚗 التوصيل
    </h2>

    <p className="text-blue-100 text-xl mt-5 leading-8">
      التوصيل متوفر داخل مدينة جدة فقط.
      <br />
      رسوم التوصيل تختلف حسب الحي.
    </p>

  </div>

</section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#1D2E8C] mb-8">
            Contact Us
          </h2>

          <div className="space-y-6">
            <a
              href="tel:0548231269"
              className="flex items-center gap-4 text-gray-700 font-medium hover:text-[#1D2E8C] transition"
            >
              <FaWhatsapp className="text-[#1D2E8C]" size={24} />
              <span>0548231269</span>
            </a>

            <a
              href="https://snapchat.com/t/LqPBHkbJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-700 font-medium hover:text-[#1D2E8C] transition"
            >
              <FaSnapchatGhost className="text-[#1D2E8C]" size={24} />
              <span>Snapchat</span>
            </a>

            <a
              href="https://www.tiktok.com/@mimirollss?_r=1&_t=ZS-97wzGCxttDO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-700 font-medium hover:text-[#1D2E8C] transition"
            >
              <FaTiktok className="text-[#1D2E8C]" size={24} />
              <span>TikTok</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 text-gray-700 font-medium hover:text-[#1D2E8C] transition"
            >
              <FaInstagram className="text-[#1D2E8C]" size={24} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}