-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2024 at 09:15 AM
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
(4, 'Test', 'test', '2024-01-05'),
(7, 'Test', 'test', '2024-01-04'),
(8, 'Test from UI', 'Test from UI Text', '2024-04-05'),
(9, 'Test from Postman', 'Test from Postman', '2024-04-04'),
(10, 'What is a KILOMETER?', 'Yes. This is a test.', '2024-04-05'),
(11, 'AMERICA!', 'YEAH!', '2024-04-19'),
(12, '55', '66', '2024-05-09'),
(13, '55', '66', '2024-05-09'),
(14, '55', '66', '2024-05-09'),
(15, '55', '66', '2024-05-09');

-- --------------------------------------------------------

--
-- Table structure for table `newsletter_acc`
--

CREATE TABLE `newsletter_acc` (
  `id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter_acc`
--

INSERT INTO `newsletter_acc` (`id`, `email`) VALUES
(1, 'jinonod704@mfyax.com');

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
(41, 'ECO-WORTHY Solar Panel 25W 12V Monocrystalline Waterproof Panel for Charging 12V Battery of RV Boat', 'Compact and Reliable - The 100W 12V Monocrystalline solar panel delivers a stable output of an average 500Wh of electricity per day (depending on sun availability). With its compact solar cell arrangement, this renogy 100w solar panel weighs only 14.1 lbs and is 8-10% lighter and smaller than conventional rigid solar panels.\r\nSuperior Quality and Material - All Renogy solar panels are made from 100% EL-tested Grade A+ solar cells to provide the highest power conversion efficiency and prolonged lifespan. This 100 watt solar panel is also equipped with PERC cells to deliver an excellent cell efficiency of 22%.', 'Solar', 'uploads\\Imagepath-1714929051923.jpg', '50000'),
(42, 'ECO-WORTHY Solar Panel 25W 12V Monocrystalline Waterproof Panel for Charging 12V Battery of RV Boat', 'Advanced Solar Cell Tech and Panel Structure - Renogy solar panels adapted the newest 9 Bus-bars cell tech and Half-cell structure, allowing the full-size solar cell to be cut in half and closely arranged for space usage maximization. Increase the cell receiving surface while reducing current and resistance loss with a thinner ribbon design.', 'Solar', 'uploads\\Imagepath-1714929098378.jpeg', '30000'),
(44, 'Renogy Solar Panel 100 Watt 12 Volt, High-Efficiency Monocrystalline PV Module Power Charger for RV ', 'Built to Last - This all-weather monocrystalline solar panel can handle snow, rain, and heat for decades with IP65 protection. Renogy uses low iron-tempered glass and corrosion-resistant aluminum frames with polyamide corner support to ensure this panel solar can perform and withstand all weather conditions.', 'Solar', 'uploads\\Imagepath-1714929186922.jpg', '50000'),
(45, '1KG Dry Powder Fire Extinguisher', 'The 1KG Dry Powder Fire Extinguisher is suitable for class A, B and C fires, meaning it can tackle most fires involving wood/paper, flammable liquids and electrical fires. It is also effective on vehicle fires making it a great extinguisher to have in the car or van.', 'Fire Detection and Protection', 'uploads\\Imagepath-1714928367231.jpg', '5,000'),
(46, 'BREAK GLASS FOR KEY', 'Break Glass Emergency Key Box, Sturdy ABS plastic key holder that provides visible storage of emergency keys, Unique snap fit design, Material ABS Plastic & Perspex. Printed ‘BREAK GLASS FOR KEY’, Holder with printed glass.\r\n\r\nBreak Glass Emergency Key Box Specifications\r\nHolder with printed glass\r\nSturdy ABS plastic key holder and provides visible storage of emergency keys\r\nHammers and chains are sold separately', 'Fire Detection and Protection', 'uploads\\Imagepath-1714928513391.jpg', '4,900'),
(47, 'SECURITY SMOKE DETECTOR', 'Infrared photoelectric sensor\r\nMCU processing eliminates false alarm\r\nSurface-mount device (SMD) circuit board design\r\nHigh detection sensitivity\r\nSimple ceiling installation using a dedicated bracket\r\nUp to 3 years of battery life using a 3.6V lithium battery\r\nLow battery indication at least 30 days from the warning signal\r\nAlarm sound level 80dB at 3m(10 feet)', 'Fire Detection and Protection', 'uploads\\Imagepath-1714928629251.jpg', '9,500'),
(48, '100L WATER FIRE EXTINGUISHER WITH TROLLEY', 'A fire extinguisher, or extinguisher, is an active fire protection device used to extinguish or control small fires, often in emergency situations. It is not intended for use on an out-of-control fire.\r\n\r\nWorking Temperature	0C to 60C\r\nTest Pressure	35 bar\r\nWorking Pressure	15 bar', 'Controls', 'uploads\\Imagepath-1714928789266.jpg', '245,000'),
(51, 'sdsd', 'dsdadasfe', 'Solar', 'uploads\\Imagepath-1715413167618.jpg', 'tfrwsrfwe');

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
(7, 'test3 ', 'Hello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.  D O M I N O S P I Z Z A  Based on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!  D O M I N O S P I Z Z A  Let\'s enjoy the rest of the performance with the app!', 'uploads/cover-1714581344819.jpg', '', 'Test Test ', 'uploads/img1-1714581344827.jpg', 'uploads/img2-1714581344829.jpg', 'uploads/img3-1714581344834.jpg'),
(9, 'Test5', 'Hello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nLet\'s enjoy the rest of the performance with the app!', 'uploads/cover-1708767534037.jpg', '', 'Test5', 'uploads/img1-1708767534048.jpg', 'uploads/img2-1708767534048.jpg', 'uploads/img3-1708767534049.jpg'),
(10, 'test 6', 'Hello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nLet\'s enjoy the rest of the performance with the app!', 'uploads/cover-1708767550044.jpg', '', 'test 6', 'uploads/img1-1708767550055.jpg', 'uploads/img2-1708767550055.jpg', 'uploads/img3-1708767550055.jpg'),
(11, 'test 7', 'Hello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nLet\'s enjoy the rest of the performance with the app!', 'uploads/cover-1708767560741.jpg', '', 'test 7', 'uploads/img1-1708767560752.jpg', 'uploads/img2-1708767560752.jpg', 'uploads/img3-1708767560753.jpg'),
(12, 'test 10', 'testHello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nHello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nLet\'s enjoy the rest of the performance with the app!', 'uploads/cover-1708767572028.jpg', '', 'test', 'uploads/img1-1708767572039.jpg', 'uploads/img2-1708767572040.jpg', 'uploads/img3-1708767572040.jpg'),
(14, 'Test 11', 'Hello everyone. I\'m Scott, President of Domino\'s Pizza. Have you heard of Hatsune Miku? Today I\'d like to announce a new collaborative project featuring Hatsune Miku: Domino\'s App, featuring Hatsune Miku. Hatsune Miku exists in a software called Vocaloid. Vocaloid enables you to produce songs. A character called Hatsune Miku sings the songs you create. A great feature is you can create songs as you like. I knew our talented Domino\'s Pizza crew could work together and create great Vocaloid songs. Bokuro P, Eshi, Chiyo Kiyoshi, Furitsu Keshi, everyone! Amazing Vocaloid songs have been created with the fantastic imagination of the crews all over Japan. The challenge was successfully carried out and this new collaborative app was produced.\n\nD O M I N O S P I Z Z A\n\nBased on Miku\'s image, the Domino\'s App changes its appearance. A lot of music and illustrations produced by Domino\'s crew are here. From the menu to the order, it looks very cute, just like Miku. Once your pizza\'s delivered, have some fun with Miku! It comes with a social camera function and you can take various poses, pictures of Miku, very cool. And last, but not least, the live performance! Start the pizza stage live and point the camera towards the pizza box, and the pizza box will turn into a live dancing venue. A live performance of Luv4Night produced by Domino\'s crew! Here we go!\n\nD O M I N O S P I Z Z A\n\nLet\'s enjoy the rest of the performance with the app!', 'uploads/cover-1708767584165.jpg', '', 'Test 11', 'uploads/img1-1708767584176.jpg', 'uploads/img2-1708767584176.jpg', 'uploads/img3-1708767584176.jpg'),
(15, 'Test 12', 'Test 12', 'uploads/cover-1708766298441.jpg', '', 'Test 12', 'uploads/img1-1708766298476.jpg', 'uploads/img2-1708766298477.jpg', 'uploads/img3-1708766298478.jpg'),
(16, 'Test 13 Updated', 'Test 13 Updated', 'uploads/cover-1712315307270.jpg', '', 'Test 13 Updated', 'uploads/img1-1712315307294.jpg', 'uploads/img2-1712315307295.jpg', 'uploads/img3-1712315307295.jpg'),
(19, 'Test Final FInal', 'Test', 'uploads/cover-1713512867608.jpg', '', 'Testing Group', 'uploads/img1-1713512867623.jpg', 'uploads/img2-1713512867624.jpg', 'uploads/img3-1713512867625.jpg'),
(21, 'Combined Test', 'Combined Test', 'uploads/cover-1713512848893.jpg', '', 'Combined Test', 'uploads/img1-1713512848927.jpg', 'uploads/img2-1713512848928.jpg', 'uploads/img3-1713512848929.jpg'),
(22, 'gg', 'gg', 'uploads/cover-1714563665085.jpg', '', 'gg', 'uploads/img1-1714563665093.jpg', 'uploads/img2-1714563665094.jpg', 'uploads/img3-1714563665114.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(10) NOT NULL,
  `Data` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `Data`) VALUES
(2, 'Scalability'),
(3, 'Reliability and Performance '),
(4, 'how to Use and Maintenance'),
(5, 'how to Compliance and Regulations'),
(15, 'Compatibility and Integration ');

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
(12, 'Mr Testing', '1234', '1234', 'lochandineth@gmail.com', '123', 0, 'False');

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
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `newsletter_acc`
--
ALTER TABLE `newsletter_acc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `opinions`
--
ALTER TABLE `opinions`
  MODIFY `opinionid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ProductID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
