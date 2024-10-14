// For responsive navbar

function menu(e) {
  let list = document.querySelector("ul");

  if (e.name === "menu") {
    // Jika ikon menu, ubah jadi close
    e.name = "close";
    list.classList.add("top-[80px]");
    list.classList.add("opacity-100");
    list.classList.add("bg-green-200"); // Tambahkan background hijau
  } else {
    // Jika ikon close, ubah jadi menu
    e.name = "menu";
    list.classList.remove("top-[80px]");
    list.classList.remove("opacity-100");
    list.classList.remove("bg-green-200"); // Hapus background hijau
  }
}

// 

// Fungsi untuk menampilkan modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.showModal();
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.close();
}

