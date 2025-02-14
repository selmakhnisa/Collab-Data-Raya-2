document.addEventListener('DOMContentLoaded', () => {
    const imgContainer = document.querySelector('.img-container');
    const navLinks = document.querySelectorAll('.slide-navigator a');
  
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        imgContainer.scrollTo({
          left: imgContainer.offsetWidth * index,
          behavior: 'smooth'
        });
      });
    });
  });

const profiles = {
    "syadith": {
        image: "Foto Anggota/Foto Syadith.jpg",
        name: "Aqyra Syadith Iswara",
        title: "Cief of The Team",
        bio: "Pemuda soleh yang menempuh pendidikan program studi Bisnis Digital di Universitas Negeri Jakarta. Lulus dari SMA Suluh Jakarta jurusan IPS, saya memiliki ketertarikan untuk menuntut ilmu terkait teknologi digital dan ingin menjadi seorang Web Developer/Master di masa depan. Selain itu, saya juga tertarik dalam Game Developing"
    },
    "jane-doe": {
        image: "Photo1.jpeg",
        name: "Jane Doe",
        title: "Assistance Manager",
        bio: "Jane Doe is an expert in project planning and client relations."
    }
};

function showProfile(memberKey) {
    const profile = profiles[memberKey];
    if (profile) {
        document.getElementById('profile-image').src = profile.image;
        document.getElementById('profile-name').innerText = profile.name;
        document.getElementById('profile-title').innerText = profile.title;
        document.getElementById('profile-bio').innerText = profile.bio;

        // Tampilkan modal
        document.getElementById('profile-modal').style.display = 'block';
    }
}

function closeProfile() {
    document.getElementById('profile-modal').style.display = 'none';
}

// Tutup modal jika klik di luar area modal
window.onclick = function(event) {
    const modal = document.getElementById('profile-modal');
    if (event.target == modal) {
        closeProfile();
    }
}
