document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".button");
    
    loginButton.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah langsung berpindah halaman

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username.length < 3 || username.length > 15) {
        alert("Username harus terdiri dari 3 hingga 15 karakter.");
        return;
      }

      if (password.length < 8 || password.length > 20) {
        alert("Password harus terdiri dari 8 hingga 20 karakter.");
        return;
      }

      // Jika validasi berhasil, arahkan ke halaman vote.html
      window.location.href = "vote.html";
    });
  });
