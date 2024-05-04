-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2024 at 08:15 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test2`
--

-- --------------------------------------------------------

--
-- Table structure for table `msg`
--

CREATE TABLE `msg` (
  `idmsg` int(11) NOT NULL,
  `Full_Name` varchar(255) DEFAULT NULL,
  `Subject` varchar(255) DEFAULT NULL,
  `Company_Name` varchar(255) DEFAULT NULL,
  `Email_Address` varchar(255) DEFAULT NULL,
  `Contact_Number` varchar(20) DEFAULT NULL,
  `Details` text DEFAULT NULL,
  `admin_view` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `msg`
--

INSERT INTO `msg` (`idmsg`, `Full_Name`, `Subject`, `Company_Name`, `Email_Address`, `Contact_Number`, `Details`, `admin_view`) VALUES
(7, 'Test', 'Test', 'Test', 'Test@Test.com', 'Test', 'test test 2 test 2', 1),
(8, 'Test', 'Test', 'Test', 'test2@test.com', 'Test', 'Test', 1),
(9, 'Test 2', 'Test 2', 'Test', 'test2@test.com', 'test', 'test', 1),
(10, 'Test', 'Test', 'Tes', 'test3@test.com', '123', 'Test', 1),
(11, 'T', 't', 'I', 'lochandineth@gmail.com', '123', 'Woah', 0);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `newsid` int(11) NOT NULL,
  `newstitle` text NOT NULL,
  `newstext` varchar(400) NOT NULL,
  `newsdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newstext`, `newsdate`) VALUES
(1, 'Test', 'test', '2024-04-05'),
(2, 'Test', 'test', '2024-03-05'),
(4, 'Test', 'test', '2024-01-05'),
(7, 'Test', 'test', '2024-01-04'),
(8, 'Test from UI', 'Test from UI Text', '2024-04-05'),
(9, 'Test from Postman', 'Test from Postman', '2024-04-04'),
(10, 'What is a KILOMETER?', 'Yes. This is a test.', '2024-04-05'),
(11, 'AMERICA!', 'YEAH!', '2024-04-19');

-- --------------------------------------------------------

--
-- Table structure for table `newsletter_acc`
--

CREATE TABLE `newsletter_acc` (
  `id` int(11) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter_acc`
--

INSERT INTO `newsletter_acc` (`id`, `email`) VALUES
(1, 'Test@test.com'),
(2, 'lochandineth@gmail.com'),
(3, 'jokahi1004@lewenbo.com');

-- --------------------------------------------------------

--
-- Table structure for table `opinions`
--

CREATE TABLE `opinions` (
  `opinionid` int(11) NOT NULL,
  `opiniontext` varchar(150) NOT NULL,
  `customername` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `opinions`
--

INSERT INTO `opinions` (`opinionid`, `opiniontext`, `customername`) VALUES
(1, 'Very good! Very nice! Wonderful! World class entertainment!', 'Benjamin Franklin!'),
(3, 'Ha! Ha! Ha! All according to Keikaku! Ha! Ha! Ha!', 'Hisashi Hyuuga'),
(4, 'I\'ll tell you a secret. My weakness is... nothing.', 'Reimu Hakurei'),
(7, 'This power is something only I can understand', 'Izayoi Sakuya'),
(8, 'Truly a work of art. It makes me weep!', 'Leo Tolstoy');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProductID` int(11) NOT NULL,
  `ProductName` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `Category` varchar(30) NOT NULL,
  `Imagepath` varchar(500) NOT NULL,
  `Price` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductID`, `ProductName`, `description`, `Category`, `Imagepath`, `Price`) VALUES
(40, 'Test', 'Fire test', 'Fire Detection and Protection', 'uploads\\Imagepath-1713513421045.jpg', '100000'),
(43, 'Z222', 'Z222', 'Fire Detection and Protection', 'uploads\\Imagepath-1714791218103.jpeg', 'Z222');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `info` varchar(5000) NOT NULL,
  `cover` varchar(500) NOT NULL,
  `images` varchar(5000) NOT NULL,
  `client` varchar(5000) NOT NULL,
  `img1` varchar(200) NOT NULL,
  `img2` varchar(200) NOT NULL,
  `img3` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `info`, `cover`, `images`, `client`, `img1`, `img2`, `img3`) VALUES
(7, 'test3 ', 'Hello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.  D O M I N O S P I Z Z A  Based on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!  D O M I N O S P I Z Z A  Let\'s enjoy the rest of the performance with the app!', 'uploads/cover-1708767488557.jpg', '', 'Test Test Test', 'uploads/img1-1708767488571.jpg', 'uploads/img2-1708767488572.jpg', 'uploads/img3-1708767488572.jpg'),
(9, 'Test5', 'Hello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nLet\'s enjoy the rest of the performance with the app!', 'uploads/cover-1708767534037.jpg', '', 'Test5', 'uploads/img1-1708767534048.jpg', 'uploads/img2-1708767534048.jpg', 'uploads/img3-1708767534049.jpg'),
(10, 'test 6', 'Hello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nLet\'s enjoy the rest of the performance with the app!', 'uploads/cover-1708767550044.jpg', '', 'test 6', 'uploads/img1-1708767550055.jpg', 'uploads/img2-1708767550055.jpg', 'uploads/img3-1708767550055.jpg'),
(11, 'test 7', 'Hello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nLet\'s enjoy the rest of the performance with the app!', 'uploads/cover-1708767560741.jpg', '', 'test 7', 'uploads/img1-1708767560752.jpg', 'uploads/img2-1708767560752.jpg', 'uploads/img3-1708767560753.jpg'),
(12, 'test 10', 'testHello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nHello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nLet\'s enjoy the rest of the performance with the app!', 'uploads/cover-1708767572028.jpg', '', 'test', 'uploads/img1-1708767572039.jpg', 'uploads/img2-1708767572040.jpg', 'uploads/img3-1708767572040.jpg'),
(14, 'Test 11', 'Hello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nLet\'s enjoy the rest of the performance with the app!', 'uploads/cover-1708767584165.jpg', '', 'Test 11', 'uploads/img1-1708767584176.jpg', 'uploads/img2-1708767584176.jpg', 'uploads/img3-1708767584176.jpg'),
(15, 'Test 12', 'Test 12', 'uploads/cover-1708766298441.jpg', '', 'Test 12', 'uploads/img1-1708766298476.jpg', 'uploads/img2-1708766298477.jpg', 'uploads/img3-1708766298478.jpg'),
(16, 'Test 13 Updated', 'Test 13 Updated', 'uploads/cover-1712315307270.jpg', '', 'Test 13 Updated', 'uploads/img1-1712315307294.jpg', 'uploads/img2-1712315307295.jpg', 'uploads/img3-1712315307295.jpg'),
(19, 'Test Final FInal', 'Test', 'uploads/cover-1713512867608.jpg', '', 'Testing Group', 'uploads/img1-1713512867623.jpg', 'uploads/img2-1713512867624.jpg', 'uploads/img3-1713512867625.jpg'),
(21, 'Combined Test', 'Combined Test', 'uploads/cover-1713512848893.jpg', '', 'Combined Test', 'uploads/img1-1713512848927.jpg', 'uploads/img2-1713512848928.jpg', 'uploads/img3-1713512848929.jpg'),
(22, 'Test', 'Work is almost done for the most part Need Volunteers for;  1. Summary. (1 - 2 Pages)  (Half Page for each of the these) 2. Performance Requirements (Throughput, Reponse Time, Storage, etc...) 3. Operational Requirements.  Additionally need from each person 1. Test Cases (3-4) to put in the Report.', 'uploads/cover-1714802979293.jpg', '', 'Test', 'uploads/img1-1714802979335.jpg', 'uploads/img2-1714802979335.jpg', 'uploads/img3-1714802979336.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `contact` varchar(50) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` int(11) NOT NULL DEFAULT 0,
  `verified` varchar(10) NOT NULL DEFAULT 'False'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `contact`, `address`, `email`, `password`, `type`, `verified`) VALUES
(9, 'Dineth Mallawarachchi 2', '12345678910', 'No 30, Testing Street, Test City 2.', 'test@test.com', 'test123', 0, 'False'),
(10, 'Dineth Mallawarachchi 2', '123456789', 'No 30, Testing Street, Test City.', 'test2@test.com', 'test123', 0, 'True'),
(11, 'Dineth Mallawarachchi 2', '123456789', 'No 30, Testing Street, Test City.', 'test3@test.com', 'test123', 1, 'True'),
(12, 'Mr Testing', '1234', '1234', 'lochandineth@gmail.com', '123', 0, 'True');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `msg`
--
ALTER TABLE `msg`
  ADD PRIMARY KEY (`idmsg`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`);

--
-- Indexes for table `newsletter_acc`
--
ALTER TABLE `newsletter_acc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `opinions`
--
ALTER TABLE `opinions`
  ADD PRIMARY KEY (`opinionid`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`) USING HASH;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `msg`
--
ALTER TABLE `msg`
  MODIFY `idmsg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `newsletter_acc`
--
ALTER TABLE `newsletter_acc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `opinions`
--
ALTER TABLE `opinions`
  MODIFY `opinionid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ProductID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
