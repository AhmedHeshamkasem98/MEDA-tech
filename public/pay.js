// script.js
document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // جمع البيانات من النموذج
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const proof = document.getElementById("proof").value;

    // إنشاء رابط WhatsApp
    const whatsappMessage = `إثبات الدفع من ${name}:\nالمبلغ: ${amount}\nرابط الإثبات: ${proof}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=01095014554&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // إرسال البيانات إلى formsubmit
    fetch("https://formsubmit.co/ajax/hjbdjjdkdjus890@gmail.com", {
      method: "POST",
      body: JSON.stringify({ name, amount, proof }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // فتح WhatsApp
          window.open(whatsappUrl, "_blank");
          alert("تم إرسال إثبات الدفع بنجاح!");
        } else {
          alert("فشل في إرسال البيانات.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("حدث خطأ أثناء إرسال البيانات.");
      });
  });
