module.exports.config = {
	name: "ad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hà Mạc Trường Giang",
	description: "Thông tin về admin",
	commandCategory: "Thông tin về admin",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`\n★Thông Tin Admin Bot Này★\nADMIN NAME : ?\n ~~\nGiới Thiệu: Tao đẹp trai?\nI Have Something To You\nI Love You\nTính Cách : Sếch?\nChiều cao : 1m7\nSinh ngày : \nLiên hệ \nSở Thích: Thích chơi game, trêu gái\nCân nặng: \nID FACEBOOK : \nName ID :  \nLink Facebook : \nVài lời tới người dùng BOT: Vui lòng không spam khi sử dụng để tránh die bot. Cảm ơn mọi người đã sử dụng đên con bot của mình.\nLưu ý : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\nCảnh báo : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\nChúc bạn sử dụng vui vẻ <3\n=== Nguyễn Hưng Xhxi ===`, event.threadID, event.messageID);