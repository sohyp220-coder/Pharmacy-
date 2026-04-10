const doctorPhone = "201556101000";
const apiKey = "29faf6acadd97ad4a977bb79e784fa00";


document.getElementById('upload-p').addEventListener('change', async function() {
    if (this.files && this.files[0]) {
        const label = document.querySelector('label');
        label.innerText = "جاري الرفع...";
        
        const formData = new FormData();
        formData.append('image', this.files[0]);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            const imageUrl = result.data.url;
            const message = `السلام عليكم يا دكتور، دي صورة الروشتة بتاعتي: ${imageUrl}`;
            window.location.href = `https://wa.me/${doctorPhone}?text=${encodeURIComponent(message)}`;
        } catch (error) {
            alert("خطأ في الرفع");
            label.innerText = "Send Prescription";
        }
    }
});


window.sendOrder = function(event, drugNameAr) {
    event.preventDefault();
    event.stopPropagation();
    
    let name = drugNameAr;
    if (!name) {
        const cardCont = event.target.closest('.card-cont') || event.target.closest('.div');
        name = cardCont.querySelector('span').innerText;
    }

    const doctorPhone = "201556101000";
    let message = `السلام عليكم يا دكتور، محتاج أطلب دواء: (${name})`;
    const whatsappUrl = `https://wa.me/${doctorPhone}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
}
