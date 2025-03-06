document.addEventListener("DOMContentLoaded", function() {
    const commentButton = document.querySelector(".comment-section button");
    const emailInput = document.querySelector(".comment-section input");
    const commentTextarea = document.querySelector(".comment-section textarea");

    commentButton.addEventListener("click", function() {
        const email = emailInput.value.trim();
        const comment = commentTextarea.value.trim();
        if (email.endsWith("@gmail.com") && comment !== "") {
            if (confirm("Cảm ơn bạn đã gửi bình luận, chúng tôi sẽ xem xét tiếp thu và cải thiện trong những lần tiếp theo! Nếu bạn còn bất kì thắc mắc nào, hãy liên hệ trực tiếp với chúng tôi.")) {
                emailInput.value = "";
                commentTextarea.value = "";
                window.location.href = "https://www.facebook.com/profile.php?id=100086858357852";
            }
        } else {
            alert("Vui lòng kiểm tra lại định dạng email và bình luận!");
        }
    });
});
