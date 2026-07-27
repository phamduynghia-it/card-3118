const CONFIG = {
    // 1. Thông tin màn hình khoá
    sender: `Love U`,           // Tên người gửi
    recipient: `My handsome boy`,       // Tên người nhận

    // 2. Nội dung thiệp
    title: `To my love`,        // Tiêu đề chính (hiển thị trên vỏ thiệp và popup thư)
    cardCoverDeco: `✿ ❤ ✿`,      // Dòng trang trí nhỏ phía trên tiêu đề
    forYouLine: `Happy birthday`, // Dòng chữ hiển thị khi hoa rơi

    // 3. Nội dung bức thư (Mỗi dòng là một đoạn văn)
    popupMessage: `🎂 Happy Birthday...
...to my Handsome Boy. ❤️
Chúc em tuổi mới luôn mạnh khỏe, bình an và luôn giữ được ngọn lửa nhiệt huyết trên hành trình mình đang đi.
Cảm ơn em vì những nỗ lực, sự trưởng thành và những điều tốt đẹp em đã mang đến.
Hôm nay, hãy thật tự tin và tỏa sáng. Chị tin em sẽ làm được. 🍀
Best wishes for you. ❤️
Em không cần phải là người giỏi nhất.
Chỉ cần luôn là chính mình, vì trong trái tim chị, em luôn là một người đàn ông đáng trân trọng. Chúc em luôn mạnh khỏe, hạnh phúc và gặp nhiều điều tốt đẹp trên chặng đường phía trước. ❤️
23/08/2002-23/08/2026`.split('\n'),

    // 4. Hình ảnh (Lưu ảnh vào thư mục images/ và điền tên file vào đây)
    images: ["./assets/user_images_0.jpg","./assets/user_images_1.jpg","./assets/user_images_2.jpg","./assets/user_images_3.jpg"],

    // 5. Ảnh nổi bật hiển thị bên trong bức thư
    popupPhoto: `./assets/user_popupPhoto.jpg`, 

    // 6. Nhạc nền (Link file MP3)
    music: `./assets/user_music.mp4`,
};

