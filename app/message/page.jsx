'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Counter from '../../components/Counter';

export default function MessagePage() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    const res = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const data = await res.json();
    setJoke(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke(); // ambil joke saat halaman pertama kali dimuat
  }, []);

  return (
    <main className="min-h-screen bg-[url('/img/1357978.png')] bg-cover bg-center p-10">
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2 className="text-xl text-gray-600 mb-6">
              {joke.setup}
            </h2>
            <h1 className="text-4xl font-bold mb-2">{joke.punchline}</h1>
            <button onClick={fetchJoke}>Coba joke lain</button>
          </>
        )}
          <Counter start={5} />
        </div>
      </div>
      </div>
    </main>
  );
}