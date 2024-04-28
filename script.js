alert("I know you are tired")
alert("pero laban lang jud bah")
alert("sos ikaw pa kusgan nimo")
alert("I hope this little gift of appreciation")
alert("will lift up you a little")
alert("Have a good day!")
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};