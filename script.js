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

// Tambahkan kelas 'navbar-scrolled' saat digulir
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var experiencesSection = document.getElementById('experiences');
  var experienceItems = document.querySelectorAll('.experience h4');

  window.addEventListener('scroll', function() {
    if (isInViewport(experiencesSection)) {
      // Mengecek apakah pengguna menggunakan perangkat seluler atau desktop
      if (isMobile()) {
        // Jika pengguna menggunakan perangkat seluler, tambahkan kelas 'no-animation' ke setiap item
        experienceItems.forEach(function(item) {
          item.classList.add('no-animation');
        });
      } else {
        // Jika pengguna menggunakan desktop, jalankan animasi seperti biasa
        animateExperienceItems();
      }
    }
  });

  function animateExperienceItems() {
    experienceItems.forEach(function(item, index) {
      setTimeout(function() {
        item.classList.add('show');
      }, index * 500);
    });
  }

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function isMobile() {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  // Reset animasi saat keluar dari bagian pengalaman
  window.addEventListener('scroll', function() {
    if (!isInViewport(experiencesSection)) {
      experienceItems.forEach(function(item) {
        item.classList.remove('show');
        item.classList.remove('no-animation'); // Hapus kelas 'no-animation'
      });
    }
  });
});
