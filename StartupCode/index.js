function login() {
    const nameEl = document.querySelector("#teacherName");
    localStorage.setItem("teacherName", nameEl.value);
    window.location.href = "teacherHome.html";
  }