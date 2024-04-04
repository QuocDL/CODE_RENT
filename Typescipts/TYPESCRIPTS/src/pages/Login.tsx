// import express, { Request, Response } from "express";
// import bodyParser from "body-parser";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const app = express();
// const PORT = 3000;

// interface User {
//     username: string;
//     password: string;
// }
// const users: User[] = [];
// app.use(bodyParser.json());

// // Đăng kí tài khoản
// app.post("/register", async (req: Request, res: Response) => {
//     const { username, password } = req.body;
//     if (!username || !password) {
//         return res.status(400).json({ message: "Vui lòng cung cấp đầy đủ thông tin." });
//     }

//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
//         users.push({ username, password: hashedPassword });
//         res.status(201).json({ message: "Đăng kí thành công." });
//     } catch (error) {
//         res.status(500).json({ message: "Đã có lỗi xảy ra." });
//     }
// });

// // Đăng nhập
// app.post("/login", async (req: Request, res: Response) => {
//     const { username, password } = req.body;
//     const user = users.find((u) => u.username === username);
//     if (!user) {
//         return res.status(400).json({ message: "Tài khoản không tồn tại." });
//     }
//     try {
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: "Sai mật khẩu." });
//         }

//         const token = jwt.sign({ username }, "secret_key");
//         res.json({ token });
//     } catch (error) {
//         res.status(500).json({ message: "Đã có lỗi xảy ra." });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server đang chạy tại http://localhost:8000/api/${PORT}`);
// });

