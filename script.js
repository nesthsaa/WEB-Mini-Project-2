// Ambil formulir menggunakan id
const contactForm = document.getElementById('contact-form');

// Tambahkan event listener untuk menangani pengiriman formulir
contactForm.addEventListener('submit', function(event) {
  // Menghentikan perilaku bawaan dari pengiriman formulir
  event.preventDefault();

  // Ambil nilai input dari formulir
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const comment = document.getElementById('comment').value;

  // Validasi apakah semua isian telah diisi
  if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || comment.trim() === '') {
    // Jika ada isian yang kosong, tampilkan pesan error dan hentikan pengiriman formulir
    alert('Mohon lengkapi semua isian sebelum mengirimkan formulir.');
    return;
  }

  // Simpan data formulir di dalam Local Storage
  const formData = {
    name: name,
    email: email,
    subject: subject,
    comment: comment
  };
  localStorage.setItem('formData', JSON.stringify(formData));

  // Lakukan apa yang ingin Anda lakukan dengan data formulir jika validasi berhasil, misalnya kirim ke server

  // Contoh: Cetak data ke konsol
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Comment:', comment);

  // Reset formulir setelah pengiriman
  contactForm.reset();

  // Tampilkan pesan konfirmasi dalam bentuk pop-up
  alert('Formulir telah berhasil dikirim!');

  // Redirect atau lakukan tindakan lainnya setelah pengiriman formulir
  // window.location.href = 'halaman-terima.html';
});

document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = document.getElementById('carouselExampleControls');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000, // Menyesuaikan interval slide (dalam milidetik)
    wrap: true // Jika diatur ke true, slider akan mulai dari awal setelah mencapai slide terakhir dan sebaliknya
  });
});