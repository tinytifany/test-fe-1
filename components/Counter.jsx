'use client'; // Penting untuk mengaktifkan interaktivitas (karena ini komponen client)

import { useState } from 'react';

export default function Counter({ start }) {
  const [count, setCount] = useState(start);

  return (
    <div>
      <p>Jumlah: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}
