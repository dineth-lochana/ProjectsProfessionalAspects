-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2024 at 10:04 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `social`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `descr` varchar(5000) NOT NULL,
  `createdAt` date NOT NULL,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `descr`, `createdAt`, `userId`, `postId`) VALUES
(35, 'hi', '2024-04-06', 16, 47),
(41, 'text comm1', '2024-04-06', 16, 50),
(43, 'text comm 2', '2024-04-06', 9, 50),
(44, 'testCom', '2024-04-16', 13, 47);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`userId`, `postId`) VALUES
(6, 4),
(6, 5),
(6, 2),
(6, 1),
(7, 4),
(7, 1),
(7, 3),
(8, 8),
(6, 8),
(6, 7),
(6, 6),
(6, 3),
(5, 9),
(9, 10),
(9, 7),
(9, 12),
(9, 13),
(9, 14),
(9, 16),
(11, 16),
(11, 17),
(9, 17),
(9, 18),
(13, 19),
(9, 20),
(9, 25),
(14, 25),
(14, 19),
(9, 27),
(9, 19),
(16, 35),
(16, 25),
(16, 19),
(16, 39),
(16, 43),
(9, 43),
(16, 49),
(16, 50),
(16, 47),
(9, 47),
(9, 50),
(13, 47);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `descr` varchar(5000) NOT NULL,
  `img` varchar(5000) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `descr`, `img`, `userId`, `createdAt`) VALUES
(47, 'Test', '', 9, '2024-04-06 10:24:35'),
(50, 'test 1', '1712381158786img.jpeg', 16, '2024-04-06 10:55:58'),
(55, 'Testing the combined server.... Hello!', '', 17, '2024-04-19 13:07:47');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `name`, `role`) VALUES
(7, 'vish', 'vish@gmail.com', '$2a$10$eszmrcdkDS0Ftd/1Czgq/ugj8aZJEeXYEw49ZrkcDCwEMukkPtFVO', 'vish65610', 'user'),
(9, 'dil', 'dil@123.gmail.com', '$2a$10$g1sidp7BorHe4IFRi0si4u765hNxhh9ogmVXIpCbNT9jhJWZfr66i', 'dil', 'user'),
(13, 'cha', 'cha@gmail.com', '$2a$10$hhtPX4.tPvClL92j1sb1M.3mPUyfxxdNMzGnB8FnWc3Gx5OBwNMTi', 'cha', 'user'),
(16, 'user1', 'user1@gmail.com', '$2a$10$jR6de3BnF3TWeaxxzfZ3Ueoxe5tutSM0P6VkfVCgWdgbY6mRa8jJW', 'user1', 'admin'),
(17, 'test', 'test@test.com', '$2a$10$9uUxPHGemU6sUKrINW2k3ukmy7vLAO/6UE/80TzqwGjPxWCYiPype', 'test123', ''),
(18, 'test2', 'test2@test.com', '$2a$10$Og8qNXQC.O5DhcivpLeYfOR5bDSm1F3vDxhoHFjUuEZpWB1W2xMXu', 'test2', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `Fk_1` (`userId`),
  ADD KEY `Fk_2` (`postId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `Fk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `Fk_2` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
