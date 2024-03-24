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

// Animasi pada section Experiences
document.addEventListener('DOMContentLoaded', function() {
  var experiencesSection = document.getElementById('experiences');
  var experienceItems = document.querySelectorAll('.experience h4'); // Ubah pemilihan kelas menjadi ".experience h4"

  window.addEventListener('scroll', function() {
    if (isInViewport(experiencesSection)) {
      animateExperienceItems();
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
    // Menggunakan media query untuk menyesuaikan aturan animasi berdasarkan ukuran layar
    var mediaQueryList = window.matchMedia('(max-width: 768px)');
    if (mediaQueryList.matches) {
      // Hanya mengembalikan true jika setengah dari elemen terlihat di dalam viewport pada perangkat seluler
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    } else {
      // Mengembalikan true jika elemen sepenuhnya terlihat di dalam viewport pada desktop
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }

  // Reset hasAnimated to false when leaving the experiences section
  window.addEventListener('scroll', function() {
    if (!isInViewport(experiencesSection)) {
      experienceItems.forEach(function(item) {
        item.classList.remove('show');
      });
    }
  });
});

