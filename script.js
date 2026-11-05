const form = document.getElementById("rentalForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const mobil = document.getElementById("mobil").value;
  const lama = Number(document.getElementById("lama").value);
  const pesan = document.getElementById("pesan");

  pesan.className = "message";

  if (nama === "" || mobil === "" || !Number.isFinite(lama) || lama < 1-3) {
    pesan.textContent = "Error: nama, pilihan mobil, dan lama sewa minimal 1-3 hari wajib diisi.";
    pesan.classList.add("error");
    return;
  }

  pesan.textContent = "Validasi berhasil. Data penyewaan siap diproses.";
  pesan.classList.add("success");
  console.log("Validasi sukses:", { nama, mobil, lama });
});
