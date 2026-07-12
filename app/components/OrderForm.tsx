"use client";

import { useMemo, useState } from "react";

const prices = {
  classic: 14,
  lotus: 18,
  box4: 54,
  box6: 80,
  box10: 132,
  box12: 156,
  happiness1: 35,
  happiness2: 45,
};

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [message, setMessage] = useState("");

  const [product, setProduct] = useState("classic");
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(() => {
    return prices[product as keyof typeof prices] * quantity;
  }, [product, quantity]);

  const sendWhatsapp = () => {
    const text = `
🤎 طلب جديد - Mimi Rolls

👤 الاسم: ${name}
📱 الجوال: ${phone}
📍 الحي: ${district}

🍥 المنتج: ${product}
🔢 الكمية: ${quantity}

💌 الرسالة:
${message}

💰 الإجمالي: ${total} ر.س
`;

    window.open(
      `https://wa.me/966548231269?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="order" className="max-w-5xl mx-auto py-24 px-6">
      <div className="bg-white rounded-[40px] shadow-xl p-10">

        <h2 className="text-5xl font-black text-[#1D2E8C] text-center">
          اطلب الآن 🤎
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-10">
          جميع الطلبات تُحضّر طازجة بعد تأكيد الطلب
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            className="border rounded-xl p-4"
            placeholder="الاسم"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            className="border rounded-xl p-4"
            placeholder="رقم الجوال"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />

          <input
            className="border rounded-xl p-4 md:col-span-2"
            placeholder="الحي"
            value={district}
            onChange={(e)=>setDistrict(e.target.value)}
          />

          <select
            className="border rounded-xl p-4"
            value={product}
            onChange={(e)=>setProduct(e.target.value)}
          >
            <option value="classic">Classic - 14 ر.س</option>
            <option value="lotus">Lotus - 18 ر.س</option>
            <option value="box4">بوكس 4 - 54 ر.س</option>
            <option value="box6">بوكس 6 - 80 ر.س</option>
            <option value="box10">بوكس 10 - 132 ر.س</option>
            <option value="box12">بوكس 12 - 156 ر.س</option>
            <option value="happiness1">بوكس السعادة (شخص) - 35 ر.س</option>
            <option value="happiness2">بوكس السعادة (شخصين) - 45 ر.س</option>
          </select>

          <input
            type="number"
            min={1}
            className="border rounded-xl p-4"
            value={quantity}
            onChange={(e)=>setQuantity(Number(e.target.value))}
          />

          <textarea
            className="border rounded-xl p-4 md:col-span-2"
            rows={4}
            placeholder="رسالة خاصة أو ملاحظات (اختياري)"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />

        </div>

        <div className="mt-10 bg-[#F8F3EF] rounded-3xl p-6">

          <h3 className="text-2xl font-bold text-[#1D2E8C]">
            الإجمالي
          </h3>

          <p className="text-5xl font-black text-[#1D2E8C] mt-4">
            {total} ر.س
          </p>

        </div>

        <button
          onClick={sendWhatsapp}
          className="w-full mt-8 bg-[#1D2E8C] text-white py-4 rounded-full text-xl font-bold hover:opacity-90 transition"
        >
          إرسال الطلب عبر واتساب
        </button>

      </div>
    </section>
  );
}