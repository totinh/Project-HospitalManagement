-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 26, 2020 lúc 07:13 AM
-- Phiên bản máy phục vụ: 10.4.13-MariaDB
-- Phiên bản PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `pnt`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bacsi`
--

CREATE TABLE `bacsi` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `ngaysinh` varchar(20) NOT NULL,
  `gioitinh` varchar(10) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `image` text NOT NULL,
  `chuyenkhoa` varchar(255) NOT NULL,
  `tieusu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `bacsi`
--

INSERT INTO `bacsi` (`id`, `name`, `email`, `ngaysinh`, `gioitinh`, `diachi`, `phone`, `image`, `chuyenkhoa`, `tieusu`) VALUES
(1, 'Tô Thanh Tịnh', 'dscdsc@gmail.com', '2020-11-05', 'Nam', 'Cần Thơ', '0055', 'IMG_1438.jpg', 'Da liễu', 'cdscd'),
(46, 'Văn Tèo', 'totinh.ka64@gmail.com', '2020-11-06', 'Nam', 'Cần Thơ', '120545', 'IMG_1433.jpg', 'Tai - Mũi - Họng', ' 2 năm kinh nghiệm'),
(47, 'Văn Tèo', 'totinh.ka64@gmail.com', '2020-11-04', 'Nam', 'Cần Thơ', '120545', 'IMG_1434.jpg', 'Nam khoa', 'vdfv'),
(48, 'totinh', 'totinh@gmail.cm', '24/12/2020', 'Nam ', 'Cần Thơ', '0378550101', 'beauty_1584874405387.jpeg', 'Tay - Mũi - Họng', '1 năm kinh nghiệm'),
(49, 'Tô Thanh Tịnh', 'tinhb1609800@gmail.com', '06/12/2020', 'Nam ', 'Cần Thơ', '0123456789', 'beauty_1584874405387(1).jpg', 'Khoa nội', 'Kinh nghiệm 1 năm');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `benhnhan`
--

CREATE TABLE `benhnhan` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mabhyt` varchar(255) NOT NULL,
  `ngaysinh` varchar(20) NOT NULL,
  `gioitinh` varchar(10) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `chuandoan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `benhnhan`
--

INSERT INTO `benhnhan` (`id`, `name`, `mabhyt`, `ngaysinh`, `gioitinh`, `diachi`, `phone`, `chuandoan`) VALUES
(4, 'Nguyễn Thị Thập', '1234', '20/11/2020', 'Nam', 'Cần Thơ', '0377888332', 'Bệnh da liễu'),
(5, 'Văn Tèo', '456', '19/11/2020', 'Nam', 'Cần Thơ', '120545', 'Da liễu'),
(6, 'totinh123', 'ab', '17/12/2020', 'Nam', 'xzc', 'xzc', 'xzcxc');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuyenkhoa`
--

CREATE TABLE `chuyenkhoa` (
  `id` int(11) NOT NULL,
  `tenchuyenkhoa` varchar(255) NOT NULL,
  `mota` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chuyenkhoa`
--

INSERT INTO `chuyenkhoa` (`id`, `tenchuyenkhoa`, `mota`) VALUES
(23, 'Khoa ngoại', 'Da liễu'),
(24, 'Tay - Mũi - Họng', 'Khám ngoại khoa'),
(25, 'Khoa nội', 'Tâm lý - Thần kinh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lichkhambenh`
--

CREATE TABLE `lichkhambenh` (
  `id` int(10) NOT NULL,
  `tenbenhnhan` varchar(255) NOT NULL,
  `yeucaukham` varchar(255) NOT NULL,
  `tenbacsi` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lichkhambenh`
--

INSERT INTO `lichkhambenh` (`id`, `tenbenhnhan`, `yeucaukham`, `tenbacsi`, `date`, `time`, `phone`) VALUES
(22, ' Nguyễn Văn S', '11111111', 'TS.BS.Trần Đức Sĩ', '2020-11-18', '22:43', '00000'),
(24, 'Trần Thị Nở', 'Khám da liễu', 'TS.BSCKII.Nguyễn Tiến Linh', '2020-11-03', '22:46', '0123456789'),
(27, 'Lý Lệ Liễu', 'Mắt', 'Nguyễn Cừơng Hóa', '2020-11-09', '02:17', '0123456789');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lichnghi`
--

CREATE TABLE `lichnghi` (
  `id` int(10) NOT NULL,
  `namenv` varchar(255) NOT NULL,
  `idnv` int(10) NOT NULL,
  `hinhthuc` varchar(255) NOT NULL,
  `date_from` varchar(255) NOT NULL,
  `date_to` varchar(255) NOT NULL,
  `lydo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lichnghi`
--

INSERT INTO `lichnghi` (`id`, `namenv`, `idnv`, `hinhthuc`, `date_from`, `date_to`, `lydo`) VALUES
(1, 'Văn Tèo', 2, 'Nghĩ dày hạn', '18/11/2020', '24/11/2020', 'Bệnh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lichsukham`
--

CREATE TABLE `lichsukham` (
  `id` int(10) NOT NULL,
  `namebn` varchar(255) NOT NULL,
  `namebs` varchar(255) NOT NULL,
  `mabhyt` varchar(255) NOT NULL,
  `ngaykhambenh` varchar(255) NOT NULL,
  `ngaytaikham` varchar(255) NOT NULL,
  `donthuoc` varchar(255) NOT NULL,
  `chuandoan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lichsukham`
--

INSERT INTO `lichsukham` (`id`, `namebn`, `namebs`, `mabhyt`, `ngaykhambenh`, `ngaytaikham`, `donthuoc`, `chuandoan`) VALUES
(3, 'Nguyễn Văn A', 'Thạch', '0123', '2020-12-25', '2020-12-04', 'ab', 'abc'),
(4, 'lê thị hồng', 'nguyễn cao', '333', '2020-12-11', '2020-12-10', 'ân', 'hah'),
(5, 'Nguyễn Văn S', 'Tô Thanh Tịnh', '455', '2021-01-04', '2021-01-22', 'thuốc cảm', 'Nhứt đầu'),
(6, 'Nguyễn Văn S', 'Tô Thanh Tịnh', '455', '2020-12-17', '2021-01-08', 'abc', 'Viêm họng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `lienhe` varchar(255) NOT NULL,
  `join_date` varchar(255) NOT NULL,
  `chucvu` varchar(255) NOT NULL,
  `mucluong` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`id`, `name`, `email`, `lienhe`, `join_date`, `chucvu`, `mucluong`) VALUES
(21, 'Tô Tịnh', 'totinh@gmail.com', '033333', '20/12/2020', 'Xét nghiệm', '10.0000');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quaythuoc`
--

CREATE TABLE `quaythuoc` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ngaymua` varchar(255) NOT NULL,
  `thoigiansd` varchar(255) NOT NULL,
  `ngayhethan` varchar(255) NOT NULL,
  `gia` varchar(255) NOT NULL,
  `soluong` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `quaythuoc`
--

INSERT INTO `quaythuoc` (`id`, `name`, `ngaymua`, `thoigiansd`, `ngayhethan`, `gia`, `soluong`) VALUES
(1, 'Naturen', '22/12/2020', '36 Tháng', '22/12/2023', '30.000/ hộp', '1000 hộp');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `email_status`) VALUES
(13, 'totinh', 't85@gmail.com', '123', 'Duyệt!'),
(14, 'abc123', 'abc@gmail.com', '123', 'Duyệt!');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bacsi`
--
ALTER TABLE `bacsi`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `benhnhan`
--
ALTER TABLE `benhnhan`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `chuyenkhoa`
--
ALTER TABLE `chuyenkhoa`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `lichkhambenh`
--
ALTER TABLE `lichkhambenh`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `lichnghi`
--
ALTER TABLE `lichnghi`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `lichsukham`
--
ALTER TABLE `lichsukham`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `quaythuoc`
--
ALTER TABLE `quaythuoc`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `bacsi`
--
ALTER TABLE `bacsi`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT cho bảng `benhnhan`
--
ALTER TABLE `benhnhan`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `chuyenkhoa`
--
ALTER TABLE `chuyenkhoa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `lichkhambenh`
--
ALTER TABLE `lichkhambenh`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT cho bảng `lichnghi`
--
ALTER TABLE `lichnghi`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `lichsukham`
--
ALTER TABLE `lichsukham`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `quaythuoc`
--
ALTER TABLE `quaythuoc`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
