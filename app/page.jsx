import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-300 text-gray-800 p-10">
      <div className="bg-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div className="mx-auto max-w-9xl">
      <img className="mx-auto block h-24 rounded sm:mx-0 sm:shrink-0" src="/img/tifany.jpg" alt="" />
        <h1 className="text-4xl font-bold my-3">Tifany Avika Rahmah</h1>
        <h2 className="text-xl text-gray-600 mb-6">Technical Writer</h2>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow mb-3">
          <Link href="/message">
          Message
          </Link>
        </button>
      </div>
      <div className="mx-auto my-8  max-w-9xl">
        <h3 className="text-xl text-gray-900 mt-5 text-base tracking-tight font-semibold">Harapan untuk TMA</h3>
        <p className="text-gray-500 mt-2 text-sm text-justify leading-relaxed">
          Saya berharap perusahaan dapat terus menciptakan ruang yang mendukung pertumbuhan karyawan, baik dari sisi keterampilan teknis maupun pengembangan pribadi. Semoga ke depannya TMA akan tetap menjadi perusahaan yang hangat dan selalu bertumbuh. Selamat hari jadi yang ke-15, TMA!
        </p>
      </div>
    </div>
    </main>
  );
}
